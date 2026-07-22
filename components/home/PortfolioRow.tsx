'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { Company } from '@/lib/companies'

export default function PortfolioRow({
  company,
  index,
  expanded,
  onToggle,
}: {
  company: Company
  index: number
  expanded: boolean
  onToggle: (id: string) => void
}) {
  const reduce = useReducedMotion()
  const panelId = `${company.id}-panel`
  const no = String(index + 1).padStart(2, '0')

  return (
    <div className="border-t border-line last:border-b">
      <button
        type="button"
        onClick={() => onToggle(company.id)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-7 text-left sm:gap-8 sm:py-9"
      >
        {/* Index + ticker */}
        <span className="flex items-baseline gap-4">
          <span
            className={[
              'font-mono text-xs tabular-nums transition-colors duration-300',
              expanded ? 'text-accent' : 'text-muted group-hover:text-accent',
            ].join(' ')}
          >
            {no}
          </span>
          <span className="hidden w-12 font-mono text-xs tracking-widest text-muted sm:inline-block">
            {company.ticker}
          </span>
        </span>

        {/* Name + category */}
        <span className="min-w-0">
          <span
            className={[
              'display block truncate text-[1.75rem] leading-none transition-all duration-500 ease-editorial sm:text-[3rem] md:text-[3.5rem]',
              expanded
                ? 'text-accent sm:translate-x-2'
                : 'text-ink group-hover:text-accent sm:group-hover:translate-x-2',
              reduce ? '!translate-x-0' : '',
            ].join(' ')}
          >
            {company.name}
          </span>
          <span className="mt-2 block font-mono text-[11px] uppercase tracking-meta text-muted">
            {company.category}
          </span>
        </span>

        {/* Circular toggle */}
        <span
          aria-hidden="true"
          className={[
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-editorial sm:h-14 sm:w-14',
            expanded
              ? 'rotate-45 border-accent bg-accent text-bg'
              : 'border-line text-ink group-hover:border-accent group-hover:bg-accent group-hover:text-bg',
            reduce ? '!rotate-0' : '',
          ].join(' ')}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      </button>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0.1 : 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-10 pb-11 sm:grid-cols-12 sm:pl-[4.25rem]">
              <div className="sm:col-span-7">
                <p className="max-w-prose text-lg leading-relaxed text-ink">
                  {company.description}
                </p>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/link mt-7 inline-flex items-center gap-2.5 bg-ink px-5 py-3 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent"
                >
                  Visit Company
                  <span className="transition-transform duration-300 ease-editorial group-hover/link:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>

              <dl className="grid grid-cols-3 gap-6 sm:col-span-5 sm:grid-cols-1 sm:gap-5">
                {[
                  ['Founded', company.founded],
                  ['Industry', company.industry],
                  ['Employees', company.employees],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-line pt-3 sm:flex sm:justify-between">
                    <dt className="font-mono text-[11px] uppercase tracking-meta text-muted">
                      {k}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink sm:mt-0">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
