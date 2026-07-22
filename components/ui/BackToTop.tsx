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
          className="group fixed bottom-5 right-5 z-[60] flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(17,17,17,0.08),0_6px_16px_-6px_rgba(17,17,17,0.18)] outline-none transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_2px_6px_rgba(17,17,17,0.12),0_12px_28px_-8px_rgba(17,17,17,0.26)] focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fab.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
