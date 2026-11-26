'use client'

import { useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useReducedMotion } from '@/lib/motion'

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
      stroke="currentColor"
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

  // Nodes fill with the accent once the drawing line reaches them. The line
  // is scaled by `raw`, so a node is reached when raw >= its centre's
  // fraction along the spine (x on desktop, y on the vertical mobile spine).
  const hRef = useRef<HTMLDivElement>(null)
  const vRef = useRef<HTMLDivElement>(null)
  const hNodes = useRef<(HTMLSpanElement | null)[]>([])
  const vNodes = useRef<(HTMLSpanElement | null)[]>([])
  const [reached, setReached] = useState(0)
  useMotionValueEvent(raw, 'change', (v) => {
    const horizontal = !!hRef.current?.offsetParent
    const box = (horizontal ? hRef : vRef).current?.getBoundingClientRect()
    if (!box) return
    const nodes = horizontal ? hNodes.current : vNodes.current
    let n = 0
    for (const el of nodes) {
      if (!el) continue
      const r = el.getBoundingClientRect()
      const frac = horizontal
        ? (r.left + r.width / 2 - box.left) / box.width
        : (r.top + r.height / 2 - box.top - 8) / (box.height - 8)
      if (v >= frac - 0.002) n++
    }
    setReached(n) // React skips the render when n is unchanged
  })
  const lit = (i: number) => reduce || i < reached
  const nodeTone = (i: number) =>
    lit(i) ? 'border-accent bg-accent' : 'border-ink bg-bg'

  return (
    <div ref={ref}>
      {/* Desktop - horizontal spine */}
      <div ref={hRef} className="relative hidden lg:block">
        {/* baseline */}
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[3.625rem] h-[0.125rem] -translate-y-1/2 bg-line"
        />
        {/* drawing accent */}
        <motion.span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[3.625rem] h-[0.125rem] origin-left -translate-y-1/2 bg-accent"
          style={reduce ? { scaleX: 1 } : { scaleX }}
        />

        <ol className="relative grid grid-cols-7 gap-x-2">
          {stages.map((st, i) => (
            <li
              key={st.no}
              className="group px-3 first:pl-0 last:pr-0"
            >
              {/* h-full + flex-1 below: every step's panel runs to the
                  height of the tallest step (grid rows stretch the <li>). */}
              <div className="flex h-full flex-col items-start">
                <Glyph>{st.icon}</Glyph>
                {/* node - its centre sits exactly on the spine
                    (1.5rem glyph + 1.71875rem gap + half of 0.8125rem = 3.625rem) */}
                <span className="relative mt-[1.71875rem] flex h-[0.8125rem] items-center">
                  <span
                    ref={(el) => {
                      hNodes.current[i] = el
                    }}
                    className={`h-[0.625rem] w-[0.625rem] rounded-full border transition-colors duration-[400ms] ease-editorial ${nodeTone(i)}`}
                  />
                </span>
                {/* Text block. Hover is a soft lift: a flat tinted panel
                    (no shadow, no radius) rises 0.25rem, the index + title
                    turn accent and the body darkens. Bleeds 0.75rem each side
                    so the text keeps its alignment. */}
                <div className="relative -mx-3 mt-4 flex-1 self-stretch px-3 pb-6 pt-4 transition-transform duration-[500ms] ease-editorial group-hover:-translate-y-1">
                  {/* Soft accent glow spilling past the panel; fades to fully
                      transparent inside its own box (closest-side), so there
                      is never a hard edge. Sits under the tint, so it reads
                      as a halo around the lifted panel. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-x-8 -inset-y-10 bg-[radial-gradient(closest-side,rgba(79,70,255,0.16),rgba(79,70,255,0.05)_60%,transparent)] opacity-0 transition-opacity duration-[600ms] ease-editorial group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#F6F6FA] opacity-0 transition-opacity duration-[600ms] ease-editorial group-hover:opacity-100"
                  />
                  <span className="relative block font-mono text-[0.625rem] uppercase tracking-meta text-accent/70 transition-colors duration-[600ms] ease-editorial group-hover:text-accent">
                    {st.no}
                  </span>
                  <h3 className="relative mt-3 font-serif text-[1.4rem] leading-[1.15] tracking-tight text-ink transition-colors duration-[600ms] ease-editorial group-hover:text-accent">
                    {st.title}
                  </h3>
                  <p className="relative mt-4 max-w-[24ch] text-[0.9375rem] leading-[1.65] text-muted transition-colors duration-[600ms] ease-editorial group-hover:text-ink/80">
                    {st.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile / tablet - vertical spine */}
      <div ref={vRef} className="relative lg:hidden">
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[0.375rem] top-2 w-[0.125rem] bg-line"
        />
        <motion.span
          aria-hidden="true"
          className="absolute left-[0.375rem] top-2 w-[0.125rem] origin-top bg-accent"
          style={reduce ? { scaleY: 1, bottom: 0 } : { scaleY, bottom: 0 }}
        />
        <ol className="space-y-12">
          {stages.map((st, i) => (
            <li key={st.no} className="group relative pl-10">
              <span
                ref={(el) => {
                  vNodes.current[i] = el
                }}
                className={`absolute left-[0.125rem] top-1.5 h-[0.5625rem] w-[0.5625rem] rounded-full border transition-colors duration-[400ms] ease-editorial ${nodeTone(i)}`}
              />
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.625rem] uppercase tracking-meta text-accent/70">
                  {st.no}
                </span>
                <Glyph>{st.icon}</Glyph>
              </div>
              <h3 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-ink">
                {st.title}
              </h3>
              <p className="mt-2 max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted">
                {st.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
