import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import CompanyShowcaseSection from '@/components/companies/CompanyShowcaseSection'
import { companies } from '@/lib/companies'

export const metadata = {
  title: 'Brands',
  description:
    'Six independent internet businesses owned and scaled by Digital Next - one long-term ownership model, one shared operating advantage.',
}

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
    metadata: string[]
    logoMax: string
  }
> = {
  'digital-web-solutions': {
    category: 'Digital Marketing & SEO',
    description:
      "Advanced digital marketing and performance strategy for agencies and enterprises - combining strategic insight, SEO, and growth-focused execution. The Group's largest and original brand, tracing back to the founding of Digital Web Solutions Pvt. Ltd. in 2006.",
    metadata: ['Digital Marketing', 'Agencies & Enterprises', 'Original Brand'],
    logoMax: 'h-32',
  },
  wytlabs: {
    category: 'Full-Service Marketing (US)',
    description:
      'A full-service marketing agency catering exclusively to eCommerce, SaaS, and healthcare brands in the United States. Specializations include SEO, email marketing automation, paid ads, and web development.',
    metadata: ['United States', 'eCommerce, SaaS & Healthcare', 'SEO & Paid Ads'],
    logoMax: 'h-20',
  },
  hirenext: {
    category: 'ATS & Talent Platform',
    description:
      'An internally developed Applicant Tracking System (ATS) and talent-management platform, currently in development. On launch, it will support recruitment operations across all Digital Next brands, with a possible external commercialization path.',
    metadata: ['In Development', 'HR Technology', 'Built In-House'],
    logoMax: 'h-20',
  },
  rankwatch: {
    category: 'SEO & Rank-Tracking SaaS',
    description:
      "A proprietary SaaS platform helping businesses and agencies track SEO performance, analyze competitors, and make data-driven marketing decisions. Introduced in 2015; the Group's flagship product and recurring-revenue business.",
    metadata: ['SEO SaaS', 'Flagship Product', 'Recurring Revenue'],
    logoMax: 'h-16',
  },
  collabx: {
    category: 'Influencer & Partnership Platform',
    description:
      'A new-age influencer and partnership management platform simplifying collaborations, campaign tracking, and performance analytics. Launched 2025; currently in a high-growth scale-up phase.',
    metadata: ['Influencer Marketing', 'Campaign Analytics', 'Scale-Up Phase'],
    logoMax: 'h-24',
  },
  smegoweb: {
    category: 'Full-Service Marketing (ANZ)',
    description:
      'A full-service marketing agency serving small and medium businesses across Australia and New Zealand, launched in 2012, with a dedicated New Zealand operation run in local partnership.',
    metadata: ['Australia & New Zealand', 'SME Focus', 'NZ Partnership'],
    logoMax: 'h-20',
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
      {/* 01 - Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pb-24">
        <div className="shell">
          <div className="grid gap-y-16 lg:grid-cols-12 lg:items-start lg:gap-x-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Our brands</Eyebrow>
              </Reveal>
              <TextReveal
                as="h1"
                trigger="mount"
                className="display mt-8 max-w-[15ch] text-hero"
                lines={[
                  <>Six brands.</>,
                  <>
                    One <em className="italic text-accent">shared ambition</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-[54ch] text-lg leading-relaxed text-muted">
                  Digital Next brings together independent internet businesses
                  across digital marketing, AI, SaaS, recruitment, collaboration,
                  SEO, and enterprise technology. Each brand operates with its
                  own identity, team, and roadmap while benefiting from the
                  strength of the group.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
                  <span>
                    <span className="text-ink">6</span> Brands
                  </span>
                  <span aria-hidden="true" className="h-3 w-px bg-line" />
                  <span>
                    <span className="text-ink">450+</span> People
                  </span>
                  <span aria-hidden="true" className="h-3 w-px bg-line" />
                  <span>Global Operations</span>
                  <span aria-hidden="true" className="h-3 w-px bg-line" />
                  <span>Long-term Ownership</span>
                </div>
              </Reveal>
            </div>

            {/* Vertical company index - an editorial contents list */}
            <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-3" delay={0.2}>
              <span className="block font-mono text-[0.625rem] uppercase tracking-[0.24em] text-muted/50">
                Index
              </span>
              <ul className="mt-7">
                {companies.map((c, i) => (
                  <li key={c.id}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-5 border-t border-ink/[0.07] py-3.5 outline-none transition-colors duration-[600ms] ease-editorial last:border-b focus-visible:text-ink"
                    >
                      <span className="w-6 shrink-0 font-mono text-[0.625rem] tabular-nums tracking-[0.2em] text-muted/40 transition-colors duration-[600ms] ease-editorial group-hover:text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-lg tracking-tight text-muted transition-all duration-[600ms] ease-editorial group-hover:translate-x-1 group-hover:text-ink">
                        {c.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
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
              index={String(i + 1).padStart(2, '0')}
              name={c.name}
              category={s.category}
              description={s.description}
              metadata={[
                c.founded
                  ? `Founded ${c.founded}`
                  : c.status ?? 'In development',
                ...s.metadata,
              ]}
              logo={c.logo}
              logoAlt={`${c.name} logo`}
              logoWidth={c.logoWidth}
              logoHeight={c.logoHeight}
              logoMax={s.logoMax}
              href={c.url}
              reverse={i % 2 === 1}
              fallback={
                <span className="font-sans text-[2.25rem] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[3.25rem]">
                  HireNext
                  <span className="text-ink/40 transition-colors duration-500 ease-editorial group-hover:text-[#14B8A6]">
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
                <div className="group border-t border-white/10 pt-7 transition-colors duration-[600ms] ease-editorial">
                  <span className="font-mono text-[0.6875rem] tracking-meta text-accent/80">
                    {p.no}
                  </span>
                  <h3 className="mt-6 font-serif text-[1.75rem] font-normal leading-tight tracking-tight text-white/90 transition-colors duration-[600ms] ease-editorial group-hover:text-white">
                    {p.name}
                  </h3>
                  <p className="mt-3 max-w-[32ch] text-base leading-[1.7] text-white/45 transition-colors duration-[600ms] ease-editorial group-hover:text-white/70">
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
