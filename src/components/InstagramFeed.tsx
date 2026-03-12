'use client'

import Script from 'next/script'

export default function InstagramFeed() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* @ts-expect-error behold-widget is a custom element */}
        <behold-widget feed-id="KIUh1CYnmZGEc2VrCpvG"></behold-widget>
        <Script src="https://w.behold.so/widget.js" type="module" strategy="lazyOnload" />
      </div>
    </section>
  )
}
