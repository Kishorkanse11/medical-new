import { CheckCircle2, X } from 'lucide-react'
import { useEffect } from 'react'

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 2600)
    return () => window.clearTimeout(timer)
  }, [message, onClose])

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-xl border border-teal-100 bg-white px-4 py-3 shadow-lg"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100">
        <CheckCircle2 className="h-4 w-4 text-teal-700" aria-hidden="true" />
      </span>
      <p className="flex-1 text-sm font-medium text-navy-900">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        aria-label="Dismiss notification"
      >
        <X className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}