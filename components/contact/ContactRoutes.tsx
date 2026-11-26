'use client'

/**
 * "Who's writing?" - three routes into the inquiry form, one per audience.
 * One hairline panel, 3-up (collapsed borders: grid top/left, cells
 * right/bottom). Choosing a route pre-selects the form's reason (via a
 * `contact:reason` event the form listens for) and scrolls to it.
 * Hover: soft tint, accent rule across the top, number + title in accent.
 */

export const CONTACT_REASON_EVENT = 'contact:reason'

const routes = [
  {
    who: 'Founders',
    title: 'Sell your company',
    body: 'Confidential conversations about acquiring and holding profitable internet businesses for the long term.',
    reason: 'Acquisition',
  },
  {
    who: 'Operators',
    title: 'Build with us',
    body: 'Engineers, marketers and operators who want to build inside a group of focused companies.',
    reason: 'Careers',
  },
  {
    who: 'Partners',
    title: 'Partner with the group',
    body: 'Agencies, platforms and teams who want to work across Digital Next and its brands.',
    reason: 'Partnership',
  },
]

export default function ContactRoutes() {
  function choose(reason: string) {
    window.dispatchEvent(new CustomEvent(CONTACT_REASON_EVENT, { detail: reason }))
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="grid border-l border-t border-line md:grid-cols-3">
      {routes.map((r, i) => (
        <button
          key={r.who}
          type="button"
          onClick={() => choose(r.reason)}
          className="group relative flex h-full flex-col border-b border-r border-line px-6 py-7 text-left outline-none transition-colors duration-500 ease-editorial hover:bg-[#FAFAFC] focus-visible:bg-[#FAFAFC] sm:px-8 sm:py-8"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100 group-focus-visible:scale-x-100"
          />
          <span className="flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-meta">
            <span className="tabular-nums text-accent/70 transition-colors duration-500 ease-editorial group-hover:text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              aria-hidden="true"
              className="h-px w-4 bg-line transition-[width,background-color] duration-500 ease-editorial group-hover:w-7 group-hover:bg-accent"
            />
            <span className="text-muted">{r.who}</span>
          </span>
          <span className="mt-5 block font-serif text-[1.5rem] leading-[1.15] tracking-tight text-ink transition-[color,transform] duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-accent sm:text-[1.625rem]">
            {r.title}
          </span>
          <span className="mt-3 block max-w-[36ch] text-[0.875rem] leading-[1.65] text-muted transition-colors duration-500 ease-editorial group-hover:text-ink/75">
            {r.body}
          </span>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.8125rem] font-medium text-ink">
            Start this inquiry
            <span className="text-accent transition-transform duration-300 ease-editorial group-hover:translate-y-0.5">
              &darr;
            </span>
          </span>
        </button>
      ))}
    </div>
  )
}
