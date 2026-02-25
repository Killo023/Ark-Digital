import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { clientStore, paymentStore } from '../store'
import type { Client } from '../types'

function getNextDueDate(
  lastPayment: string | null,
  billingInterval: 'monthly' | 'quarterly' = 'monthly'
): Date | null {
  if (!lastPayment) return null
  const d = new Date(lastPayment)
  d.setMonth(d.getMonth() + (billingInterval === 'quarterly' ? 3 : 1))
  return d
}

function getDaysUntil(d: Date): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const due = new Date(d)
  due.setHours(0, 0, 0, 0)
  return Math.round((due.getTime() - today.getTime()) / 86400_000)
}

export default function Overview() {
  const clients = useMemo(() => clientStore.getAll(), [])
  const payments = useMemo(() => paymentStore.getAll(), [])

  const activeClients = useMemo(
    () => clients.filter((c) => c.status === 'active'),
    [clients]
  )
  const mrr = useMemo(
    () => activeClients.reduce((sum, c) => sum + (c.hostingFeeMonthly || 0), 0),
    [activeClients]
  )

  const dueSoon = useMemo(() => {
    const list: { client: Client; dueDate: Date; daysUntil: number }[] = []
    activeClients.forEach((c) => {
      if (!c.hostingFeeMonthly) return
      const due = getNextDueDate(c.lastPaymentDate, c.billingInterval ?? 'monthly')
      if (!due) return
      const days = getDaysUntil(due)
      if (days <= 14) list.push({ client: c, dueDate: due, daysUntil: days })
    })
    list.sort((a, b) => a.daysUntil - b.daysUntil)
    return list.slice(0, 8)
  }, [activeClients])

  const recentPayments = useMemo(
    () =>
      [...payments]
        .sort((a, b) => (b.date > a.date ? 1 : -1))
        .slice(0, 5)
        .map((p) => ({ payment: p, client: clients.find((c) => c.id === p.clientId) })),
    [payments, clients]
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Overview</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Client and finance summary
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <p className="text-sm font-medium text-neutral-400">Active clients</p>
          <p className="mt-1 text-2xl font-semibold text-white">{activeClients.length}</p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <p className="text-sm font-medium text-neutral-400">Monthly recurring</p>
          <p className="mt-1 text-2xl font-semibold text-white">ZAR {mrr.toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <p className="text-sm font-medium text-neutral-400">Due in next 7 days</p>
          <p className="mt-1 text-2xl font-semibold text-white">
            {dueSoon.filter((d) => d.daysUntil <= 7).length}
          </p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <p className="text-sm font-medium text-neutral-400">Total clients</p>
          <p className="mt-1 text-2xl font-semibold text-white">{clients.length}</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Due soon</h2>
            <Link
              to="/clients"
              className="text-sm text-neutral-400 hover:text-white"
            >
              View all clients
            </Link>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden">
            {dueSoon.length === 0 ? (
              <p className="p-4 text-sm text-neutral-500">No payments due in the next 14 days.</p>
            ) : (
              <ul className="divide-y divide-neutral-800">
                {dueSoon.map(({ client, dueDate, daysUntil }) => (
                  <li key={client.id} className="flex items-center justify-between px-4 py-3 text-sm">
                    <span className="font-medium text-white">{client.name}</span>
                    <span className={daysUntil < 0 ? 'text-amber-400' : 'text-neutral-400'}>
                      {daysUntil < 0
                        ? `${Math.abs(daysUntil)}d overdue`
                        : daysUntil === 0
                          ? 'Today'
                          : daysUntil === 1
                            ? 'Tomorrow'
                            : `${daysUntil}d`}
                      {' · '}
                      {dueDate.toLocaleDateString()}
                    </span>
                    <Link
                      to={`/finance?log=${client.id}`}
                      className="ml-2 rounded px-2 py-1 text-xs font-medium text-white bg-neutral-700 hover:bg-neutral-600"
                    >
                      Log payment
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Recent payments</h2>
            <Link
              to="/finance"
              className="text-sm text-neutral-400 hover:text-white"
            >
              View finance
            </Link>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden">
            {recentPayments.length === 0 ? (
              <p className="p-4 text-sm text-neutral-500">No payments recorded yet.</p>
            ) : (
              <ul className="divide-y divide-neutral-800">
                {recentPayments.map(({ payment, client }) => (
                  <li key={payment.id} className="flex items-center justify-between px-4 py-3 text-sm">
                    <span className="font-medium text-white">{client?.name ?? '—'}</span>
                    <span className="text-neutral-400">
                      {payment.currency} {payment.amount.toLocaleString()} · {payment.date}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
