'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * Build Cycle - a circular lifecycle on the dark section. A thin ring with
 * six labelled nodes; a blue arc draws itself once in view and a small
 * accent dot orbits slowly (CSS, disabled under reduced motion via the
 * global safety net).
 *
 * Layout note: radial labels sit *outside* the ring, so the diagram needs
 * roughly (ring + 2 x label) of width. Below `md` that exceeds the viewport
 * - the labels used to push the page ~85px wider than the screen - so the
 * steps render as a numbered list under the ring instead. From `md` up the
 * ring is inset to 55% of its box, which reserves the side room the labels
 * need even in the half-width column this sits in on the How We Build page.
 */

const steps = [
  'Acquire Talent',
  'Build Product',
  'Acquire Customers',
  'Generate Cash Flow',
  'Reinvest',
  'Repeat',
]

const SIZE = 380
const C = SIZE / 2
const R = 150

/** Ring diameter as a share of the positioning box, at md and up. */
const RING = 0.55

// Node positions around the circle, starting at top (−90°), clockwise.
const nodes = steps.map((label, i) => {
  const a = (-90 + (360 / steps.length) * i) * (Math.PI / 180)
  return { label, x: C + R * Math.cos(a), y: C + R * Math.sin(a), i }
})

/** Node coordinate -> percentage offset within the inset ring. */
const at = (v: number) =>
  `calc(50% + ${(((v - C) / SIZE) * RING * 100).toFixed(3)}%)`

function Ring({ inView, reduce }: { inView: boolean; reduce: boolean | null }) {
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full overflow-visible">
      {/* base ring */}
      <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1.25} />

      {/* drawing accent ring */}
      <motion.circle
        cx={C}
        cy={C}
        r={R}
        fill="none"
        stroke="#4F46FF"
        strokeWidth={2}
        strokeLinecap="round"
        transform={`rotate(-90 ${C} ${C})`}
        initial={{ pathLength: 0 }}
        animate={inView || reduce ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* orbiting dot */}
      {!reduce && (
        <g style={{ transformOrigin: `${C}px ${C}px`, animation: 'hwb-spin 18s linear infinite' }}>
          <circle cx={C} cy={C - R} r={4} fill="#4F46FF" />
        </g>
      )}

      {/* nodes */}
      {nodes.map((n) => (
        <circle
          key={n.label}
          cx={n.x}
          cy={n.y}
          r={4}
          fill="#0B0D12"
          stroke="#4F46FF"
          strokeWidth={1.5}
        />
      ))}
    </svg>
  )
}

export default function BuildCycle() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div ref={ref} className="mx-auto w-full max-w-[32.5rem]">
      {/* Radial diagram - md and up, where the labels have room beside it. */}
      <div className="relative mx-auto hidden aspect-square w-full md:block">
        <div className="absolute left-1/2 top-1/2 w-[55%] -translate-x-1/2 -translate-y-1/2">
          <Ring inView={inView} reduce={reduce} />
        </div>

        {/* labels (HTML, positioned over the svg for crisp type) */}
        {nodes.map((n) => {
          const centerX = Math.abs(n.x - C) < 1
          const isTop = centerX && n.y < C
          const isBottom = centerX && n.y > C
          const onLeft = n.x < C - 1
          const place = isTop
            ? '-translate-x-1/2 -translate-y-[calc(100%+16px)] items-center text-center'
            : isBottom
              ? '-translate-x-1/2 translate-y-[1rem] items-center text-center'
              : onLeft
                ? '-translate-x-[calc(100%+18px)] -translate-y-1/2 items-end text-right'
                : 'translate-x-[1.125rem] -translate-y-1/2 items-start text-left'
          return (
            <motion.div
              key={n.label}
              className="absolute"
              style={{ left: at(n.x), top: at(n.y) }}
              initial={{ opacity: 0 }}
              animate={inView || reduce ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + n.i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Labels wrap rather than run on: a nowrap "Generate Cash
                  Flow" is wider than the space beside the ring. */}
              <div className={`flex max-w-[6.5rem] flex-col lg:max-w-[7.5rem] ${place}`}>
                <span className="font-mono text-[0.625rem] tracking-meta text-accent/70">
                  {String(n.i + 1).padStart(2, '0')}
                </span>
                <span className="mt-1 font-serif text-[0.875rem] leading-[1.25] tracking-tight text-white/90 lg:text-[0.9375rem]">
                  {n.label}
                </span>
              </div>
            </motion.div>
          )
        })}

        {/* center caption */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[0.625rem] uppercase tracking-meta text-white/35">
            The engine
          </span>
        </div>
      </div>

      {/* Below md: the ring stays as the visual, the steps read as a list. */}
      <div className="md:hidden">
        <div className="relative mx-auto w-full max-w-[15rem]">
          <Ring inView={inView} reduce={reduce} />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[0.625rem] uppercase tracking-meta text-white/35">
              The engine
            </span>
          </div>
        </div>

        <ol className="mt-10">
          {nodes.map((n) => (
            <li
              key={n.label}
              className="flex items-baseline gap-4 border-t border-white/10 py-3 last:border-b"
            >
              <span className="font-mono text-[0.625rem] tracking-meta text-accent/70">
                {String(n.i + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-[0.9375rem] tracking-tight text-white/90">
                {n.label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
