'use client'

import { useState } from 'react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to Mailchimp / ConvertKit
    setSubmitted(true)
  }

  return (
    <section id="signup" className="bg-brand-green text-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-sans font-black text-4xl md:text-5xl mb-4">
          Get the smoke delivered to your inbox.
        </h2>
        <p className="font-serif text-lg mb-8 opacity-80">
          New recipes, reviews, and road trips — straight to you.
        </p>

        {submitted ? (
          <p className="font-sans font-semibold text-lg">You&apos;re in. Talk soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 max-w-sm px-5 py-3 rounded-full font-sans text-sm text-white bg-white/15 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/60"
            />
            <button
              type="submit"
              className="bg-white text-brand-green font-sans font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
