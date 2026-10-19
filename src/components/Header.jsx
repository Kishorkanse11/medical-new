import { HeartPulse, Menu, Search, ShoppingCart, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Header({
  searchQuery,
  onSearchChange,
  cartCount,
  onCartOpen,
  onMenuOpen,
  menuOpen,
  onMenuClose,
}) {
  const inputRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        const tag = document.activeElement?.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA') return
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex h-16 items-center gap-3 sm:gap-6">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={menuOpen ? onMenuClose : onMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            aria-label="MediCare home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white">
              <HeartPulse className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-navy-900">
                Medi<span className="text-teal-700">Care</span>
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-slate-400">
                Pharmacy
              </span>
            </span>
          </a>

          {/* Desktop search */}
          <div className="hidden flex-1 md:block">
            <SearchField
              inputRef={inputRef}
              value={searchQuery}
              onChange={onSearchChange}
            />
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            <a
              href="#catalog"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              Categories
            </a>
            <a
              href="#catalog"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              Best Sellers
            </a>
            <a
              href="#catalog"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              Health &amp; Wellness
            </a>
          </nav>

          {/* Cart */}
          <button
            type="button"
            onClick={onCartOpen}
            className="relative ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 sm:ml-0"
            aria-label={`Open cart${cartCount > 0 ? `, ${cartCount} item${cartCount === 1 ? '' : 's'}` : ''}`}
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-teal-600 px-1 text-[11px] font-bold text-white ring-2 ring-white">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile search row */}
        <div className="pb-3 md:hidden">
          <SearchField
            inputRef={inputRef}
            value={searchQuery}
            onChange={onSearchChange}
          />
        </div>
      </div>
    </header>
  )
}

function SearchField({ inputRef, value, onChange }) {
  return (
    <div className="relative w-full">
      <label htmlFor="product-search" className="sr-only">
        Search products by name or category
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <input
        id="product-search"
        ref={inputRef}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products, categories…"
        className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-9 text-sm text-navy-900 placeholder:text-slate-400 transition-colors focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/30 [&::-webkit-search-cancel-button]:hidden"
        autoComplete="off"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-2 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 hover:text-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          aria-label="Clear search"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}