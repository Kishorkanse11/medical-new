import { useCallback, useMemo, useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import HeroSection from './components/HeroSection'
import CategoryFilter from './components/CategoryFilter'
import CatalogToolbar from './components/CatalogToolbar'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import Toast from './components/Toast'
import Footer from './components/Footer'
import { products, categories } from './data/products'
import { useCart } from './hooks/useCart'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All Products')
  const [sortBy, setSortBy] = useState('featured')
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const {
    items,
    addItem,
    increaseQty,
    decreaseQty,
    removeItem,
    totalCount,
    totalPrice,
  } = useCart()

  const handleAddToCart = useCallback(
    (product) => {
      addItem(product)
      setToast(`${product.name} added to cart`)
    },
    [addItem],
  )

  const closeToast = useCallback(() => setToast(null), [])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === 'All Products' || p.category === activeCategory
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, activeCategory])

  const sorted = useMemo(() => {
    const list = [...filtered]
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    return list
  }, [filtered, sortBy])

  const clearFilters = useCallback(() => {
    setSearchQuery('')
    setActiveCategory('All Products')
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#catalog"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to products
      </a>

      <AnnouncementBar />
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={totalCount}
        onCartOpen={() => setCartOpen(true)}
        onMenuOpen={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
        menuOpen={menuOpen}
      />

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1">
        <HeroSection />
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <section
          id="catalog"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
          aria-labelledby="catalog-heading"
        >
          <div className="sr-only" id="catalog-heading">
            Product catalog
          </div>
          <CatalogToolbar
            resultCount={sorted.length}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          <div className="mt-6">
            <ProductGrid
              products={sorted}
              onAddToCart={handleAddToCart}
              onClearFilters={clearFilters}
            />
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        totalCount={totalCount}
        totalPrice={totalPrice}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
        onRemove={removeItem}
      />

      {toast && <Toast message={toast} onClose={closeToast} />}
    </div>
  )
}