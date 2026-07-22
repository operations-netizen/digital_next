'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * The hero's operating arc - an editorial index of the operating system.
 * A hairline rail with a blue progress line that draws itself downward on
 * mount; each node fills as the line passes. Reduced motion renders it
 * fully drawn and still.
 */

const steps = ['Idea', 'Operator', 'Build', 'Scale', 'Compound', 'Forever']
const EASE = [0.22, 1, 0.36, 1] as const
const DRAW = 1.9

export default function HeroArc() {
  const reduce = useReducedMotion()

  return (
    <div>
      <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-muted/50">
        The operating arc
      </span>

      <div className="relative mt-8 pl-8">
        {/* base rail */}
        <span
          aria-hidden="true"
          className="absolute left-[3px] top-1 h-[calc(100%-0.5rem)] w-px bg-line"
        />
        {/* drawing blue progress */}
        <motion.span
          aria-hidden="true"
          className="absolute left-[3px] top-1 h-[calc(100%-0.5rem)] w-px origin-top bg-accent"
          initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: reduce ? 0 : DRAW, ease: EASE }}
        />

        <ol>
          {steps.map((step, i) => {
            const t = reduce ? 0 : (i / (steps.length - 1)) * DRAW * 0.92
            return (
              <li key={step} className="relative flex items-center gap-4 py-3.5">
                {/* node */}
                <motion.span
                  aria-hidden="true"
                  className="absolute left-[-31px] h-[9px] w-[9px] rounded-full border border-accent bg-bg"
                  initial={reduce ? { backgroundColor: '#4F46FF' } : { backgroundColor: 'rgba(255,255,255,1)' }}
                  animate={{ backgroundColor: '#4F46FF' }}
                  transition={{ duration: 0.4, delay: t, ease: EASE }}
                />
                <motion.span
                  className="font-mono text-[10px] tabular-nums tracking-meta text-accent/60"
                  initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: t, ease: EASE }}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>
                <motion.span
                  className="font-serif text-2xl tracking-tight text-ink"
                  initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: t, ease: EASE }}
                >
                  {step}
                </motion.span>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
