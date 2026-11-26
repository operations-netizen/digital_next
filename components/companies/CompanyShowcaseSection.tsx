import { withBase } from '@/lib/asset'
import type { ReactNode } from 'react'
import Reveal from '@/components/ui/Reveal'

/**
 * A single brand chapter for the Brands page.
 *
 * A full-width, two-column editorial row split 6/6 by a vertical hairline
 * spine. The copy side: a large serif numeral, the NAME as the headline,
 * category, description, CTA. The other side: the logo in a calm brand tile
 * (soft wash of the brand colour, brand-colour rule on top, one consistent
 * logo size) above a labelled fact table - each fact says what it is.
 *
 * Each row speaks in its own brand colour (`color`): numeral, accent rule,
 * CTA, the tile and a faint hover tint - the same
 * treatment as the hero name list. Layout alternates via `reverse` for
 * rhythm; DOM order stays reading-logical. Interaction is CSS-only (group
 * hover); entrance uses the shared `Reveal`, so it stays reduced-motion
 * safe. The whole row is one link via a stretched overlay anchor.
 */

export interface CompanyShowcaseSectionProps {
  /** Anchor id, so the hero index can jump to this row. */
  id?: string
  index: string
  name: string
  category: string
  description: string
  /** Labelled facts for the table beside the logo. */
  facts: { label: string; value: string }[]
  /** Brand primary colour - drives every accent in the row. */
  color: string
  logo: string
  logoAlt: string
  /** Intrinsic size of `logo`, so the browser reserves its aspect ratio
   *  before the file loads instead of growing it from zero width. */
  logoWidth?: number
  logoHeight?: number
  href: string
  reverse?: boolean
  /** Tailwind height class for the logo inside the tile (square marks need
   *  more height than wordmarks to read at the same optical size). */
  logoMax?: string
  /** Rendered in place of the logo when no logo asset exists (e.g. HireNext). */
  fallback?: ReactNode
}

export default function CompanyShowcaseSection({
  id,
  index,
  name,
  category,
  description,
  facts,
  color,
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
  href,
  reverse = false,
  logoMax = 'h-12',
  fallback,
}: CompanyShowcaseSectionProps) {
  // 12-col placement, split 6/6. Copy (numeral sits on the name's line)
  // takes one side; the logo side takes the other six and stretches the
  // full row height so its hairline spine runs edge to edge.
  const bodyCol = reverse
    ? 'lg:col-span-6 lg:col-start-7 lg:row-start-1'
    : 'lg:col-span-6 lg:col-start-1 lg:row-start-1'
  const logoCol = reverse
    ? 'lg:col-span-6 lg:col-start-1 lg:row-start-1'
    : 'lg:col-span-6 lg:col-start-7 lg:row-start-1'

  const host = href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

  return (
    <article
      id={id}
      className="group relative scroll-mt-24 border-b border-ink/[0.08] transition-colors duration-500 ease-editorial hover:bg-[color-mix(in_srgb,var(--brand)_2.5%,white)]"
      style={{ '--brand': color } as React.CSSProperties}
    >
      <div className="shell relative">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 py-12 sm:py-14 lg:grid-cols-12 lg:items-start lg:gap-x-16 lg:py-14">
          {/* Logo side - brand tile + labelled facts, divided from the copy
              by a vertical hairline spine. */}
          <Reveal
            as="div"
            delay={0.3}
            className={`order-last lg:order-none lg:self-stretch ${logoCol}`}
          >
            <div
              className={`flex h-full flex-col justify-center gap-5 ${
                reverse
                  ? 'lg:border-r lg:border-line lg:pr-16'
                  : 'lg:border-l lg:border-line lg:pl-16'
              }`}
            >
              {/* Brand tile: soft wash of the brand colour, brand rule on top */}
              <div
                className="relative flex h-40 w-full items-center justify-center overflow-hidden border-t-2 border-[var(--brand)]"
                style={{ background: `color-mix(in srgb, ${color} 6%, white)` }}
              >
                {logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={withBase(logo)}
                    alt={logoAlt}
                    loading="lazy"
                    width={logoWidth}
                    height={logoHeight}
                    className={`w-auto max-w-[70%] object-contain transition-transform duration-[600ms] ease-editorial group-hover:scale-[1.03] ${logoMax}`}
                  />
                ) : (
                  <div className="transition-transform duration-[600ms] ease-editorial group-hover:scale-[1.03]">
                    {fallback}
                  </div>
                )}
              </div>

              {/* Labelled fact table */}
              <dl className="border-b border-line">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 border-t border-line py-2.5"
                  >
                    <dt className="font-mono text-[0.625rem] uppercase tracking-meta text-muted">
                      {f.label}
                    </dt>
                    <dd className="text-[0.9375rem] text-ink">{f.value}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 border-t border-line py-2.5">
                  <dt className="font-mono text-[0.625rem] uppercase tracking-meta text-muted">
                    Website
                  </dt>
                  <dd className="text-[0.9375rem] text-ink">
                    {host} <span className="text-[var(--brand)]">&#8599;</span>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Body - name (headline), category, accent, description, CTA */}
          <div className={bodyCol}>
            <Reveal delay={0.08}>
              <div className="flex items-baseline gap-4 sm:gap-5">
                <span
                  aria-hidden="true"
                  className="shrink-0 font-serif text-[2.25rem] font-light leading-none tracking-tight text-[var(--brand)] tabular-nums"
                >
                  {index}
                </span>
                <h2 className="font-serif font-normal leading-[1.04] tracking-tightest text-ink text-[clamp(2rem,3.4vw,3.25rem)] transition-transform duration-[600ms] ease-editorial group-hover:-translate-y-0.5">
                  {name}
                </h2>
              </div>
              <span className="mt-3 block font-mono text-[0.6875rem] uppercase tracking-[0.26em] text-muted">
                {category}
              </span>
              <span
                aria-hidden="true"
                className="mt-5 block h-0.5 w-10 bg-[var(--brand)] transition-[width] duration-[600ms] ease-editorial group-hover:w-16"
              />
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[46ch] text-base leading-[1.65] text-muted transition-colors duration-[600ms] ease-editorial group-hover:text-ink/80">
                {description}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <span className="mt-4 inline-flex min-h-[2.75rem] items-center gap-2 text-[0.9375rem] font-medium text-[var(--brand)]">
                <span className="relative">
                  Visit brand
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-[var(--brand)] opacity-30 transition-opacity duration-[600ms] ease-editorial group-hover:opacity-100" />
                </span>
                <span className="transition-transform duration-[600ms] ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1.5">
                  &#8599;
                </span>
              </span>
            </Reveal>
          </div>
        </div>

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
