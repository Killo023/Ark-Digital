export interface Client {
  id: string
  name: string
  /** Vercel project / deployment URL */
  vercelUrl: string
  /** GitHub repo e.g. Killo023/Shepherd-studios */
  githubRepo: string
  /** Custom domain from GoDaddy */
  domain: string
  /** GoDaddy email addresses for this client */
  emails: string[]
  /** Monthly hosting fee in local currency */
  hostingFeeMonthly: number
  /** How often the client is billed: monthly or quarterly */
  billingInterval: 'monthly' | 'quarterly'
  /** Currency code e.g. ZAR, USD */
  currency: string
  /** Last payment received (ISO date) */
  lastPaymentDate: string | null
  /** Optional note / latest deploy description */
  lastDeployNote: string
  /** Status: active, overdue, churned */
  status: 'active' | 'overdue' | 'churned'
  /** Google My Business profile name */
  gmbProfileName?: string
  /** GMB location / address text */
  gmbLocation?: string
  /** GMB profile verified */
  gmbVerified?: boolean
  /** Hashed PIN for client portal login (optional) */
  portalPasswordHash?: string
  createdAt: string
  updatedAt: string
}

export interface Expense {
  id: string
  label: string
  amount: number
  currency: string
  /** e.g. 'domain', 'email', 'vercel', 'other' */
  category: 'domain' | 'email' | 'vercel' | 'other'
  /** Optional link to client id */
  clientId: string | null
  date: string
  createdAt: string
}

export interface Payment {
  id: string
  clientId: string
  amount: number
  currency: string
  date: string
  note: string
  /** How many billing periods this payment covers (e.g. 3 months upfront). Default 1. */
  periodsCovered?: number
  createdAt: string
}
