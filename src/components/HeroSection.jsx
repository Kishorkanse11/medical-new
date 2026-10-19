import { ArrowRight, Leaf, Package, ShieldCheck } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-mint-50 to-white"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
            <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
            Everyday Wellness
          </span>
          <h1
            id="hero-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          >
            Your Everyday Health Essentials
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore everyday wellness products and healthcare essentials, all in
            one convenient place.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 active:bg-teal-900"
            >
              Shop All Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-teal-300 hover:bg-mint-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              Explore Categories
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-teal-600" aria-hidden="true" />
              Curated essentials
            </li>
            <li className="inline-flex items-center gap-2">
              <Package className="h-4 w-4 text-teal-600" aria-hidden="true" />
              Simple browsing
            </li>
            <li className="inline-flex items-center gap-2">
              <Leaf className="h-4 w-4 text-teal-600" aria-hidden="true" />
              Everyday wellness
            </li>
          </ul>
        </div>

        {/* Decorative visual */}
        <div className="relative mx-auto hidden w-full max-w-md lg:block" aria-hidden="true">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-teal-100/60 to-mint-100/70" />
          <div className="relative grid grid-cols-2 gap-4 rounded-3xl border border-white/80 bg-white/70 p-6 backdrop-blur">
            <DecoCard color="bg-teal-600" icon={<Leaf className="h-5 w-5 text-white" />} label="Vitamins" />
            <DecoCard color="bg-mint-300" icon={<ShieldCheck className="h-5 w-5 text-teal-900" />} label="First Aid" />
            <DecoCard color="bg-teal-700" icon={<Package className="h-5 w-5 text-white" />} label="Wellness" />
            <DecoCard color="bg-mint-200" icon={<Leaf className="h-5 w-5 text-teal-900" />} label="Personal Care" />
          </div>
          <div className="absolute -bottom-5 -left-5 h-16 w-16 rounded-2xl bg-teal-600/10" />
          <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-mint-300/60" />
        </div>
      </div>
    </section>
  )
}

function DecoCard({ color, icon, label }) {
  return (
    <div className={`flex flex-col items-start gap-3 rounded-2xl p-4 ${color}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
        {icon}
      </span>
      <span className="text-sm font-semibold text-white drop-shadow-sm">{label}</span>
    </div>
  )
}