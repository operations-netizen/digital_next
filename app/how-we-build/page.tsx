import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import HeroArc from '@/components/how-we-build/HeroArc'
import BuildTimeline from '@/components/how-we-build/BuildTimeline'
import BuildCycle from '@/components/how-we-build/BuildCycle'
import PortfolioFlywheel from '@/components/how-we-build/PortfolioFlywheel'

export const metadata = {
  title: 'How We Build',
  description:
    'The operating system behind Digital Next - how we found, back, and scale internet companies designed to compound for decades.',
}

const principles = [
  {
    no: '01',
    title: 'Own for decades',
    body: 'We buy and build to hold. No fund clock, no forced exit - time is the advantage we compound.',
  },
  {
    no: '02',
    title: 'Back operators',
    body: 'Companies are run by the people closest to the customer, with real ownership and real authority.',
  },
  {
    no: '03',
    title: 'Share resources',
    body: 'Capital, engineering, hiring, and distribution move across the group so every company moves faster.',
  },
  {
    no: '04',
    title: 'Protect independence',
    body: 'Each business keeps its brand, product, and culture. We add strength without adding bureaucracy.',
  },
]

const platform = [
  { name: 'Capital', note: 'Patient, permanent funding.' },
  { name: 'Engineering', note: 'Shared infrastructure and platforms.' },
  { name: 'Hiring', note: 'A recruitment engine for every team.' },
  { name: 'Marketing', note: 'Distribution and demand at scale.' },
  { name: 'Finance', note: 'Reporting, planning, and controls.' },
  { name: 'Leadership', note: 'Operators who have built before.' },
  { name: 'Legal', note: 'Contracts, IP, and compliance.' },
  { name: 'Technology', note: 'Data, AI, and tooling, inherited.' },
]

const neverControl = ['Brand', 'Product roadmap', 'Culture', 'Leadership']
const alwaysSupport = ['Capital', 'Hiring', 'Engineering', 'Distribution', 'Technology']

export default function HowWeBuildPage() {
  return (
    <>
      {/* 01 - Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pb-20">
        <div className="shell">
          <div className="grid gap-y-16 lg:grid-cols-12 lg:items-center lg:gap-x-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>How we build</Eyebrow>
              </Reveal>
              <TextReveal
                as="h1"
                trigger="mount"
                className="display mt-9 max-w-[16ch] text-hero"
                lines={[
                  <>Building companies</>,
                  <>that <em className="italic text-accent">compound</em></>,
                  <>for decades.</>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-11 max-w-[42ch] text-lg leading-[1.75] text-muted">
                  Digital Next is not a fund and not an agency. It is a permanent
                  home for internet companies - a repeatable operating system for
                  founding, backing, and scaling businesses meant to last.
                </p>
              </Reveal>
            </div>

            {/* Operating arc - animated editorial index */}
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.2}>
              <HeroArc />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 - Why We Exist */}
      <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14">
        <div className="shell">
          <div className="border-t border-line pt-8 sm:pt-10">
            <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal>
                  <Eyebrow>Why we exist</Eyebrow>
                </Reveal>
                <TextReveal
                  as="h2"
                  className="display mt-7 max-w-[16ch] text-statement"
                  lines={[
                    <>Most companies</>,
                    <>optimize for exits.</>,
                    <>We optimize</>,
                    <>for <em className="italic text-accent">endurance</em>.</>,
                  ]}
                />
              </div>
              <Reveal className="space-y-8 lg:col-span-5 lg:col-start-8 lg:pt-3" delay={0.15}>
                <p className="max-w-[42ch] text-lg leading-[1.8] text-muted">
                  The internet rewards patience. The businesses that matter in a
                  decade are rarely the ones engineered for a quick sale - they are
                  the ones that keep serving customers, compounding advantages, and
                  reinvesting for years.
                </p>
                <p className="max-w-[42ch] text-lg leading-[1.8] text-muted">
                  So we structure everything around endurance. We hold for the long
                  term, back operators who think in decades, and let each company
                  grow at the pace its market actually allows.
                </p>
                <p className="max-w-[42ch] text-lg leading-[1.8] text-muted">
                  The result is a group where success is measured in durability and
                  cash flow - not in the timing of an exit.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - Operating Principles (dark) */}
      <section data-nav-dark className="bg-dark py-16 text-white sm:py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <Eyebrow tone="light">Operating principles</Eyebrow>
            <h2 className="display mt-6 max-w-[18ch] text-statement text-white">
              Four rules that never{' '}
              <em className="italic text-accent">change</em>.
            </h2>
          </Reveal>

          <div className="mt-16 sm:mt-24">
            {principles.map((p) => (
              <Reveal key={p.no}>
                <div className="group relative overflow-hidden border-t border-white/10 last:border-b">
                  {/* huge background number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none font-serif text-[8rem] leading-none tracking-tightest text-white/[0.05] transition-colors duration-[600ms] ease-editorial group-hover:text-white/[0.09] sm:text-[11rem]"
                  >
                    {p.no}
                  </span>
                  {/* hover accent line */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-px w-16 origin-left scale-x-0 bg-accent transition-transform duration-[600ms] ease-editorial group-hover:scale-x-100"
                  />
                  <div className="relative grid gap-x-12 gap-y-5 py-16 transition-[padding] duration-[600ms] ease-editorial group-hover:pl-3 lg:grid-cols-12 lg:py-24">
                    <div className="flex items-baseline gap-6 lg:col-span-6">
                      <span className="font-mono text-[11px] tracking-meta text-accent/60 transition-colors duration-[600ms] ease-editorial group-hover:text-accent">
                        {p.no}
                      </span>
                      <h3 className="font-serif text-3xl font-normal leading-tight tracking-tight text-white/90 transition-transform duration-[600ms] ease-editorial group-hover:-translate-y-0.5 sm:text-4xl">
                        {p.title}
                      </h3>
                    </div>
                    <p className="max-w-[44ch] text-xl leading-[1.65] text-white/55 transition-colors duration-[600ms] ease-editorial group-hover:text-white/80 lg:col-span-5 lg:col-start-8">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 - How Every Company Is Built (the centerpiece) */}
      <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-28 lg:pb-12">
        <div className="shell">
          <Reveal>
            <Eyebrow>The build</Eyebrow>
            <h2 className="display mt-6 max-w-[20ch] text-statement">
              How every company is{' '}
              <em className="italic text-accent">built</em>.
            </h2>
            <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-muted">
              Every business in the group travels the same path - from a single
              thesis to a durable, independent company. The steps rarely skip; the
              order rarely changes.
            </p>
          </Reveal>

          <div className="mt-16 sm:mt-20 lg:mt-24">
            <BuildTimeline />
          </div>
        </div>
      </section>

      {/* 05 - Shared Platform */}
      <section className="pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12">
        <div className="shell">
          <div className="border-t border-line pt-8 sm:pt-10">
            <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-7">
                <Eyebrow>The shared platform</Eyebrow>
                <TextReveal
                  as="h2"
                  className="display mt-6 max-w-[16ch] text-statement"
                  lines={[
                    <>Every company inherits</>,
                    <>the strength</>,
                    <>of the <em className="italic text-accent">group</em>.</>,
                  ]}
                />
              </Reveal>
              <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.15}>
                <p className="max-w-[40ch] text-lg leading-relaxed text-muted">
                  Eight capabilities that would take a standalone company years to
                  build - available from day one.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-x-14 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {platform.map((c, i) => (
                <Reveal key={c.name} delay={(i % 4) * 0.06}>
                  <div className="group relative border-t border-line pt-6">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-px w-10 origin-left scale-x-0 bg-accent transition-transform duration-[600ms] ease-editorial group-hover:scale-x-100"
                    />
                    <span className="font-mono text-[10px] tabular-nums tracking-meta text-accent/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-5 font-serif text-[1.75rem] font-normal leading-tight tracking-tight text-ink">
                      {c.name}
                    </h3>
                    <p className="mt-3 max-w-[24ch] text-[15px] leading-[1.65] text-muted">
                      {c.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 - What We Never Control */}
      <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14">
        <div className="shell">
          <div className="border-t border-line pt-8 sm:pt-10">
            <Reveal>
              <Eyebrow>The boundary</Eyebrow>
              <h2 className="display mt-6 max-w-[18ch] text-statement">
                Independent companies.{' '}
                <em className="italic text-accent">Shared advantage</em>.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-x-20 gap-y-16 sm:mt-20 lg:grid-cols-2">
              {/* Never interfere */}
              <Reveal>
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="h-px w-6 bg-muted/40" />
                  <span className="font-mono text-[10px] uppercase tracking-meta text-muted">
                    We never interfere with
                  </span>
                </div>
                <ul className="mt-9">
                  {neverControl.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-5 border-t border-line py-6 last:border-b"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-4 w-4 shrink-0 items-center justify-center"
                      >
                        <span className="h-px w-3.5 bg-muted/50" />
                      </span>
                      <span className="font-serif text-[1.75rem] tracking-tight text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Always support */}
              <Reveal delay={0.12}>
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="h-px w-6 bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-meta text-accent">
                    We always support
                  </span>
                </div>
                <ul className="mt-9">
                  {alwaysSupport.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-5 border-t border-line py-6 last:border-b"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="h-4 w-4 shrink-0 text-accent"
                        strokeWidth={1.75}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8.5l3.5 3.5L13 4.5" />
                      </svg>
                      <span className="font-serif text-[1.75rem] tracking-tight text-ink">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 07 - Build Cycle (dark) */}
      <section data-nav-dark className="bg-dark py-16 text-white sm:py-20 lg:py-28">
        <div className="shell">
          <div className="grid gap-y-16 lg:grid-cols-12 lg:items-center lg:gap-x-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow tone="light">The build cycle</Eyebrow>
              <h2 className="display mt-6 max-w-[14ch] text-statement text-white">
                One engine, turning{' '}
                <em className="italic text-accent">continuously</em>.
              </h2>
              <p className="mt-7 max-w-[42ch] text-lg leading-relaxed text-white/55">
                Talent builds product. Product wins customers. Customers generate
                cash flow. Cash flow is reinvested into more talent. Each company
                runs the same self-funding loop - and the group compounds it across
                all of them.
              </p>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <BuildCycle />
            </div>
          </div>
        </div>
      </section>

      {/* 08 - Portfolio Flywheel */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="shell">
          <div className="grid gap-y-16 lg:grid-cols-12 lg:items-center lg:gap-x-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow>The portfolio flywheel</Eyebrow>
              <h2 className="display mt-6 max-w-[16ch] text-statement">
                What one company learns,{' '}
                <em className="italic text-accent">all of them gain</em>.
              </h2>
              <p className="mt-7 max-w-[42ch] text-lg leading-relaxed text-muted">
                A hiring engine built for one company staffs the next. Engineering
                built once is inherited by all. Distribution earned in one market
                opens the door in another. The more companies join, the stronger
                the advantage becomes for every one of them.
              </p>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <PortfolioFlywheel />
            </div>
          </div>
        </div>
      </section>

      {/* 09 - Closing Philosophy (dark) */}
      <section
        data-nav-dark
        className="relative overflow-hidden bg-[#0B0D12] pb-28 pt-20 text-center text-white sm:pb-32 sm:pt-24 lg:pb-40 lg:pt-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[440px] w-[760px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(79,70,255,0.09), transparent 70%)',
          }}
        />
        <div className="shell relative z-10">
          <div className="mx-auto flex max-w-[900px] flex-col items-center">
            <Reveal>
              <Eyebrow tone="light">The long game</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              className="display mt-8 max-w-[20ch] text-[clamp(2.9rem,6.3vw,5.75rem)] font-light leading-[1.04] tracking-tightest text-white"
              lines={[
                <>The next enduring</>,
                <>internet companies</>,
                <>
                  <em className="italic text-accent">haven&rsquo;t been built yet</em>.
                </>,
              ]}
            />
            <Reveal delay={0.15}>
              <p className="mx-auto mt-8 max-w-[44ch] text-lg leading-[1.75] text-white/60">
                If you are building one - or thinking about it - we would like to
                talk. This is the operating system we bring to every company we own.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <Link
                  href="/companies"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                >
                  Explore Companies
                  <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-8 py-4 text-sm font-medium text-white transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white/[0.04]"
                >
                  Contact
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
