'use client'

import { withBase } from '@/lib/asset'
import { useEffect, useState } from 'react'
import { CONTACT_REASON_EVENT } from '@/components/contact/ContactRoutes'

/**
 * Inquiry form, set in one hairline panel (the same panel language as the
 * careers form, on white): header strip, numbered fields whose labels light
 * up in accent while focused, the reason as a row of selectable chips
 * (radios - every option visible, no dropdown), and the submit rail.
 * Submit posts to /api/forms; success swaps the body for a confirmation.
 */

const reasons = ['Acquisition', 'Partnership', 'Careers', 'Press', 'General']

const field =
  'mt-2 w-full border-b border-line bg-transparent py-2.5 text-[0.9375rem] text-ink outline-none transition-colors duration-300 ease-editorial placeholder:text-muted/45 hover:border-ink/25 focus:border-accent'

function FieldLabel({ n, children }: { n: string; children: string }) {
  return (
    <span className="font-mono text-[0.625rem] uppercase tracking-meta text-muted transition-colors duration-300 ease-editorial group-focus-within/f:text-accent">
      <span className="mr-2 text-accent/70">{n}</span>
      {children}
    </span>
  )
}

function Panel({ children, status }: { children: React.ReactNode; status: string }) {
  return (
    <div className="border border-line border-t-2 border-t-accent bg-white">
      <div className="flex items-center justify-between border-b border-line bg-[#F6F6FA] px-6 py-4 font-mono text-[0.625rem] uppercase tracking-meta sm:px-9">
        <span className="text-ink/70">Send an inquiry</span>
        <span className="text-muted">{status}</span>
      </div>
      <div className="px-6 py-8 sm:px-9 sm:py-9">{children}</div>
    </div>
  )
}

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [reason, setReason] = useState('')

  // A route card above can pre-select the reason.
  useEffect(() => {
    function onReason(e: Event) {
      const next = (e as CustomEvent<string>).detail
      if (reasons.includes(next)) setReason(next)
    }
    window.addEventListener(CONTACT_REASON_EVENT, onReason)
    return () => window.removeEventListener(CONTACT_REASON_EVENT, onReason)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const body = new FormData(e.currentTarget)
      body.set('form', 'contact')
      const res = await fetch(withBase('/api/forms'), { method: 'POST', body })
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
      <Panel status="Received">
        <p className="font-serif text-3xl font-light tracking-tight text-ink">
          Thank <em className="italic text-accent">you</em>.
        </p>
        <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-muted">
          We&rsquo;ve received your inquiry and will be in touch within two
          business days.
        </p>
      </Panel>
    )
  }

  return (
    <Panel status="5 fields">
    <form onSubmit={handleSubmit} className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {/* Honeypot - hidden from users, catches bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <label className="group/f block">
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

      <label className="group/f block">
        <FieldLabel n="02">Email</FieldLabel>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={field}
        />
      </label>

      <label className="group/f block sm:col-span-2">
        <FieldLabel n="03">Company</FieldLabel>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          placeholder="Company or fund"
          className={field}
        />
      </label>

      <fieldset className="group/f sm:col-span-2">
        <legend>
          <FieldLabel n="04">Reason</FieldLabel>
        </legend>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {reasons.map((r, i) => (
            <label key={r} className="cursor-pointer">
              <input
                type="radio"
                name="reason"
                value={r}
                checked={reason === r}
                onChange={() => setReason(r)}
                required={i === 0}
                className="peer sr-only"
              />
              <span className="inline-flex min-h-[2.25rem] items-center rounded-full border border-line px-3.5 text-[0.8125rem] text-muted transition-colors duration-300 ease-editorial hover:border-ink/30 hover:text-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-accent/40">
                {r}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="group/f block sm:col-span-2">
        <FieldLabel n="05">Message</FieldLabel>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="A few lines about what you have in mind."
          className={`${field} resize-none`}
        />
      </label>

      <div className="mt-3 flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center gap-2.5 rounded-xl bg-ink px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_14px_34px_-14px_rgba(79,70,255,0.5)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-ink disabled:hover:shadow-none"
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
        <p className="max-w-[34ch] text-[0.75rem] leading-relaxed text-muted/80">
          Every message is read by the team. We reply within two business days.
        </p>
      </div>
    </form>
    </Panel>
  )
}
