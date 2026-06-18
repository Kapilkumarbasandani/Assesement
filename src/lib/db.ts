import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import os from "os";

function getDbPath(): string {
  if (process.env.DATABASE_PATH) {
    return process.env.DATABASE_PATH;
  }
  if (process.env.VERCEL) {
    return path.join(os.tmpdir(), "acea-assessment.db");
  }
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  return path.join(dataDir, "assesment.db");
}

const dbPath = getDbPath();
const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS participants (
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
  );

  CREATE TABLE IF NOT EXISTS responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    participant_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    answer TEXT NOT NULL,
    answered_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (participant_id) REFERENCES participants(id),
    UNIQUE(participant_id, question_id)
  );
`);

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

export function createParticipant(data: {
  full_name: string;
  email: string;
  organization: string;
  department?: string;
  job_title?: string;
  phone?: string;
}): number {
  const stmt = db.prepare(`
    INSERT INTO participants (full_name, email, organization, department, job_title, phone)
    VALUES (@full_name, @email, @organization, @department, @job_title, @phone)
  `);
  const result = stmt.run({
    full_name: data.full_name,
    email: data.email,
    organization: data.organization,
    department: data.department || null,
    job_title: data.job_title || null,
    phone: data.phone || null,
  });
  return result.lastInsertRowid as number;
}

export function getParticipant(id: number): Participant | undefined {
  return db
    .prepare("SELECT * FROM participants WHERE id = ?")
    .get(id) as Participant | undefined;
}

export function saveResponse(
  participantId: number,
  questionId: number,
  answer: string
): void {
  db.prepare(`
    INSERT INTO responses (participant_id, question_id, answer)
    VALUES (?, ?, ?)
    ON CONFLICT(participant_id, question_id) DO UPDATE SET answer = excluded.answer, answered_at = datetime('now')
  `).run(participantId, questionId, answer);
}

export function completeParticipant(participantId: number): void {
  db.prepare(`
    UPDATE participants SET status = 'completed', completed_at = datetime('now') WHERE id = ?
  `).run(participantId);
}

export function getAllParticipants(): ParticipantWithResponses[] {
  const participants = db
    .prepare("SELECT * FROM participants ORDER BY started_at DESC")
    .all() as Participant[];

  const responseStmt = db.prepare(
    "SELECT * FROM responses WHERE participant_id = ? ORDER BY question_id"
  );

  return participants.map((p) => ({
    ...p,
    responses: responseStmt.all(p.id) as Response[],
  }));
}

export function getAdminByUsername(username: string) {
  return db
    .prepare("SELECT * FROM admins WHERE username = ?")
    .get(username) as { id: number; username: string; password_hash: string } | undefined;
}

export function ensureDefaultAdmin(username: string, passwordHash: string): void {
  const existing = getAdminByUsername(username);
  if (!existing) {
    db.prepare(
      "INSERT INTO admins (username, password_hash) VALUES (?, ?)"
    ).run(username, passwordHash);
  }
}

export function updateAdminPassword(username: string, passwordHash: string): void {
  db.prepare("UPDATE admins SET password_hash = ? WHERE username = ?").run(
    passwordHash,
    username
  );
}

export default db;
