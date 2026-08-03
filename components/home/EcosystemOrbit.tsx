'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { companies } from '@/lib/companies'

const SPIN = 58 // seconds per revolution - calm, premium (~10% livelier)

/**
 * Premium interactive ecosystem. Digital Next sits at the center; the
 * six companies orbit on a slow, continuous rotation.
 *
 * Interaction model:
 *  - Desktop (hover-capable): hover / focus a node previews its card and
 *    pauses rotation; the card stays open while the pointer is anywhere
 *    in the orbit, so it can be moved onto the card to reach "Visit
 *    Company". Leaving the orbit closes the card and resumes rotation.
 *    No clicking required, no persistent state.
 *  - Touch (no hover): tap a node to open its card, tap another to
 *    switch, tap outside / the close control / Escape to dismiss.
 *  - Nodes never navigate. The "Visit Company" CTA inside the card is
 *    the only external link (opens in a new tab).
 *
 * All nodes and the card render from the shared `companies` array.
 * Fully keyboard-accessible; static under reduced motion.
 */
export default function EcosystemOrbit() {
  const reduce = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [canHover, setCanHover] = useState(true) // desktop-style pointer
  const [hovering, setHovering] = useState(false) // pointer anywhere in orbit
  const [hoverId, setHoverId] = useState<string | null>(null) // previewed node (hover/focus)
  const [selectedId, setSelectedId] = useState<string | null>(null) // pinned node (touch only)

  // Hover previews win; a pinned selection only exists on touch devices.
  const activeId = hoverId ?? selectedId

  const R = 40
  const nodes = companies.map((c, i) => {
    const theta = (i / companies.length) * Math.PI * 2 - Math.PI / 2
    return {
      ...c,
      x: 50 + R * Math.cos(theta),
      y: 50 + R * Math.sin(theta),
    }
  })

  const paused =
    reduce || hovering || hoverId !== null || selectedId !== null
  const spinStyle = (reverse = false) =>
    reduce
      ? undefined
      : {
          animation: `orbit ${SPIN}s linear infinite${reverse ? ' reverse' : ''}`,
          animationPlayState: paused ? ('paused' as const) : ('running' as const),
        }

  const active = nodes.find((n) => n.id === activeId) ?? null

  // Detect whether the device previews on hover (desktop) or needs taps
  // (touch). Drives whether a node tap pins a selection.
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Escape clears the pinned selection; click/tap outside the orbit too.
  useEffect(() => {
    if (selectedId === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedId(null)
        setHoverId(null)
      }
    }
    const onPointer = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setSelectedId(null)
        setHoverId(null)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [selectedId])

  // Card sits in the corner opposite the active node, so it never covers
  // the node and always stays inside the orbit's bounds.
  const vertical = active && active.y <= 50 ? 'bottom' : 'top'
  const horizontal = active && active.x < 50 ? 'right' : 'left'
  const posClass = [
    vertical === 'bottom' ? 'bottom-0' : 'top-0',
    horizontal === 'left' ? 'left-0' : 'right-0',
  ].join(' ')
  const slideY = vertical === 'bottom' ? 8 : -8

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[540px]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false)
        setHoverId(null)
      }}
    >
      {/* Soft ambient halo (very subtle - no hard gradient) */}
      <div
        aria-hidden="true"
        className="absolute inset-[10%] rounded-full opacity-70"
        style={{ boxShadow: '0 40px 130px -50px rgba(79,70,255,0.12)' }}
      />

      {/* Rings: softest outermost, firmer toward the center */}
      <div className="absolute inset-0 rounded-full border border-line/45" />
      <div className="absolute inset-[18%] rounded-full border border-line/70" />
      <div className="absolute inset-[36%] rounded-full border border-line" />

      <div className="absolute inset-0" style={spinStyle()}>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {nodes.map((n) => (
            <line
              key={n.id}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              stroke={activeId === n.id ? '#4F46FF' : '#EAEAEA'}
              strokeWidth={activeId === n.id ? 0.4 : 0.2}
              className="transition-all duration-300"
            />
          ))}
        </svg>

        {nodes.map((n) => {
          const isActive = activeId === n.id
          const isSelected = selectedId === n.id
          const dim = activeId !== null && !isActive
          return (
            <div
              key={n.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              {/* Float wrapper - gentle drift, composited with counter-rotation */}
              <div
                style={
                  reduce
                    ? undefined
                    : {
                        animation: `node-float ${6 + (n.x % 3)}s ease-in-out infinite`,
                        animationDelay: `${(n.x % 5) * 0.4}s`,
                      }
                }
              >
                <div style={spinStyle(true)}>
                <button
                  type="button"
                  aria-label={`View ${n.name} details`}
                  aria-pressed={canHover ? undefined : isSelected}
                  // Set on enter but DON'T clear on leave: the card stays
                  // open as the pointer travels off the node toward it.
                  // The container's onMouseLeave closes it.
                  onMouseEnter={() => setHoverId(n.id)}
                  onFocus={() => setHoverId(n.id)}
                  onBlur={() => setHoverId(null)}
                  onClick={() => {
                    // Desktop is hover-only - no persistent lock. Touch taps
                    // pin the card (and tapping the same node again closes it).
                    if (canHover) return
                    setSelectedId((prev) => (prev === n.id ? null : n.id))
                  }}
                  className={[
                    'flex h-16 w-16 items-center justify-center rounded-full border bg-bg outline-none transition-all duration-300 ease-editorial focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:h-[4.5rem] sm:w-[4.5rem]',
                    isActive
                      ? 'scale-[1.1] border-accent text-accent shadow-[0_16px_44px_-16px_rgba(79,70,255,0.4)]'
                      : 'border-line/80 text-ink shadow-[0_8px_28px_-18px_rgba(17,17,17,0.22)] hover:border-accent',
                    dim ? 'opacity-30' : 'opacity-100',
                  ].join(' ')}
                >
                  <span className="font-mono text-[11px] font-medium tracking-widest sm:text-xs">
                    {n.ticker}
                  </span>
                </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-ink text-bg shadow-[0_20px_50px_-26px_rgba(17,17,17,0.45)] sm:h-32 sm:w-32">
          {!reduce && (
            <span className="absolute inset-0 animate-pulse rounded-full ring-1 ring-accent/40" />
          )}
          <span className="text-center font-serif text-[0.95rem] font-light leading-tight tracking-tight">
            Digital
            <br />
            Next
          </span>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key={active.id}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: slideY }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduce ? 1 : 0.98, y: reduce ? 0 : slideY / 2 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${vertical} ${horizontal}` }}
            className={[
              'absolute z-20 w-[16rem] max-w-[78%] rounded-2xl bg-bg p-6 shadow-[0_20px_56px_-28px_rgba(17,17,17,0.22)] ring-1 ring-black/[0.04]',
              posClass,
            ].join(' ')}
          >
            {selectedId !== null && (
              <button
                type="button"
                aria-label="Close brand details"
                onClick={() => {
                  setSelectedId(null)
                  setHoverId(null)
                }}
                className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-line/40 hover:text-ink"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 2.5l7 7M9.5 2.5l-7 7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}

            <span className="block pr-6 font-mono text-[9px] uppercase tracking-meta text-muted">
              {active.category}
            </span>
            <h3 className="mt-2 font-serif text-2xl font-light leading-tight tracking-tighter text-ink">
              {active.name}
            </h3>
            <p className="mt-2.5 text-[13px] leading-relaxed text-muted">{active.mission}</p>
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent outline-none focus-visible:underline"
            >
              Visit Brand
              <span className="transition-transform duration-300 ease-out group-hover/cta:translate-x-0.5">
                &rarr;
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
