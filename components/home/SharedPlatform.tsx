import Reveal from '@/components/ui/Reveal'

/**
 * The group's shared platform - eight capability cards that read as one
 * connected operating system every company inherits. Editorial content
 * blocks: light borders, soft ambient shadow, restrained hover, a stepped
 * second row for rhythm, and a single soft radial glow unifying the grid.
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
    <div>
      {/* Editorial chapter divider - label with a rule extending across */}
      <div className="mb-9 flex flex-wrap items-center gap-x-4 gap-y-3">
        <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent" />
        <span className="min-w-0 font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.2em] text-muted">
          Shared resources · Independent execution
        </span>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-line/70 sm:block" />
      </div>

      <div className="relative">
        {/* Single soft radial glow - unifies the grid as one system */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 62% 56% at 50% 42%, rgba(79,70,255,0.06), transparent 72%)',
          }}
        />

        <div className="relative z-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.no}
              delay={i * 0.08}
              className={`h-full ${i >= 4 ? 'lg:mt-2.5' : ''}`}
            >
              <div className="group relative flex h-full flex-col rounded-[1.25rem] border border-black/[0.04] bg-white p-8 shadow-[0_4px_24px_-18px_rgba(17,17,17,0.09)] transition-[transform,box-shadow,border-color] duration-500 ease-editorial hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_26px_56px_-32px_rgba(17,17,17,0.2)] sm:p-9">
                {/* Top-left accent line, grows 24px → 48px on hover */}
                <span
                  aria-hidden="true"
                  className="absolute left-8 top-0 h-0.5 w-6 rounded-full bg-accent transition-[width] duration-500 ease-editorial group-hover:w-12 sm:left-9"
                />

                <div className="flex items-center justify-between">
                  <span className="text-ink/65 transition-[color,transform] duration-500 ease-editorial group-hover:scale-[1.07] group-hover:text-accent">
                    <Icon k={c.key} />
                  </span>
                  <span className="font-mono text-[0.6875rem] tracking-meta text-muted">
                    {c.no}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-xl font-normal leading-tight tracking-tight text-ink transition-[color,transform] duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:text-accent">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-[30ch] text-[0.9375rem] leading-[1.6] text-muted transition-colors duration-500 ease-editorial group-hover:text-ink/75">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
