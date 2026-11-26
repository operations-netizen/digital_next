import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import CountUp from '@/components/ui/CountUp'
import HeroArc from '@/components/how-we-build/HeroArc'
import BuildTimeline from '@/components/how-we-build/BuildTimeline'
import BuildCycle from '@/components/how-we-build/BuildCycle'
import PortfolioFlywheel from '@/components/how-we-build/PortfolioFlywheel'

export const metadata = pageMetadata({
  title: 'How We Build',
  description:
    'The operating system behind Digital Next - how we found, back, and scale internet companies designed to compound for decades.',
  path: '/how-we-build',
})

const principles = [
  {
    no: '01',
    title: 'Own for decades',
    body: 'We buy and build to hold. No fund clock, no forced exit - time is the advantage we compound.',
  },
  {
    no: '02',
    title: 'Back operators',
    body: 'Brands are run by the people closest to the customer, with real ownership and real authority.',
  },
  {
    no: '03',
    title: 'Share resources',
    body: 'Capital, engineering, hiring, and distribution move across the group so every brand moves faster.',
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
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-28 lg:pb-20">
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
                  <>Building brands</>,
                  <>that <em className="italic text-accent">compound</em></>,
                  <>for decades.</>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-11 max-w-[42ch] text-lg leading-[1.75] text-muted">
                  Digital Next is not a fund and not an agency. It is a permanent
                  home for internet brands, a repeatable operating system for
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

      {/* 02 - Why We Exist, in two parts. The thesis sits on a dark band
          (after the white hero); the closing line follows as a serif
          pull-quote on white, which then hands over to the dark principles
          section - so the page alternates cleanly. */}
      <section
        data-nav-dark
        className="relative overflow-hidden bg-dark py-16 text-white sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[48rem] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(79,70,255,0.18),transparent)]"
        />
        <div className="shell relative">
          <div className="mx-auto flex max-w-[52rem] flex-col items-center text-center">
            <Reveal>
              <Eyebrow tone="light">Why we exist</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              className="display mt-8 text-[clamp(2.25rem,4.6vw,4.25rem)] leading-[1.06] [text-wrap:balance]"
              lines={[
                <span key="a" className="text-white">Most companies optimize for exits.</span>,
                <span key="b" className="text-white">
                  We optimize for <em className="italic text-accent">endurance</em>.
                </span>,
              ]}
            />
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-[44ch] text-[1.0625rem] leading-[1.7] text-white/60 sm:text-lg">
                The internet rewards patience. We hold for the long term, back
                operators who think in decades, and let each brand grow at the
                pace its market actually allows.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02b - The closing line of "Why we exist", in a white card inset
          within the shell on the continuing dark background (1rem corners,
          no shadow). Spacing above/below comes from the neighbouring dark
          bands' own padding, so it sits evenly between them. */}
      <section data-nav-dark className="bg-dark">
        <div className="shell">
          <Reveal>
            <figure className="flex flex-col items-center rounded-2xl bg-bg px-6 py-14 text-center sm:px-10 sm:py-16 lg:py-20">
              <span aria-hidden="true" className="block h-px w-12 bg-accent" />
              <blockquote className="mt-10 max-w-[28ch] font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] font-light leading-[1.3] tracking-tight text-ink [text-wrap:balance]">
                &ldquo;Success is measured in{' '}
                <em className="italic text-accent">durability and cash flow</em>{' '}
                - not in the timing of an exit.&rdquo;
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 03 - Operating Principles (dark) - follows the quote card, so it
          opens on its own top padding. */}
      <section data-nav-dark className="bg-dark pb-16 pt-16 text-white sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="shell">
          {/* Header split like the shared-platform header: statement left,
              a figure block right (count + label, hairline, one line of
              copy), bottom-aligned to the headline. */}
          <div className="grid gap-y-10 lg:grid-cols-12 lg:items-stretch lg:gap-x-16">
            <Reveal className="lg:col-span-7 lg:flex lg:flex-col lg:items-start lg:justify-between">
              <Eyebrow tone="light">Operating principles</Eyebrow>
              <h2 className="display mt-6 max-w-[18ch] text-statement text-white">
                Four rules that never{' '}
                <em className="italic text-accent">change</em>.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9 lg:flex lg:flex-col lg:justify-between" delay={0.15}>
              <div className="flex items-end gap-5 border-b border-white/10 pb-6">
                <span className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-light leading-[0.8] tracking-tightest text-white tabular-nums">
                  <CountUp value={principles.length} />
                </span>
                <span className="pb-1 font-mono text-[0.6875rem] uppercase leading-[1.7] tracking-meta text-white/40">
                  Rules
                  <br />
                  Never change
                </span>
              </div>
              <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-white/55 [text-wrap:pretty]">
                The commitments behind every decision the group makes - from
                what we buy to how each brand is run.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 sm:mt-16 lg:mt-20">
            {principles.map((p, i) => (
              <Reveal key={p.no}>
                {/* Hover (the site's row language): the row takes a soft tint
                    that bleeds a little into the gutter, an accent glow rises
                    behind the title, a 2px accent rule draws across the top
                    hairline, the index + title turn accent (title nudges
                    right), the body brightens and the ghost numeral warms. */}
                <div className="group relative -mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-white/[0.035] opacity-0 transition-opacity duration-[600ms] ease-editorial group-hover:opacity-100"
                  />
                  {/* Glow fades to fully transparent inside its own box
                      (closest-side), so the row's clipping never shows an edge. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-[70%] bg-[radial-gradient(closest-side,rgba(79,70,255,0.16),rgba(79,70,255,0.05)_55%,transparent)] opacity-0 transition-opacity duration-[600ms] ease-editorial group-hover:opacity-100"
                  />
                  {/* Index, not last:, because Reveal wraps each row. */}
                  <div
                    className={`relative border-t border-white/10${i === principles.length - 1 ? ' border-b' : ''}`}
                  >
                    {/* accent rule drawing across the top hairline */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-px left-0 h-0.5 w-full origin-left scale-x-0 bg-accent shadow-[0_0_1rem_0.125rem_rgba(79,70,255,0.5)] transition-transform duration-[700ms] ease-editorial group-hover:scale-x-100"
                    />
                    {/* huge background number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none font-serif text-[8rem] leading-none tracking-tightest text-white/[0.05] transition-colors duration-[600ms] ease-editorial group-hover:text-accent/[0.16] sm:text-[11rem]"
                    >
                      {p.no}
                    </span>
                    <div className="relative grid gap-x-12 gap-y-5 py-16 lg:grid-cols-12 lg:py-24">
                      <div className="flex items-baseline gap-6 lg:col-span-6">
                        <span className="font-mono text-[0.6875rem] tracking-meta text-accent/60 transition-colors duration-[600ms] ease-editorial group-hover:text-accent">
                          {p.no}
                        </span>
                        <h3 className="font-serif text-3xl font-normal leading-tight tracking-tight text-white/90 transition-[color,transform] duration-[600ms] ease-editorial group-hover:translate-x-1 group-hover:text-accent sm:text-4xl">
                          {p.title}
                        </h3>
                      </div>
                      <p className="max-w-[44ch] text-xl leading-[1.65] text-white/55 transition-colors duration-[600ms] ease-editorial group-hover:text-white/85 lg:col-span-5 lg:col-start-8">
                        {p.body}
                      </p>
                    </div>
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
          {/* Header split like the site's other section headers: statement
              left, supporting copy right, bottom-aligned to the headline. */}
          <div className="grid gap-y-7 lg:grid-cols-12 lg:items-end lg:gap-x-16">
            <Reveal className="lg:col-span-7">
              <Eyebrow>The build</Eyebrow>
              <h2 className="display mt-6 max-w-[20ch] text-statement">
                How every brand is{' '}
                <em className="italic text-accent">built</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:pb-2">
              <p className="max-w-[30rem] text-lg leading-relaxed text-muted [text-wrap:pretty]">
                Every business in the group travels the same path, from a single
                thesis to a durable, independent brand. The steps rarely skip;
                the order rarely changes.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 sm:mt-14 lg:mt-16">
            <BuildTimeline />
          </div>
        </div>
      </section>

      {/* 05 - Shared Platform (dark) */}
      <section data-nav-dark className="bg-dark py-16 text-white sm:py-20 lg:py-24">
        <div className="shell">
          <div>
            <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-stretch">
              <Reveal className="lg:col-span-7 lg:flex lg:flex-col lg:items-start lg:justify-between">
                <Eyebrow tone="light">The shared platform</Eyebrow>
                <TextReveal
                  as="h2"
                  className="display mt-6 text-statement text-white"
                  lines={[
                    <>Every brand inherits</>,
                    <>the strength of the <em className="italic text-accent">group</em>.</>,
                  ]}
                />
              </Reveal>
              {/* Figure block - the count of shared capabilities set large,
                  so the right side carries weight instead of a lone line. */}
              <Reveal className="lg:col-span-4 lg:col-start-9 lg:flex lg:flex-col lg:justify-between" delay={0.15}>
                <div className="flex items-end gap-5 border-b border-white/10 pb-6">
                  <span className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-light leading-[0.8] tracking-tightest text-white tabular-nums">
                    <CountUp value={platform.length} />
                  </span>
                  <span className="pb-1 font-mono text-[0.6875rem] uppercase leading-[1.7] tracking-meta text-white/40">
                    Shared
                    <br />
                    capabilities
                  </span>
                </div>
                <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-white/55 [text-wrap:pretty]">
                  Eight capabilities that would take a standalone brand years to
                  build, available from day one.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-x-14 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {platform.map((c, i) => (
                <Reveal key={c.name} delay={(i % 4) * 0.06}>
                  {/* Hover (same language as the /brands platform grid, on
                      dark): an accent rule draws across the top hairline
                      with a soft glow, a faint accent glow spills past the item
                      (fading to transparent before its edge - no hard
                      boundary), the number lights up with a growing tick, the
                      title nudges right in accent. Decorative - not links. */}
                  <div className="group relative border-t border-white/10 pb-4 pt-6">
                    <span
                      aria-hidden="true"
                      className="absolute -top-px left-0 h-0.5 w-full origin-left scale-x-0 bg-accent shadow-[0_0_1rem_0.125rem_rgba(79,70,255,0.55)] transition-transform duration-[600ms] ease-editorial group-hover:scale-x-100"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-x-10 -top-14 h-[14rem] bg-[radial-gradient(closest-side,rgba(79,70,255,0.2),rgba(79,70,255,0.06)_55%,transparent)] opacity-0 transition-opacity duration-[600ms] ease-editorial group-hover:opacity-100"
                    />
                    <span className="relative flex items-center gap-4">
                      <span className="font-mono text-[0.625rem] tabular-nums tracking-meta text-accent/80 transition-colors duration-[600ms] ease-editorial group-hover:text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-0 bg-accent transition-[width] duration-[600ms] ease-editorial group-hover:w-8"
                      />
                    </span>
                    <h3 className="relative mt-5 font-serif text-[1.75rem] font-normal leading-tight tracking-tight text-white/90 transition-[color,transform] duration-[600ms] ease-editorial group-hover:translate-x-1 group-hover:text-accent">
                      {c.name}
                    </h3>
                    <p className="relative mt-3 max-w-[24ch] text-[0.9375rem] leading-[1.65] text-white/45 transition-colors duration-[600ms] ease-editorial group-hover:text-white/80">
                      {c.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 - What We Never Control - follows the dark shared-platform
          band, so it opens on its own top padding instead of a hairline. */}
      <section className="pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
        <div className="shell">
          <div>
            {/* Header centred over the symmetric panel, so it sits on the
                boundary's axis; on desktop a short accent line drops from it
                into the boundary itself (translate-x-px: the panel's 2px
                border-l sits 1px right of the true centre). */}
            <Reveal className="flex flex-col items-center text-center">
              <Eyebrow>The boundary</Eyebrow>
              <h2 className="display mt-6 max-w-[18ch] text-statement [text-wrap:balance]">
                Independent brands.{' '}
                <em className="italic text-accent">Shared advantage</em>.
              </h2>
            </Reveal>
            <div
              aria-hidden="true"
              className="mx-auto mt-10 hidden h-14 w-0.5 translate-x-px bg-gradient-to-b from-accent/0 to-accent lg:block"
            />

            {/* The boundary, drawn literally: one panel split by a 2px
                accent line. Left (white, muted, dashes) is what each brand
                owns outright; right (accent-tinted, ink, checks) is what the
                group provides. Stacks on phones with the line between. */}
            <div className="mt-12 grid border border-line sm:mt-14 lg:mt-0 lg:grid-cols-2">
              <Reveal className="px-7 py-9 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-6 bg-muted/40" />
                  <span className="font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
                    We never interfere with
                  </span>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  Each business keeps its brand, product, and culture.
                </p>
                <ul className="mt-7">
                  {neverControl.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 border-t border-line py-3.5"
                    >
                      <span aria-hidden="true" className="h-px w-3.5 shrink-0 bg-muted/50" />
                      <span className="font-serif text-[1.375rem] tracking-tight text-ink/55 sm:text-[1.5rem]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                delay={0.12}
                className="border-t-2 border-accent bg-[#F6F6FA] px-7 py-9 sm:px-10 sm:py-10 lg:border-l-2 lg:border-t-0 lg:px-12 lg:py-12"
              >
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-6 bg-accent" />
                  <span className="font-mono text-[0.6875rem] uppercase tracking-meta text-accent">
                    We always support
                  </span>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/65">
                  Support arrives only when a team asks.
                </p>
                <ul className="mt-7">
                  {alwaysSupport.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 border-t border-ink/[0.07] py-3.5"
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
                      <span className="font-serif text-[1.375rem] tracking-tight text-ink sm:text-[1.5rem]">
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
                cash flow. Cash flow is reinvested into more talent. Each brand
                runs the same self-funding loop, and the group compounds it across
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
                What one brand learns,{' '}
                <em className="italic text-accent">all of them gain</em>.
              </h2>
              <p className="mt-7 max-w-[42ch] text-lg leading-relaxed text-muted">
                A hiring engine built for one brand staffs the next. Engineering
                built once is inherited by all. Distribution earned in one market
                opens the door in another. The more brands join, the stronger
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
          className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[27.5rem] w-[47.5rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(79,70,255,0.09), transparent 70%)',
          }}
        />
        <div className="shell relative z-10">
          <div className="mx-auto flex max-w-[56.25rem] flex-col items-center">
            <Reveal>
              <Eyebrow tone="light">The long game</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              className="display mt-8 max-w-[20ch] text-[clamp(2.9rem,6.3vw,5.75rem)] font-light leading-[1.04] tracking-tightest text-white"
              lines={[
                <>The next enduring</>,
                <>internet brands</>,
                <>
                  <em className="italic text-accent">haven&rsquo;t been built yet</em>.
                </>,
              ]}
            />
            <Reveal delay={0.15}>
              <p className="mx-auto mt-8 max-w-[44ch] text-lg leading-[1.75] text-white/60">
                If you are building one, or thinking about it, we would like to
                talk. This is the operating system we bring to every brand we own.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <Link
                  href="/brands"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                >
                  Explore Brands
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
