export default function InstagramFeed() {
  const placeholders = Array.from({ length: 9 })

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-sans font-black text-2xl">Follow the smoke</h2>
          <a
            href="https://instagram.com/danthebbqman"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
          >
            @danthebbqman →
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-9 gap-1">
          {placeholders.map((_, i) => (
            <a
              key={i}
              href="https://instagram.com/danthebbqman"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-gray-100 hover:opacity-80 transition-opacity overflow-hidden block"
            >
              <div className="w-full h-full bg-gray-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
