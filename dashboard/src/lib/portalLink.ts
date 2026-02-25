import type { Client } from '../types'

const PARAM = 'd'

/**
 * Encode client for portal link fragment so the client's device doesn't need localStorage.
 * Only use when client.portalPasswordHash is set.
 */
export function encodeClientInPortalLink(client: Client): string {
  try {
    const json = JSON.stringify(client)
    const base64 = btoa(unescape(encodeURIComponent(json)))
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  } catch {
    return ''
  }
}

/**
 * Decode client from portal link fragment (hash param d=).
 * Returns null if invalid or id doesn't match.
 */
export function decodeClientFromPortalLink(fragmentParam: string, expectedId: string): Client | null {
  if (!fragmentParam || !expectedId) return null
  try {
    let base64 = fragmentParam.replace(/-/g, '+').replace(/_/g, '/')
    while (base64.length % 4) base64 += '='
    const json = decodeURIComponent(escape(atob(base64)))
    const client = JSON.parse(json) as Client
    if (client?.id !== expectedId || !client?.portalPasswordHash) return null
    return client
  } catch {
    return null
  }
}

/** Query param is used so the payload survives when links are opened from email/apps (fragment is often stripped). */
export function getPortalLinkQuery(client: Client): string {
  if (!client.portalPasswordHash) return ''
  const payload = encodeClientInPortalLink(client)
  return payload ? `?${PARAM}=${encodeURIComponent(payload)}` : ''
}

export function getPortalLinkFragment(client: Client): string {
  if (!client.portalPasswordHash) return ''
  const payload = encodeClientInPortalLink(client)
  return payload ? `#${PARAM}=${payload}` : ''
}

/** Read client from URL: try query (?d=) first, then fragment (#d=). */
export function getClientFromUrl(expectedId: string): Client | null {
  if (typeof window === 'undefined') return null
  const search = new URLSearchParams(window.location.search)
  const fromQuery = search.get(PARAM)
  if (fromQuery) {
    try {
      const raw = decodeURIComponent(fromQuery.replace(/ /g, '+'))
      const decoded = decodeClientFromPortalLink(raw, expectedId)
      if (decoded) return decoded
    } catch {
      /* ignore */
    }
  }
  return getClientFromFragment(window.location.hash, expectedId)
}

export function getClientFromFragment(hash: string, expectedId: string): Client | null {
  if (!hash.startsWith('#')) return null
  const params = new URLSearchParams(hash.slice(1))
  const d = params.get(PARAM)
  return d ? decodeClientFromPortalLink(d, expectedId) : null
}
