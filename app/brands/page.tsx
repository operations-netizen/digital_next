import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import CompanyShowcaseSection from '@/components/companies/CompanyShowcaseSection'
import BrandNameWall from '@/components/companies/BrandNameWall'
import { companies } from '@/lib/companies'

export const metadata = pageMetadata({
  title: 'Brands',
  description:
    'Six independent internet businesses owned and scaled by Digital Next - one long-term ownership model, one shared operating advantage.',
  path: '/brands',
})

// Showcase copy per company (id-keyed); logos/urls/names/founded come from the
// data. `Founded <year>` is prepended to every fact list at render time (or the
// brand's `status`, if it has not launched), so it stays in sync with
// companies.ts rather than being retyped here.
// `logoMax` optically normalizes each mark to a comparable visual weight
// (~64-128px) - stacked marks run taller, horizontal wordmarks shorter.
const showcase: Record<
  string,
  {
    category: string
    description: string
    /** Labelled facts beside the logo (founded/status and website are
     *  added from the company record). */
    facts: { label: string; value: string }[]
    /** Logo height inside the brand tile - one optical size for all six. */
    logoMax: string
  }
> = {
  'digital-web-solutions': {
    category: 'Digital Marketing & SEO',
    description:
      "Advanced digital marketing and performance strategy for agencies and enterprises - combining strategic insight, SEO, and growth-focused execution. The Group's largest and original brand, tracing back to the founding of Digital Web Solutions Pvt. Ltd. in 2006.",
    facts: [
      { label: 'Market', value: 'Agencies & enterprises' },
      { label: 'Focus', value: 'Digital marketing' },
      { label: 'Role', value: 'Original brand' },
    ],
    logoMax: 'h-20',
  },
  wytlabs: {
    category: 'Full-Service Marketing (US)',
    description:
      'A full-service marketing agency catering exclusively to eCommerce, SaaS, and healthcare brands in the United States. Specializations include SEO, email marketing automation, paid ads, and web development.',
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Clients', value: 'eCommerce, SaaS & healthcare' },
      { label: 'Services', value: 'SEO & paid ads' },
    ],
    logoMax: 'h-9',
  },
  hirenext: {
    category: 'ATS & Talent Platform',
    description:
      'An internally developed Applicant Tracking System (ATS) and talent-management platform, currently in development. On launch, it will support recruitment operations across all Digital Next brands, with a possible external commercialization path.',
    facts: [
      { label: 'Category', value: 'HR technology' },
      { label: 'Built', value: 'In-house' },
    ],
    logoMax: 'h-12',
  },
  rankwatch: {
    category: 'SEO & Rank-Tracking SaaS',
    description:
      "A proprietary SaaS platform helping businesses and agencies track SEO performance, analyze competitors, and make data-driven marketing decisions. Introduced in 2015; the Group's flagship product and recurring-revenue business.",
    facts: [
      { label: 'Product', value: 'SEO SaaS' },
      { label: 'Role', value: 'Flagship product' },
      { label: 'Model', value: 'Recurring revenue' },
    ],
    logoMax: 'h-11',
  },
  collabx: {
    category: 'Influencer & Partnership Platform',
    description:
      'A new-age influencer and partnership management platform simplifying collaborations, campaign tracking, and performance analytics. Launched 2025; currently in a high-growth scale-up phase.',
    facts: [
      { label: 'Focus', value: 'Influencer marketing' },
      { label: 'Product', value: 'Campaign analytics' },
      { label: 'Stage', value: 'Scale-up phase' },
    ],
    logoMax: 'h-11',
  },
  smegoweb: {
    category: 'Full-Service Marketing (ANZ)',
    description:
      'A full-service marketing agency serving small and medium businesses across Australia and New Zealand, launched in 2012, with a dedicated New Zealand operation run in local partnership.',
    facts: [
      { label: 'Market', value: 'Australia & New Zealand' },
      { label: 'Clients', value: 'Small & medium businesses' },
      { label: 'NZ', value: 'Local partnership' },
    ],
    logoMax: 'h-12',
  },
}

const platform = [
  { no: '01', name: 'Capital', note: 'Patient, permanent funding.' },
  { no: '02', name: 'Engineering', note: 'Shared infrastructure and platforms.' },
  { no: '03', name: 'Hiring', note: 'A recruitment engine for every brand.' },
  { no: '04', name: 'Operations', note: 'Finance, legal, and operations.' },
  { no: '05', name: 'Distribution', note: 'Demand and audience at scale.' },
  { no: '06', name: 'Leadership', note: 'Operators who have built before.' },
]

export default function CompaniesPage() {
  return (
    <>
      {/* 01 - Hero: statement + copy on the left; on the right the six
          brands as a compact hover-reveal list (hover a name: the rest dim,
          it takes its brand colour, a preview card follows the cursor). It
          doubles as the index - each name jumps to its showcase below. */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="shell">
          <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="flex items-baseline gap-4">
                  <Eyebrow>Our brands</Eyebrow>
                  <span className="font-mono text-[0.6875rem] tabular-nums tracking-meta text-accent">
                    {String(companies.length).padStart(2, '0')}
                  </span>
                </div>
              </Reveal>
              <TextReveal
                as="h1"
                trigger="mount"
                className="display text-statement mt-6 max-w-[15ch] [text-wrap:balance]"
                lines={[
                  <>Six brands.</>,
                  <>
                    One <em className="italic text-accent">shared ambition</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-[34rem] text-base leading-[1.7] text-muted [text-wrap:pretty] sm:text-[1.0625rem]">
                  Digital Next brings together independent internet businesses
                  across digital marketing, AI, SaaS, recruitment,
                  collaboration, SEO, and enterprise technology. Each brand
                  operates with its own identity, team, and roadmap while
                  benefiting from the strength of the group.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:pt-1">
              <BrandNameWall />
            </div>
          </div>
        </div>
      </section>

      {/* 02 - Company showcase */}
      <section className="pt-0">
        <div className="shell">
          <Reveal>
            <div className="border-t border-line pb-4 pt-6">
              <Eyebrow>The companies</Eyebrow>
            </div>
          </Reveal>
        </div>

        {companies.map((c, i) => {
          const s = showcase[c.id]
          return (
            <CompanyShowcaseSection
              key={c.id}
              id={c.id}
              index={String(i + 1).padStart(2, '0')}
              name={c.name}
              category={s.category}
              description={s.description}
              facts={[
                c.founded
                  ? { label: 'Founded', value: c.founded }
                  : { label: 'Status', value: c.status ?? 'In development' },
                ...s.facts,
              ]}
              color={c.primaryColor}
              logo={c.logo}
              logoAlt={`${c.name} logo`}
              logoWidth={c.logoWidth}
              logoHeight={c.logoHeight}
              logoMax={s.logoMax}
              href={c.url}
              reverse={i % 2 === 1}
              fallback={
                <span className="font-sans text-[2rem] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[2.5rem]">
                  HireNext
                  <span className="text-[#14B8A6]">
                    .io
                  </span>
                </span>
              }
            />
          )
        })}
      </section>

      {/* 03 - Shared platform (dark) */}
      <section data-nav-dark className="section bg-dark text-white">
        <div className="shell">
          <Reveal>
            <Eyebrow tone="light">The shared platform</Eyebrow>
            <h2 className="display mt-6 max-w-[16ch] text-statement text-white">
              Different brands.
              <br />
              <em className="italic text-accent">One operating advantage</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-white/55">
              Each brand operates independently while gaining access to the
              shared capabilities that help internet businesses compound over
              time.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-x-16 gap-y-14 sm:mt-24 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            {platform.map((p) => (
              <Reveal key={p.no}>
                {/* Hover: an accent rule draws across the top hairline, a soft
                    accent glow rises from it, the number lights up with a
                    growing tick, the title nudges right. Decorative only -
                    these aren't links. */}
                <div className="group relative border-t border-white/10 pb-4 pt-7">
                  <span
                    aria-hidden="true"
                    className="absolute -top-px left-0 h-0.5 w-full origin-left scale-x-0 bg-accent shadow-[0_0_1rem_0.125rem_rgba(79,70,255,0.55)] transition-transform duration-[600ms] ease-editorial group-hover:scale-x-100"
                  />
                  {/* Glow spills past the item on every side and fades to fully
                      transparent before its own edge (closest-side), so it
                      never shows a hard boundary. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-x-12 -top-16 h-[16rem] bg-[radial-gradient(closest-side,rgba(79,70,255,0.2),rgba(79,70,255,0.06)_55%,transparent)] opacity-0 transition-opacity duration-[600ms] ease-editorial group-hover:opacity-100"
                  />
                  <span className="relative flex items-center gap-4">
                    <span className="font-mono text-[0.6875rem] tracking-meta text-accent/80 transition-colors duration-[600ms] ease-editorial group-hover:text-accent">
                      {p.no}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-accent transition-[width] duration-[600ms] ease-editorial group-hover:w-10"
                    />
                  </span>
                  <h3 className="relative mt-6 font-serif text-[1.75rem] font-normal leading-tight tracking-tight text-white/90 transition-[color,transform] duration-[600ms] ease-editorial group-hover:translate-x-1 group-hover:text-white">
                    {p.name}
                  </h3>
                  <p className="relative mt-3 max-w-[32ch] text-base leading-[1.7] text-white/45 transition-colors duration-[600ms] ease-editorial group-hover:text-white/80">
                    {p.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 - Portfolio philosophy (bridge) */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-12">
            <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <Reveal>
                  <Eyebrow>Our model</Eyebrow>
                </Reveal>
                <TextReveal
                  as="h2"
                  className="display mt-6 max-w-[26ch] text-statement"
                  lines={[
                    <>We do not assemble brands for a quick exit.</>,
                    <>
                      We build a group{' '}
                      <em className="italic text-accent">designed to compound</em>.
                    </>,
                  ]}
                />
              </div>
              <Reveal className="lg:col-span-4" delay={0.15}>
                <p className="max-w-[44ch] text-lg leading-relaxed text-muted">
                  Every business keeps its identity and operating autonomy. Digital
                  Next focuses on long-term ownership, shared expertise, and
                  patient company building rather than short-term financial
                  engineering.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Final CTA (dark) */}
      <section
        data-nav-dark
        className="relative overflow-hidden bg-[#0B0D12] pb-28 pt-32 text-center text-white sm:pb-32 sm:pt-40 lg:pb-36 lg:pt-44"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[40%] z-0 h-[27.5rem] w-[47.5rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(79,70,255,0.09), transparent 70%)',
          }}
        />
        <div className="shell relative z-10">
          <div className="mx-auto flex max-w-[55rem] flex-col items-center">
            <Reveal>
              <Eyebrow tone="light">Build with us</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              className="display mt-8 max-w-[20ch] text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[1.04] tracking-tightest text-white"
              lines={[
                <>The next enduring brand</>,
                <>
                  may already be{' '}
                  <em className="italic text-accent">taking shape</em>.
                </>,
              ]}
            />
            <Reveal delay={0.15}>
              <p className="mx-auto mt-7 max-w-[35rem] text-lg leading-relaxed text-white/60">
                Whether you are building, operating, or considering the future of
                an internet business, we are always open to thoughtful
                conversations.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_14px_34px_-12px_rgba(79,70,255,0.55)]"
                >
                  Start a Conversation
                  <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-8 py-4 text-sm font-medium text-white transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white/[0.04]"
                >
                  About Digital Next
                  <span className="text-accent transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
