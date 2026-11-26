import type { ReactNode } from 'react'

/**
 * A numbered legal section with a stable id for anchor navigation.
 * Content renders immediately (no entrance animation) so legal text is
 * always available. `scroll-mt` offsets the fixed header on anchor jumps.
 */
export default function PrivacySection({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 border-t border-line pt-10 first:border-t-0 first:pt-0 sm:pt-12"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[0.6875rem] tabular-nums tracking-meta text-accent/50">
          {index}
        </span>
        <h2
          id={`${id}-heading`}
          className="font-serif text-[1.6rem] font-normal leading-tight tracking-tight text-ink sm:text-[1.85rem]"
        >
          {title}
        </h2>
      </div>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  )
}
