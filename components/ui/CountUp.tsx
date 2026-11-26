'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useReducedMotion } from '@/lib/motion'

/**
 * Counts from 0 to `value` when scrolled into view. Renders the final
 * value immediately under reduced motion. Suffix (e.g. "+", "M+")
 * renders in `accent`.
 */
export default function CountUp({
  value,
  suffix = '',
  duration = 1.8,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    // `reduce` is false on the hydrating render (lib/motion.ts) and can flip
    // true after mount, so the initial state alone isn't enough.
    if (reduce) {
      setDisplay(value)
      return
    }
    if (!inView) return
    let raf = 0
    let start: number | undefined
    const ms = duration * 1000

    const tick = (t: number) => {
      if (start === undefined) start = t
      const p = Math.min((t - start) / ms, 1)
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p) // easeOutExpo
      setDisplay(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString('en-US')}
      {suffix && <span className="text-accent">{suffix}</span>}
    </span>
  )
}
