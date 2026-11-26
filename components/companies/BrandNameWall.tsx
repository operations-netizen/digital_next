'use client'

import { useEffect, useRef, useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { withBase } from '@/lib/asset'
import { companies } from '@/lib/companies'
import { useReducedMotion } from '@/lib/motion'

/**
 * Hover-reveal name wall - the /brands hero centrepiece.
 *
 * The six brand names, set huge in the display serif like a contents
 * spread. Hovering (or focusing) one dims the rest, tints it in that
 * brand's own colour, and floats a preview card - logo, category, founding
 * year - beside the cursor. Each row jumps to the brand's showcase below.
 *
 * The cursor card only exists on devices that can hover; touch screens get
 * the category inline and a plain tap-through. Position updates write
 * straight to the card's transform (no re-render per mouse move); under
 * reduced motion the card still appears but snaps instead of gliding.
 */
export default function BrandNameWall() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState<number | null>(null)
  const [canHover, setCanHover] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const sync = () => setCanHover(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const place = (x: number, y: number, snap = false) => {
    const card = cardRef.current
    if (!card) return
    // Open below-right of the pointer so it never covers the hovered name
    // (only the dimmed rows beneath); flip left / above near the edges.
    const w = card.offsetWidth
    const h = card.offsetHeight
    const left = x + 32 + w > window.innerWidth ? x - w - 32 : x + 32
    const top = y + 56 + h > window.innerHeight ? y - h - 56 : y + 56
    const t = `translate3d(${left}px, ${top}px, 0)`
    if (snap) {
      // Appearing from hidden: jump to the pointer instead of gliding in
      // from wherever the card last was.
      card.style.transition = 'none'
      card.style.transform = t
      void card.offsetWidth
      card.style.transition = ''
    } else {
      card.style.transform = t
    }
  }

  const current = active === null ? null : companies[active]

  return (
    <div className="relative">
      <ul
        onMouseLeave={() => setActive(null)}
        onMouseMove={(e) => canHover && place(e.clientX, e.clientY)}
      >
        {companies.map((c, i) => {
          const dim = active !== null && active !== i
          const on = active === i
          return (
            <li key={c.id}>
              <Reveal delay={0.1 + i * 0.06}>
                <a
                  href={`#${c.id}`}
                  onMouseEnter={(e) => {
                    if (canHover) place(e.clientX, e.clientY, active === null)
                    setActive(i)
                  }}
                  onFocus={(e) => {
                    setActive(i)
                    const r = e.currentTarget.getBoundingClientRect()
                    if (canHover) place(r.left + r.width * 0.55, r.top + r.height / 2, true)
                  }}
                  onBlur={() => setActive(null)}
                  className="group grid grid-cols-[2.25rem_1fr_auto] items-center gap-x-4 border-t border-line py-3 outline-none sm:grid-cols-[2.75rem_1fr_auto]"
                  style={{ '--brand': c.primaryColor } as React.CSSProperties}
                >
                  <span
                    className={`self-center font-mono text-[0.6875rem] tabular-nums tracking-[0.12em] transition-colors duration-[400ms] ease-editorial ${
                      on ? 'text-[var(--brand)]' : 'text-accent/70'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="min-w-0">
                    <span
                      className={`block font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] font-light leading-[1.12] tracking-tightest transition-[color,opacity,transform] duration-[500ms] ease-editorial ${
                        on
                          ? 'translate-x-1.5 text-[var(--brand)]'
                          : dim
                            ? 'text-ink opacity-35'
                            : 'text-ink'
                      }`}
                    >
                      {c.name}
                    </span>
                    {/* Category inline on touch screens (no hover card there) */}
                    <span className="mt-1.5 block font-mono text-[0.625rem] uppercase tracking-meta text-muted [@media(hover:hover)_and_(pointer:fine)]:hidden">
                      {c.category}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={`text-[var(--brand)] transition-[opacity,transform] duration-[400ms] ease-editorial ${
                      on ? 'translate-y-0.5 opacity-100' : 'opacity-0'
                    }`}
                  >
                    &darr;
                  </span>
                </a>
              </Reveal>
            </li>
          )
        })}
      </ul>

      {/* Cursor preview card - pointer devices only */}
      {canHover && (
        <div
          ref={cardRef}
          aria-hidden="true"
          className={`pointer-events-none fixed left-0 top-0 z-40 w-[14.5rem] overflow-hidden border border-line bg-white shadow-[0_30px_70px_-35px_rgba(17,17,17,0.45)] ${
            reduce ? '' : 'transition-[transform,opacity] duration-[350ms] ease-out'
          } ${current ? 'opacity-100' : 'opacity-0'}`}
        >
          {current && (
            <>
              <span className="block h-1 w-full" style={{ background: current.primaryColor }} />
              <div className="flex h-20 items-center justify-center border-b border-line px-5">
                {current.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={withBase(current.logo)}
                    alt=""
                    width={current.logoWidth}
                    height={current.logoHeight}
                    className={`w-auto object-contain ${
                      current.id === 'digital-web-solutions' ? 'max-h-11 max-w-[6.5rem]' : 'max-h-6 max-w-[8.5rem]'
                    }`}
                  />
                ) : (
                  <span className="font-sans text-xl font-bold leading-none tracking-[-0.02em] text-ink">
                    HireNext<span className="text-[#14B8A6]">.io</span>
                  </span>
                )}
              </div>
              <div className="space-y-1.5 px-4 py-3">
                <p className="font-mono text-[0.625rem] uppercase tracking-meta text-muted">
                  {current.category}
                </p>
                <p className="flex items-center justify-between text-[0.8125rem] text-ink">
                  <span>{current.founded ? `Founded ${current.founded}` : current.status ?? 'In development'}</span>
                  <span className="font-medium" style={{ color: current.primaryColor }}>
                    View &darr;
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
