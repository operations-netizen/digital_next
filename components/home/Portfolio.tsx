import { withBase } from '@/lib/asset'
import Link from 'next/link'
import { companies, type Company } from '@/lib/companies'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'

/**
 * Signature portfolio showcase. Six companies in a 2x3 editorial grid,
 * rendered entirely from the shared `companies` array. Each card is a
 * single semantic link to the company's site (opens in a new tab), with
 * a restrained premium hover: lift, ambient shadow, a thin accent line,
 * and quiet motion on the logo, name and CTA.
 */
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="shell">
        {/* Split header, the same grammar as Who We Are: label + statement
            on the left; on the right the copy and a route into /companies,
            bottom-aligned to the headline's last line. (The old centred
            stat line repeated the StatsStrip and contradicted it.) */}
        <div className="grid gap-y-8 lg:grid-cols-2 lg:items-end lg:gap-x-24">
          <div>
            <Reveal>
              <Eyebrow>Our brands</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              className="display text-statement mt-6 max-w-[15ch] [text-wrap:balance]"
              lines={[
                <>Six brands.</>,
                <>
                  <em className="italic text-accent">One shared ecosystem.</em>
                </>,
              ]}
            />
          </div>

          <Reveal delay={0.12}>
            <p className="text-base leading-[1.7] text-muted [text-wrap:pretty] sm:text-[1.0625rem]">
              Digital Next brings together six independent brands across AI,
              SaaS, recruitment, SEO, and digital services. Every brand
              operates independently while benefiting from shared expertise,
              technology, and long-term strategic support.
            </p>
            <Link
              href="/brands"
              className="group mt-6 flex w-fit items-center gap-2.5 text-[0.9375rem] font-medium leading-snug text-ink transition-colors duration-[250ms] ease-editorial hover:text-accent"
            >
              <span className="relative">
                Explore all brands
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[250ms] ease-editorial group-hover:scale-x-100" />
              </span>
              <span className="text-accent transition-transform duration-[250ms] ease-editorial group-hover:translate-x-[0.3125rem]">
                &rarr;
              </span>
            </Link>
          </Reveal>
        </div>

        {/* ↓ 48px - thin divider ↓ 64px */}
        <Reveal delay={0.26}>
          <div className="mt-12 h-px w-full bg-line" />
        </Reveal>

        {/* Cards: 1 col mobile, 2 cols tablet + desktop (3 rows).
            min-w-0 on each item: grid items default to min-width:auto, which
            lets a long brand name size the track wider than the viewport. */}
        <div className="mt-12 grid items-stretch gap-x-5 gap-y-3 sm:grid-cols-2 lg:gap-x-6 lg:gap-y-4">
          {companies.map((company, i) => (
            <Reveal key={company.id} delay={i * 0.08} className="h-full min-w-0">
              <CompanyCard company={company} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CompanyCard({ company, index }: { company: Company; index: number }) {
  const no = String(index + 1).padStart(2, '0')

  return (
    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company.name} - ${company.category}. Explore brand website (opens in a new tab).`}
      style={{ ['--brand' as string]: company.primaryColor } as React.CSSProperties}
      className="group relative flex h-full flex-col rounded-[1.25rem] border border-line/60 bg-white p-7 shadow-[0_2px_8px_-4px_rgba(17,17,17,0.05)] outline-none transition-[transform,box-shadow,background-color,border-color] duration-[280ms] ease-out hover:-translate-y-1.5 hover:border-[color-mix(in_srgb,var(--brand)_26%,white)] hover:bg-[#FCFCFF] hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.12),0_10px_34px_-22px_color-mix(in_srgb,var(--brand)_30%,transparent)] focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-bg sm:p-8"
    >
      {/* Thin brand accent line, animates left -> right along the top edge */}
      <span
        aria-hidden="true"
        className="absolute left-7 right-7 top-0 h-px origin-left scale-x-0 bg-[color:var(--brand)] transition-transform duration-[280ms] ease-out group-hover:scale-x-100 sm:left-8 sm:right-8"
      />

      {/* Header - name + category on the left, logo on the right */}
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-ink/85 transition-[color,transform] duration-[250ms] ease-out group-hover:translate-x-0.5 group-hover:text-ink">
            {company.name}
          </h3>
          <span className="mt-1.5 block font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
            {company.category}
          </span>
        </div>

        <div className="flex shrink-0 items-start pt-0.5">
          {company.logo ? (
            <img
              src={withBase(company.logo)}
              alt={`${company.name} logo`}
              loading="lazy"
              decoding="async"
              width={company.logoWidth}
              height={company.logoHeight}
              className={[
                'w-auto origin-right object-contain object-right transition-transform duration-[280ms] ease-out group-hover:scale-[1.03]',
                // Per-logo sizing - square marks (DWS) and wordmarks need
                // different heights. The narrow-screen caps keep the logo
                // from crowding the brand name out of the card.
                company.id === 'digital-web-solutions'
                  ? 'max-h-16 max-w-[6rem] xs:max-h-20 xs:max-w-[8.75rem]'
                  : company.id === 'rankwatch'
                    ? 'max-h-12 max-w-[9.375rem] xs:max-h-14 xs:max-w-[13.75rem]'
                    : 'max-h-6 max-w-[6.5rem] xs:max-h-7 xs:max-w-[8.75rem]',
              ].join(' ')}
            />
          ) : company.id === 'hirenext' ? (
            // Typographic wordmark - HireNext renders its logo as styled text.
            <span className="origin-right font-sans text-[1.4rem] font-bold leading-none tracking-[-0.02em] text-ink transition-transform duration-[280ms] ease-out group-hover:scale-[1.03]">
              HireNext<span className="text-[#14B8A6]">.io</span>
            </span>
          ) : (
            <span className="origin-right font-serif text-[1.4rem] font-normal leading-none tracking-tight text-ink transition-transform duration-[280ms] ease-out group-hover:scale-[1.03]">
              {company.name}
            </span>
          )}
        </div>
      </div>

      {/* Description - concise, max 2 lines */}
      <p className="mt-5 line-clamp-2 max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted transition-colors duration-[280ms] ease-out group-hover:text-ink/75">
        {company.description}
      </p>

      {/* Footer - CTA left, editorial index right */}
      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink/50 transition-colors duration-[280ms] ease-out group-hover:text-[color:var(--brand)]">
          <span className="relative">
            Explore Brand
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--brand)] transition-transform duration-[280ms] ease-out group-hover:scale-x-100" />
          </span>
          <span className="transition-transform duration-[280ms] ease-out group-hover:translate-x-[0.375rem]">
            &rarr;
          </span>
        </span>
        <span className="font-mono text-[0.6875rem] tracking-meta text-muted/50 transition-colors duration-[280ms] group-hover:text-muted">
          {no} <span className="text-line">/</span>
        </span>
      </div>
    </a>
  )
}
