import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import EmailSignup from '@/components/EmailSignup'
import AboutStrip from '@/components/AboutStrip'
import InstagramFeed from '@/components/InstagramFeed'

export default function Home() {
  const featured = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h1 className="font-sans font-black text-6xl md:text-7xl leading-none mb-6">
            BBQ.<br />No Fluff.<br />
            <span className="text-brand-green">Just Smoke.</span>
          </h1>
          <p className="font-serif text-xl text-gray-500 mb-8 max-w-md">
            Where the Crescent City Eats.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-brand-green text-white font-sans font-bold px-8 py-4 rounded-full hover:bg-brand-green-light transition-colors"
          >
            Read the Blog
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/logos/logo-dark.png"
            alt="DanTheBBQMan"
            width={400}
            height={300}
            className="w-full max-w-sm opacity-90"
          />
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-sans font-black text-3xl mb-10">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="font-sans font-semibold text-brand-green hover:text-brand-green-light transition-colors"
          >
            View all posts →
          </Link>
        </div>
      </section>

      <AboutStrip />
      <EmailSignup />
      <InstagramFeed />
    </>
  )
}
