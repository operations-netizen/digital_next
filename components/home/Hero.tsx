'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'
import TextReveal from '@/components/ui/TextReveal'
import EcosystemOrbit from './EcosystemOrbit'

export default function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: reduce ? 0 : delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <section className="relative overflow-hidden">
      {/* Oversized background typography (~2-3% opacity) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col justify-center overflow-hidden"
      >
        <span className="select-none whitespace-nowrap font-serif text-[20vw] font-light leading-[0.82] tracking-tightest text-ink/[0.012]">
          Digital
        </span>
        <span className="-mt-[2vw] select-none whitespace-nowrap pl-[8vw] font-serif text-[20vw] font-light italic leading-[0.82] tracking-tightest text-ink/[0.012]">
          Next
        </span>
      </div>

      {/* Full-bleed (edge-padded) so the copy hugs the left on wide screens
          instead of sitting in the centered shell gutter; below ~1440px this
          is identical to the shell. */}
      {/* The left track is capped to the headline's own measure rather than
          taking a 1.1fr share: a fractional track left a band of dead space
          between the copy's ragged edge and the orbit. */}
      <div className="relative grid min-h-[72svh] w-full items-center gap-8 px-6 pb-8 pt-24 sm:px-10 lg:grid-cols-[minmax(0,38rem)_1fr] lg:gap-10 lg:px-16 lg:pt-24">
        <div className="max-w-2xl">
          <motion.div {...fade(0.05)}>
            <Eyebrow>A technology holding company</Eyebrow>
          </motion.div>

          <TextReveal
            as="h1"
            trigger="mount"
            className="display mt-8 text-[clamp(2.5rem,5vw,5rem)]"
            delay={0.12}
            lines={[
              <>Building the</>,
              <>
                <em className="italic text-accent">next generation</em>
              </>,
              <>of digital brands.</>,
            ]}
          />

          <motion.p
            className="mt-8 max-w-[34rem] text-base leading-[1.7] text-muted sm:text-lg"
            {...fade(0.7)}
          >
            We build and scale exceptional internet businesses across AI, SaaS,
            recruitment, and digital marketing-creating long-term value through
            shared technology, talent, and operational excellence.
          </motion.p>

          <motion.div className="mt-10 flex flex-wrap gap-5" {...fade(0.82)}>
            <Button href="/#portfolio" variant="primary" arrow>
              Meet Our Brands
            </Button>
            <Button href="/#who-we-are" variant="ghost">
              Why We Build
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="flex w-full items-center justify-center lg:h-full lg:self-stretch"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reduce ? 0 : 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <EcosystemOrbit />
        </motion.div>
      </div>
    </section>
  )
}
