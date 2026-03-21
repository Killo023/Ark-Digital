# Connecting the dashboard to www.arkdigital.solutions

Your main site is at [https://www.arkdigital.solutions/](https://www.arkdigital.solutions/) (Vercel + GitHub). You can run the dashboard from the **same repo** (recommended) or from a separate repo.

---

## Same repo as the main site (recommended)

Use one repo ([Ark-Digital](https://github.com/Killo023/Ark-Digital)) with the dashboard in a **`dashboard/`** folder. Two Vercel projects point at the same repo; each uses a different **Root Directory**.

**Step-by-step:** see **[SAME-REPO.md](./SAME-REPO.md)**.

Summary:

1. Copy this **Client management dash** folder into your Ark-Digital repo and rename it to **`dashboard`**.
2. Commit and push.
3. In Vercel: **Add New Project** → same repo → set **Root Directory** to **`dashboard`**.
4. Add domain **dashboard.arkdigital.solutions** and set the CNAME in DNS.
5. Link from the main site (e.g. "Client login" → `https://dashboard.arkdigital.solutions/portal`).

When you push: changes in the main site only redeploy the main site; changes in `dashboard/` only redeploy the dashboard.

---

## Option 2: Dashboard on a subdomain (separate repo)

If the dashboard stays in its **own** repo instead of inside Ark-Digital:

1. In Vercel: **Add New Project** → Import the dashboard repo.
2. **Root Directory:** leave empty (or set if the app is in a subfolder).
3. Do **not** set `VITE_BASE_PATH`. Build and deploy.
4. **Settings** → **Domains** → add **dashboard.arkdigital.solutions**.
5. In DNS: **CNAME** for `dashboard` → `cname.vercel-dns.com` (or the value Vercel shows).

Result:

- **https://dashboard.arkdigital.solutions/** — dashboard (Clients, Finance).
- **https://dashboard.arkdigital.solutions/portal** — client login portal.

On [www.arkdigital.solutions](https://www.arkdigital.solutions/), add "Client login" → `https://dashboard.arkdigital.solutions/portal`.

---

## Option 3: Dashboard at a subpath (same domain)

Serve the dashboard at **https://www.arkdigital.solutions/dashboard/** on the **same** Vercel project as the main site. This requires a single build that produces both the main site and the dashboard (e.g. monorepo build script + rewrites). More setup; use **SAME-REPO.md** with two projects and subdomain unless you specifically want the subpath.

**Build with base path (for subpath deployment):**

To build for **https://www.arkdigital.solutions/dashboard/**:

```bash
VITE_BASE_PATH=/dashboard/ npm run build
```

Assets and routes will use the `/dashboard/` prefix. Deploy the `dist/` output to the project/path that serves that URL.

---

## Links from the dashboard to the main site

- The **Client portal** header already links to **https://www.arkdigital.solutions** ("Main site" and "Ark Digital" logo).
- The "Contact Ark Digital" link in the portal uses **info@arkdigital.solutions** (you can change this in `src/pages/Portal.tsx` if you prefer another address).
