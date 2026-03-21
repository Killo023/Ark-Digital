/** Hash a PIN/password for client portal (SHA-256 hex). */
export async function hashPin(pin: string): Promise<string> {
  const enc = new TextEncoder()
  const data = enc.encode(pin)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

/** Verify PIN against stored hash. */
export async function verifyPin(pin: string, storedHash: string): Promise<boolean> {
  const h = await hashPin(pin)
  return h === storedHash
}

const PORTAL_CLIENT_KEY = 'ark-portal-client-id'

export function setPortalSession(clientId: string): void {
  sessionStorage.setItem(PORTAL_CLIENT_KEY, clientId)
}

export function getPortalClientId(): string | null {
  return sessionStorage.getItem(PORTAL_CLIENT_KEY)
}

export function clearPortalSession(): void {
  sessionStorage.removeItem(PORTAL_CLIENT_KEY)
}
