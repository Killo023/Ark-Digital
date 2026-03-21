# Using this dashboard in the same repo as the main site

This guide is for keeping the client management dashboard in your existing **Ark-Digital** repo (same repo as [www.arkdigital.solutions](https://www.arkdigital.solutions/)).

---

## 1. Add the dashboard to your Ark-Digital repo

1. Open your **Ark-Digital** repo on your machine (the one that deploys to www.arkdigital.solutions).
2. Copy this entire **Client management dash** folder into the repo.
3. Rename the copied folder to **`dashboard`** (so the repo has a single `dashboard/` folder at the root).

Your repo should look like:

```
Ark-Digital/
├── (your existing main site files and folders)
└── dashboard/              ← this app
    ├── src/
    ├── package.json
    ├── vite.config.ts
    ├── index.html
    └── ...
```

4. Commit and push:

   ```bash
   cd path/to/Ark-Digital
   git add dashboard/
   git commit -m "Add client management dashboard"
   git push origin main
   ```

---

## 2. Create a second Vercel project for the dashboard

You’ll have **two Vercel projects** pointing at the **same** GitHub repo:

| Project        | Root Directory | Domain                        |
|----------------|----------------|-------------------------------|
| Main site      | *(leave empty)* | www.arkdigital.solutions      |
| Dashboard      | **dashboard**  | dashboard.arkdigital.solutions |

Steps:

1. Go to [Vercel](https://vercel.com) → **Add New Project**.
2. **Import** the same **Ark-Digital** (Killo023/Ark-Digital) repository.
3. **Configure:**
   - **Project Name:** e.g. `ark-digital-dashboard`.
   - **Root Directory:** click **Edit** and set to **`dashboard`**.
   - **Build Command:** `npm run build` (default).
   - **Output Directory:** `dist` (default).
   - **Install Command:** `npm install` (default).
4. **Environment variables:** leave empty (do **not** set `VITE_BASE_PATH` when using the subdomain).
5. Deploy.
6. After deploy: **Settings** → **Domains** → add **dashboard.arkdigital.solutions**.
7. In your DNS (e.g. GoDaddy): add a **CNAME** record:
   - **Name:** `dashboard`
   - **Value:** `cname.vercel-dns.com` (or the value Vercel shows)

---

## 3. What happens when you push

- **Changes only in the main site** (outside `dashboard/`) → only the **main site** project redeploys.
- **Changes only in `dashboard/`** → only the **dashboard** project redeploys.
- One repo, one push; Vercel decides which project(s) to rebuild based on the Root Directory.

---

## 4. Link from the main site

On [www.arkdigital.solutions](https://www.arkdigital.solutions/), add:

- **Client login** → `https://dashboard.arkdigital.solutions/portal`
- (Optional) **Dashboard** (for you) → `https://dashboard.arkdigital.solutions/`

---

## 5. Run the dashboard locally (from the repo)

```bash
cd path/to/Ark-Digital/dashboard
npm install
npm run dev
```

Then open the URL shown (e.g. http://localhost:5173).
