'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * Line-mask reveal: each line sits in an overflow-hidden clip and rises
 * into view with a stagger. Falls back to static text under reduced
 * motion.
 *
 * Uses the `useInView` hook (not the `whileInView` prop) so the trigger
 * fires reliably, with a low visibility threshold.
 *
 * `trigger`:
 *  - 'inView' (default) - reveal when scrolled into view.
 *  - 'mount' - reveal immediately on mount. Use for above-the-fold
 *    content (e.g. the hero headline).
 */
export default function TextReveal({
  lines,
  className = '',
  delay = 0,
  as: Tag = 'h2',
  trigger = 'inView',
}: {
  lines: React.ReactNode[]
  className?: string
  delay?: number
  as?: keyof JSX.IntrinsicElements
  trigger?: 'inView' | 'mount'
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const show = trigger === 'mount' ? true : inView
  const El = Tag as React.ElementType

  if (reduce) {
    return (
      <El className={className}>
        {lines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </El>
    )
  }

  return (
    <El ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.22em] -mb-[0.16em]">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            animate={show ? { y: 0 } : { y: '110%' }}
            transition={{
              duration: 0.95,
              delay: delay + i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </El>
  )
}
