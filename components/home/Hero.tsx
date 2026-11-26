'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/motion'
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
      {/* Oversized background typography (~2-3% opacity). Sized in vw up to
          the 1440px shell, then capped and centred with it, so on wide
          screens the composition stays the 1440 one instead of the type
          ballooning across the whole viewport. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="mx-auto flex h-full w-full max-w-shell flex-col justify-center">
          <span className="select-none whitespace-nowrap font-serif text-[length:min(20vw,18rem)] font-light leading-[0.82] tracking-tightest text-ink/[0.012]">
            Digital
          </span>
          <span className="-mt-[min(2vw,1.8rem)] select-none whitespace-nowrap pl-[min(8vw,7.2rem)] font-serif text-[length:min(20vw,18rem)] font-light italic leading-[0.82] tracking-tightest text-ink/[0.012]">
            Next
          </span>
        </div>
      </div>

      {/* In the shell like every other section, so the copy lines up with
          the nav wordmark and the orbit stays beside it on wide screens. */}
      {/* The left track is capped to the headline's own measure rather than
          taking a 1.1fr share: a fractional track left a band of dead space
          between the copy's ragged edge and the orbit. */}
      <div className="shell relative grid min-h-[72svh] items-center gap-8 pb-8 pt-24 lg:grid-cols-[minmax(0,38rem)_1fr] lg:gap-10 lg:pt-24">
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
            SEO, and digital marketing-creating long-term value through
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
