import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-24 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/logos/logo-dark.png"
          alt="DanTheBBQMan"
          width={80}
          height={40}
          className="h-10 w-auto opacity-80"
        />

        <nav className="flex gap-6">
          <Link href="/blog" className="font-sans text-sm text-gray-500 hover:text-brand-green transition-colors">Blog</Link>
          <Link href="/about" className="font-sans text-sm text-gray-500 hover:text-brand-green transition-colors">About</Link>
          <Link href="/contact" className="font-sans text-sm text-gray-500 hover:text-brand-green transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/danthebbqman"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-gray-500 hover:text-brand-green transition-colors"
          >
            @danthebbqman
          </a>
          <p className="font-sans text-xs text-gray-400">© {new Date().getFullYear()} DanTheBBQMan</p>
        </div>
      </div>
    </footer>
  )
}
