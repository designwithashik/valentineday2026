# My Valentine Site 💘 (Next.js)

A cute Valentine page built with **Next.js** for a safer, hassle-free Vercel deployment.

## Features

- Pastel pink, mobile-friendly UI
- "No ❌" button dodges the cursor
- "Yes 💖" button grows while chasing "No"
- Floating heart background animation
- On **Yes** click:
  - plays `public/click-sound.mp3`
  - shows big animated message: **I love you Sneha 💖**
  - displays cute love emoji burst animations all around

## Project Structure

```txt
my-valentine-site/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   └── click-sound.mp3
├── package.json
└── .gitignore
```

## Run Locally

```bash
cd my-valentine-site
npm install
npm run dev
```

Open: `http://localhost:3000`

## Deploy to Vercel (recommended)

1. Push this repo to GitHub.
2. In Vercel, import the repository.
3. Set **Root Directory** to: `my-valentine-site`.
4. Framework should auto-detect as **Next.js**.
5. Click **Deploy**.

No custom rewrite config is required.

## Customize the Love Message

Edit in `app/page.js`:

```js
const LOVE_MESSAGE = "I love you Sneha 💖";
```

## First Git Commit Instructions

```bash
git init
git add .
git commit -m "First commit: cute Valentine page with animations"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```
