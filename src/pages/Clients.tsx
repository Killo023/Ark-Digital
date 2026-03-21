import { useState, useMemo, useEffect, useRef } from 'react'
import { clientStore } from '../store'
import type { Client } from '../types'
import ClientCard from '../components/ClientCard'
import ClientForm from '../components/ClientForm'

export default function Clients() {
  const [clients, setClients] = useState<Client[]>(() => clientStore.getAll())
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<Client | null>(null)
  const [filter, setFilter] = useState<'all' | 'active' | 'overdue' | 'churned'>('all')
  const [saveNotice, setSaveNotice] = useState<string | null>(null)
  const saveNoticeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const refresh = () => setClients(clientStore.getAll())

  useEffect(() => {
    return () => {
      if (saveNoticeTimer.current) clearTimeout(saveNoticeTimer.current)
    }
  }, [])

  const showSaved = () => {
    setSaveNotice('Saved — stored in this browser (localStorage).')
    if (saveNoticeTimer.current) clearTimeout(saveNoticeTimer.current)
    saveNoticeTimer.current = setTimeout(() => setSaveNotice(null), 4000)
  }

  const filtered = useMemo(() => {
    if (filter === 'all') return clients
    return clients.filter((c) => c.status === filter)
  }, [clients, filter])

  const handleSave = (client: Client) => {
    if (editing) {
      clientStore.update(client.id, client)
    } else {
      const { id: _i, createdAt: _c, updatedAt: _u, ...rest } = client
      clientStore.add(rest)
    }
    setEditing(null)
    setShowForm(false)
    refresh()
    showSaved()
  }

  const handleEdit = (client: Client) => {
    setEditing(client)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Remove this client? This does not delete Vercel or GoDaddy data.')) {
      clientStore.remove(id)
      refresh()
    }
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Clients</h1>
          <p className="mt-1 text-sm text-neutral-400">
            Vercel projects, GoDaddy domains & emails, hosting fees
          </p>
          {saveNotice && (
            <p className="mt-2 text-sm font-medium text-emerald-400" role="status">
              {saveNotice}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="overdue">Overdue</option>
            <option value="churned">Churned</option>
          </select>
          <button
            type="button"
            onClick={() => {
              setEditing(null)
              setShowForm(true)
            }}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
          >
            Add client
          </button>
        </div>
      </div>

      {showForm && (
        <ClientForm
          client={editing ?? undefined}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false)
            setEditing(null)
          }}
        />
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onEdit={() => handleEdit(client)}
            onDelete={() => handleDelete(client.id)}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center text-neutral-500">
          No clients match the filter. Add a client or change the filter.
        </p>
      )}
    </div>
  )
}
