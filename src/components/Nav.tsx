'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100" style={{ backgroundColor: '#faf9f7' }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logos/logo-dark.png"
            alt="DanTheBBQMan"
            width={120}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="font-sans text-sm font-semibold tracking-wide hover:text-brand-green transition-colors">
            Blog
          </Link>
          <Link href="/about" className="font-sans text-sm font-semibold tracking-wide hover:text-brand-green transition-colors">
            About
          </Link>
          <Link href="/contact" className="font-sans text-sm font-semibold tracking-wide hover:text-brand-green transition-colors">
            Contact
          </Link>
          <a
            href="#signup"
            className="bg-brand-green text-white font-sans text-sm font-semibold px-5 py-2 rounded-full hover:bg-brand-green-light transition-colors"
          >
            Get Updates
          </a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4" style={{ backgroundColor: '#faf9f7' }}>
          <Link href="/blog" className="font-sans font-semibold" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/about" className="font-sans font-semibold" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="font-sans font-semibold" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="#signup" className="bg-brand-green text-white font-sans font-semibold px-5 py-2 rounded-full text-center" onClick={() => setMenuOpen(false)}>
            Get Updates
          </a>
        </div>
      )}
    </nav>
  )
}
