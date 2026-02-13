# My Valentine Site 💘

A cute, static Valentine webpage ready to deploy on **Vercel**.

## Features

- Pastel pink, mobile-friendly design.
- "No ❌" button dodges the cursor.
- "Yes 💖" button grows larger as users try to chase "No".
- Random floating heart background animation.
- Celebration sequence on **Yes**:
  - Plays `click-sound.mp3`
  - Launches emoji confetti animation
  - Shows a customizable love message alert

## Project Structure

```txt
my-valentine-site/
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── click-sound.mp3
├── vercel.json
└── README.md
```

## Run Locally

```bash
cd my-valentine-site/public
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Customize the Love Message

Edit this line in `public/script.js`:

```js
const LOVE_MESSAGE = "Yay! You just made my day 💘";
```

## Deploy to Vercel (simple, no 404)

### Option A (recommended)
Set **Root Directory** to `my-valentine-site` in Vercel project settings.
This works because `my-valentine-site/vercel.json` rewrites `/` to `/public/index.html`.

### Option B
Keep root directory as repo root and use the root `vercel.json` rewrite config (already included in this repo).

Then deploy.

## If you see 404 errors

- Make sure Vercel project root is correct (`my-valentine-site`) **or** root `vercel.json` exists.
- If root is `my-valentine-site`, confirm `my-valentine-site/vercel.json` contains rewrites to `/public/index.html` and `/public/$1`.
- `click-sound.mp3` is a placeholder file. Replace it with a real short MP3 if you want guaranteed sound playback.

## First Git Commit Instructions

```bash
git init
git add .
git commit -m "First commit: cute Valentine page with animations"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```
