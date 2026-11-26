import { pageMetadata } from '@/lib/seo'
import { withBase } from '@/lib/asset'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import ProcessTimeline from '@/components/careers/ProcessTimeline'
import CareerForm from '@/components/careers/CareerForm'
import { companies } from '@/lib/companies'
import {
  careerIndex,
  whyJoin,
  workPrinciples,
  values,
  companyCareers,
  roles,
  roleFilters,
} from '@/lib/careers'

export const metadata = pageMetadata({
  title: 'Careers',
  description:
    'Build and operate independent internet businesses across the Digital Next group - meaningful ownership, long-term company building, and shared support.',
  path: '/careers',
})

const heroMeta = [
  'Independent Teams',
  'Global Opportunities',
  'Long-term Ownership',
]

export default function CareersPage() {
  return (
    <>
      {/* 01 - Hero */}
      <section className="pt-32 pb-10 sm:pt-40 sm:pb-14 lg:pb-16">
        <div className="shell">
          <div className="grid gap-y-16 lg:grid-cols-12 lg:items-center lg:gap-x-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Careers</Eyebrow>
              </Reveal>
              <TextReveal
                as="h1"
                trigger="mount"
                className="display mt-8 max-w-[12ch] text-hero"
                lines={[
                  <>Build work</>,
                  <>
                    that <em className="italic text-accent">lasts</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-9 max-w-[50ch] text-lg leading-[1.75] text-muted">
                  Join teams building and operating independent internet businesses
                  across technology, AI, marketing, recruitment, SEO, and digital
                  products.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-[50ch] text-lg leading-[1.75] text-muted">
                  Digital Next brands move with the ownership and speed of
                  independent businesses while benefiting from shared talent,
                  technology, and long-term support.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <a
                    href="#open-roles"
                    className="group inline-flex min-h-[2.75rem] items-center gap-2.5 rounded-xl bg-ink px-8 py-4 text-sm font-medium text-white transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent"
                  >
                    View Open Roles
                    <span className="transition-transform duration-300 ease-editorial group-hover:translate-y-0.5">
                      &darr;
                    </span>
                  </a>
                  <Link
                    href="/companies"
                    className="group inline-flex min-h-[2.75rem] items-center gap-2.5 rounded-xl border border-black/[0.08] px-8 py-4 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    Meet the Brands
                    <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1.5">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.34}>
                <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.625rem] uppercase tracking-meta text-muted/70">
                  {heroMeta.map((m, i) => (
                    <span key={m} className="flex items-center gap-4">
                      {i > 0 && <span aria-hidden="true" className="h-2.5 w-px bg-line" />}
                      {m}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Career index - editorial, not a menu */}
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.2}>
              <span className="block font-mono text-[0.625rem] uppercase tracking-[0.24em] text-muted/50">
                Where people build
              </span>
              <ul className="mt-7">
                {careerIndex.map((c, i) => (
                  <li
                    key={c}
                    className="flex items-baseline gap-5 border-t border-line py-[0.9rem] last:border-b"
                  >
                    <span className="w-6 shrink-0 font-mono text-[0.625rem] tabular-nums tracking-meta text-accent/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-lg tracking-tight text-ink/90">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 - Why join the group */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="shell">
          <div className="border-t border-line pt-8 sm:pt-10">
            <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Reveal>
                  <Eyebrow>Why Digital Next</Eyebrow>
                </Reveal>
                <TextReveal
                  as="h2"
                  className="display mt-6 max-w-[16ch] text-statement"
                  lines={[
                    <>Independent teams.</>,
                    <>
                      <em className="italic text-accent">Shared momentum</em>.
                    </>,
                  ]}
                />
              </div>
              <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.15}>
                <p className="max-w-[44ch] text-lg leading-[1.75] text-muted">
                  Every brand keeps its own identity, leadership, product
                  direction, and culture. The group provides the shared
                  infrastructure that helps strong teams move faster without
                  becoming corporate.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-x-16 gap-y-14 sm:mt-12 lg:grid-cols-3">
              {whyJoin.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.08}>
                  <div className="border-t border-line pt-6">
                    <h3 className="font-serif text-[1.9rem] font-normal leading-tight tracking-tight text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-4 max-w-[30ch] text-lg leading-[1.7] text-muted">
                      {w.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 - How work happens (dark) */}
      <section data-nav-dark className="bg-dark py-14 text-white sm:py-16 lg:py-20">
        <div className="shell">
          <Reveal>
            <Eyebrow tone="light">How we work</Eyebrow>
            <h2 className="display mt-6 max-w-[16ch] text-statement text-white">
              Small teams.
              <br />
              <em className="italic text-accent">Real responsibility</em>.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-x-16 gap-y-px sm:mt-12 sm:grid-cols-2">
            {workPrinciples.map((p) => (
              <Reveal key={p.no}>
                <div className="group relative border-t border-white/10 py-10 lg:py-12">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-px w-12 origin-left scale-x-0 bg-accent transition-transform duration-[600ms] ease-editorial group-hover:scale-x-100"
                  />
                  <span className="font-mono text-[0.6875rem] tracking-meta text-accent/70">
                    {p.no}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-normal tracking-tight text-white/90 transition-transform duration-[600ms] ease-editorial group-hover:-translate-y-0.5 sm:text-[1.75rem]">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-lg leading-[1.7] text-white/50 transition-colors duration-[600ms] ease-editorial group-hover:text-white/75">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 - What we value */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="shell">
          <div className="border-t border-line pt-8 sm:pt-10">
            <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Reveal>
                  <Eyebrow>Who thrives here</Eyebrow>
                </Reveal>
                <TextReveal
                  as="h2"
                  className="display mt-6 max-w-[16ch] text-statement"
                  lines={[
                    <>Curious builders.</>,
                    <>
                      <em className="italic text-accent">Calm operators</em>.
                    </>,
                  ]}
                />
              </div>
              <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.15}>
                <p className="max-w-[44ch] text-lg leading-[1.75] text-muted">
                  We look for people who combine ambition with judgment - people
                  who care about craft, ownership, and useful outcomes.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-x-16 sm:mt-12 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) * 0.06}>
                  <div className="border-t border-line py-8">
                    <h3 className="font-serif text-2xl font-normal tracking-tight text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-muted">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Companies and career paths */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="shell">
          <div className="border-t border-line pt-8 sm:pt-10">
            <Reveal>
              <Eyebrow>Careers across the group</Eyebrow>
              <h2 className="display mt-6 max-w-[16ch] text-statement">
                Six brands.{' '}
                <em className="italic text-accent">Many ways to build</em>.
              </h2>
            </Reveal>

            <div className="mt-10 sm:mt-12">
              {companies.map((c, i) => {
                const cc = companyCareers[c.id]
                return (
                  <Reveal key={c.id} delay={(i % 2) * 0.05}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${c.name} - ${cc.label}. View opportunities (opens in a new tab).`}
                      className={`group grid grid-cols-1 items-center gap-x-8 gap-y-4 border-t border-line py-8 outline-none transition-colors duration-[500ms] ease-editorial focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/40 sm:py-10 lg:grid-cols-12 lg:gap-x-12`}
                    >
                      {/* Logo - its own aligned column */}
                      <div className="flex h-8 items-center lg:col-span-3">
                        {c.logo ? (
                          <img
                            src={withBase(c.logo)}
                            alt={`${c.name} logo`}
                            loading="lazy"
                            className={`w-auto object-contain object-left opacity-75 grayscale transition-[filter,opacity] duration-[600ms] ease-editorial group-hover:opacity-100 group-hover:grayscale-0 ${cc.logoMax}`}
                          />
                        ) : (
                          <span className="font-sans text-xl font-bold tracking-[-0.02em] text-ink">
                            HireNext
                            <span className="text-ink/40 transition-colors duration-[600ms] ease-editorial group-hover:text-[#14B8A6]">
                              .io
                            </span>
                          </span>
                        )}
                      </div>

                      {/* Name + category */}
                      <div className="lg:col-span-6">
                        <h3 className="font-serif text-[1.65rem] font-normal leading-tight tracking-tight text-ink transition-transform duration-[500ms] ease-editorial group-hover:-translate-y-0.5 sm:text-[1.75rem]">
                          {c.name}
                        </h3>
                        <span className="mt-2 block font-mono text-[0.625rem] uppercase tracking-meta text-muted">
                          {cc.label}
                        </span>
                      </div>

                      {/* Hiring CTA */}
                      <div className="lg:col-span-3 lg:justify-self-end">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-[500ms] ease-editorial group-hover:text-accent">
                          <span className="relative">
                            View opportunities
                            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[500ms] ease-editorial group-hover:scale-x-100" />
                          </span>
                          <span className="transition-transform duration-[500ms] ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1">
                            &#8599;
                          </span>
                        </span>
                      </div>
                    </a>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 06 - Open roles. Padding follows the content: a full roles list
          earns the generous rhythm, the empty state would just leave a void. */}
      <section
        id="open-roles"
        className={
          roles.length > 0
            ? 'py-20 sm:py-28 lg:py-32'
            : 'py-14 sm:py-16 lg:py-20'
        }
      >
        <div className="shell">
          <div className="border-t border-line pt-8 sm:pt-10">
            <Reveal>
              <Eyebrow>Open roles</Eyebrow>
              <TextReveal
                as="h2"
                className="display mt-6 max-w-[14ch] text-statement"
                lines={[
                  <>Find where</>,
                  <>
                    you can <em className="italic text-accent">contribute</em>.
                  </>,
                ]}
              />
            </Reveal>

            {roles.length > 0 ? (
              <>
                {/* Filters (only when roles exist) */}
                <Reveal delay={0.12}>
                  <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
                    {roleFilters.map((f, i) => (
                      <span key={f} className={i === 0 ? 'text-ink' : 'text-muted/60'}>
                        {f}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <div className="mt-8">
                  {roles.map((r) => (
                    <Reveal key={r.title}>
                      <a
                        href={r.url}
                        className="group grid items-baseline gap-x-8 gap-y-2 border-t border-line py-8 outline-none transition-colors duration-[500ms] ease-editorial last:border-b hover:bg-[#FCFCFF] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/40 lg:grid-cols-12"
                      >
                        <h3 className="font-serif text-2xl tracking-tight text-ink transition-transform duration-[500ms] ease-editorial group-hover:-translate-y-0.5 lg:col-span-5">
                          {r.title}
                        </h3>
                        <span className="font-mono text-[0.6875rem] uppercase tracking-meta text-muted lg:col-span-3">
                          {r.company}
                        </span>
                        <span className="font-mono text-[0.6875rem] uppercase tracking-meta text-muted/70 lg:col-span-3">
                          {r.department} · {r.workModel}
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-accent lg:col-span-1 lg:justify-end">
                          &#8599;
                        </span>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </>
            ) : (
              // Empty state - honest, calm, credible. Deliberately a single
              // narrow column: the 12-col split left an orphaned half-row of
              // whitespace whenever there was nothing to list.
              <Reveal delay={0.12}>
                <div className="mt-10 max-w-[62ch] border-t border-line pt-7 sm:pt-8">
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-ink/25"
                    />
                    <span className="font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
                      0 roles open
                    </span>
                  </div>

                  <p className="mt-5 font-serif text-[clamp(1.6rem,2.6vw,2.15rem)] font-light leading-[1.12] tracking-tightest text-ink">
                    No open roles right now.
                  </p>

                  <p className="mt-4 max-w-[52ch] text-lg leading-[1.7] text-muted">
                    We hire selectively across the group. Share your profile and
                    area of interest, and we will keep it in mind when a
                    relevant opportunity opens.
                  </p>

                  <div className="mt-7 flex flex-col gap-x-10 gap-y-4 sm:flex-row sm:items-center">
                    <a
                      href="#general-interest"
                      className="group inline-flex min-h-[2.75rem] items-center gap-2 text-base font-medium text-accent"
                    >
                      <span className="relative">
                        Share Your Profile
                        <span className="absolute -bottom-1 left-0 h-px w-full bg-accent/30 transition-colors duration-[500ms] ease-editorial group-hover:bg-accent" />
                      </span>
                      <span className="transition-transform duration-[500ms] ease-editorial group-hover:translate-x-1.5">
                        &rarr;
                      </span>
                    </a>
                    <Link
                      href="/companies"
                      className="group inline-flex min-h-[2.75rem] items-center gap-2 text-base font-medium text-ink transition-colors duration-[500ms] ease-editorial hover:text-accent"
                    >
                      <span className="relative">
                        Explore Our Brands
                        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[500ms] ease-editorial group-hover:scale-x-100" />
                      </span>
                      <span className="transition-transform duration-[500ms] ease-editorial group-hover:translate-x-1.5">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* 07 - Hiring process */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="shell">
          <div className="border-t border-line pt-8 sm:pt-10">
            <Reveal>
              <Eyebrow>What to expect</Eyebrow>
              <TextReveal
                as="h2"
                className="display mt-6 max-w-[20ch] text-statement"
                lines={[
                  <>A clear process,</>,
                  <>
                    without{' '}
                    <em className="italic text-accent">unnecessary steps</em>.
                  </>,
                ]}
              />
            </Reveal>
            <div className="mt-12 sm:mt-12">
              <ProcessTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* 08 - General interest (dark) */}
      <section
        id="general-interest"
        data-nav-dark
        className="bg-[#0B0D12] py-14 text-white sm:py-16 lg:py-20"
      >
        <div className="shell">
          <div className="grid gap-y-16 lg:grid-cols-12 lg:items-start lg:gap-x-16">
            <div className="lg:col-span-5 lg:pt-1">
              <Reveal>
                <Eyebrow tone="light">Don&rsquo;t see the right role?</Eyebrow>
              </Reveal>
              <TextReveal
                as="h2"
                className="display mt-7 max-w-[16ch] text-statement text-white"
                lines={[
                  <>Good people are worth</>,
                  <>knowing</>,
                  <>
                    <em className="italic text-accent">before the opening exists</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-[38ch] text-lg leading-[1.75] text-white/60">
                  Tell us what you do, what kind of problems you want to solve, and
                  which Digital Next brand interests you.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <Link
                  href="/contact"
                  className="group mt-10 inline-flex min-h-[2.75rem] items-center gap-2 text-sm font-medium text-white transition-colors duration-300 ease-editorial hover:text-accent"
                >
                  <span className="relative">
                    Contact Us
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-editorial group-hover:scale-x-100" />
                  </span>
                  <span className="text-accent transition-transform duration-300 ease-editorial group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-6 lg:col-start-7 lg:border-l lg:border-white/10 lg:pl-16" delay={0.12}>
              <span className="mb-8 block font-mono text-[0.625rem] uppercase tracking-meta text-white/40">
                Share your profile
              </span>
              <CareerForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
