import { clientStore } from '../store'
import { getPortalUrl } from '../lib/portalSlug'
import { useState } from 'react'

export default function PortalLinks() {
  const clientsWithPortal = clientStore
    .getAll()
    .filter((c) => c.portalPasswordHash)

  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyLink = (url: string, clientId: string) => {
    navigator.clipboard.writeText(url)
    setCopiedId(clientId)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Client portal links</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Each client has a unique URL. Send only their link — they cannot access other clients.
        </p>
      </div>
      {clientsWithPortal.length === 0 ? (
        <p className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center text-neutral-500">
          No clients have portal access yet. Add a PIN in the client profile to enable.
        </p>
      ) : (
        <div className="space-y-4">
          {clientsWithPortal.map((client) => {
            const url = getPortalUrl(client)
            return (
              <div
                key={client.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4"
              >
                <span className="font-medium text-white">{client.name}</span>
                <div className="flex items-center gap-2">
                  <code className="max-w-[280px] truncate rounded bg-neutral-800 px-2 py-1 text-xs text-neutral-400 sm:max-w-md">
                    {url}
                  </code>
                  <button
                    type="button"
                    onClick={() => copyLink(url, client.id)}
                    className="rounded-lg border border-neutral-600 px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white"
                  >
                    {copiedId === client.id ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
