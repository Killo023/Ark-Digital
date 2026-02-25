# Option A – Next steps (push done ✓)

The dashboard is already in the repo and pushed to GitHub. Do the following in Vercel.

---

## 1. Create the second Vercel project (dashboard)

1. Go to **[vercel.com](https://vercel.com)** and sign in.
2. Click **Add New** → **Project**.
3. **Import** the **Killo023/Ark-Digital** repository (same one as your main site).
4. **Configure the project:**
   - **Project Name:** e.g. `ark-digital-dashboard` (or any name you like).
   - **Root Directory:** click **Edit** → choose **`dashboard`** (this is required).
   - **Framework Preset:** Vite (or leave as detected).
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. **Environment variables:** leave empty (do **not** set `VITE_BASE_PATH`).
6. Click **Deploy**.

---

## 2. Add the domain dashboard.arkdigital.solutions

1. In the new project, go to **Settings** → **Domains**.
2. Add **dashboard.arkdigital.solutions**.
3. Vercel will show DNS instructions (usually a CNAME).

---

## 3. Set the CNAME in your DNS (e.g. GoDaddy)

1. In GoDaddy (or your DNS provider), open DNS for **arkdigital.solutions**.
2. Add a record:
   - **Type:** CNAME  
   - **Name:** `dashboard` (or `dashboard.arkdigital` depending on provider)  
   - **Value:** `cname.vercel-dns.com` (or the value Vercel shows)
3. Save. It can take a few minutes to propagate.

---

## 4. Link from your main site

On [www.arkdigital.solutions](https://www.arkdigital.solutions/), add:

- **Client login** → `https://dashboard.arkdigital.solutions/portal`
- (Optional) **Dashboard** → `https://dashboard.arkdigital.solutions/`

---

## Summary

| What              | URL / value                          |
|-------------------|--------------------------------------|
| Main site (existing) | www.arkdigital.solutions             |
| Dashboard (new)   | dashboard.arkdigital.solutions        |
| Client portal     | dashboard.arkdigital.solutions/portal |
| Repo              | github.com/Killo023/Ark-Digital       |
| Dashboard code    | `dashboard/` folder in same repo      |

When you push changes: edits under `dashboard/` only redeploy the dashboard project; other edits only redeploy the main site.
