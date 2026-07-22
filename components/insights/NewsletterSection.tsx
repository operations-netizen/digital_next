'use client'

import { useState } from 'react'

/**
 * A compact, minimal newsletter - a single line, not a full section. Light,
 * quiet, editorial. Submit resolves to an inline confirmation (stubbed).
 */
export default function NewsletterSection() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const body = new FormData(e.currentTarget)
      body.set('form', 'newsletter')
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

  return (
    <div className="border-t border-line py-14 sm:py-16">
      <div className="grid gap-x-16 gap-y-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4">
          <span className="block font-mono text-[10px] uppercase tracking-meta text-muted/60">
            Digital Next Notes
          </span>
          <p className="mt-2 font-serif text-2xl tracking-tight text-ink">
            Occasional thinking.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-6">
          {sent ? (
            <p className="font-serif text-lg tracking-tight text-ink">
              Thank you - you&rsquo;re on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-4 border-b border-line py-2 transition-colors duration-[500ms] ease-editorial focus-within:border-accent"
            >
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Email address"
                className="min-h-[32px] w-full bg-transparent text-ink outline-none placeholder:text-muted/40"
              />
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-ink transition-colors duration-[500ms] ease-editorial hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Sending…' : 'Subscribe'}
                {!submitting && (
                  <span className="transition-transform duration-[500ms] ease-editorial group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                )}
              </button>
            </form>
          )}
          {error && (
            <p role="alert" className="mt-3 text-[13px] text-muted">
              {error}
            </p>
          )}
          <p className="mt-3 text-[13px] leading-relaxed text-muted/70">
            No weekly noise. Only when we have something worth sharing.
          </p>
        </div>
      </div>
    </div>
  )
}
