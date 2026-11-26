'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { useReducedMotion } from '@/lib/motion'

type RevealProps = {
  children: React.ReactNode
  as?: keyof typeof motion
  delay?: number
  y?: number
  className?: string
  amount?: number
} & Omit<HTMLMotionProps<'div'>, 'ref'>

/**
 * Scroll-triggered fade + rise. Renders static when the user prefers
 * reduced motion. The workhorse entrance for editorial sections.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  className = '',
  amount = 0.35,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduce) {
    const Tag = as as keyof JSX.IntrinsicElements
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
