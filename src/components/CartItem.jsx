import { Minus, Plus, Trash2 } from 'lucide-react'
import { formatCurrency } from '../utils/currency'

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <li className="flex gap-4 py-4">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-navy-900">
              {item.name}
            </p>
            <p className="mt-0.5 text-xs text-slate-500">{item.category}</p>
          </div>
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            aria-label={`Remove ${item.name} from cart`}
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <div className="inline-flex items-center rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => onDecrease(item.id)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-l-lg text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <Minus className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <span
              className="inline-flex h-8 w-9 items-center justify-center border-x border-slate-200 text-sm font-semibold text-navy-900"
              aria-live="polite"
              aria-label={`Quantity: ${item.quantity}`}
            >
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => onIncrease(item.id)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-r-lg text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              aria-label={`Increase quantity of ${item.name}`}
            >
              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>

          <div className="text-right">
            <p className="text-sm font-bold text-navy-900">
              {formatCurrency(item.price * item.quantity)}
            </p>
            {item.quantity > 1 && (
              <p className="text-[11px] text-slate-400">
                {formatCurrency(item.price)} each
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}