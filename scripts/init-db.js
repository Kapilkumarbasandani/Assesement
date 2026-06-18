const bcrypt = require("bcryptjs");
const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const dataDir = path.join(__dirname, "..", "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "assesment.db");
const db = new Database(dbPath);

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

const username = process.env.ADMIN_USERNAME || "admin";
const password = process.env.ADMIN_PASSWORD || "admin123";
const hash = bcrypt.hashSync(password, 10);

const existing = db
  .prepare("SELECT id FROM admins WHERE username = ?")
  .get(username);

if (!existing) {
  db.prepare(
    "INSERT INTO admins (username, password_hash) VALUES (?, ?)"
  ).run(username, hash);
  console.log(`Default admin created: username="${username}"`);
} else {
  console.log(`Admin "${username}" already exists.`);
}

console.log("Database initialized successfully.");
db.close();
