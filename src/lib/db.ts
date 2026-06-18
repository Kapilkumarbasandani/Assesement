import { createClient, type Client } from "@libsql/client";
import path from "path";
import fs from "fs";

let client: Client | null = null;
let schemaReady: Promise<void> | null = null;

function getClient(): Client {
  if (client) return client;

  const tursoUrl = process.env.TURSO_DATABASE_URL;
  const tursoToken = process.env.TURSO_AUTH_TOKEN;

  if (tursoUrl) {
    client = createClient({
      url: tursoUrl,
      authToken: tursoToken,
    });
  } else {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const dbFile = process.env.DATABASE_PATH || path.join(dataDir, "acea.db");
    client = createClient({ url: `file:${dbFile}` });
  }

  return client;
}

async function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      const db = getClient();
      await db.batch([
        `CREATE TABLE IF NOT EXISTS admins (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE NOT NULL,
          password_hash TEXT NOT NULL,
          created_at TEXT DEFAULT (datetime('now'))
        )`,
        `CREATE TABLE IF NOT EXISTS participants (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          full_name TEXT NOT NULL,
          email TEXT NOT NULL,
          organization TEXT NOT NULL,
          department TEXT,
          job_title TEXT,
          phone TEXT,
          started_at TEXT DEFAULT (datetime('now')),
          completed_at TEXT,
          status TEXT DEFAULT 'in_progress'
        )`,
        `CREATE TABLE IF NOT EXISTS responses (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          participant_id INTEGER NOT NULL,
          question_id INTEGER NOT NULL,
          answer TEXT NOT NULL,
          answered_at TEXT DEFAULT (datetime('now')),
          FOREIGN KEY (participant_id) REFERENCES participants(id),
          UNIQUE(participant_id, question_id)
        )`,
      ]);
    })();
  }
  await schemaReady;
}

export interface Participant {
  id: number;
  full_name: string;
  email: string;
  organization: string;
  department: string | null;
  job_title: string | null;
  phone: string | null;
  started_at: string;
  completed_at: string | null;
  status: string;
}

export interface Response {
  id: number;
  participant_id: number;
  question_id: number;
  answer: string;
  answered_at: string;
}

export interface ParticipantWithResponses extends Participant {
  responses: Response[];
}

function rowToParticipant(row: Record<string, unknown>): Participant {
  return {
    id: Number(row.id),
    full_name: String(row.full_name),
    email: String(row.email),
    organization: String(row.organization),
    department: row.department != null ? String(row.department) : null,
    job_title: row.job_title != null ? String(row.job_title) : null,
    phone: row.phone != null ? String(row.phone) : null,
    started_at: String(row.started_at),
    completed_at: row.completed_at != null ? String(row.completed_at) : null,
    status: String(row.status),
  };
}

function rowToResponse(row: Record<string, unknown>): Response {
  return {
    id: Number(row.id),
    participant_id: Number(row.participant_id),
    question_id: Number(row.question_id),
    answer: String(row.answer),
    answered_at: String(row.answered_at),
  };
}

export async function createParticipant(data: {
  full_name: string;
  email: string;
  organization: string;
  department?: string;
  job_title?: string;
  phone?: string;
}): Promise<number> {
  await ensureSchema();
  const db = getClient();
  const result = await db.execute({
    sql: `INSERT INTO participants (full_name, email, organization, department, job_title, phone)
          VALUES (?, ?, ?, ?, ?, ?)`,
    args: [
      data.full_name,
      data.email,
      data.organization,
      data.department || null,
      data.job_title || null,
      data.phone || null,
    ],
  });
  return Number(result.lastInsertRowid);
}

export async function getParticipant(
  id: number
): Promise<Participant | undefined> {
  await ensureSchema();
  const db = getClient();
  const result = await db.execute({
    sql: "SELECT * FROM participants WHERE id = ?",
    args: [id],
  });
  if (result.rows.length === 0) return undefined;
  return rowToParticipant(result.rows[0] as Record<string, unknown>);
}

export async function saveResponse(
  participantId: number,
  questionId: number,
  answer: string
): Promise<void> {
  await ensureSchema();
  const db = getClient();
  await db.execute({
    sql: `INSERT INTO responses (participant_id, question_id, answer)
          VALUES (?, ?, ?)
          ON CONFLICT(participant_id, question_id)
          DO UPDATE SET answer = excluded.answer, answered_at = datetime('now')`,
    args: [participantId, questionId, answer],
  });
}

export async function completeParticipant(participantId: number): Promise<void> {
  await ensureSchema();
  const db = getClient();
  await db.execute({
    sql: `UPDATE participants SET status = 'completed', completed_at = datetime('now') WHERE id = ?`,
    args: [participantId],
  });
}

export async function getAllParticipants(): Promise<ParticipantWithResponses[]> {
  await ensureSchema();
  const db = getClient();
  const participantsResult = await db.execute(
    "SELECT * FROM participants ORDER BY started_at DESC"
  );
  const participants = participantsResult.rows.map((r) =>
    rowToParticipant(r as Record<string, unknown>)
  );

  const withResponses: ParticipantWithResponses[] = [];
  for (const p of participants) {
    const responsesResult = await db.execute({
      sql: "SELECT * FROM responses WHERE participant_id = ? ORDER BY question_id",
      args: [p.id],
    });
    withResponses.push({
      ...p,
      responses: responsesResult.rows.map((r) =>
        rowToResponse(r as Record<string, unknown>)
      ),
    });
  }
  return withResponses;
}

export async function getAdminByUsername(username: string) {
  await ensureSchema();
  const db = getClient();
  const result = await db.execute({
    sql: "SELECT * FROM admins WHERE username = ?",
    args: [username],
  });
  if (result.rows.length === 0) return undefined;
  const row = result.rows[0] as Record<string, unknown>;
  return {
    id: Number(row.id),
    username: String(row.username),
    password_hash: String(row.password_hash),
  };
}

export async function ensureDefaultAdmin(
  username: string,
  passwordHash: string
): Promise<void> {
  await ensureSchema();
  const existing = await getAdminByUsername(username);
  if (!existing) {
    const db = getClient();
    await db.execute({
      sql: "INSERT INTO admins (username, password_hash) VALUES (?, ?)",
      args: [username, passwordHash],
    });
  }
}

export async function updateAdminPassword(
  username: string,
  passwordHash: string
): Promise<void> {
  await ensureSchema();
  const db = getClient();
  await db.execute({
    sql: "UPDATE admins SET password_hash = ? WHERE username = ?",
    args: [passwordHash, username],
  });
}
