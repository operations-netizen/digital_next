'use client'

import { useState } from 'react'

/**
 * Editorial inquiry form - an understated questionnaire. Fields are
 * numbered (01-05), inputs are underlined rather than boxed, the dropdown
 * is styled to match, and submit resolves to a quiet confirmation. Same
 * design language as the rest of the site.
 */

const reasons = [
  'Company acquisition',
  'Partnership',
  'Careers',
  'Press',
  'General inquiry',
]

const field =
  'mt-2 w-full border-b border-line bg-transparent py-2.5 text-ink outline-none transition-colors duration-300 ease-editorial placeholder:text-muted/45 focus:border-accent'

function FieldLabel({ n, children }: { n: string; children: string }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-meta text-muted">
      <span className="mr-2 text-accent/70">{n}</span>
      {children}
    </span>
  )
}

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const body = new FormData(e.currentTarget)
      body.set('form', 'contact')
      const res = await fetch('/api/forms', { method: 'POST', body })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    return (
      <div className="border-t border-line py-16 text-center">
        <p className="font-serif text-3xl font-light tracking-tight text-ink">
          Thank you.
        </p>
        <p className="mx-auto mt-4 max-w-[40ch] text-base leading-relaxed text-muted">
          We&rsquo;ve received your inquiry and will be in touch within two
          business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {/* Honeypot - hidden from users, catches bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <label className="block">
        <FieldLabel n="01">Name</FieldLabel>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          className={field}
        />
      </label>

      <label className="block">
        <FieldLabel n="02">Company</FieldLabel>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          placeholder="Company or fund"
          className={field}
        />
      </label>

      <label className="block">
        <FieldLabel n="03">Email</FieldLabel>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={field}
        />
      </label>

      <label className="block">
        <FieldLabel n="04">Reason</FieldLabel>
        <div className="relative">
          <select
            name="reason"
            required
            defaultValue=""
            className={`${field} appearance-none pr-6`}
          >
            <option value="" disabled>
              Select a reason
            </option>
            {reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 right-0 font-mono text-[11px] text-muted"
          >
            &#9662;
          </span>
        </div>
      </label>

      <label className="block sm:col-span-2">
        <FieldLabel n="05">Message</FieldLabel>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="A few lines about what you have in mind."
          className={`${field} resize-none`}
        />
      </label>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-8 sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center gap-2.5 rounded-xl bg-ink px-8 py-4 text-sm font-medium text-white transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_14px_34px_-14px_rgba(79,70,255,0.5)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-ink disabled:hover:shadow-none"
        >
          {submitting ? 'Sending…' : 'Send Inquiry'}
          {!submitting && (
            <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">
              &rarr;
            </span>
          )}
        </button>
        {error && (
          <p role="alert" className="text-sm text-muted">
            {error}
          </p>
        )}
      </div>
    </form>
  )
}
