const bcrypt = require("bcryptjs");
const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

require("dotenv").config({ path: path.join(__dirname, "..", ".env.local") });

const dataDir = path.join(__dirname, "..", "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const username = process.env.ADMIN_USERNAME || "admin";
const password = process.env.ADMIN_PASSWORD;

if (!password) {
  console.error("ADMIN_PASSWORD is not set in .env.local");
  process.exit(1);
}

const db = new Database(path.join(dataDir, "assesment.db"));
const hash = bcrypt.hashSync(password, 10);

const existing = db
  .prepare("SELECT id FROM admins WHERE username = ?")
  .get(username);

if (existing) {
  db.prepare("UPDATE admins SET password_hash = ? WHERE username = ?").run(
    hash,
    username
  );
  console.log(`Admin password updated for "${username}".`);
} else {
  db.prepare(
    "INSERT INTO admins (username, password_hash) VALUES (?, ?)"
  ).run(username, hash);
  console.log(`Admin account created: "${username}".`);
}

db.close();
