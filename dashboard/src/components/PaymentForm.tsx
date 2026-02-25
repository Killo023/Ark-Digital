import { useState } from 'react'
import type { Client } from '../types'
import type { Payment } from '../types'

interface PaymentFormProps {
  clients: Client[]
  onSave: (payment: Omit<Payment, 'id' | 'createdAt'>) => void
  onCancel: () => void
}

export default function PaymentForm({ clients, onSave, onCancel }: PaymentFormProps) {
  const [clientId, setClientId] = useState('')
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('ZAR')
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [note, setNote] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amt = parseFloat(amount)
    if (!clientId || Number.isNaN(amt) || amt < 0) return
    onSave({
      clientId,
      amount: amt,
      currency,
      date,
      note: note.trim(),
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
    >
      <h3 className="mb-4 text-lg font-semibold text-white">Log payment</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-400">Client</label>
          <select
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            required
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white focus:border-neutral-600 focus:outline-none"
          >
            <option value="">Select client</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
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
          <label className="mb-1 block text-sm font-medium text-neutral-400">Note (optional)</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
            placeholder="e.g. February hosting"
          />
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
        >
          Add payment
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
