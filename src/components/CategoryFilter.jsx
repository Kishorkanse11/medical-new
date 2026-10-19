export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide"
          role="tablist"
          aria-label="Filter by category"
        >
          {categories.map((category) => {
            const isActive = category === active
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(category)}
                className={[
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2',
                  isActive
                    ? 'border-teal-700 bg-teal-700 text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:bg-mint-50 hover:text-teal-800',
                ].join(' ')}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}