'use client'

import { useState } from 'react'

/**
 * The privacy email as a mailto link with a quiet "copy" affordance.
 * If the value is still a [PLACEHOLDER], copy is disabled and the value is
 * shown flagged for review rather than linked.
 */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const isPlaceholder = /^\[.*\]$/.test(email.trim())

  if (isPlaceholder) {
    return (
      <mark
        title="Placeholder - requires legal review"
        className="rounded-sm bg-accent/[0.08] px-1.5 py-0.5 font-mono text-[0.9em] font-medium text-accent"
      >
        {email}
      </mark>
    )
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable - the mailto link still works */
    }
  }

  return (
    <span className="inline-flex items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-300 ease-editorial hover:decoration-accent"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="font-mono text-[0.625rem] uppercase tracking-meta text-muted outline-none transition-colors duration-300 ease-editorial hover:text-ink focus-visible:text-accent"
        aria-live="polite"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </span>
  )
}
