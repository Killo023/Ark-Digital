import { useState, useEffect } from 'react'
import type { Client } from '../types'
import { hashPin } from '../lib/portalAuth'

interface ClientFormProps {
  client?: Client
  onSave: (client: Client) => void
  onCancel: () => void
}

export default function ClientForm({ client, onSave, onCancel }: ClientFormProps) {
  const [name, setName] = useState('')
  const [vercelUrl, setVercelUrl] = useState('')
  const [githubRepo, setGithubRepo] = useState('')
  const [domain, setDomain] = useState('')
  const [emailsStr, setEmailsStr] = useState('')
  const [hostingFeeMonthly, setHostingFeeMonthly] = useState('')
  const [billingInterval, setBillingInterval] = useState<Client['billingInterval']>('monthly')
  const [currency, setCurrency] = useState('ZAR')
  const [lastPaymentDate, setLastPaymentDate] = useState('')
  const [lastDeployNote, setLastDeployNote] = useState('')
  const [status, setStatus] = useState<Client['status']>('active')
  const [gmbProfileName, setGmbProfileName] = useState('')
  const [gmbLocation, setGmbLocation] = useState('')
  const [gmbVerified, setGmbVerified] = useState(false)
  const [gmbNote, setGmbNote] = useState('')
  const [portalPin, setPortalPin] = useState('')
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (client) {
      setName(client.name)
      setVercelUrl(client.vercelUrl)
      setGithubRepo(client.githubRepo)
      setDomain(client.domain)
      setEmailsStr(client.emails.join(', '))
      setHostingFeeMonthly(String(client.hostingFeeMonthly))
      setBillingInterval(client.billingInterval ?? 'monthly')
      setCurrency(client.currency)
      setLastPaymentDate(client.lastPaymentDate ?? '')
      setLastDeployNote(client.lastDeployNote)
      setStatus(client.status)
      setGmbProfileName(client.gmbProfileName ?? '')
      setGmbLocation(client.gmbLocation ?? '')
      setGmbVerified(client.gmbVerified ?? false)
      setGmbNote(client.gmbNote ?? '')
    }
  }, [client])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    let portalPasswordHash: string | undefined
    if (portalPin.trim()) {
      try {
        portalPasswordHash = await hashPin(portalPin.trim())
      } catch (err) {
        setSubmitError(
          'Could not set portal PIN. Make sure you’re on a secure connection (https or localhost).'
        )
        return
      }
    } else {
      portalPasswordHash = client?.portalPasswordHash
    }
    const emails = emailsStr
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
    const fee = parseFloat(hostingFeeMonthly) || 0
    const payload = {
      name: name.trim(),
      vercelUrl: vercelUrl.trim(),
      githubRepo: githubRepo.trim(),
      domain: domain.trim(),
      emails,
      hostingFeeMonthly: fee,
      billingInterval,
      currency,
      lastPaymentDate: lastPaymentDate.trim() || null,
      lastDeployNote: lastDeployNote.trim(),
      status,
      gmbProfileName: gmbProfileName.trim() || undefined,
      gmbLocation: gmbLocation.trim() || undefined,
      gmbVerified,
      gmbNote: gmbNote.trim() || undefined,
      portalPasswordHash,
    }
    try {
      if (client) {
        onSave({ ...client, ...payload })
      } else {
        onSave({
          id: '',
          ...payload,
          createdAt: '',
          updatedAt: '',
        } as Client)
      }
    } catch (err) {
      setSubmitError('Failed to save client.')
      return
    }
    setPortalPin('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-white">
        {client ? 'Edit client' : 'Add client'}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="Client / project name"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">Vercel URL</label>
          <input
            type="text"
            value={vercelUrl}
            onChange={(e) => setVercelUrl(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="project.vercel.app or custom domain"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">GitHub repo</label>
          <input
            type="text"
            value={githubRepo}
            onChange={(e) => setGithubRepo(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="username/repo"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">
            GoDaddy domain
          </label>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="www.example.co.za"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-neutral-400">
            GoDaddy emails (comma-separated)
          </label>
          <input
            type="text"
            value={emailsStr}
            onChange={(e) => setEmailsStr(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="info@example.com, admin@example.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">
            Hosting fee (monthly)
          </label>
          <div className="flex gap-2">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white focus:border-neutral-600 focus:outline-none"
            >
              <option value="ZAR">ZAR</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
            <input
              type="number"
              min="0"
              step="any"
              value={hostingFeeMonthly}
              onChange={(e) => setHostingFeeMonthly(e.target.value)}
              className="flex-1 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
              placeholder="0"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">Billing interval</label>
          <select
            value={billingInterval}
            onChange={(e) => setBillingInterval(e.target.value as Client['billingInterval'])}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white focus:border-neutral-600 focus:outline-none"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">
            Last payment date
          </label>
          <input
            type="date"
            value={lastPaymentDate}
            onChange={(e) => setLastPaymentDate(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Client['status'])}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white focus:border-neutral-600 focus:outline-none"
          >
            <option value="active">Active</option>
            <option value="overdue">Overdue</option>
            <option value="churned">Churned</option>
          </select>
        </div>
        <div className="sm:col-span-2 border-t border-neutral-700 pt-4 mt-2">
          <span className="text-sm font-medium text-neutral-400">Google My Business</span>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">GMB profile name</label>
          <input
            type="text"
            value={gmbProfileName}
            onChange={(e) => setGmbProfileName(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="Business name on GMB"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">GMB location</label>
          <input
            type="text"
            value={gmbLocation}
            onChange={(e) => setGmbLocation(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="Address / area"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="gmbVerified"
            checked={gmbVerified}
            onChange={(e) => setGmbVerified(e.target.checked)}
            className="h-4 w-4 rounded border-neutral-600 bg-neutral-900 text-white focus:ring-neutral-500"
          />
          <label htmlFor="gmbVerified" className="text-sm text-neutral-400">GMB verified</label>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-neutral-400">GMB note (e.g. suspended)</label>
          <input
            type="text"
            value={gmbNote}
            onChange={(e) => setGmbNote(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="e.g. Suspended – not publicly visible"
          />
        </div>
        <div className="sm:col-span-2 border-t border-neutral-700 pt-4 mt-2">
          <span className="text-sm font-medium text-neutral-400">Client portal</span>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-neutral-400">
            Portal PIN {client?.portalPasswordHash ? '(leave blank to keep current)' : ''}
          </label>
          <input
            type="password"
            value={portalPin}
            onChange={(e) => setPortalPin(e.target.value)}
            autoComplete="new-password"
            className="w-full max-w-xs rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="4–8 digit PIN for client login"
          />
          {submitError && (
            <p className="mt-2 text-sm text-red-400">{submitError}</p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-neutral-400">
            Last deploy / note
          </label>
          <input
            type="text"
            value={lastDeployNote}
            onChange={(e) => setLastDeployNote(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="Brief description of last update"
          />
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
        >
          {client ? 'Save' : 'Add client'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-neutral-600 px-4 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
