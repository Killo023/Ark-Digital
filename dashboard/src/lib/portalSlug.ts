import type { Client } from '../types'

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

/** Get the unique portal slug for a client. Generates one if missing. */
export function getPortalSlug(client: Client): string {
  if (client.portalSlug?.trim()) return client.portalSlug.trim()
  const base = slugify(client.name) || 'client'
  return `${base}-${client.id.slice(0, 8)}`
}

/** Build the full portal URL for a client (for owner to copy and send). */
export function getPortalUrl(client: Client): string {
  const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || ''
  const slug = getPortalSlug(client)
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  return `${origin}${base}/portal/${slug}`
}
