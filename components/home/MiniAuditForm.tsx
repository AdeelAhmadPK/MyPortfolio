'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function MiniAuditForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Placeholder: integrate real submission (API / server action) later
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <div>
      {submitted ? (
        <div className="space-y-4">
          <div className="text-sm font-medium bg-white/20 backdrop-blur px-4 py-3 rounded-md inline-block">
            ✅ Mini audit request received.
          </div>
          <p className="text-white/80 text-sm max-w-md mx-auto">I will review and follow up with quick wins & phased roadmap. Want to accelerate? <Link href="/contact" className="underline decoration-white/40 hover:decoration-white">Book a call</Link>.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            required
            placeholder="Your work email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="px-6 py-3 rounded-md bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors">Get Mini Audit</button>
        </form>
      )}
    </div>
  )
}
