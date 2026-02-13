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

Use any static server. Example:

```bash
cd my-valentine-site/public
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

## Customize the Love Message

Open `public/script.js` and edit:

```js
const LOVE_MESSAGE = "Yay! You just made my day 💘";
```

Replace that string with your own message.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Deploy with default settings (Vercel will serve from `public` via `vercel.json`).

## First Git Commit Instructions

```bash
git init
git add .
git commit -m "First commit: cute Valentine page with animations"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Note about `click-sound.mp3`

A placeholder file is included at `public/click-sound.mp3`. Replace it with a short click/pop MP3 for best effect.
