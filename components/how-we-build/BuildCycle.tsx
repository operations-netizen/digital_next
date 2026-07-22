'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * Build Cycle - a circular lifecycle on the dark section. A thin ring with
 * six labelled nodes; a blue arc draws itself once in view and a small
 * accent dot orbits slowly (CSS, disabled under reduced motion via the
 * global safety net).
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

// Node positions around the circle, starting at top (−90°), clockwise.
const nodes = steps.map((label, i) => {
  const a = (-90 + (360 / steps.length) * i) * (Math.PI / 180)
  return { label, x: C + R * Math.cos(a), y: C + R * Math.sin(a), i }
})

export default function BuildCycle() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[440px]">
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
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r={4} fill="#0B0D12" stroke="#4F46FF" strokeWidth={1.5} />
          </g>
        ))}
      </svg>

      {/* labels (HTML, positioned over the svg for crisp type) */}
      {nodes.map((n) => {
        const pct = (v: number) => `${(v / SIZE) * 100}%`
        const centerX = Math.abs(n.x - C) < 1
        const isTop = centerX && n.y < C
        const isBottom = centerX && n.y > C
        const onLeft = n.x < C - 1
        const place = isTop
          ? '-translate-x-1/2 -translate-y-[calc(100%+18px)] items-center text-center'
          : isBottom
            ? '-translate-x-1/2 translate-y-[18px] items-center text-center'
            : onLeft
              ? '-translate-x-[calc(100%+22px)] -translate-y-1/2 items-end text-right'
              : 'translate-x-[22px] -translate-y-1/2 items-start text-left'
        return (
          <motion.div
            key={n.label}
            className="absolute"
            style={{ left: pct(n.x), top: pct(n.y) }}
            initial={{ opacity: 0 }}
            animate={inView || reduce ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + n.i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`flex flex-col ${place}`}>
              <span className="font-mono text-[10px] tracking-meta text-accent/70">
                {String(n.i + 1).padStart(2, '0')}
              </span>
              <span className="mt-1 whitespace-nowrap font-serif text-[15px] tracking-tight text-white/90">
                {n.label}
              </span>
            </div>
          </motion.div>
        )
      })}

      {/* center caption */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-[10px] uppercase tracking-meta text-white/35">
          The engine
        </span>
      </div>
    </div>
  )
}
