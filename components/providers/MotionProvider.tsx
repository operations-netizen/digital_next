'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Honour the OS "reduce motion" setting for every framer animation:
 * transform/layout animations jump to their end state, opacity still fades.
 * Applied at animation time on the client, so it can't cause a hydration
 * mismatch (see lib/motion.ts).
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
