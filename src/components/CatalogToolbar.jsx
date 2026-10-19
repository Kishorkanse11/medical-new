export default function CatalogToolbar({ resultCount, sortBy, onSortChange }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
          Shop Healthcare Essentials
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Browse a curated selection of everyday wellness products.
        </p>
        <p className="mt-2 text-sm font-medium text-teal-700" aria-live="polite">
          Showing {resultCount} {resultCount === 1 ? 'product' : 'products'}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <label
          htmlFor="sort-select"
          className="text-sm font-medium text-slate-600"
        >
          Sort by
        </label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="h-10 rounded-lg border border-slate-200 bg-white px-3 pr-8 text-sm font-medium text-navy-800 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}