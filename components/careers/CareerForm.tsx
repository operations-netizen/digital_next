'use client'

import { withBase } from '@/lib/asset'
import { useState } from 'react'
import SelectField from '@/components/ui/SelectField'
import { areaOptions, companyOptions } from '@/lib/careers'

/**
 * General-interest profile form for the dark closing section, set in one
 * hairline panel: a header strip (title + time-to-complete), then the
 * fields. Labels light up in accent while their field has focus; the resume
 * is a dashed drop area that shows the chosen file. Submit posts to
 * /api/forms; success swaps the panel body for a quiet confirmation.
 */

const field =
  'mt-2 w-full border-b border-white/15 bg-transparent py-2.5 text-[0.9375rem] text-white outline-none transition-colors duration-[500ms] ease-editorial placeholder:text-white/25 hover:border-white/35 focus:border-accent'

function Label({ children }: { children: string }) {
  return (
    <span className="font-mono text-[0.625rem] uppercase tracking-meta text-white/45 transition-colors duration-300 ease-editorial group-focus-within/f:text-accent">
      {children}
    </span>
  )
}

/** Panel chrome shared by the form and its confirmation. */
function Panel({ children, status }: { children: React.ReactNode; status: string }) {
  return (
    <div className="border border-white/10 border-t-accent bg-white/[0.02] [border-top-width:2px]">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 font-mono text-[0.625rem] uppercase tracking-meta sm:px-9">
        <span className="text-white/70">Share your profile</span>
        <span className="text-white/40">{status}</span>
      </div>
      <div className="px-6 py-8 sm:px-9 sm:py-9">{children}</div>
    </div>
  )
}

export default function CareerForm() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [fileName, setFileName] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    const body = new FormData(e.currentTarget)
    // Area posts through a hidden input, and hidden inputs are barred from
    // constraint validation - so `required` has to be enforced here.
    if (!String(body.get('area') ?? '').trim()) {
      setError('Please choose an area of interest.')
      return
    }

    setSubmitting(true)
    try {
      body.set('form', 'careers')
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
        <p className="font-serif text-3xl font-light tracking-tight text-white">
          Thank <em className="italic text-accent">you</em>.
        </p>
        <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-white/55">
          We&rsquo;ve received your profile. If a relevant opportunity opens
          across the group, we&rsquo;ll be in touch.
        </p>
      </Panel>
    )
  }

  return (
    <Panel status="About 2 min">
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
        <Label>Full name</Label>
        <input type="text" name="name" required autoComplete="name" placeholder="Your name" className={field} />
      </label>
      <label className="group/f block">
        <Label>Email</Label>
        <input type="email" name="email" required autoComplete="email" placeholder="you@email.com" className={field} />
      </label>
      <label className="group/f block">
        <Label>LinkedIn URL</Label>
        <input type="url" name="linkedin" inputMode="url" placeholder="linkedin.com/in/…" className={field} />
      </label>
      <label className="group/f block">
        <Label>Portfolio / Website</Label>
        <input type="url" name="portfolio" inputMode="url" placeholder="yoursite.com" className={field} />
      </label>
      <label className="group/f block">
        <Label>Current location</Label>
        <input type="text" name="location" autoComplete="address-level2" placeholder="City, Country" className={field} />
      </label>

      <SelectField
        name="area"
        label="Area of interest"
        options={areaOptions}
        placeholder="Select an area"
        required
      />

      <div className="sm:col-span-2">
        <SelectField
          name="company"
          label="Preferred brand"
          options={companyOptions}
          defaultValue="Open to Any"
        />
      </div>

      <label className="group/f block sm:col-span-2">
        <Label>Short introduction</Label>
        <textarea name="intro" rows={2} placeholder="A few lines about your work and the problems you want to solve." className={`${field} resize-none`} />
      </label>

      <div className="sm:col-span-2">
        <Label>Resume</Label>
        <label className="group/up mt-3 flex cursor-pointer items-center justify-between gap-4 border border-dashed border-white/20 px-5 py-4 transition-colors duration-300 ease-editorial hover:border-accent hover:bg-white/[0.03] focus-within:border-accent">
          <span className="min-w-0">
            <span className="block truncate text-[0.9375rem] text-white/80">
              {fileName || 'Upload your resume'}
            </span>
            <span id="resume-help" className="mt-1 block font-mono text-[0.625rem] uppercase tracking-meta text-white/35">
              PDF, DOC, or DOCX · Max 5MB
            </span>
          </span>
          <span className="shrink-0 font-mono text-[0.625rem] uppercase tracking-meta text-white/60 transition-colors duration-300 ease-editorial group-hover/up:text-accent">
            {fileName ? 'Change' : 'Browse'}{' '}
            <span aria-hidden="true">&uarr;</span>
          </span>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            aria-describedby="resume-help"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
            className="sr-only"
          />
        </label>
      </div>

      <div className="mt-2 flex flex-col gap-5 border-t border-white/10 pt-7 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex min-h-[2.75rem] items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:hover:text-ink"
          >
            {submitting ? 'Submitting…' : 'Submit Profile'}
            {!submitting && (
              <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1.5">&rarr;</span>
            )}
          </button>
          {error && (
            <p role="alert" className="text-sm text-white/70">
              {error}
            </p>
          )}
        </div>
        <p className="max-w-[36ch] text-[0.75rem] leading-relaxed text-white/40">
          We use your details only to consider you for roles across Digital Next
          and its brands. We don&rsquo;t share them with third parties.
        </p>
      </div>
    </form>
    </Panel>
  )
}
