'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { hiringProcess } from '@/lib/careers'

/**
 * Hiring-process timeline - four stages on a thin connector that draws in
 * blue as the section scrolls through. Horizontal on desktop, a vertical
 * spine on mobile. Reduced motion renders it fully drawn.
 */
export default function ProcessTimeline() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  })
  const raw = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })
  const scaleX = useTransform(raw, [0, 1], [0, 1])
  const scaleY = useTransform(raw, [0, 1], [0, 1])

  return (
    <div ref={ref}>
      {/* Desktop - horizontal */}
      <div className="relative hidden lg:block">
        <span aria-hidden="true" className="absolute left-0 right-0 top-[6px] h-px bg-line" />
        <motion.span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[6px] h-px origin-left bg-accent"
          style={reduce ? { scaleX: 1 } : { scaleX }}
        />
        <ol className="relative grid grid-cols-4 gap-x-14">
          {hiringProcess.map((s) => (
            <li key={s.no} className="group/stage pr-6">
              <span className="relative block h-3">
                <span className="absolute left-0 top-0 h-[13px] w-[13px] -translate-y-[3px] rounded-full border border-ink bg-bg transition-colors duration-[600ms] ease-editorial group-hover/stage:border-accent group-hover/stage:bg-accent" />
              </span>
              <span className="mt-8 block font-mono text-[11px] tracking-meta text-accent/70">
                {s.no}
              </span>
              <h3 className="mt-4 font-serif text-[1.65rem] font-normal leading-tight tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-4 max-w-[28ch] text-[15px] leading-[1.7] text-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile / tablet - vertical spine */}
      <div className="relative lg:hidden">
        <span aria-hidden="true" className="absolute bottom-0 left-[6px] top-1 w-px bg-line" />
        <motion.span
          aria-hidden="true"
          className="absolute bottom-0 left-[6px] top-1 w-px origin-top bg-accent"
          style={reduce ? { scaleY: 1 } : { scaleY }}
        />
        <ol className="space-y-11">
          {hiringProcess.map((s) => (
            <li key={s.no} className="relative pl-10">
              <span className="absolute left-[1px] top-1 h-[13px] w-[13px] rounded-full border border-ink bg-bg" />
              <span className="font-mono text-[11px] tracking-meta text-accent/70">{s.no}</span>
              <h3 className="mt-2 font-serif text-2xl font-normal tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[46ch] text-[15px] leading-[1.65] text-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
