import type { ReactNode } from 'react'

/**
 * Presentational primitives for legal copy - readable body type (17-19px),
 * generous line-height, left-aligned, no justified text. Kept deliberately
 * plain so counsel can edit content without touching styling.
 */

/**
 * Ph - renders a value, visibly flagging any [BRACKETED PLACEHOLDER] for
 * legal review. Once a real value replaces the placeholder, it renders as
 * ordinary text automatically.
 */
export function Ph({ children }: { children: string }) {
  const isPlaceholder = /^\[.*\]$/.test(children.trim())
  if (!isPlaceholder) return <>{children}</>
  return (
    <mark
      title="Placeholder - requires legal review"
      className="rounded-sm bg-accent/[0.08] px-1.5 py-0.5 font-mono text-[0.82em] font-medium text-accent"
    >
      {children}
    </mark>
  )
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-[1.0625rem] leading-[1.8] text-ink/80 sm:text-[1.125rem]">
      {children}
    </p>
  )
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
      {children}
    </p>
  )
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="space-y-2.5">{children}</ul>
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-6 text-[1.0625rem] leading-[1.75] text-ink/80 sm:text-[1.125rem]">
      <span
        aria-hidden="true"
        className="absolute left-0 top-[0.85em] h-px w-3 bg-line"
      />
      {children}
    </li>
  )
}

/** A definition-style address / detail block. */
export function DetailBlock({ children }: { children: ReactNode }) {
  return (
    <div className="border-l border-line pl-6 text-[1.0625rem] leading-[1.9] text-ink/80 sm:text-[1.125rem]">
      {children}
    </div>
  )
}

/** Inline note that a clause is conditional / awaiting verification. */
export function ReviewNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-accent/40 bg-accent/[0.03] py-2 pl-4 font-mono text-[0.6875rem] uppercase leading-[1.7] tracking-meta text-accent/80">
      {children}
    </p>
  )
}
