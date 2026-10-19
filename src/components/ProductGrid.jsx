import { SearchX } from 'lucide-react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, onAddToCart, onClearFilters }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
          <SearchX className="h-6 w-6 text-slate-400" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-navy-900">
          No products found
        </h3>
        <p className="mt-1 max-w-sm text-sm text-slate-500">
          We couldn't find any products matching your search or selected
          category. Try adjusting your filters.
        </p>
        <button
          type="button"
          onClick={onClearFilters}
          className="mt-5 inline-flex items-center rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
        >
          Clear filters
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}