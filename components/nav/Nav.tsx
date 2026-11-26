'use client'

import { withBase } from '@/lib/asset'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { nav, CONTACT_EMAIL } from '@/lib/site'

const EASE = [0.16, 1, 0.3, 1] as const

function Wordmark({ dark, onClick }: { dark?: boolean; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Digital Next - home"
      className="group inline-flex items-center"
    >
      {/* One asset for both tones: the file is black ink on real alpha, so
          `invert` turns it white without touching the transparency - no
          second download and no src swap as the nav crosses a dark
          section. width/height are the intrinsic size, so the browser
          reserves the aspect ratio before it loads. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBase("/logo-dn.png")}
        alt=""
        width={565}
        height={120}
        className={[
          'h-7 w-auto opacity-90 transition-opacity duration-300 group-hover:opacity-100 sm:h-8',
          dark ? 'invert' : '',
        ].join(' ')}
      />
    </Link>
  )
}

function Arrow() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
    >
      <path
        d="M3 7.5h8M7.5 4l3.5 3.5L7.5 11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [onDark, setOnDark] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Theme-aware: flip to a dark treatment when a dark section sits under the
  // nav. Watches [data-nav-dark] sections against a thin strip at the top.
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-dark]')
    )
    if (els.length === 0) {
      setOnDark(false)
      return
    }
    const active = new Set<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) active.add(e.target)
          else active.delete(e.target)
        }
        setOnDark(active.size > 0)
      },
      { rootMargin: `0px 0px -${Math.max(0, window.innerHeight - 72)}px 0px` }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const items = nav.slice(0, -1)
  const contact = nav[nav.length - 1]
  const dark = onDark && !open

  const isActive = (href: string) => !href.includes('#') && pathname === href

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out',
        scrolled
          ? dark
            ? 'border-b border-white/10 bg-dark/70 backdrop-blur-md'
            : 'border-b border-[#EFEFEF] bg-white/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <div
        className={[
          'shell flex items-center justify-between transition-all duration-300 ease-out',
          scrolled ? 'h-16' : 'h-[76px]',
        ].join(' ')}
      >
        <Wordmark dark={dark} />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {items.map((l) => {
            const active = isActive(l.href)
            return (
              <Link
                key={l.label}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={[
                  'group relative py-1 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-[250ms] ease-out',
                  active
                    ? dark
                      ? 'text-white'
                      : 'text-ink'
                    : dark
                      ? 'text-white/60 hover:text-white'
                      : 'text-ink/55 hover:text-ink',
                ].join(' ')}
              >
                {l.label}
                <span
                  className={[
                    'absolute -bottom-1 left-0 h-px bg-accent transition-all duration-[250ms] ease-out',
                    active
                      ? 'w-full opacity-100'
                      : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100',
                  ].join(' ')}
                />
              </Link>
            )
          })}

          <Link
            href={contact.href}
            className={[
              'group ml-3 inline-flex h-12 items-center gap-2 rounded-xl px-8 text-[15px] font-medium transition-all duration-300 ease-out hover:-translate-y-0.5',
              dark
                ? 'bg-white text-ink hover:bg-white/90 hover:shadow-[0_12px_30px_-12px_rgba(255,255,255,0.35)]'
                : 'bg-ink text-white hover:bg-ink/90 hover:shadow-[0_12px_30px_-12px_rgba(17,17,17,0.45)]',
            ].join(' ')}
          >
            {contact.label}
            <Arrow />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative z-50 -mr-2 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={[
                'absolute left-0 top-0 h-px w-6 transition-all duration-300 ease-out',
                open ? 'translate-y-[6px] rotate-45 bg-ink' : dark ? 'bg-white' : 'bg-ink',
              ].join(' ')}
            />
            <span
              className={[
                'absolute bottom-0 left-0 h-px w-6 transition-all duration-300 ease-out',
                open ? '-translate-y-[6px] -rotate-45 bg-ink' : dark ? 'bg-white' : 'bg-ink',
              ].join(' ')}
            />
          </span>
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 top-0 z-40 flex flex-col bg-white lg:hidden"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="shell flex flex-1 flex-col justify-center gap-2 pb-20 pt-24">
              {items.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: EASE }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(l.href) ? 'page' : undefined}
                    className={[
                      'block py-2 font-serif text-4xl font-light tracking-tight transition-colors',
                      isActive(l.href) ? 'text-accent' : 'text-ink',
                    ].join(' ')}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + items.length * 0.06, duration: 0.5, ease: EASE }}
                className="mt-8"
              >
                <Link
                  href={contact.href}
                  onClick={() => setOpen(false)}
                  className="group inline-flex items-center gap-2 rounded-xl bg-ink px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-ink/90"
                >
                  {contact.label}
                  <Arrow />
                </Link>
                <p className="mt-8 font-mono text-xs uppercase tracking-meta text-muted">
                  {CONTACT_EMAIL}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
