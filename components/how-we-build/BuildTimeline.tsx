'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/**
 * How Every Company Is Built - a horizontal editorial timeline.
 * A thin baseline runs through seven stages; a blue accent line draws
 * itself across as the section scrolls through the viewport. On mobile
 * it becomes a vertical spine. Reduced-motion renders it fully drawn.
 */

type Stage = {
  no: string
  title: string
  body: string
  icon: ReactNode
}

const stages: Stage[] = [
  {
    no: '01',
    title: 'Idea',
    body: 'A sharp thesis about where the internet is heading, held by an operator who wants to build it.',
    icon: (
      <>
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M6 6l1.4 1.4M16.6 16.6L18 18M18 6l-1.4 1.4M7.4 16.6L6 18" />
      </>
    ),
  },
  {
    no: '02',
    title: 'Validation',
    body: 'The first customers prove the thesis. Demand is real, narrow, and worth serving well.',
    icon: (
      <>
        <path d="M4 12.5l5 5L20 6.5" />
      </>
    ),
  },
  {
    no: '03',
    title: 'First Revenue',
    body: 'The company earns before it raises. Cash flow, not narrative, funds the next step.',
    icon: (
      <>
        <path d="M12 21V3" />
        <path d="M6 9l6-6 6 6" />
      </>
    ),
  },
  {
    no: '04',
    title: 'Product-Market Fit',
    body: 'Retention compounds. The product pulls the market rather than the market being pushed.',
    icon: (
      <>
        <circle cx="9" cy="12" r="6" />
        <circle cx="15" cy="12" r="6" />
      </>
    ),
  },
  {
    no: '05',
    title: 'Scale',
    body: 'Shared capital, talent, and distribution accelerate what already works.',
    icon: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-8M22 20V7" />
      </>
    ),
  },
  {
    no: '06',
    title: 'Platform',
    body: 'The company graduates onto the group platform - infrastructure it would take years to build alone.',
    icon: (
      <>
        <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" />
        <path d="M4 12l8 4.5 8-4.5M4 16.5L12 21l8-4.5" />
      </>
    ),
  },
  {
    no: '07',
    title: 'Independent Company',
    body: 'A durable business with its own identity, team, and roadmap - built to compound for decades.',
    icon: (
      <>
        <path d="M6 21V4M6 4h11l-2.5 3.5L17 11H6" />
      </>
    ),
  },
]

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-ink/70 transition-colors duration-[600ms] ease-editorial group-hover:text-accent"
    >
      {children}
    </svg>
  )
}

export default function BuildTimeline() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 55%'],
  })
  const raw = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })
  const scaleX = useTransform(raw, [0, 1], [0, 1])
  const scaleY = useTransform(raw, [0, 1], [0, 1])
  const headLeft = useTransform(raw, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref}>
      {/* Desktop - horizontal spine */}
      <div className="relative hidden lg:block">
        {/* baseline */}
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[58px] h-[2px] -translate-y-1/2 bg-line"
        />
        {/* drawing accent */}
        <motion.span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[58px] h-[2px] origin-left -translate-y-1/2 bg-accent"
          style={reduce ? { scaleX: 1 } : { scaleX }}
        />
        {/* moving indicator */}
        {!reduce && (
          <motion.span
            aria-hidden="true"
            className="absolute top-[58px] z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-[5px] ring-accent/15"
            style={{ left: headLeft }}
          />
        )}

        <ol className="relative grid grid-cols-7 gap-x-2">
          {stages.map((st) => (
            <li key={st.no} className="group px-3 first:pl-0 last:pr-0">
              <div className="flex flex-col items-start">
                <Glyph>{st.icon}</Glyph>
                {/* node */}
                <span className="relative mt-[22px] flex h-[13px] items-center">
                  <span className="h-[10px] w-[10px] rounded-full border border-ink bg-bg transition-colors duration-[600ms] ease-editorial group-hover:border-accent group-hover:bg-accent" />
                </span>
                <span className="mt-8 font-mono text-[10px] uppercase tracking-meta text-accent/70">
                  {st.no}
                </span>
                <h3 className="mt-3 font-serif text-[1.4rem] leading-[1.15] tracking-tight text-ink">
                  {st.title}
                </h3>
                <p className="mt-4 max-w-[24ch] text-[15px] leading-[1.65] text-muted">
                  {st.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile / tablet - vertical spine */}
      <div className="relative lg:hidden">
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[6px] top-2 w-[2px] bg-line"
        />
        <motion.span
          aria-hidden="true"
          className="absolute left-[6px] top-2 w-[2px] origin-top bg-accent"
          style={reduce ? { scaleY: 1, bottom: 0 } : { scaleY, bottom: 0 }}
        />
        <ol className="space-y-12">
          {stages.map((st) => (
            <li key={st.no} className="group relative pl-10">
              <span className="absolute left-[2px] top-1.5 h-[9px] w-[9px] rounded-full border border-ink bg-bg group-hover:border-accent group-hover:bg-accent" />
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-meta text-accent/70">
                  {st.no}
                </span>
                <Glyph>{st.icon}</Glyph>
              </div>
              <h3 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-ink">
                {st.title}
              </h3>
              <p className="mt-2 max-w-[46ch] text-[15px] leading-relaxed text-muted">
                {st.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
