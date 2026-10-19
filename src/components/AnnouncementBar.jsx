import { Sparkles } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-teal-800 text-teal-50">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs sm:text-[13px]">
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-mint-300" aria-hidden="true" />
        <p className="font-medium tracking-wide">
          Your health, made simpler — Shop healthcare essentials.
        </p>
      </div>
    </div>
  )
}