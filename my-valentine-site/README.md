# My Valentine Site 💘

A cute static Valentine page ready for Vercel deployment.

## Features

- **Romantic UI** with pastel pink responsive layout.
- **Playful interaction**:
  - "No ❌" button runs away when hovered/touched.
  - "Yes 💖" button grows each time "No" escapes.
- **Celebration effects**:
  - Floating heart animation in the background.
  - Confetti burst on "Yes" click.
  - Sound effect playback (`click-sound.mp3`) on "Yes" click.
- **Easy customization** for your own love message.

## Project Structure

```text
my-valentine-site/
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── click-sound.mp3
├── vercel.json
└── README.md
```

## Customize the Love Message

Open `public/script.js` and edit this line:

```js
const loveMessage = 'Yay! You just made my day. Happy Valentine\'s Day! 💘';
```

## Run Locally

From inside `my-valentine-site`:

```bash
python3 -m http.server 8080
```

Then open: `http://localhost:8080/public/`

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com), import the repo, and deploy.
3. Vercel will use `vercel.json` automatically.

## First Git Commit Instructions

```bash
git init
git add .
git commit -m "First commit: cute Valentine page with animations"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Note About `click-sound.mp3`

This repository includes a **placeholder** `click-sound.mp3` file.
Replace it with a real short `.mp3` click/pop sound for production.
