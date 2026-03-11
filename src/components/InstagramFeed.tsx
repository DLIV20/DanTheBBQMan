'use client'

import Script from 'next/script'

export default function InstagramFeed() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-sans font-black text-2xl">Follow the smoke</h2>
          <a
            href="https://instagram.com/danthebbqman"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
          >
            @danthebbqman →
          </a>
        </div>

        {/* @ts-expect-error behold-widget is a custom element */}
        <behold-widget feed-id="KIUh1CYnmZGEc2VrCpvG"></behold-widget>
        <Script src="https://w.behold.so/widget.js" type="module" strategy="lazyOnload" />
      </div>
    </section>
  )
}
