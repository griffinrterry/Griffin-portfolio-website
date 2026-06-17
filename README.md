# Griffin Terry — Portfolio

Bold, modern, multi-page portfolio site framed for product management roles.

## Structure

```
website/
├── index.html            # Landing: hero + About Me + project grid + contact
├── projects/
│   ├── hirely.html       # Hirely case study (product + marketing org)
│   └── copilot.html      # CoPilot case study (mobility startup, finance/growth)
├── assets/
│   └── screenshots/      # Drop Hirely screenshots here
├── styles.css            # Design system (one stylesheet for all pages)
├── script.js             # Scroll reveal, mobile nav, card hover
├── vercel.json           # Vercel config (clean URLs)
└── .gitignore
```

It's plain HTML/CSS/JS — no build step. Open `index.html` in a browser to preview.

## Deploy to Vercel via GitHub

1. **Create the repo and push** (run from inside `website/`):

   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. **Connect to Vercel:** go to vercel.com → **Add New… → Project** → import your GitHub repo.
   - Framework Preset: **Other**
   - Build Command: *(leave empty)*
   - Output Directory: *(leave empty — it serves the root)*
   - Click **Deploy**.

3. Every `git push` to `main` auto-deploys. Add a custom domain in Vercel → Project → Settings → Domains.

> Note: I can't push to your GitHub or log into Vercel from here — run the steps above and it'll be live. Happy to walk through any step.

## Still to add (placeholders are marked in the pages)

- About Me + Experience section — pending your **resume** upload.
- Hirely **screenshots** → `assets/screenshots/`.
- Product **demo** video.
- Real **metrics** (waitlist signups, reach, grader completions).
- **LinkedIn / GitHub** URLs and the **live Hirely URL** (search the files for `data-todo`).
