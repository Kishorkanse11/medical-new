import { HeartPulse } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-xs">
            <span className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white">
                <HeartPulse className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-navy-900">
                Medi<span className="text-teal-700">Care</span>
              </span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              A demonstration online pharmacy catalog showcasing everyday
              wellness and healthcare essentials.
            </p>
          </div>

          {/* Shop */}
          <nav aria-label="Shop">
            <h3 className="text-sm font-semibold text-navy-900">Shop</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {['All Products', 'Vitamins', 'Personal Care', 'First Aid', 'Wellness'].map(
                (label) => (
                  <li key={label}>
                    <a
                      href="#catalog"
                      className="text-slate-500 transition-colors hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                    >
                      {label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Customer support">
            <h3 className="text-sm font-semibold text-navy-900">Support</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {['Contact Us', 'FAQs', 'Shipping & Returns', 'Order Status'].map(
                (label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-slate-500 transition-colors hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                    >
                      {label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className="text-sm font-semibold text-navy-900">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Accessibility'].map(
                (label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-slate-500 transition-colors hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                    >
                      {label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-xs leading-relaxed text-slate-400">
            MediCare is a fictional brand. This site is a frontend demonstration
            project — it is not a licensed pharmacy, does not sell products, and
            provides no medical advice. Product names, prices, and descriptions
            are for demonstration only.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            &copy; {year} MediCare Demo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}