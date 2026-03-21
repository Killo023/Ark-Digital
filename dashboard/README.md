# Ark Digital — Client & Finance Dashboard

A single-place dashboard to manage clients (Vercel-hosted sites), GoDaddy domains & emails, and finances (hosting fees, payments, expenses).

## What’s included

- **Clients** – Cards per client with:
  - Vercel project URL and GitHub repo
  - GoDaddy domain and email addresses
  - Monthly hosting fee and currency
  - Last payment date and status (active / overdue / churned)
  - Last deploy note
- **Finance**
  - **Monthly recurring** – Sum of active clients’ hosting fees
  - **Payments** – Log payments per client (updates “last payment” on the client)
  - **Expenses** – Log expenses with category: Domain (GoDaddy), Email (GoDaddy), Vercel, Other; optional link to a client
  - **Summaries** – Total payments received, total expenses, expenses by category

Data is stored in the browser (localStorage). No backend or API keys required to run it.

**Access control:**
- **Dashboard** (Clients, Finance) — Protected by owner password. Set `VITE_DASHBOARD_PASSWORD` (or `VITE_DASHBOARD_PASSWORD_HASH` for a SHA-256 hex hash) in Vercel env.
- **Client portal** — Each client has a unique URL (e.g. `/portal/chernelang-physio`). Only that client can log in with their PIN. Don’t link the portal from the main website; send each client their link privately.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. You can deploy that folder to any static host (e.g. Vercel, Netlify).

**Deploy under https://www.arkdigital.solutions/dashboard/** (same domain as your main site):

```bash
VITE_BASE_PATH=/dashboard/ npm run build
```

**Same repo as the main site (Ark-Digital):** See **[SAME-REPO.md](./SAME-REPO.md)** for adding this app as a `dashboard/` folder and deploying with two Vercel projects.  
**Other setups:** See **[CONNECT.md](./CONNECT.md)** for subdomain or subpath options.

## Optional next steps

- **Vercel API** – Pull project list and latest deployment from Vercel so you don’t have to copy URLs/notes by hand.
- **GoDaddy** – If GoDaddy exposes an API for domains/emails, you could sync that into the client cards.
- **Export** – Add CSV/Excel export for clients and finance for accounting or backups.
