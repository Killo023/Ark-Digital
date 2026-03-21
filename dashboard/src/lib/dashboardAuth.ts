/**
 * Dashboard owner authentication.
 * Set VITE_DASHBOARD_PASSWORD (plain) or VITE_DASHBOARD_PASSWORD_HASH (SHA-256 hex) in Vercel env.
 */
const STORAGE_KEY = 'ark-dashboard-auth'

async function hashPassword(pw: string): Promise<string> {
  const enc = new TextEncoder()
  const data = enc.encode(pw)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(STORAGE_KEY) === '1'
}

export function setAuthenticated(): void {
  sessionStorage.setItem(STORAGE_KEY, '1')
}

export function logout(): void {
  sessionStorage.removeItem(STORAGE_KEY)
}

export async function checkPassword(input: string): Promise<boolean> {
  const hashEnv = import.meta.env.VITE_DASHBOARD_PASSWORD_HASH
  const plainEnv = import.meta.env.VITE_DASHBOARD_PASSWORD
  if (hashEnv && typeof hashEnv === 'string') {
    const inputHash = await hashPassword(input)
    return inputHash === hashEnv
  }
  if (plainEnv && typeof plainEnv === 'string') {
    return input === plainEnv
  }
  return false
}

export function isPasswordConfigured(): boolean {
  return !!(
    import.meta.env.VITE_DASHBOARD_PASSWORD_HASH ||
    import.meta.env.VITE_DASHBOARD_PASSWORD
  )
}
