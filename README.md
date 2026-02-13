# Valentine Day 2026 (Next.js)

This repository is now deploy-ready on Vercel from the **repo root**.

## Why previous deploy failed
Vercel was building from the repository root, but `next` dependency and app files were inside `my-valentine-site/`, so it could not detect a Next.js app.

## Fixed setup
- Root `package.json` includes `next`, `react`, `react-dom`.
- Root `app/` directory contains the Next.js App Router pages.
- Root `public/` contains static assets like `click-sound.mp3`.

## Deploy on Vercel (hassle-free)
1. Import repo to Vercel.
2. Keep **Root Directory** as default (repo root).
3. Framework will auto-detect **Next.js**.
4. Deploy.

## Local run
```bash
npm install
npm run dev
```
Open: http://localhost:3000
