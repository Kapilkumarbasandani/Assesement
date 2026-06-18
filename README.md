# ACEA — Asteya Credibility & Effectiveness Assessment

Web-based assessment platform for NGOs, Trusts, Societies, CSR teams, and donors. Built with Next.js, TypeScript, Tailwind CSS, and SQLite.

## Features

- Organization registration before assessment
- 135 ACEA questions across 10 categories (one question per screen)
- 0–5 self-scoring with tooltips and evidence labels
- Admin dashboard to view all participants and responses

## Local Development

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your admin password
npm run db:init
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial ACEA assessment portal"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/acea-assessment.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Add **Environment Variables**:

| Variable | Value |
|----------|--------|
| `ADMIN_USERNAME` | `admin` |
| `ADMIN_PASSWORD` | Your secure password |
| `JWT_SECRET` | Long random string (32+ chars) |

5. Click **Deploy**

### Important: Database on Vercel

Vercel uses serverless functions with an **ephemeral filesystem**. SQLite data may **not persist** reliably across deployments or cold starts. For production use, consider:

- [Turso](https://turso.tech) (SQLite-compatible, free tier)
- [Vercel Postgres](https://vercel.com/storage/postgres)
- [Railway](https://railway.app) or [Render](https://render.com) for full SQLite persistence

For demos and testing on Vercel, the app will still run — admin login uses env vars and the database initializes automatically.

## Admin Access

- URL: `/admin/login`
- Credentials: set via `ADMIN_USERNAME` and `ADMIN_PASSWORD` env vars

## Tech Stack

- Next.js 15 · React 19 · TypeScript
- Tailwind CSS 4
- SQLite (better-sqlite3)
- JWT session cookies

## License

Private — Asteya Services Pvt. Ltd.
