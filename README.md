# Signal & Scroll — Starter Site (Eleventy + Decap CMS)

You asked for: multi-page site + blog + CMS + newsletter hookup + 10 starter posts.

This project gives you:
- Multi-page site: Home, Topics, Topic pages, Article pages, About, Submit, Newsletter
- Blog posts as Markdown in `src/posts/`
- CMS: Decap CMS (formerly Netlify CMS) at `/admin`
- A clean, edgy-smart design (Signal & Scroll vibe)

---

## 1) Run locally (no deploy yet)

### Requirements
- Node.js (LTS recommended)

### Install + start
```bash
cd signalandscroll
npm install
npm run dev
```

Eleventy will serve the site (it prints the local URL in your terminal).

---

## 2) Publish posts easily (CMS)

Decap CMS is included at:
- `/_site/admin/` after build
- `/admin/` when deployed

You can edit/create posts in the CMS once you deploy on Netlify and enable Identity + Git Gateway (steps below).

---

## 3) Deploy on Netlify (recommended)

### Steps
1. Push this folder to a new GitHub repo
2. Create a Netlify site from that repo
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `_site`

### Enable CMS login
In Netlify dashboard:
- **Identity** → Enable
- **Identity** → **Git Gateway** → Enable
- **Identity** → Registration preferences:
  - Invite only (recommended) OR open registration
- Invite yourself as a user

Then go to:
- `https://YOUR-SITE.netlify.app/admin/`

---

## 4) Newsletter provider hookup

This site includes a **placeholder form** on `/newsletter/`.

To connect a real newsletter:
- Beehiiv / ConvertKit / Mailchimp all provide an “embed form” snippet
- Paste that embed HTML inside `src/newsletter/index.njk` where the demo form is

Then rebuild + redeploy.

---

## 5) Customize the brand

### Site title / tagline
Edit:
- `src/_data/site.json`

### Topics
Edit:
- `src/_data/topics.json`

---

## 6) Content strategy included

You already have 10 starter articles. Keep these as the base and publish 1–2 per week.

Suggested SEO pillars:
- platform power + shadowbans + moderation
- creator economy + sponsorships + burnout
- trend cycle + aesthetics + “why it went viral”
- digital identity + parasocial + authenticity
- money online + courses + scams + side hustles
- AI culture + trust + synthetic content

---

## Need next upgrades?
- Add a “Team” page
- Add search
- Add “Related posts” by topic
- Add a corrections policy page
- Add a real submission form (Netlify Forms)
