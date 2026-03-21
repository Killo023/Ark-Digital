import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { isAuthenticated, logout } from './lib/dashboardAuth'
import Clients from './pages/Clients'
import Finance from './pages/Finance'
import Portal from './pages/Portal'
import PortalLinks from './pages/PortalLinks'
import DashboardGuard from './components/DashboardGuard'

// When deployed at e.g. https://www.arkdigital.solutions/dashboard/, basename is /dashboard
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

function AppHeader() {
  const location = useLocation()
  const path = location.pathname
  const isClientPortal = path === '/portal' || /^\/portal\/[^/]+$/.test(path)
  if (isClientPortal) {
    return (
      <header className="border-b border-neutral-800 bg-neutral-900/50">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a
            href="https://www.arkdigital.solutions"
            className="text-lg font-semibold text-white hover:text-neutral-300"
          >
            Ark Digital
          </a>
          <a
            href="https://www.arkdigital.solutions"
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            Main site
          </a>
        </div>
      </header>
    )
  }
  return (
    <header className="border-b border-neutral-800 bg-neutral-900/50">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <span className="text-lg font-semibold text-white">Ark Digital</span>
          <nav className="flex gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200'
              }`
            }
          >
            Clients
          </NavLink>
          <NavLink
            to="/finance"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200'
              }`
            }
          >
            Finance
          </NavLink>
          <NavLink
            to="/portal-links"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200'
              }`
            }
          >
            Client portal
          </NavLink>
        </nav>
        </div>
        {isAuthenticated() && (
          <button
            type="button"
            onClick={logout}
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            Log out
          </button>
        )}
      </div>
    </header>
  )
}

function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <AppHeader />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <Routes>
            <Route
              path="/"
              element={
                <DashboardGuard>
                  <Clients />
                </DashboardGuard>
              }
            />
            <Route
              path="/finance"
              element={
                <DashboardGuard>
                  <Finance />
                </DashboardGuard>
              }
            />
            <Route path="/portal" element={<Portal />} />
            <Route
              path="/portal/:slug"
              element={<Portal />}
            />
            <Route
              path="/portal-links"
              element={
                <DashboardGuard>
                  <PortalLinks />
                </DashboardGuard>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
