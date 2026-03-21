import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { clientStore } from '../store'
import type { Client } from '../types'
import { getPortalSlug } from '../lib/portalSlug'
import {
  getPortalClientId,
  setPortalSession,
  clearPortalSession,
  verifyPin,
} from '../lib/portalAuth'

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

/** Find client by portal slug (from URL). */
function getClientBySlug(slug: string | undefined): Client | null {
  if (!slug) return null
  const all = clientStore.getAll().filter((c) => c.portalPasswordHash)
  return all.find((c) => getPortalSlug(c) === slug) ?? null
}

export default function Portal() {
  const { slug } = useParams<{ slug: string }>()
  const urlClient = getClientBySlug(slug)
  const [client, setClient] = useState<Client | null>(null)
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<'login' | 'dashboard'>('login')
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const id = getPortalClientId()
    if (id && urlClient && id === urlClient.id) {
      setClient(urlClient)
      setView('dashboard')
    } else if (id) {
      clearPortalSession()
    }
    setLoading(false)
  }, [urlClient?.id])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!urlClient) return
    setError('')
    if (!urlClient.portalPasswordHash) {
      setError('Portal access not set up.')
      return
    }
    const ok = await verifyPin(pin, urlClient.portalPasswordHash)
    if (!ok) {
      setError('Incorrect PIN.')
      return
    }
    setPortalSession(urlClient.id)
    setClient(urlClient)
    setView('dashboard')
    setPin('')
  }

  const handleLogout = () => {
    clearPortalSession()
    setClient(null)
    setView('login')
    setPin('')
    setError('')
  }

  // No slug = wrong or old link. Show contact message.
  if (!slug) {
    return (
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-xl font-semibold text-white">Client portal</h1>
        <p className="mt-4 text-neutral-400">
          Your portal link was sent to you. If you need it again, contact your account manager.
        </p>
        <a
          href="mailto:info@arkdigital.solutions"
          className="mt-4 inline-block text-white underline decoration-neutral-600 underline-offset-2 hover:decoration-neutral-500"
        >
          Contact Ark Digital
        </a>
      </div>
    )
  }

  // Invalid slug = no client found
  if (!urlClient) {
    return (
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-xl font-semibold text-white">Invalid portal link</h1>
        <p className="mt-4 text-neutral-400">
          This link is not valid. Contact your account manager for the correct portal URL.
        </p>
        <a
          href="mailto:info@arkdigital.solutions"
          className="mt-4 inline-block text-white underline decoration-neutral-600 underline-offset-2 hover:decoration-neutral-500"
        >
          Contact Ark Digital
        </a>
      </div>
    )
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
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Your account</h1>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-neutral-600 px-3 py-1.5 text-sm text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            Log out
          </button>
        </div>
        <div className="space-y-6 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
          <div>
            <h2 className="text-lg font-medium text-white">{client.name}</h2>
            <p className="text-sm text-neutral-500">Client portal · Ark Digital</p>
          </div>

          {client.domain && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Website
              </p>
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
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Emails
              </p>
              <p className="mt-1 text-neutral-300">{client.emails.join(', ')}</p>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Hosting
              </p>
              <p className="mt-1 text-white">
                {client.currency} {client.hostingFeeMonthly}/mo
                {(client.billingInterval ?? 'monthly') === 'quarterly' && (
                  <span className="text-neutral-500"> (billed quarterly)</span>
                )}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Last payment
              </p>
              <p className="mt-1 text-neutral-300">{formatDate(client.lastPaymentDate)}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Next due
              </p>
              <p className="mt-1 text-neutral-300">{nextDue}</p>
            </div>
          </div>

          {client.gmbProfileName && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Google Business Profile
              </p>
              <p className="mt-1 text-neutral-300">{client.gmbProfileName}</p>
              {client.gmbLocation && (
                <p className="mt-0.5 text-sm text-neutral-500">{client.gmbLocation}</p>
              )}
            </div>
          )}

          <div className="border-t border-neutral-800 pt-4">
            <p className="text-sm text-neutral-500">Need help or want to make changes?</p>
            <a
              href="mailto:info@arkdigital.solutions"
              className="mt-2 inline-block text-white underline decoration-neutral-600 underline-offset-2 hover:decoration-neutral-500"
            >
              Contact Ark Digital
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">{urlClient.name}</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Log in to view your account with Ark Digital
        </p>
      </div>
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
      <p className="mt-4 text-center text-xs text-neutral-500">
        Don’t have a PIN? Ask your account manager to enable portal access.
      </p>
    </div>
  )
}
