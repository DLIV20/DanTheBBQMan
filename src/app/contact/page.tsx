'use client'

import { useState } from 'react'

const SUBJECTS = ['General', 'Collaboration', 'Recipe Request', 'Other']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to form handler (e.g. Resend, Formspree)
    setSubmitted(true)
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="font-sans font-black text-5xl mb-3">Get In Touch</h1>
      <p className="font-serif text-xl text-gray-500 mb-12">
        Collabs, questions, or just want to talk BBQ — Dan&apos;s listening.
      </p>

      {submitted ? (
        <div className="text-center py-16">
          <p className="font-sans font-bold text-2xl mb-2">Message sent.</p>
          <p className="font-serif text-gray-500">Dan will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="font-sans text-sm font-semibold block mb-2">Name</label>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-200 px-4 py-3 font-serif rounded-sm focus:outline-none focus:border-brand-green"
            />
          </div>

          <div>
            <label className="font-sans text-sm font-semibold block mb-2">Email</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-200 px-4 py-3 font-serif rounded-sm focus:outline-none focus:border-brand-green"
            />
          </div>

          <div>
            <label className="font-sans text-sm font-semibold block mb-2">Subject</label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border border-gray-200 px-4 py-3 font-sans text-sm rounded-sm focus:outline-none focus:border-brand-green bg-white"
            >
              {SUBJECTS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="font-sans text-sm font-semibold block mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-200 px-4 py-3 font-serif rounded-sm focus:outline-none focus:border-brand-green resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-brand-green text-white font-sans font-bold px-8 py-4 rounded-full hover:bg-brand-green-light transition-colors self-start"
          >
            Send Message
          </button>
        </form>
      )}

      <div className="mt-16 pt-8 border-t border-gray-100 flex items-center gap-4">
        <a
          href="https://instagram.com/danthebbqman"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
        >
          @danthebbqman on Instagram →
        </a>
      </div>
    </div>
  )
}
