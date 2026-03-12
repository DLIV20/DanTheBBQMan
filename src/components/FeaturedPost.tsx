import Link from 'next/link'
import type { Post } from '@/lib/posts'

const CATEGORY_COLORS: Record<string, string> = {
  Recipe: 'bg-brand-green text-white',
  Review: 'bg-brand-green-light text-white',
  'Road Trip': 'bg-gray-800 text-white',
  'Tips & Techniques': 'bg-gray-200 text-brand-black',
}

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block mb-16">
      <div className="relative w-full overflow-hidden rounded-sm aspect-[16/7] bg-gray-100">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
          <span className={`inline-block font-sans text-xs font-semibold px-2 py-1 rounded-sm mb-4 ${CATEGORY_COLORS[post.category] ?? 'bg-gray-200 text-brand-black'}`}>
            {post.category}
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-white leading-tight mb-3 group-hover:text-brand-green-light transition-colors duration-200">
            {post.title}
          </h2>
          <p className="font-serif text-white/80 text-base md:text-lg leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <span className="font-sans text-sm text-white/60">{post.readTime}</span>
        </div>
      </div>
    </Link>
  )
}
