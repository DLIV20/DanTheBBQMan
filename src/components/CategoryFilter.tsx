'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Post } from '@/lib/posts'

const CATEGORIES = ['All', 'Recipe', 'Review', 'Road Trip', 'Tips & Techniques']

const CATEGORY_COLORS: Record<string, string> = {
  Recipe: 'bg-brand-green text-white',
  Review: 'bg-brand-green-light text-white',
  'Road Trip': 'bg-gray-800 text-white',
  'Tips & Techniques': 'bg-gray-200 text-brand-black',
}

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-12">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-sans text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
              activeCategory === cat
                ? 'bg-brand-green text-white border-brand-green'
                : 'bg-white text-brand-black border-gray-200 hover:border-brand-green hover:text-brand-green'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {filtered.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
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
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="font-sans text-gray-400 text-center py-24">No posts in this category yet.</p>
      )}
    </>
  )
}
