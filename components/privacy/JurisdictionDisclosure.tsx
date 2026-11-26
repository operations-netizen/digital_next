import type { ReactNode } from 'react'

/**
 * An expandable block for optional, jurisdiction-specific disclosures
 * (e.g. California, India). Rendered only when its config flag is enabled
 * after counsel confirms applicability. Uses a native <details> element so
 * it is keyboard- and screen-reader-accessible. Not used to hide core
 * terms - only supplemental regional notices.
 */
export default function JurisdictionDisclosure({
  id,
  index,
  title,
  children,
  open = false,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
  open?: boolean
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28 border-t border-line pt-10 sm:pt-12">
      <details className="group" open={open}>
        <summary className="flex cursor-pointer list-none items-baseline gap-4 outline-none focus-visible:[&_h2]:text-accent">
          <span className="font-mono text-[0.6875rem] tabular-nums tracking-meta text-accent/50">
            {index}
          </span>
          <h2
            id={`${id}-heading`}
            className="flex-1 font-serif text-[1.6rem] font-normal leading-tight tracking-tight text-ink sm:text-[1.85rem]"
          >
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="self-center text-muted transition-transform duration-300 ease-editorial group-open:rotate-180"
          >
            &#9662;
          </span>
        </summary>
        <div className="mt-6 space-y-5">{children}</div>
      </details>
    </section>
  )
}
