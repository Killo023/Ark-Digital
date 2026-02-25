import { useState } from 'react'
import type { Client } from '../types'
import type { Expense } from '../types'

interface ExpenseFormProps {
  clients: Client[]
  onSave: (expense: Omit<Expense, 'id' | 'createdAt'>) => void
  onCancel: () => void
}

export default function ExpenseForm({ clients, onSave, onCancel }: ExpenseFormProps) {
  const [label, setLabel] = useState('')
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('ZAR')
  const [category, setCategory] = useState<Expense['category']>('other')
  const [clientId, setClientId] = useState('')
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amt = parseFloat(amount)
    if (Number.isNaN(amt) || amt < 0) return
    onSave({
      label: label.trim(),
      amount: amt,
      currency,
      category,
      clientId: clientId || null,
      date,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
    >
      <h3 className="mb-4 text-lg font-semibold text-white">Log expense</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">Description</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            required
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="e.g. GoDaddy domain renewal"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Expense['category'])}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white focus:border-neutral-600 focus:outline-none"
          >
            <option value="domain">Domain (GoDaddy)</option>
            <option value="email">Email (GoDaddy)</option>
            <option value="vercel">Vercel</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">Amount</label>
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
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="flex-1 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
              placeholder="0"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-neutral-400">Link to client (optional)</label>
          <select
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white focus:border-neutral-600 focus:outline-none"
          >
            <option value="">— None —</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
        >
          Add expense
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
