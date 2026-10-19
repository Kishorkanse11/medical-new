import { Check, Plus, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { formatCurrency } from '../utils/currency'

export default function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAddToCart(product)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1400)
  }

  const discount =
    product.previousPrice && product.previousPrice > product.price
      ? Math.round((1 - product.price / product.previousPrice) * 100)
      : null

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card-hover">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center')
          }}
        />
        {product.label && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-800 shadow-sm backdrop-blur">
            {product.label}
          </span>
        )}
        {discount && (
          <span className="absolute right-3 top-3 rounded-full bg-rose-600 px-2 py-0.5 text-[11px] font-bold text-white shadow-sm">
            −{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-teal-700">
          {product.category}
        </p>
        <h3 className="mt-1 text-base font-semibold leading-snug text-navy-900">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-navy-900">
              {formatCurrency(product.price)}
            </span>
            {product.previousPrice && (
              <span className="text-xs font-medium text-slate-400 line-through">
                {formatCurrency(product.previousPrice)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={[
              'inline-flex h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 active:scale-[0.98]',
              added
                ? 'bg-teal-100 text-teal-800'
                : 'bg-teal-700 text-white hover:bg-teal-800 active:bg-teal-900',
            ].join(' ')}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xs:inline">Add</span>
                <Plus className="h-3.5 w-3.5 xs:hidden" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}