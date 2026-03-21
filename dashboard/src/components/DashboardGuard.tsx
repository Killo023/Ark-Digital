import { useState } from 'react'
import {
  isAuthenticated,
  checkPassword,
  setAuthenticated,
  isPasswordConfigured,
} from '../lib/dashboardAuth'

interface DashboardGuardProps {
  children: React.ReactNode
}

export default function DashboardGuard({ children }: DashboardGuardProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (isAuthenticated()) {
    return <>{children}</>
  }

  // No password configured = allow access (e.g. local dev). Set VITE_DASHBOARD_PASSWORD in production.
  if (!isPasswordConfigured()) {
    return <>{children}</>
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const ok = await checkPassword(password)
    setLoading(false)
    if (ok) {
      setAuthenticated()
      setPassword('')
    } else {
      setError('Incorrect password.')
    }
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
      >
        <h2 className="text-lg font-semibold text-white">Dashboard access</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Enter the owner password to access the client management dashboard.
        </p>
        <div className="mt-4">
          <label htmlFor="dash-pw" className="mb-1 block text-sm font-medium text-neutral-400">
            Password
          </label>
          <input
            id="dash-pw"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="Owner password"
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-lg bg-white py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200 disabled:opacity-50"
        >
          {loading ? 'Checking…' : 'Enter'}
        </button>
      </form>
    </div>
  )
}
