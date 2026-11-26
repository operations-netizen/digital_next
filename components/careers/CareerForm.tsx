'use client'

import { withBase } from '@/lib/asset'
import { useState } from 'react'
import SelectField from '@/components/ui/SelectField'
import { areaOptions, companyOptions } from '@/lib/careers'

/**
 * General-interest profile form for the dark closing section. Editorial
 * underlined inputs on dark, styled selects, resume upload with guidance,
 * and a privacy note. Submit is stubbed to a quiet confirmation.
 */

const field =
  'mt-2 w-full border-b border-white/20 bg-transparent py-2.5 text-white outline-none transition-colors duration-[500ms] ease-editorial placeholder:text-white/30 hover:border-white/35 focus:border-accent'

function Label({ children }: { children: string }) {
  return (
    <span className="font-mono text-[0.625rem] uppercase tracking-meta text-white/45">
      {children}
    </span>
  )
}

export default function CareerForm() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

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
      <div className="border-t border-white/15 py-14">
        <p className="font-serif text-3xl font-light tracking-tight text-white">
          Thank you.
        </p>
        <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-white/55">
          We&rsquo;ve received your profile. If a relevant opportunity opens
          across the group, we&rsquo;ll be in touch.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
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
        <Label>Full name</Label>
        <input type="text" name="name" required autoComplete="name" placeholder="Your name" className={field} />
      </label>
      <label className="block">
        <Label>Email</Label>
        <input type="email" name="email" required autoComplete="email" placeholder="you@email.com" className={field} />
      </label>
      <label className="block">
        <Label>LinkedIn URL</Label>
        <input type="url" name="linkedin" inputMode="url" placeholder="linkedin.com/in/…" className={field} />
      </label>
      <label className="block">
        <Label>Portfolio / Website</Label>
        <input type="url" name="portfolio" inputMode="url" placeholder="yoursite.com" className={field} />
      </label>
      <label className="block">
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

      <label className="block sm:col-span-2">
        <Label>Short introduction</Label>
        <textarea name="intro" rows={3} placeholder="A few lines about your work and the problems you want to solve." className={`${field} resize-none`} />
      </label>

      <div className="block sm:col-span-2">
        <Label>Resume</Label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          aria-describedby="resume-help"
          className="mt-3 block w-full text-sm text-white/70 file:mr-4 file:cursor-pointer file:rounded-none file:border file:border-white/25 file:bg-transparent file:px-4 file:py-2 file:font-mono file:text-[0.6875rem] file:uppercase file:tracking-meta file:text-white file:transition-colors file:duration-300 hover:file:border-accent hover:file:text-accent"
        />
        <p id="resume-help" className="mt-2 font-mono text-[0.625rem] uppercase tracking-meta text-white/35">
          PDF, DOC, or DOCX · Max 5MB
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-6 border-t border-white/15 pt-8 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex min-h-[2.75rem] items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:hover:text-ink"
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
        <p className="max-w-[42ch] text-[0.8125rem] leading-relaxed text-white/40">
          We use your details only to consider you for roles across Digital Next
          and its brands. We don&rsquo;t share them with third parties.
        </p>
      </div>
    </form>
  )
}
