import Reveal from '@/components/ui/Reveal'

/**
 * The group's shared platform - eight capabilities as one hairline grid
 * under a header strip: an operating system every brand inherits, not eight
 * floating cards. No radius, no shadow; hover tints the cell and draws an
 * accent rule across its top (the site-wide hover language).
 */

type Key =
  | 'capital'
  | 'engineering'
  | 'hiring'
  | 'operations'
  | 'marketing'
  | 'leadership'
  | 'global'
  | 'technology'

const capabilities: { no: string; title: string; desc: string; key: Key }[] = [
  { no: '01', title: 'Capital', desc: 'Patient funding for decade-long bets.', key: 'capital' },
  { no: '02', title: 'Engineering', desc: 'Shared infrastructure and platforms.', key: 'engineering' },
  { no: '03', title: 'Hiring', desc: 'A recruitment engine for every brand.', key: 'hiring' },
  { no: '04', title: 'Operations', desc: 'Finance, legal, and operations.', key: 'operations' },
  { no: '05', title: 'Marketing', desc: 'Demand generation at scale.', key: 'marketing' },
  { no: '06', title: 'Leadership', desc: 'Operators who have built before.', key: 'leadership' },
  { no: '07', title: 'Global network', desc: 'Clients, partners, and talent.', key: 'global' },
  { no: '08', title: 'Shared technology', desc: 'AI, data, and internal tooling.', key: 'technology' },
]

function Icon({ k }: { k: Key }) {
  const p = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'h-5 w-5',
    'aria-hidden': true,
  }
  switch (k) {
    case 'capital':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 16V9" />
          <path d="M8.8 12.2 12 9l3.2 3.2" />
        </svg>
      )
    case 'engineering':
      return (
        <svg {...p}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
          <path d="M3.5 9.5h17M3.5 15h17M9.5 3.5v17M15 3.5v17" />
        </svg>
      )
    case 'hiring':
      return (
        <svg {...p}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
          <path d="M16 5.2a3.2 3.2 0 0 1 0 6" />
          <path d="M15.6 13.2a5.5 5.5 0 0 1 4.9 5.3" />
        </svg>
      )
    case 'operations':
      return (
        <svg {...p}>
          <path d="M12 3.5 21 8l-9 4.5L3 8l9-4.5Z" />
          <path d="M3.5 13 12 17l8.5-4" />
        </svg>
      )
    case 'marketing':
      return (
        <svg {...p}>
          <path d="M4 10v4l10 4V6L4 10Z" />
          <path d="M14 8.5a3.5 3.5 0 0 1 0 7" />
          <path d="M7 14.5V18a1.5 1.5 0 0 0 3 0v-1.2" />
        </svg>
      )
    case 'leadership':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m15 9-2 4-4 2 2-4 4-2Z" />
        </svg>
      )
    case 'global':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17" />
          <path d="M12 3.5c2.4 2.3 3.8 5.3 3.8 8.5S14.4 18.2 12 20.5c-2.4-2.3-3.8-5.3-3.8-8.5S9.6 5.8 12 3.5Z" />
        </svg>
      )
    case 'technology':
      return (
        <svg {...p}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <path d="M10 3.5V6M14 3.5V6M10 18v2.5M14 18v2.5M3.5 10H6M3.5 14H6M18 10h2.5M18 14h2.5" />
        </svg>
      )
  }
}

export default function SharedPlatform() {
  return (
    <div className="border-l border-t border-line">
      {/* Header strip - names the system and counts it */}
      <Reveal>
        <div className="flex flex-col gap-1 border-b border-r border-line px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
            <span aria-hidden="true" className="h-px w-6 bg-accent" />
            Shared resources · Independent execution
          </span>
          <span className="font-mono text-[0.6875rem] uppercase tracking-meta text-accent">
            {String(capabilities.length).padStart(2, '0')} capabilities
          </span>
        </div>
      </Reveal>

      {/* One hairline grid (collapsed borders: container top/left, each
          cell right/bottom) - an operating system, not eight floating
          cards. Hover: soft tint, an accent rule draws across the cell's
          top, icon and title turn accent, title nudges right. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <Reveal key={c.no} delay={(i % 4) * 0.06} className="h-full">
            <div className="group relative flex h-full flex-col border-b border-r border-line px-6 py-7 transition-colors duration-500 ease-editorial hover:bg-[#FAFAFC] sm:px-8 sm:py-8">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100"
              />
              <div className="flex items-center gap-3">
                <span className="text-ink/60 transition-colors duration-500 ease-editorial group-hover:text-accent">
                  <Icon k={c.key} />
                </span>
                <span className="font-mono text-[0.6875rem] tabular-nums tracking-meta text-accent/70">
                  {c.no}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-[1.375rem] font-normal leading-tight tracking-tight text-ink transition-[color,transform] duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-accent">
                {c.title}
              </h3>
              <p className="mt-2.5 max-w-[30ch] text-[0.9375rem] leading-[1.6] text-muted transition-colors duration-500 ease-editorial group-hover:text-ink/75">
                {c.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
