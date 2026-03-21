import type { Client } from '../types'

interface ClientCardProps {
  client: Client
  onEdit: () => void
  onDelete: () => void
}

function formatDate(iso: string | null): string {
  if (!iso) return '—'
  const d = new Date(iso)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  if (diff < 60_000) return 'Just now'
  if (diff < 3600_000) return `${Math.floor(diff / 60_000)}m ago`
  if (diff < 86400_000) return `${Math.floor(diff / 3600_000)}h ago`
  if (diff < 86400_000 * 31) return `${Math.floor(diff / 86400_000)}d ago`
  return d.toLocaleDateString()
}

function getNextDueLabel(
  lastPayment: string | null,
  billingInterval: 'monthly' | 'quarterly' = 'monthly'
): string | null {
  if (!lastPayment) return null
  const d = new Date(lastPayment)
  const monthsToAdd = billingInterval === 'quarterly' ? 3 : 1
  d.setMonth(d.getMonth() + monthsToAdd)
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const due = new Date(d.getFullYear(), d.getMonth(), d.getDate())
  const diffDays = Math.round((due.getTime() - today.getTime()) / 86400_000)
  if (diffDays < 0) return `Overdue ${Math.abs(diffDays)}d`
  if (diffDays === 0) return 'Due today'
  if (diffDays === 1) return 'Due tomorrow'
  if (diffDays <= 7) return `Due in ${diffDays} days`
  return `Due ${due.toLocaleDateString()}`
}

export default function ClientCard({ client, onEdit, onDelete }: ClientCardProps) {
  const hasVercel = client.vercelUrl?.trim()
  const hasGithub = client.githubRepo?.trim()
  const vercelLink = hasVercel
    ? client.vercelUrl.startsWith('http')
      ? client.vercelUrl
      : `https://${client.vercelUrl}`
    : ''
  const githubLink = hasGithub ? `https://github.com/${client.githubRepo}` : ''
  const domainLink = client.domain ? `https://${client.domain}` : ''

  const statusColor =
    client.status === 'active'
      ? 'text-emerald-400'
      : client.status === 'overdue'
        ? 'text-amber-400'
        : 'text-neutral-500'

  return (
    <div className="group relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-colors hover:border-neutral-700">
      <div className="absolute right-3 top-3 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onEdit()
          }}
          className="rounded p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white"
          title="Edit"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onDelete()
          }}
          className="rounded p-1.5 text-neutral-400 hover:bg-red-900/30 hover:text-red-400"
          title="Remove"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <div className="flex items-start justify-between pr-20">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-white">{client.name}</h2>
          {client.portalPasswordHash && (
            <span className="rounded bg-neutral-700 px-1.5 py-0.5 text-[10px] font-medium text-neutral-400">
              Portal
            </span>
          )}
        </div>
        <span className={`text-xs font-medium ${statusColor}`}>{client.status}</span>
      </div>

      <div className="mt-3 space-y-2 text-sm">
        {hasVercel && (
          <div>
            <span className="text-neutral-500">Vercel:</span>{' '}
            <a
              href={vercelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 underline decoration-neutral-600 underline-offset-2 hover:text-white hover:decoration-neutral-500"
            >
              {client.vercelUrl}
            </a>
          </div>
        )}
        {hasGithub && (
          <div>
            <span className="text-neutral-500">GitHub:</span>{' '}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 underline decoration-neutral-600 underline-offset-2 hover:text-white hover:decoration-neutral-500"
            >
              {client.githubRepo}
            </a>
          </div>
        )}
        {client.domain && (
          <div>
            <span className="text-neutral-500">GoDaddy:</span>{' '}
            <a
              href={domainLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 underline decoration-neutral-600 underline-offset-2 hover:text-white hover:decoration-neutral-500"
            >
              {client.domain}
            </a>
          </div>
        )}
        {client.emails.length > 0 && (
          <div className="text-neutral-400">
            <span className="text-neutral-500">Emails:</span> {client.emails.join(', ')}
          </div>
        )}
        {client.hostingFeeMonthly > 0 && (
          <div className="font-medium text-white">
            {client.currency} {client.hostingFeeMonthly}/mo
            {(client.billingInterval ?? 'monthly') === 'quarterly' && (
              <span className="ml-1 font-normal text-neutral-500">(billed quarterly)</span>
            )}
          </div>
        )}
        {(client.gmbProfileName || client.gmbLocation) && (
          <div className="rounded border border-neutral-700 bg-neutral-800/50 px-2 py-1.5 text-xs">
            <span className="text-neutral-500">GMB:</span>{' '}
            <span className="text-neutral-300">{client.gmbProfileName || 'Profile'}</span>
            {client.gmbLocation && (
              <span className="mt-0.5 block text-neutral-500">{client.gmbLocation}</span>
            )}
            {client.gmbVerified && (
              <span className="mt-0.5 inline-flex items-center gap-0.5 text-emerald-400">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified
              </span>
            )}
          </div>
        )}
      </div>

      {client.lastDeployNote && (
        <p className="mt-3 line-clamp-2 text-xs text-neutral-500">{client.lastDeployNote}</p>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
        <span>Last payment: {formatDate(client.lastPaymentDate)}</span>
        {(() => {
          const nextDue = getNextDueLabel(
            client.lastPaymentDate,
            client.billingInterval ?? 'monthly'
          )
          if (!nextDue) return null
          return (
            <span className={nextDue.startsWith('Overdue') ? 'font-medium text-amber-400' : 'text-neutral-400'}>
              {nextDue}
            </span>
          )
        })()}
      </div>
    </div>
  )
}
