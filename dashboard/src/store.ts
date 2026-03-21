import type { Client, Expense, Payment } from './types'

const CLIENTS_KEY = 'ark-clients'
const EXPENSES_KEY = 'ark-expenses'
const PAYMENTS_KEY = 'ark-payments'
const GODADDY_DOMAINS_MIGRATION_KEY = 'ark-godaddy-domains-migrated'

function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function saveJson(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value))
}

const defaultClients: Client[] = [
  {
    id: '1',
    name: 'Shepherd Studios',
    vercelUrl: 'shepherd-studios-ten.vercel.app',
    githubRepo: 'Killo023/Shepherd-studios',
    domain: '',
    emails: [],
    hostingFeeMonthly: 0,
    billingInterval: 'monthly',
    currency: 'ZAR',
    lastPaymentDate: '2025-01-21',
    lastDeployNote: 'Replace process circle diagram with linear step cards layout',
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Steadfast',
    vercelUrl: 'steadfast-beta.vercel.app',
    githubRepo: 'Killo023/Steadfast',
    domain: 'steadfasttactical.co.za',
    emails: ['info@steadfasttactical.co.za'],
    hostingFeeMonthly: 0,
    billingInterval: 'monthly',
    currency: 'ZAR',
    lastPaymentDate: null,
    lastDeployNote: 'Use hero (2).mp4 for hero section background video',
    status: 'active',
    gmbProfileName: 'Steadfast Tactical',
    gmbLocation: 'South Africa, Gauteng, South Africa',
    gmbVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Chernelang Physio',
    vercelUrl: 'chernelangphysio.vercel.app',
    githubRepo: 'Killo023/Chernelangphysio',
    domain: 'chernelangphysio.co.za',
    emails: ['info@chernelangphysio.co.za', 'cherne.langeveldt@gmail.com'],
    hostingFeeMonthly: 100,
    billingInterval: 'quarterly',
    currency: 'ZAR',
    lastPaymentDate: '2025-01-15',
    lastDeployNote: 'Update contact email to cherne.langeveldt@gmail.com and others',
    status: 'active',
    gmbProfileName: 'Cherne Langeveldt Physiotherapy',
    gmbLocation: '246 Vorster Avenue, Glenvista, Johannesburg, 1448, South Africa',
    gmbVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Skainet',
    vercelUrl: 'skainetcleaning.co.za',
    githubRepo: 'Killo023/Skainet',
    domain: 'skainetcleaning.co.za',
    emails: [],
    hostingFeeMonthly: 0,
    billingInterval: 'monthly',
    currency: 'ZAR',
    lastPaymentDate: null,
    lastDeployNote: 'Increase all website background images to 30% opacity',
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Ark Digital',
    vercelUrl: 'ark-digital-wine.vercel.app',
    githubRepo: 'Killo023/Ark-Digital',
    domain: 'arkdigital.solutions',
    emails: ['info@arkdigital.solutions'],
    hostingFeeMonthly: 0,
    billingInterval: 'monthly',
    currency: 'ZAR',
    lastPaymentDate: null,
    lastDeployNote: 'Update favicon to use Logo Icon.png with increased sizes',
    status: 'active',
    gmbProfileName: 'Ark Digital',
    gmbLocation: 'London, UK, South Africa and 2 other areas',
    gmbVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'FitGuide Pro',
    vercelUrl: 'fitguidepro.online',
    githubRepo: 'Killo023/fitguidepro',
    domain: 'fitguidepro.online',
    emails: [],
    hostingFeeMonthly: 0,
    billingInterval: 'monthly',
    currency: 'ZAR',
    lastPaymentDate: null,
    lastDeployNote: 'Add pantry-based meal planning feature',
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '7',
    name: 'Underrated Security',
    vercelUrl: '',
    githubRepo: '',
    domain: 'underratedsecurity.com',
    emails: ['info@underratedsecurity.com', 'cylehendricks@underratedsecurity.com'],
    hostingFeeMonthly: 0,
    billingInterval: 'monthly',
    currency: 'ZAR',
    lastPaymentDate: null,
    lastDeployNote: '',
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '8',
    name: 'The Assignment AI',
    vercelUrl: '',
    githubRepo: '',
    domain: 'theassignmentai.com',
    emails: [],
    hostingFeeMonthly: 0,
    billingInterval: 'monthly',
    currency: 'ZAR',
    lastPaymentDate: null,
    lastDeployNote: '',
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '9',
    name: 'Supreme Carwash',
    vercelUrl: '',
    githubRepo: '',
    domain: '',
    emails: [],
    hostingFeeMonthly: 0,
    billingInterval: 'monthly',
    currency: 'ZAR',
    lastPaymentDate: null,
    lastDeployNote: '',
    status: 'active',
    gmbProfileName: 'Supreme Carwash',
    gmbLocation: '144 Columbine Avenue, Mondeor, Gauteng, 2091, South Africa',
    gmbVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export const clientStore = {
  getAll(): Client[] {
    const stored = loadJson<Client[]>(CLIENTS_KEY, defaultClients)
    if (!stored.length) return defaultClients
    let changed = false
    const domainByClientName: Record<string, string> = {
      'Shepherd Studios': '',
      'Steadfast': 'steadfasttactical.co.za',
      'Chernelang Physio': 'chernelangphysio.co.za',
      'Skainet': 'skainetcleaning.co.za',
      'Ark Digital': 'arkdigital.solutions',
      'FitGuide Pro': 'fitguidepro.online',
    }
    const emailsByClientName: Record<string, string[]> = {
      'Steadfast': ['info@steadfasttactical.co.za'],
      'Chernelang Physio': ['info@chernelangphysio.co.za', 'cherne.langeveldt@gmail.com'],
      'Ark Digital': ['info@arkdigital.solutions'],
      'Underrated Security': ['info@underratedsecurity.com', 'cylehendricks@underratedsecurity.com'],
    }
    const gmbByClientName: Record<string, { name: string; location: string; verified: boolean }> = {
      'Ark Digital': { name: 'Ark Digital', location: 'London, UK, South Africa and 2 other areas', verified: true },
      'Chernelang Physio': { name: 'Cherne Langeveldt Physiotherapy', location: '246 Vorster Avenue, Glenvista, Johannesburg, 1448, South Africa', verified: true },
      'Steadfast': { name: 'Steadfast Tactical', location: 'South Africa, Gauteng, South Africa', verified: true },
    }
    stored.forEach((c) => {
      const wantDomain = domainByClientName[c.name]
      if (wantDomain !== undefined && !(c.domain?.trim())) {
        c.domain = wantDomain
        changed = true
      }
      const wantEmails = emailsByClientName[c.name]
      if (wantEmails && (!c.emails || c.emails.length === 0)) {
        c.emails = wantEmails
        changed = true
      }
      // Do not overwrite lastPaymentDate / hostingFee on every load — user edits must persist.
      if (!('billingInterval' in c) || (c as Client).billingInterval == null) {
        (c as Client).billingInterval = c.name === 'Chernelang Physio' ? 'quarterly' : 'monthly'
        changed = true
      }
      const wantGmb = gmbByClientName[c.name]
      if (wantGmb && !c.gmbProfileName) {
        c.gmbProfileName = wantGmb.name
        c.gmbLocation = wantGmb.location
        c.gmbVerified = wantGmb.verified
        changed = true
      }
    })
    const goDaddyMigrated = localStorage.getItem(GODADDY_DOMAINS_MIGRATION_KEY)
    const hasUnderrated = stored.some((c) => c.domain === 'underratedsecurity.com')
    const hasAssignment = stored.some((c) => c.domain === 'theassignmentai.com')
    const hasSupreme = stored.some((c) => c.name === 'Supreme Carwash')
    const now = new Date().toISOString()
    if (!goDaddyMigrated) {
      if (!hasUnderrated) {
        stored.push({
          id: crypto.randomUUID(),
          name: 'Underrated Security',
          vercelUrl: '',
          githubRepo: '',
          domain: 'underratedsecurity.com',
          emails: ['info@underratedsecurity.com', 'cylehendricks@underratedsecurity.com'],
          hostingFeeMonthly: 0,
          billingInterval: 'monthly',
          currency: 'ZAR',
          lastPaymentDate: null,
          lastDeployNote: '',
          status: 'active',
          createdAt: now,
          updatedAt: now,
        })
        changed = true
      }
      if (!hasAssignment) {
        stored.push({
          id: crypto.randomUUID(),
          name: 'The Assignment AI',
          vercelUrl: '',
          githubRepo: '',
          domain: 'theassignmentai.com',
          emails: [],
          hostingFeeMonthly: 0,
          billingInterval: 'monthly',
          currency: 'ZAR',
          lastPaymentDate: null,
          lastDeployNote: '',
          status: 'active',
          createdAt: now,
          updatedAt: now,
        })
        changed = true
      }
      if (!hasSupreme) {
        stored.push({
          id: crypto.randomUUID(),
          name: 'Supreme Carwash',
          vercelUrl: '',
          githubRepo: '',
          domain: '',
          emails: [],
          hostingFeeMonthly: 0,
          billingInterval: 'monthly',
          currency: 'ZAR',
          lastPaymentDate: null,
          lastDeployNote: '',
          status: 'active',
          gmbProfileName: 'Supreme Carwash',
          gmbLocation: '144 Columbine Avenue, Mondeor, Gauteng, 2091, South Africa',
          gmbVerified: true,
          createdAt: now,
          updatedAt: now,
        })
        changed = true
      }
      if (changed) localStorage.setItem(GODADDY_DOMAINS_MIGRATION_KEY, '1')
    }
    if (changed) saveJson(CLIENTS_KEY, stored)
    return stored
  },

  saveAll(clients: Client[]): void {
    saveJson(CLIENTS_KEY, clients)
  },

  get(id: string): Client | undefined {
    return this.getAll().find((c) => c.id === id)
  },

  add(client: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>): Client {
    const all = this.getAll()
    const now = new Date().toISOString()
    const newClient: Client = {
      ...client,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    }
    all.push(newClient)
    this.saveAll(all)
    return newClient
  },

  update(id: string, updates: Partial<Client>): Client | undefined {
    const all = this.getAll()
    const i = all.findIndex((c) => c.id === id)
    if (i === -1) return undefined
    all[i] = { ...all[i], ...updates, updatedAt: new Date().toISOString() }
    this.saveAll(all)
    return all[i]
  },

  remove(id: string): boolean {
    const current = this.getAll()
    const filtered = current.filter((c) => c.id !== id)
    if (filtered.length === current.length) return false
    this.saveAll(filtered)
    return true
  },
}

export const expenseStore = {
  getAll(): Expense[] {
    return loadJson<Expense[]>(EXPENSES_KEY, [])
  },

  saveAll(expenses: Expense[]): void {
    saveJson(EXPENSES_KEY, expenses)
  },

  add(expense: Omit<Expense, 'id' | 'createdAt'>): Expense {
    const all = this.getAll()
    const now = new Date().toISOString()
    const newExpense: Expense = {
      ...expense,
      id: crypto.randomUUID(),
      createdAt: now,
    }
    all.push(newExpense)
    this.saveAll(all)
    return newExpense
  },

  remove(id: string): boolean {
    const current = this.getAll()
    const filtered = current.filter((e) => e.id !== id)
    if (filtered.length === current.length) return false
    this.saveAll(filtered)
    return true
  },
}

export const paymentStore = {
  getAll(): Payment[] {
    return loadJson<Payment[]>(PAYMENTS_KEY, [])
  },

  saveAll(payments: Payment[]): void {
    saveJson(PAYMENTS_KEY, payments)
  },

  add(payment: Omit<Payment, 'id' | 'createdAt'>): Payment {
    const all = this.getAll()
    const now = new Date().toISOString()
    const newPayment: Payment = {
      ...payment,
      id: crypto.randomUUID(),
      createdAt: now,
    }
    all.push(newPayment)
    this.saveAll(all)
    return newPayment
  },

  remove(id: string): boolean {
    const current = this.getAll()
    const filtered = current.filter((p) => p.id !== id)
    if (filtered.length === current.length) return false
    this.saveAll(filtered)
    return true
  },
}
