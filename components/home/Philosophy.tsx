'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import EcosystemConstellation from './EcosystemConstellation'
import StageVisual from './StageVisual'

const VISUAL_KEYS = ['found', 'build', 'scale'] as const

/** The lifecycle every company inside Digital Next moves through. */
const stages = [
  {
    no: '01',
    title: 'Found',
    body: 'We identify exceptional operators before the market does.',
  },
  {
    no: '02',
    title: 'Build',
    body: 'Capital, technology, distribution, and senior operators - assembled around the team.',
  },
  {
    no: '03',
    title: 'Scale',
    body: 'Independent brands, shared expertise, and durable long-term growth.',
  },
]

export default function Philosophy() {
  const reduce = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(reduce ? stages.length - 1 : 0)

  // Progress of the timeline through the viewport drives the line + nodes.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.82', 'end 0.55'],
  })
  // Smooth, never-bouncing (overdamped) growth.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
  })
  const lineScaleY = reduce ? 1 : progress
  const particleTop = useTransform(progress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(progress, 'change', (v) => {
    if (reduce) return
    const idx = Math.min(stages.length - 1, Math.floor(v * stages.length))
    setActive(idx < 0 ? 0 : idx)
  })

  return (
    <section
      id="philosophy"
      data-nav-dark
      className="section relative scroll-mt-24 overflow-hidden bg-dark text-white"
    >
      {/* Ultra-subtle depth grid (texture, not decoration) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage:
            'radial-gradient(ellipse 90% 70% at 50% 40%, black, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 40%, black, transparent 85%)',
        }}
      />

      <div className="shell relative">
        {/* Intro - left content unchanged; ecosystem fills the right */}
        <div className="grid items-center gap-10 md:grid-cols-[1fr_minmax(0,42%)] md:gap-12 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow tone="light">How we operate</Eyebrow>
              <h2 className="display mt-6 max-w-[18ch] text-statement text-white">
                We find, build, and scale
                <span aria-hidden="true">-</span>with{' '}
                <em className="italic text-accent">patience</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-white/55">
                We partner with exceptional operators, provide long-term capital
                and infrastructure, and help brands compound over decades,
                not quarters.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-meta text-white/40">
                Begin the journey
                <span aria-hidden="true" className="text-accent">
                  ↓
                </span>
              </p>
            </Reveal>
          </div>

          {/* Ecosystem constellation - desktop/tablet only */}
          <div className="hidden md:block">
            <Reveal delay={0.24}>
              <EcosystemConstellation />
            </Reveal>
          </div>
        </div>

        {/* The journey - a CENTERED vertical timeline; content zig-zags */}
        <div ref={trackRef} className="relative mt-16 sm:mt-24">
          {/* Center line + traveling light (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 lg:block"
          >
            <div className="absolute inset-y-0 w-px -translate-x-1/2 bg-white/12" />
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="absolute inset-y-0 w-px origin-top -translate-x-1/2 bg-accent"
            />
            {!reduce && (
              <motion.div
                style={{ top: particleTop }}
                className="absolute h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_3px_rgba(79,70,255,0.85)]"
              />
            )}
          </div>

          {stages.map((s, i) => {
            const state = i < active ? 'past' : i === active ? 'active' : 'future'
            const even = i % 2 === 0

            const text = (
              <Reveal
                delay={0.05}
                className={even ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-3 lg:text-left'}
              >
                <span
                  className={[
                    'font-mono text-[11px] tracking-meta transition-colors duration-500 ease-out',
                    state === 'active' ? 'text-accent' : 'text-white/30',
                  ].join(' ')}
                >
                  {s.no}
                </span>
                <h3
                  className={[
                    'mt-3 font-serif font-light leading-[1.05] tracking-tighter transition-colors duration-500 ease-out',
                    'text-[3.25rem] sm:text-[4.25rem]',
                    state === 'active'
                      ? 'text-white'
                      : state === 'past'
                        ? 'text-white/45'
                        : 'text-white/30',
                  ].join(' ')}
                >
                  {s.title}
                </h3>
                <p
                  className={[
                    'mt-4 max-w-md text-lg leading-relaxed transition-colors duration-500 ease-out',
                    even ? 'lg:ml-auto' : '',
                    state === 'active' ? 'text-white/70' : 'text-white/35',
                  ].join(' ')}
                >
                  {s.body}
                </p>
              </Reveal>
            )

            const viz = (
              <div
                className={[
                  'flex justify-center transition-opacity duration-500 ease-out',
                  even ? 'lg:col-start-3' : 'lg:col-start-1',
                  state === 'active' ? 'opacity-100' : 'opacity-40',
                ].join(' ')}
              >
                <Reveal delay={0.12}>
                  <StageVisual stage={VISUAL_KEYS[i]} reduce={reduce} />
                </Reveal>
              </div>
            )

            return (
              <div
                key={s.no}
                className="relative grid items-center gap-y-8 py-14 lg:min-h-[86vh] lg:grid-cols-[1fr_auto_1fr] lg:gap-x-16 lg:py-0"
              >
                {/* Node - sits on the center line (desktop) / badge (mobile) */}
                <div className="order-first flex justify-center lg:order-none lg:col-start-2">
                  <span className="relative hidden h-[26px] w-[26px] items-center justify-center lg:flex">
                    {state === 'active' && !reduce && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
                    )}
                    <span
                      className={[
                        'relative z-10 rounded-full border transition-all duration-500 ease-out',
                        state === 'active'
                          ? 'h-4 w-4 border-accent bg-accent shadow-[0_0_0_5px_rgba(79,70,255,0.16),0_0_26px_rgba(79,70,255,0.6)]'
                          : state === 'past'
                            ? 'h-3 w-3 border-accent/60 bg-accent/60'
                            : 'h-3 w-3 border-white/25 bg-dark',
                      ].join(' ')}
                    />
                  </span>
                  <span
                    className={[
                      'flex h-9 w-9 items-center justify-center rounded-full border font-mono text-[11px] tracking-meta transition-colors duration-500 lg:hidden',
                      state === 'active' ? 'border-accent text-accent' : 'border-white/20 text-white/40',
                    ].join(' ')}
                  >
                    {s.no}
                  </span>
                </div>

                {text}
                {viz}
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
