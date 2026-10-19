import { ShoppingBag, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { formatCurrency } from '../utils/currency'
import CartItem from './CartItem'

export default function CartDrawer({
  open,
  onClose,
  items,
  totalCount,
  totalPrice,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const closeRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusables = panelRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="presentation">
      <div
        className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-teal-700" aria-hidden="true" />
            <h2 className="text-base font-bold text-navy-900">
              Your Cart
              <span className="ml-2 rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-800">
                {totalCount}
              </span>
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <ShoppingBag className="h-7 w-7 text-slate-400" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-navy-900">
              Your cart is empty
            </h3>
            <p className="mt-1 max-w-xs text-sm text-slate-500">
              Add some everyday essentials to get started.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-slate-100 overflow-y-auto px-5">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  onRemove={onRemove}
                />
              ))}
            </ul>

            {/* Footer */}
            <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Items</span>
                <span>{totalCount}</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-medium text-navy-900">Total</span>
                <span className="text-lg font-bold text-navy-900">
                  {formatCurrency(totalPrice)}
                </span>
              </div>
              <button
                type="button"
                disabled
                className="mt-4 w-full cursor-not-allowed rounded-lg bg-slate-300 px-4 py-3 text-sm font-semibold text-slate-600"
                aria-disabled="true"
              >
                Checkout (Demo Only)
              </button>
              <p className="mt-2 text-center text-[11px] leading-relaxed text-slate-400">
                This is a frontend demonstration. No orders can be placed.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}