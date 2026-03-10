import { getAllPosts } from '@/lib/posts'
import BlogGrid from '@/components/CategoryFilter'
import EmailSignup from '@/components/EmailSignup'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-sans font-black text-5xl mb-3">The Blog</h1>
        <p className="font-serif text-xl text-gray-500 mb-12">
          Recipes, reviews, road trips, and everything in between.
        </p>
        <BlogGrid posts={posts} />
      </section>
      <EmailSignup />
    </>
  )
}
