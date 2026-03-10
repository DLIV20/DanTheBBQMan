import Link from 'next/link'

export default function AboutStrip() {
  return (
    <section className="border-t border-b border-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-48 h-48 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden flex items-center justify-center text-gray-400 font-sans text-sm">
          Photo
        </div>

        <div className="flex-1">
          <h2 className="font-sans font-black text-3xl mb-3">Hey, I&apos;m Dan.</h2>
          <p className="font-serif text-lg text-gray-600 leading-relaxed mb-4">
            I&apos;ve been chasing great BBQ — low-and-slow recipes, hidden-gem joints, and cross-country smoke pilgrimages — and writing about all of it here.
          </p>
          <Link
            href="/about"
            className="font-sans font-semibold text-brand-green hover:text-brand-green-light transition-colors"
          >
            More About Dan →
          </Link>
        </div>
      </div>
    </section>
  )
}
