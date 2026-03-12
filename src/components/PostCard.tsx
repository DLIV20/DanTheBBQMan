import Link from 'next/link'
import type { Post } from '@/lib/posts'

const CATEGORY_COLORS: Record<string, string> = {
  Recipe: 'bg-brand-green text-white',
  Review: 'bg-brand-green-light text-white',
  'Road Trip': 'bg-gray-800 text-white',
  'Tips & Techniques': 'bg-gray-200 text-brand-black',
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block hover:-translate-y-1 transition-transform duration-200">
      <div className="overflow-hidden rounded-sm mb-4 bg-gray-100 aspect-[4/3]">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-sans text-sm">
            No image
          </div>
        )}
      </div>

      <span className={`inline-block font-sans text-xs font-semibold px-2 py-1 rounded-sm mb-2 ${CATEGORY_COLORS[post.category] ?? 'bg-gray-200 text-brand-black'}`}>
        {post.category}
      </span>

      <h3 className="font-sans font-bold text-lg leading-snug mb-1 group-hover:text-brand-green transition-colors">
        {post.title}
      </h3>

      <p className="font-serif text-sm text-gray-500 leading-relaxed mb-2 line-clamp-2">
        {post.excerpt}
      </p>

      <span className="font-sans text-xs text-gray-400">{post.readTime}</span>
    </Link>
  )
}
