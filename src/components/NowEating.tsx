'use client'

export default function NowEating({ city }: { city: string }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-2 bg-brand-green text-white font-sans text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        Now Eating · {city}
      </div>
    </div>
  )
}
