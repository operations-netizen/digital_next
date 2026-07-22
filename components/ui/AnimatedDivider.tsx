'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * A hairline rule that draws itself across the shell as it scrolls into
 * view - a quiet motion beat between sections that breaks the
 * heading → paragraph → grid rhythm. A single accent tick travels with the
 * leading edge. Static (fully drawn) under reduced motion.
 *
 * Editorial, not decorative: use it at major section seams, sparingly.
 */
export default function AnimatedDivider({
  className = '',
}: {
  className?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const draw = inView || reduce

  return (
    <div ref={ref} className={`shell ${className}`} aria-hidden="true">
      <div className="relative h-px w-full">
        {/* base rule, faint */}
        <span className="absolute inset-0 bg-line/60" />
        {/* drawing line */}
        <motion.span
          className="absolute inset-y-0 left-0 origin-left bg-ink/25"
          style={{ width: '100%' }}
          initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
          animate={{ scaleX: draw ? 1 : 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* accent tick riding the leading edge */}
        {!reduce && (
          <motion.span
            className="absolute top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent"
            initial={{ left: '0%', opacity: 0 }}
            animate={
              draw
                ? { left: ['0%', '100%'], opacity: [0, 1, 1, 0] }
                : { opacity: 0 }
            }
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </div>
    </div>
  )
}
