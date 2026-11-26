'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * Portfolio Flywheel - three companies sharing capabilities around a loop.
 * Connectors draw in on view; small accent dots travel each edge to show
 * the compounding exchange. Reduced motion → static, fully-drawn diagram.
 */

const W = 560
const H = 500

const A = { x: 280, y: 96 } // Company A (top)
const B = { x: 492, y: 396 } // Company B (bottom-right)
const Cc = { x: 68, y: 396 } // Company C (bottom-left)

// centroid - where the shared-platform caption sits
const CENTER = { x: (A.x + B.x + Cc.x) / 3, y: (A.y + B.y + Cc.y) / 3 }

const edges = [
  { from: A, to: B, label: 'shares hiring' },
  { from: B, to: Cc, label: 'shares engineering' },
  { from: Cc, to: A, label: 'shares distribution' },
]

const companies = [
  { p: A, name: 'Company A' },
  { p: B, name: 'Company B' },
  { p: Cc, name: 'Company C' },
]

// pull the edge endpoints in so lines stop short of the node discs
function trim(from: { x: number; y: number }, to: { x: number; y: number }, pad = 30) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len
  return {
    x1: from.x + ux * pad,
    y1: from.y + uy * pad,
    x2: to.x - ux * pad,
    y2: to.y - uy * pad,
    mx: (from.x + to.x) / 2,
    my: (from.y + to.y) / 2,
  }
}

export default function PortfolioFlywheel() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const show = inView || reduce

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[35rem]">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full overflow-visible">
        {edges.map((e, i) => {
          const t = trim(e.from, e.to)
          return (
            <g key={i}>
              <line x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#EAEAEA" strokeWidth={1} />
              <motion.line
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                stroke="#4F46FF"
                strokeWidth={1.5}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={show ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* traveling dot */}
              {!reduce && (
                <motion.circle
                  r={4}
                  fill="#4F46FF"
                  initial={{ cx: t.x1, cy: t.y1, opacity: 0 }}
                  animate={
                    show
                      ? { cx: [t.x1, t.x2], cy: [t.y1, t.y2], opacity: [0, 1, 1, 0] }
                      : { opacity: 0 }
                  }
                  transition={{
                    duration: 2.6,
                    delay: 1 + i * 0.4,
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    ease: 'linear',
                  }}
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* edge labels + company nodes as HTML for crisp type */}
      {edges.map((e, i) => {
        const t = trim(e.from, e.to)
        return (
          <motion.span
            key={`l${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-bg px-3 font-mono text-[0.625rem] uppercase tracking-meta text-ink/55"
            style={{ left: `${(t.mx / W) * 100}%`, top: `${(t.my / H) * 100}%` }}
            initial={{ opacity: 0 }}
            animate={show ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.25 }}
          >
            {e.label}
          </motion.span>
        )
      })}

      {companies.map((c, i) => {
        const isTop = c.p.y < H / 2
        return (
          <motion.div
            key={c.name}
            className="absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(c.p.x / W) * 100}%`, top: `${(c.p.y / H) * 100}%` }}
            initial={{ opacity: 0 }}
            animate={show ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* disc - centered exactly on the vertex */}
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-bg font-serif text-lg tracking-tight text-ink">
              {String.fromCharCode(65 + i)}
            </span>
            {/* label - hung off the disc without shifting it */}
            <span
              className={[
                'absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[0.625rem] uppercase tracking-meta text-muted',
                isTop ? 'bottom-full mb-3' : 'top-full mt-3',
              ].join(' ')}
            >
              {c.name}
            </span>
          </motion.div>
        )
      })}

      {/* center outcome - the shared platform, at the centroid */}
      <motion.div
        className="pointer-events-none absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
        style={{ left: `${(CENTER.x / W) * 100}%`, top: `${(CENTER.y / H) * 100}%` }}
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <span className="font-mono text-[0.625rem] uppercase tracking-meta text-muted/70">
          Shared platform
        </span>
        <span className="mt-2.5 max-w-[11ch] font-serif text-xl italic leading-tight tracking-tight text-accent">
          everyone grows faster
        </span>
      </motion.div>
    </div>
  )
}
