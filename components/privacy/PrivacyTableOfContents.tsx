'use client'

import { useEffect, useState } from 'react'

type TocItem = { id: string; title: string }

/**
 * Sticky table of contents that highlights the section currently in view.
 * On desktop it stays fixed alongside the legal column; on mobile it
 * collapses into a native "On this page" disclosure. Anchor scrolling is
 * handled by the browser (scroll-behavior + scroll-mt on sections).
 */
export default function PrivacyTableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const targets = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [items])

  const list = (
    <ol className="space-y-1">
      {items.map((item, i) => {
        const isActive = active === item.id
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`group flex items-baseline gap-3 py-1.5 text-sm outline-none transition-colors duration-300 ease-editorial focus-visible:text-accent ${
                isActive ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              <span
                className={`font-mono text-[0.625rem] tabular-nums tracking-meta transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'text-muted/40'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="relative">
                {item.title}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ease-editorial ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </span>
            </a>
          </li>
        )
      })}
    </ol>
  )

  return (
    <>
      {/* Mobile - On this page disclosure */}
      <details className="group border-y border-line lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-mono text-[0.6875rem] uppercase tracking-meta text-ink outline-none focus-visible:text-accent">
          On this page
          <span aria-hidden="true" className="text-muted transition-transform duration-300 ease-editorial group-open:rotate-180">
            &#9662;
          </span>
        </summary>
        <nav aria-label="Table of contents" className="pb-5">
          {list}
        </nav>
      </details>

      {/* Desktop - sticky TOC */}
      <nav
        aria-label="Table of contents"
        className="sticky top-28 hidden lg:block"
      >
        <span className="block font-mono text-[0.625rem] uppercase tracking-[0.24em] text-muted/50">
          On this page
        </span>
        <div className="mt-5">{list}</div>
      </nav>
    </>
  )
}
