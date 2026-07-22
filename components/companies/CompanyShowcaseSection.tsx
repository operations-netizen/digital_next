import type { ReactNode } from 'react'
import Reveal from '@/components/ui/Reveal'

/**
 * A single company chapter for the Companies page.
 *
 * A full-width, two-column editorial row: the company NAME is the headline
 * on the content side, the LOGO stands alone on the opposite side (never a
 * duplicate name beneath it). Layout alternates via `reverse` for rhythm,
 * while DOM order stays reading-logical for accessibility.
 *
 * Interaction is CSS-only (group hover); entrance uses the shared `Reveal`
 * so it stays reduced-motion safe. The whole row is one link via a stretched
 * overlay anchor - single tab stop, name kept out of the anchor.
 */

export interface CompanyShowcaseSectionProps {
  index: string
  name: string
  category: string
  description: string
  metadata: string[]
  logo: string
  logoAlt: string
  href: string
  reverse?: boolean
  /** Tailwind explicit-height class (e.g. `h-14`) - forces small/low-res
   *  logos to scale up to a consistent optical height. */
  logoMax?: string
  /** Rendered in place of the logo when no logo asset exists (e.g. HireNext). */
  fallback?: ReactNode
}

export default function CompanyShowcaseSection({
  index,
  name,
  category,
  description,
  metadata,
  logo,
  logoAlt,
  href,
  reverse = false,
  logoMax = 'h-14',
  fallback,
}: CompanyShowcaseSectionProps) {
  // 12-col placement. Content occupies one side across two rows (index above
  // body); the logo takes the opposite side and self-centers to the midpoint.
  const indexCol = reverse
    ? 'lg:col-span-6 lg:col-start-7 lg:row-start-1'
    : 'lg:col-span-6 lg:col-start-1 lg:row-start-1'
  const bodyCol = reverse
    ? 'lg:col-span-6 lg:col-start-7 lg:row-start-2'
    : 'lg:col-span-6 lg:col-start-1 lg:row-start-2'
  const logoCol = reverse
    ? 'lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:row-span-2'
    : 'lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2'

  return (
    <article className="group relative border-b border-ink/[0.08] transition-colors duration-500 ease-editorial hover:bg-[#FCFCFF]">
      <div className="shell relative">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-20 sm:py-24 lg:grid-cols-12 lg:items-start lg:gap-x-16 lg:py-28">
          {/* Index */}
          <Reveal as="div" className={indexCol}>
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted/50 tabular-nums">
              {index}
            </span>
          </Reveal>

          {/* Logo - alone, centered on its side; revealed last */}
          <Reveal
            as="div"
            delay={0.34}
            className={`flex items-center justify-start lg:justify-center lg:self-center ${logoCol}`}
          >
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo}
                alt={logoAlt}
                loading="lazy"
                className={`w-auto max-w-full object-contain opacity-[0.85] transition-[opacity,transform] duration-[600ms] ease-editorial group-hover:-translate-y-0.5 group-hover:opacity-100 ${logoMax}`}
              />
            ) : (
              <div className="transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5">
                {fallback}
              </div>
            )}
          </Reveal>

          {/* Body - name (headline), category, accent, description, metadata, CTA */}
          <div className={bodyCol}>
            <Reveal delay={0.08}>
              <h2 className="font-serif font-normal leading-[1.02] tracking-tightest text-ink text-[clamp(2.25rem,4vw,3.75rem)] transition-transform duration-[600ms] ease-editorial group-hover:-translate-y-0.5">
                {name}
              </h2>
              <span className="mt-4 block font-mono text-[11px] uppercase tracking-[0.26em] text-muted">
                {category}
              </span>
              <span
                aria-hidden="true"
                className="mt-6 block h-px w-10 bg-accent transition-[width] duration-[600ms] ease-editorial group-hover:w-16"
              />
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-[30ch] text-[clamp(1.25rem,1.55vw,1.4rem)] leading-[1.7] text-muted transition-colors duration-[600ms] ease-editorial group-hover:text-ink/80">
                {description}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 flex max-w-[30ch] flex-wrap items-center gap-x-3.5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted/70">
                {metadata.map((m, i) => (
                  <span key={m} className="flex items-center gap-3.5">
                    {i > 0 && (
                      <span aria-hidden="true" className="h-2.5 w-px bg-line" />
                    )}
                    {m}
                  </span>
                ))}
              </div>

              <span className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-accent">
                <span className="relative">
                  Visit Company
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-accent/30 transition-colors duration-[600ms] ease-editorial group-hover:bg-accent" />
                </span>
                <span className="transition-transform duration-[600ms] ease-editorial group-hover:translate-x-1.5 group-hover:-translate-y-1">
                  &#8599;
                </span>
              </span>
            </Reveal>
          </div>
        </div>

        {/* Active accent - short blue line at the bottom, grows toward centre on hover */}
        <span
          aria-hidden="true"
          className={`absolute bottom-0 h-0.5 w-[150px] bg-accent transition-transform duration-[600ms] ease-editorial group-hover:scale-x-100 ${
            reverse
              ? 'right-0 origin-right scale-x-[0.48]'
              : 'left-0 origin-left scale-x-[0.48]'
          }`}
        />

        {/* Stretched link - whole row is one accessible tap target */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} - ${category}. Visit website (opens in a new tab).`}
          className="absolute inset-0 rounded-sm outline-none ring-accent/40 focus-visible:ring-2 focus-visible:ring-inset"
        >
          <span className="sr-only">Visit {name}</span>
        </a>
      </div>
    </article>
  )
}
