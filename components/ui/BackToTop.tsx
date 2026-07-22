'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/**
 * A quiet, editorial "back to top" control. Appears only after the user has
 * scrolled past 900px, fades + scales in, and smoothly returns to the top.
 * Fixed bottom-right, above all content. Reduced-motion safe.
 */
export default function BackToTop() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    if (reduce) {
      window.scrollTo({ top: 0 })
      return
    }
    const start = window.scrollY
    const startTime = performance.now()
    const duration = 900 // ms - calm, editorial pace
    // easeInOutCubic
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const step = (now: number) => {
      const elapsed = now - startTime
      const t = Math.min(elapsed / duration, 1)
      window.scrollTo(0, start * (1 - ease(t)))
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 8 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(17,17,17,0.06),0_4px_12px_-6px_rgba(17,17,17,0.08)] outline-none transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-[#B8BCC4] hover:shadow-[0_2px_4px_rgba(17,17,17,0.08),0_10px_24px_-8px_rgba(17,17,17,0.14)] focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4 w-4 text-ink/70 transition-colors duration-200 ease-out group-hover:text-accent"
          >
            <path d="M12 19V5" />
            <path d="M6 11l6-6 6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
