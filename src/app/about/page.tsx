import { getAllPosts } from '@/lib/posts'

export default function AboutPage() {
  const posts = getAllPosts()
  const categories = [...new Set(posts.map(p => p.category))]

  const CONTENT_CATEGORIES = [
    { label: 'Recipes', icon: '🔥', desc: 'Step-by-step BBQ recipes for home cooks and serious pitmasters alike.' },
    { label: 'Reviews', icon: '📍', desc: 'Honest, opinionated reviews of BBQ joints across the country.' },
    { label: 'Road Trips', icon: '🚗', desc: 'BBQ travel guides and destination deep-dives.' },
    { label: 'Tips & Techniques', icon: '🪵', desc: 'Pitmaster knowledge — wood selection, temps, rubs, and more.' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Two-column top */}
      <div className="flex flex-col md:flex-row gap-16 mb-20">
        <div className="md:w-1/3">
          <div className="aspect-[3/4] bg-gray-200 rounded-sm flex items-center justify-center text-gray-400 font-sans text-sm">
            Dan&apos;s Photo
          </div>
        </div>

        <div className="md:w-2/3 flex flex-col justify-center">
          <h1 className="font-sans font-black text-5xl md:text-6xl leading-none mb-6">
            Just a guy, a smoker, and a lot of opinions.
          </h1>

          <p className="font-serif text-lg text-gray-600 leading-relaxed mb-4">
            I&apos;m Dan — a home cook turned obsessive BBQ blogger. I&apos;ve been smoking meat in my backyard for years, but it wasn&apos;t until I started traveling to eat that I realized how much I had to say about it.
          </p>

          <p className="font-serif text-lg text-gray-600 leading-relaxed mb-4">
            This blog is where I document all of it — the recipes I&apos;m testing, the joints I&apos;m visiting, and the road trips I&apos;m taking in the name of great BBQ.
          </p>

          <p className="font-serif text-lg text-gray-600 leading-relaxed mb-8">
            No fluff. Just smoke.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-8 border-t border-b border-gray-100 py-6">
            <div>
              <p className="font-sans font-black text-3xl text-brand-green">{posts.length}</p>
              <p className="font-sans text-sm text-gray-400">Posts</p>
            </div>
            <div>
              <p className="font-sans font-black text-3xl text-brand-green">{categories.length}</p>
              <p className="font-sans text-sm text-gray-400">Categories</p>
            </div>
            <div>
              <p className="font-sans font-black text-3xl text-brand-green">∞</p>
              <p className="font-sans text-sm text-gray-400">Calories consumed</p>
            </div>
          </div>

          <blockquote className="font-serif italic text-2xl text-gray-400">
            &ldquo;Low and slow wins every time.&rdquo;
          </blockquote>
        </div>
      </div>

      {/* What You'll Find Here */}
      <div className="mb-20">
        <h2 className="font-sans font-black text-3xl mb-10">What You&apos;ll Find Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTENT_CATEGORIES.map(cat => (
            <div key={cat.label} className="border border-gray-100 p-6 rounded-sm">
              <span className="text-3xl mb-4 block">{cat.icon}</span>
              <h3 className="font-sans font-bold text-lg mb-2">{cat.label}</h3>
              <p className="font-serif text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <div className="bg-gray-50 rounded-sm p-12 text-center">
        <p className="font-sans font-black text-2xl mb-4">Follow the smoke</p>
        <a
          href="https://instagram.com/danthebbqman"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-green text-white font-sans font-bold px-8 py-3 rounded-full hover:bg-brand-green-light transition-colors"
        >
          @danthebbqman on Instagram →
        </a>
      </div>
    </div>
  )
}
