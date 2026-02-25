import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { clientStore, expenseStore, paymentStore } from '../store'
import type { Expense, Payment } from '../types'
import ExpenseForm from '../components/ExpenseForm'
import PaymentForm from '../components/PaymentForm'

const CATEGORY_LABELS: Record<Expense['category'], string> = {
  domain: 'Domain (GoDaddy)',
  email: 'Email (GoDaddy)',
  vercel: 'Vercel',
  other: 'Other',
}

export default function Finance() {
  const [searchParams, setSearchParams] = useSearchParams()
  const logClientId = searchParams.get('log') ?? ''
  const [expenses, setExpenses] = useState<Expense[]>(() => expenseStore.getAll())
  const [payments, setPayments] = useState<Payment[]>(() => paymentStore.getAll())
  const clients = useMemo(() => clientStore.getAll(), [])
  const [showExpenseForm, setShowExpenseForm] = useState(false)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [paymentFormClientId, setPaymentFormClientId] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (logClientId && clients.some((c) => c.id === logClientId)) {
      setPaymentFormClientId(logClientId)
      setShowPaymentForm(true)
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev)
        next.delete('log')
        return next
      }, { replace: true })
    }
  }, [logClientId, clients, setSearchParams])

  const refresh = () => {
    setExpenses(expenseStore.getAll())
    setPayments(paymentStore.getAll())
  }

  const monthlyRecurring = useMemo(() => {
    return clients
      .filter((c) => c.status === 'active')
      .reduce((sum, c) => sum + (c.hostingFeeMonthly || 0), 0)
  }, [clients])

  const totalPayments = useMemo(() => {
    return payments.reduce((acc, p) => {
      if (!acc[p.currency]) acc[p.currency] = 0
      acc[p.currency] += p.amount
      return acc
    }, {} as Record<string, number>)
  }, [payments])

  const totalExpenses = useMemo(() => {
    return expenses.reduce((acc, e) => {
      if (!acc[e.currency]) acc[e.currency] = 0
      acc[e.currency] += e.amount
      return acc
    }, {} as Record<string, number>)
  }, [expenses])

  const byCategory = useMemo(() => {
    const map: Record<string, number> = {}
    expenses.forEach((e) => {
      const key = e.currency + ':' + e.category
      if (!map[key]) map[key] = 0
      map[key] += e.amount
    })
    return map
  }, [expenses])

  const recentExpenses = useMemo(
    () => [...expenses].sort((a, b) => (b.date > a.date ? 1 : -1)).slice(0, 10),
    [expenses]
  )
  const recentPayments = useMemo(
    () => [...payments].sort((a, b) => (b.date > a.date ? 1 : -1)).slice(0, 10),
    [payments]
  )

  const addExpense = (e: Omit<Expense, 'id' | 'createdAt'>) => {
    expenseStore.add(e)
    refresh()
    setShowExpenseForm(false)
  }

  const addPayment = (p: Omit<Payment, 'id' | 'createdAt'>) => {
    paymentStore.add(p)
    const client = clients.find((c) => c.id === p.clientId)
    if (client) clientStore.update(p.clientId, { lastPaymentDate: p.date })
    refresh()
    setShowPaymentForm(false)
    setPaymentFormClientId(undefined)
  }

  const closePaymentForm = () => {
    setShowPaymentForm(false)
    setPaymentFormClientId(undefined)
  }

  const removeExpense = (id: string) => {
    expenseStore.remove(id)
    refresh()
  }

  const removePayment = (id: string) => {
    paymentStore.remove(id)
    refresh()
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Finance</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Hosting revenue, GoDaddy & Vercel expenses, payments
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <p className="text-sm font-medium text-neutral-400">Monthly recurring (hosting)</p>
          <p className="mt-1 text-2xl font-semibold text-white">
            ZAR {monthlyRecurring.toLocaleString()}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">From active client hosting fees</p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <p className="text-sm font-medium text-neutral-400">Total payments received</p>
          <div className="mt-1 text-2xl font-semibold text-white">
            {Object.entries(totalPayments).map(([curr, amt]) => (
              <div key={curr}>
                {curr} {amt.toLocaleString()}
              </div>
            ))}
            {Object.keys(totalPayments).length === 0 && '—'}
          </div>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <p className="text-sm font-medium text-neutral-400">Total expenses</p>
          <div className="mt-1 text-2xl font-semibold text-white">
            {Object.entries(totalExpenses).map(([curr, amt]) => (
              <div key={curr}>
                {curr} {amt.toLocaleString()}
              </div>
            ))}
            {Object.keys(totalExpenses).length === 0 && '—'}
          </div>
        </div>
      </div>

      <div className="mb-6 flex gap-3">
        <button
          type="button"
          onClick={() => setShowPaymentForm(true)}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
        >
          Log payment
        </button>
        <button
          type="button"
          onClick={() => setShowExpenseForm(true)}
          className="rounded-lg border border-neutral-600 px-4 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800"
        >
          Log expense
        </button>
      </div>

      {showPaymentForm && (
        <PaymentForm
          clients={clients}
          onSave={addPayment}
          onCancel={closePaymentForm}
          defaultClientId={paymentFormClientId}
        />
      )}
      {showExpenseForm && (
        <ExpenseForm
          clients={clients}
          onSave={addExpense}
          onCancel={() => setShowExpenseForm(false)}
        />
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Recent payments</h2>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden">
            {recentPayments.length === 0 ? (
              <p className="p-4 text-sm text-neutral-500">No payments recorded yet.</p>
            ) : (
              <ul className="divide-y divide-neutral-800">
                {recentPayments.map((p) => {
                  const client = clients.find((c) => c.id === p.clientId)
                  return (
                    <li
                      key={p.id}
                      className="flex items-center justify-between gap-2 px-4 py-3 text-sm"
                    >
                      <div>
                        <span className="font-medium text-white">{client?.name ?? p.clientId}</span>
                        <span className="ml-2 text-neutral-400">
                          {p.currency} {p.amount.toLocaleString()}
                        </span>
                        <span className="ml-2 text-neutral-500">{p.date}</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          removePayment(p.id)
                        }}
                        className="rounded p-1 text-neutral-500 hover:bg-neutral-800 hover:text-red-400"
                        title="Remove"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Recent expenses</h2>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden">
            {recentExpenses.length === 0 ? (
              <p className="p-4 text-sm text-neutral-500">No expenses recorded yet.</p>
            ) : (
              <ul className="divide-y divide-neutral-800">
                {recentExpenses.map((e) => (
                  <li
                    key={e.id}
                    className="flex items-center justify-between gap-2 px-4 py-3 text-sm"
                  >
                    <div>
                      <span className="font-medium text-white">{e.label}</span>
                      <span className="ml-2 text-neutral-400">
                        {e.currency} {e.amount.toLocaleString()}
                      </span>
                      <span className="ml-2 text-neutral-500">
                        {CATEGORY_LABELS[e.category]} · {e.date}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(ev) => {
                        ev.preventDefault()
                        ev.stopPropagation()
                        removeExpense(e.id)
                      }}
                      className="rounded p-1 text-neutral-500 hover:bg-neutral-800 hover:text-red-400"
                      title="Remove"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {Object.keys(byCategory).length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-semibold text-white">Expenses by category</h2>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
            <ul className="space-y-2 text-sm">
              {Object.entries(byCategory).map(([key, amount]) => {
                const [currency, category] = key.split(':')
                return (
                  <li key={key} className="flex justify-between">
                    <span className="text-neutral-400">{CATEGORY_LABELS[category as Expense['category']]}</span>
                    <span className="text-white">
                      {currency} {amount.toLocaleString()}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
