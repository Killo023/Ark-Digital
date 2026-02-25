import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { clientStore, paymentStore } from '../store'
import type { Client } from '../types'
import {
  getPortalClientId,
  setPortalSession,
  clearPortalSession,
  verifyPin,
} from '../lib/portalAuth'

const BANK_ACCOUNT = '9377209902'
const BANK_NAME = 'Absa'

function formatDate(iso: string | null): string {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString()
}

function getNextDue(
  lastPayment: string | null,
  billingInterval: 'monthly' | 'quarterly' = 'monthly'
): string {
  if (!lastPayment) return '—'
  const d = new Date(lastPayment)
  d.setMonth(d.getMonth() + (billingInterval === 'quarterly' ? 3 : 1))
  return d.toLocaleDateString()
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="rounded border border-neutral-600 px-2 py-1 text-xs text-neutral-400 hover:bg-neutral-800 hover:text-white"
    >
      {copied ? 'Copied!' : label}
    </button>
  )
}

export default function Portal() {
  const { clientId: urlClientId } = useParams<{ clientId?: string }>()
  const isDirectLink = Boolean(urlClientId?.trim())

  const [client, setClient] = useState<Client | null>(null)
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<'login' | 'dashboard'>('login')
  const [clientId, setClientId] = useState(urlClientId ?? '')
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [showBankingDetails, setShowBankingDetails] = useState(false)

  const clientsWithPortal = clientStore
    .getAll()
    .filter((c) => c.portalPasswordHash)

  useEffect(() => {
    if (isDirectLink && urlClientId) setClientId(urlClientId)
  }, [isDirectLink, urlClientId])

  useEffect(() => {
    const id = getPortalClientId()
    if (id) {
      const c = clientStore.get(id)
      if (c) {
        setClient(c)
        setView('dashboard')
      } else {
        clearPortalSession()
      }
    }
    setLoading(false)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const c = clientStore.get(clientId)
    if (!c) {
      setError('Invalid client.')
      return
    }
    if (!c.portalPasswordHash) {
      setError('Portal access not set up for this client.')
      return
    }
    const ok = await verifyPin(pin, c.portalPasswordHash)
    if (!ok) {
      setError('Incorrect PIN.')
      return
    }
    setPortalSession(c.id)
    setClient(c)
    setView('dashboard')
    setPin('')
  }

  const handleLogout = () => {
    clearPortalSession()
    setClient(null)
    setView('login')
    setClientId(isDirectLink && urlClientId ? urlClientId : '')
    setPin('')
    setError('')
    setShowBankingDetails(false)
  }

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="text-neutral-500">Loading…</span>
      </div>
    )
  }

  if (view === 'dashboard' && client) {
    const nextDue = getNextDue(client.lastPaymentDate, client.billingInterval ?? 'monthly')
    const paymentReference = client.name
    const clientPayments = paymentStore
      .getAll()
      .filter((p) => p.clientId === client.id)
      .sort((a, b) => (b.date > a.date ? 1 : -1))
    const isQuarterly = (client.billingInterval ?? 'monthly') === 'quarterly'
    const amountDue = (client.hostingFeeMonthly ?? 0) * (isQuarterly ? 3 : 1)
    const currency = client.currency ?? 'ZAR'
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Your account</h1>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-neutral-600 px-3 py-1.5 text-sm text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            Log out
          </button>
        </div>

        {/* Summary card */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <h2 className="text-lg font-medium text-white">{client.name}</h2>
          <p className="text-sm text-neutral-500">Client portal · Ark Digital</p>
          <div className="mt-4 flex flex-wrap gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Amount due</p>
              <p className="mt-0.5 text-white">
                {currency} {amountDue.toLocaleString()}
                {isQuarterly && (
                  <span className="text-neutral-500"> (quarterly)</span>
                )}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Pay by</p>
              <p className="mt-0.5 text-white">{nextDue}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Hosting</p>
              <p className="mt-0.5 text-neutral-300">
                {client.currency} {client.hostingFeeMonthly}/mo
                {(client.billingInterval ?? 'monthly') === 'quarterly' && (
                  <span className="text-neutral-500"> (billed quarterly)</span>
                )}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Last payment</p>
              <p className="mt-0.5 text-neutral-300">{formatDate(client.lastPaymentDate)}</p>
            </div>
          </div>
        </div>

        {/* Pay hosting – banking details on click */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="font-medium text-white">Pay hosting</h3>
              <p className="text-sm text-neutral-500">View banking details to make a payment</p>
            </div>
            <button
              type="button"
              onClick={() => setShowBankingDetails((v) => !v)}
              className="shrink-0 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
            >
              {showBankingDetails ? 'Hide details' : 'View banking details'}
            </button>
          </div>
          {showBankingDetails && (
            <div className="mt-4 rounded-lg border border-neutral-700 bg-neutral-800/50 p-4 font-mono text-sm">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-neutral-500">Account:</span>
                  <span className="text-white">{BANK_ACCOUNT}</span>
                  <CopyButton text={BANK_ACCOUNT} label="Copy" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-neutral-500">Bank:</span>
                  <span className="text-white">{BANK_NAME}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-neutral-500">Reference:</span>
                  <span className="text-white">{paymentReference}</span>
                  <CopyButton text={paymentReference} label="Copy reference" />
                </div>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                Use <strong className="text-neutral-400">{paymentReference}</strong> as the payment reference so we can match your payment.
              </p>
            </div>
          )}
        </div>

        {/* Payment history */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <h3 className="mb-4 font-medium text-white">Payment history</h3>
          {clientPayments.length === 0 ? (
            <p className="text-sm text-neutral-500">No payments recorded yet.</p>
          ) : (
            <ul className="space-y-2">
              {clientPayments.map((p) => (
                <li
                  key={p.id}
                  className="flex flex-wrap items-center justify-between gap-2 text-sm"
                >
                  <span className="text-neutral-300">
                    {p.currency} {p.amount.toLocaleString()}
                    {p.note && <span className="ml-1 text-neutral-500">· {p.note}</span>}
                  </span>
                  <span className="text-neutral-500">{p.date}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Your services */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <h3 className="mb-4 font-medium text-white">Your services</h3>
          <div className="space-y-4">
            {client.domain && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Website</p>
                <a
                  href={`https://${client.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-white underline decoration-neutral-600 underline-offset-2 hover:decoration-neutral-500"
                >
                  {client.domain}
                </a>
              </div>
            )}
            {client.emails.length > 0 && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Emails</p>
                <p className="mt-1 text-neutral-300">{client.emails.join(', ')}</p>
              </div>
            )}
            {client.gmbProfileName && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Google Business Profile</p>
                <p className="mt-1 text-neutral-300">{client.gmbProfileName}</p>
                {client.gmbLocation && (
                  <p className="mt-0.5 text-sm text-neutral-500">{client.gmbLocation}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <p className="text-sm text-neutral-500">Need help or want to make changes?</p>
          <a
            href="mailto:info@arkdigital.solutions"
            className="mt-2 inline-block text-white underline decoration-neutral-600 underline-offset-2 hover:decoration-neutral-500"
          >
            Contact Ark Digital
          </a>
        </div>
      </div>
    )
  }

  const directLinkClient = urlClientId ? clientStore.get(urlClientId) : null
  const directLinkValid = isDirectLink && directLinkClient?.portalPasswordHash

  if (isDirectLink && urlClientId) {
    if (!directLinkClient) {
      return (
        <div className="mx-auto max-w-sm">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-white">Client portal</h1>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 px-5 py-6 text-sm text-neutral-400">
            This link is invalid or has been removed. If you need access, please contact Ark Digital.
          </div>
        </div>
      )
    }
    if (!directLinkClient.portalPasswordHash) {
      return (
        <div className="mx-auto max-w-sm">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-white">Client portal</h1>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 px-5 py-6 text-sm text-neutral-400">
            Portal access is not set up for this account yet. Please contact Ark Digital to get your login.
          </div>
        </div>
      )
    }
  }

  return (
    <div className="mx-auto max-w-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">
          {directLinkValid ? `Log in to ${directLinkClient!.name}` : 'Client portal'}
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          {directLinkValid
            ? 'Enter your PIN to view your account'
            : 'Log in to view your account with Ark Digital'}
        </p>
      </div>
      {directLinkValid ? (
        <form
          onSubmit={handleLogin}
          className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
        >
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-neutral-400">PIN</label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
              autoComplete="off"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
              placeholder="Your portal PIN"
            />
          </div>
          {error && (
            <p className="mb-4 text-sm text-red-400">{error}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-white py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
          >
            Log in
          </button>
        </form>
      ) : clientsWithPortal.length === 0 ? (
        <div className="rounded-xl border border-amber-900/50 bg-amber-950/30 px-5 py-6 text-sm">
          <p className="font-medium text-amber-200">No clients have portal access yet</p>
          <p className="mt-2 text-neutral-400">
            To enable the portal: go to the <strong className="text-neutral-300">Business dashboard</strong> (link above),
            open <strong className="text-neutral-300">Clients</strong>, edit a client, set a <strong className="text-neutral-300">Portal PIN</strong>, and save.
            Then return here to log in.
          </p>
          <p className="mt-3 text-xs text-neutral-500">
            Portal data is stored in this browser. If you’re a client, ask your account manager to set up your PIN and use the same link they used to set it.
          </p>
        </div>
      ) : (
        <>
          <form
            onSubmit={handleLogin}
            className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
          >
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-neutral-400">Client</label>
              <select
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                required
                className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
              >
                <option value="">Select your business</option>
                {clientsWithPortal.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-neutral-400">PIN</label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
                autoComplete="off"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                placeholder="Your portal PIN"
              />
            </div>
            {error && (
              <p className="mb-4 text-sm text-red-400">{error}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-lg bg-white py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
            >
              Log in
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-neutral-500">
            Don’t have a PIN? Ask your account manager to enable portal access.
          </p>
        </>
      )}
    </div>
  )
}
