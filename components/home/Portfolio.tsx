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
      className="scroll-mt-24 pb-24 pt-6 sm:pb-32 sm:pt-8 lg:pb-40 lg:pt-10"
    >
      <div className="shell">
        {/* Editorial introduction - centered, storytelling transition */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Our companies</Eyebrow>
          </Reveal>

          {/* ↓ 32px */}
          <TextReveal
            as="h2"
            className="display text-statement mt-8 max-w-[700px]"
            lines={[
              <>Six companies.</>,
              <>
                <em className="italic text-accent">One shared ecosystem.</em>
              </>,
            ]}
          />

          {/* ↓ 28px */}
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-[740px] text-lg leading-[1.7] text-muted">
              Digital Next brings together six independent companies across AI,
              SaaS, recruitment, SEO, and digital services. Every company
              operates independently while benefiting from shared expertise,
              technology, and long-term strategic support.
            </p>
          </Reveal>

          {/* ↓ 24px - trust indicators (supporting proof, kept close) */}
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[15px] font-medium tracking-[-0.005em] text-ink/70 sm:gap-x-7">
              <span>
                <span className="font-semibold text-ink">6</span> Companies
              </span>
              <span aria-hidden="true" className="h-3.5 w-px bg-line" />
              <span>
                <span className="font-semibold text-ink">450+</span> Employees
              </span>
              <span aria-hidden="true" className="h-3.5 w-px bg-line" />
              <span>
                <span className="font-semibold text-ink">5+</span> Industries
              </span>
            </div>
          </Reveal>
        </div>

        {/* ↓ 48px - thin divider ↓ 64px */}
        <Reveal delay={0.26}>
          <div className="mt-12 h-px w-full bg-line" />
        </Reveal>

        {/* Cards: 1 col mobile, 2 cols tablet + desktop (3 rows) */}
        <div className="mt-12 grid items-stretch gap-x-5 gap-y-3 sm:grid-cols-2 lg:gap-x-6 lg:gap-y-4">
          {companies.map((company, i) => (
            <Reveal key={company.id} delay={i * 0.08} className="h-full">
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
      aria-label={`${company.name} - ${company.category}. Explore company website (opens in a new tab).`}
      style={{ ['--brand' as string]: company.primaryColor } as React.CSSProperties}
      className="group relative flex h-full flex-col rounded-[20px] border border-line/60 bg-white p-7 shadow-[0_2px_8px_-4px_rgba(17,17,17,0.05)] outline-none transition-[transform,box-shadow,background-color,border-color] duration-[280ms] ease-out hover:-translate-y-1.5 hover:border-[color-mix(in_srgb,var(--brand)_26%,white)] hover:bg-[#FCFCFF] hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.12),0_10px_34px_-22px_color-mix(in_srgb,var(--brand)_30%,transparent)] focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-bg sm:p-8"
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
          <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-meta text-muted">
            {company.category}
          </span>
        </div>

        <div className="flex shrink-0 items-start pt-0.5">
          {company.logo ? (
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              loading="lazy"
              decoding="async"
              className={[
                'w-auto origin-right object-contain object-right transition-transform duration-[280ms] ease-out group-hover:scale-[1.03]',
                // Per-logo sizing - square marks (DWS) and wordmarks need different heights.
                company.id === 'digital-web-solutions'
                  ? 'max-h-20 max-w-[140px]'
                  : company.id === 'rankwatch'
                    ? 'max-h-14 max-w-[220px]'
                    : 'max-h-7 max-w-[140px]',
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
      <p className="mt-5 line-clamp-2 max-w-[40ch] text-[15px] leading-relaxed text-muted transition-colors duration-[280ms] ease-out group-hover:text-ink/75">
        {company.description}
      </p>

      {/* Footer - CTA left, editorial index right */}
      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink/50 transition-colors duration-[280ms] ease-out group-hover:text-[color:var(--brand)]">
          <span className="relative">
            Explore Company
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--brand)] transition-transform duration-[280ms] ease-out group-hover:scale-x-100" />
          </span>
          <span className="transition-transform duration-[280ms] ease-out group-hover:translate-x-[6px]">
            &rarr;
          </span>
        </span>
        <span className="font-mono text-[11px] tracking-meta text-muted/50 transition-colors duration-[280ms] group-hover:text-muted">
          {no} <span className="text-line">/</span>
        </span>
      </div>
    </a>
  )
}
