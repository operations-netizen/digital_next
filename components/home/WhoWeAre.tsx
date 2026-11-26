import { withBase } from '@/lib/asset'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import { companies } from '@/lib/companies'

const principles: {
  no: string
  title: string
  body: string
  cta: string
  href: string
}[] = [
  {
    no: '01',
    title: 'Long-term ownership',
    body: 'We keep the brands we build and measure success in decades, not exits.',
    cta: 'Our approach',
    href: '/about',
  },
  {
    no: '02',
    title: 'Shared expertise',
    body: 'Capital, engineering, and talent move freely across every brand in the group.',
    cta: 'How we operate',
    href: '/about',
  },
  {
    no: '03',
    title: 'Independent brands',
    body: 'Each business keeps its own brand, team, and roadmap. Autonomy by design.',
    cta: 'Explore brands',
    href: '/#portfolio',
  },
]

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="scroll-mt-24 pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="shell">
        {/* Section label. No rule of its own: the AnimatedDivider closing the
            stats strip above is the seam (a second rule here doubled it). */}
        <Reveal>
          <Eyebrow>Who we are</Eyebrow>
        </Reveal>

        {/* A 2x2 of equal halves, so the columns mirror row by row.
            Row 1: statement | standfirst. Row 2: logo wall | body + CTA - the
            body opens level with the wall's top edge and the CTA sits on its
            bottom edge. The six brands as a logo wall make "independent
            brands" concrete. On phones: statement, standfirst, body + CTA,
            wall (DOM order). */}
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-12">
          <div className="lg:col-start-1 lg:row-start-1">
            <TextReveal
              as="h2"
              className="display text-statement max-w-[15ch] [text-wrap:balance]"
              lines={[
                <>Independent brands.</>,
                <>
                  <em className="italic text-accent">One shared ambition.</em>
                </>,
              ]}
            />
          </div>

          <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-1 lg:mt-[0.875rem]">
            <p className="text-xl leading-[1.5] tracking-[-0.01em] text-ink sm:text-[1.375rem]">
              Digital Next is a multi-brand digital services and technology
              group - one identity, many specialist companies, each built to
              last.
            </p>
          </Reveal>

          <div className="flex flex-col lg:col-start-2 lg:row-start-2">
            <Reveal delay={0.2}>
              {/* Pulled up by the line's half-leading so the first line's
                  text, not its line box, starts on the wall's top edge. */}
              <p className="text-base leading-[1.7] text-muted lg:-mt-[0.35em]">
                Under a single group identity, we bring together specialist
                brands spanning digital marketing, SEO, performance marketing,
                influencer collaboration, and SaaS products. Each keeps its own
                team and roadmap, while sharing capital, technology, and talent
                across the group.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-8 lg:mt-auto">
              <Link
                href="/companies"
                className="group flex w-fit items-center gap-2.5 text-[0.9375rem] font-medium leading-snug text-ink transition-colors duration-[250ms] ease-editorial hover:text-accent"
              >
                <span className="relative">
                  Explore Our Brands
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[250ms] ease-editorial group-hover:scale-x-100" />
                </span>
                <span className="text-accent transition-transform duration-[250ms] ease-editorial group-hover:translate-x-[0.3125rem]">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          </div>

          {/* Logo wall: hairline cells (collapsed borders via the grid's
              top/left + each cell's right/bottom). Marks show in their own
              colours; on hover the cell glows in that brand's primary colour -
              a soft radial wash behind the mark plus a drop-shadow halo around
              it. Each opens the brand's site. */}
          <Reveal delay={0.25} className="lg:col-start-1 lg:row-start-2">
            <ul className="grid grid-cols-3 border-l border-t border-line">
              {companies.map((c) => (
                <li key={c.id} className="border-b border-r border-line">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${c.name} - visit site`}
                    className="group relative flex h-20 items-center justify-center overflow-hidden px-4 outline-none sm:h-24"
                    style={{ '--brand-glow': `${c.primaryColor}8C` } as React.CSSProperties}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[500ms] ease-editorial group-hover:opacity-100 group-focus-visible:opacity-100"
                      style={{
                        background: `radial-gradient(60% 75% at 50% 50%, ${c.primaryColor}1F 0%, ${c.primaryColor}0A 45%, transparent 75%)`,
                      }}
                    />
                    {c.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={withBase(c.logo)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width={c.logoWidth}
                        height={c.logoHeight}
                        className={[
                          'relative w-auto object-contain transition-[filter] duration-[500ms] ease-editorial [filter:drop-shadow(0_0_0_transparent)] group-hover:[filter:drop-shadow(0_0_0.625rem_var(--brand-glow))] group-focus-visible:[filter:drop-shadow(0_0_0.625rem_var(--brand-glow))]',
                          // Square mark vs wordmarks need different heights to
                          // read at the same optical size.
                          c.id === 'digital-web-solutions'
                            ? 'max-h-10 max-w-[5rem] sm:max-h-12 sm:max-w-[6rem]'
                            : 'max-h-5 max-w-[5.5rem] sm:max-h-6 sm:max-w-[7.5rem]',
                        ].join(' ')}
                      />
                    ) : (
                      // HireNext's logo is a typographic wordmark (no file).
                      <span className="relative font-sans text-base font-bold leading-none tracking-[-0.02em] text-ink transition-[text-shadow] duration-[500ms] ease-editorial [text-shadow:0_0_0_transparent] group-hover:[text-shadow:0_0_0.75rem_var(--brand-glow)] group-focus-visible:[text-shadow:0_0_0.75rem_var(--brand-glow)] sm:text-lg">
                        HireNext<span className="text-[#14B8A6]">.io</span>
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

      </div>

      {/* Strategic principles: a full-bleed dark band (the site's `dark`, as
          in Philosophy and the footer) that closes the section. Content sits
          on the shell; the cell grid is pulled out by its own padding
          (negative margin) so text aligns with the page while each cell's
          hover lift spans its full width. data-nav-dark flips the nav while
          it passes under the band. */}
      <div data-nav-dark className="mt-16 bg-dark text-white lg:mt-20">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-2 border-b border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
              <Eyebrow tone="light">Our principles</Eyebrow>
              <p className="text-[0.875rem] text-white/50">
                Three ideas behind every brand in the group.
              </p>
            </div>
          </Reveal>

          <div className="-mx-6 grid divide-y divide-white/10 sm:-mx-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:-mx-10">
            {principles.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.12} className="h-full">
                <Link
                  href={p.href}
                  className="group relative flex h-full flex-col px-6 py-10 outline-none transition-colors duration-[400ms] ease-editorial hover:bg-white/[0.04] focus-visible:bg-white/[0.04] sm:px-8 sm:py-12 lg:px-10 lg:py-14"
                >
                  {/* Accent bar drawing across the top on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-[500ms] ease-editorial group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                  <span className="font-serif text-[2.5rem] font-light leading-none tracking-tight text-accent transition-transform duration-[500ms] ease-editorial group-hover:translate-x-1 sm:text-[2.75rem]">
                    {p.no}
                  </span>
                  <h3 className="mt-5 font-serif text-[1.375rem] font-light leading-[1.2] tracking-tight text-white lg:text-[1.5rem]">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[36ch] text-[0.9375rem] leading-relaxed text-white/60 [text-wrap:pretty]">
                    {p.body}
                  </p>

                  {/* CTA pinned so all three align */}
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.875rem] font-medium text-white/85 transition-colors duration-[250ms] ease-editorial group-hover:text-white group-focus-visible:text-white">
                    <span className="relative">
                      {p.cta}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[250ms] ease-editorial group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                    </span>
                    <span className="text-accent transition-transform duration-[250ms] ease-editorial group-hover:translate-x-[0.3125rem]">
                      &rarr;
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
