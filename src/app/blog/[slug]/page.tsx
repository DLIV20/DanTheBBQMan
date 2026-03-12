import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = getPostBySlug(slug)
  if (!result) notFound()

  const { post, content } = result

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Cover image */}
      {post.coverImage && (
        <div className="w-full aspect-[16/7] overflow-hidden rounded-sm mb-10 bg-gray-100">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-sans text-xs font-semibold bg-brand-green text-white px-2 py-1 rounded-sm">
          {post.category}
        </span>
        <span className="font-sans text-xs text-gray-400">{post.date}</span>
        <span className="font-sans text-xs text-gray-400">{post.readTime}</span>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none font-serif prose-headings:font-sans prose-headings:font-black prose-a:text-brand-green">
        <MDXRemote source={content} />
      </div>
    </article>
  )
}
