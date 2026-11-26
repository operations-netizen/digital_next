'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'

/**
 * Hydration-safe `useReducedMotion`.
 *
 * Framer's hook reads the media query synchronously, so for a visitor with
 * "reduce motion" on it returns `true` on the very first client render while
 * the server rendered with `false`. Components branch on it during render
 * (`initial={reduce ? false : {...}}`, `{!reduce && <dot/>}`), so the markup
 * differed and React discarded the server HTML on every page.
 *
 * This returns `false` for the first (hydrating) render - matching the server
 * - and the real preference right after mount. The page-load animations that
 * start before then are made motion-free for those visitors by
 * `<MotionConfig reducedMotion="user">` in the root layout.
 */
export function useReducedMotion(): boolean {
  const prefers = useFramerReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? Boolean(prefers) : false
}
