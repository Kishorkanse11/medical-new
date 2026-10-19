import { ChevronRight, HeartPulse } from 'lucide-react'
import { useEffect, useRef } from 'react'

const links = [
  { label: 'All Categories', href: '#catalog' },
  { label: 'Best Sellers', href: '#catalog' },
  { label: 'Health & Wellness', href: '#catalog' },
  { label: 'Vitamins', href: '#catalog' },
  { label: 'Personal Care', href: '#catalog' },
  { label: 'First Aid', href: '#catalog' },
]

export default function MobileMenu({ open, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div
        className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        ref={panelRef}
        className="absolute inset-y-0 left-0 flex w-[min(20rem,88vw)] flex-col bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-white">
              <HeartPulse className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-base font-bold text-navy-900">
              Medi<span className="text-teal-700">Care</span>
            </span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            aria-label="Close menu"
          >
            <ChevronRight className="h-5 w-5 rotate-180" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-slate-200 p-4">
          <p className="text-xs leading-relaxed text-slate-400">
            Demonstration catalog. No orders can be placed.
          </p>
        </div>
      </div>
    </div>
  )
}