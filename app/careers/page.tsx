import { pageMetadata } from '@/lib/seo'
import { withBase } from '@/lib/asset'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import ProcessTimeline from '@/components/careers/ProcessTimeline'
import CareerForm from '@/components/careers/CareerForm'
import { companies } from '@/lib/companies'
import { cell2then3 } from '@/components/ui/gridSpan'
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
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pt-28 lg:pb-16">
        <div className="shell">
          <div className="grid gap-y-16 lg:grid-cols-12 lg:items-start lg:gap-x-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Careers</Eyebrow>
              </Reveal>
              <TextReveal
                as="h1"
                trigger="mount"
                className="display mt-6 max-w-[12ch] text-hero"
                lines={[
                  <>Build work</>,
                  <>
                    that <em className="italic text-accent">lasts</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-[58ch] text-base leading-[1.65] text-muted">
                  Join teams building and operating independent internet businesses
                  across technology, AI, marketing, SEO, and digital products.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-3 max-w-[58ch] text-base leading-[1.65] text-muted">
                  Digital Next brands move with the ownership and speed of
                  independent businesses while benefiting from shared talent,
                  technology, and long-term support.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
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
                    href="/brands"
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
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.625rem] uppercase tracking-meta text-muted/70">
                  {heroMeta.map((m, i) => (
                    <span key={m} className="flex items-center gap-4">
                      {i > 0 && <span aria-hidden="true" className="h-2.5 w-px bg-line" />}
                      {m}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Career index - the areas people build in, as a contents list
                (same treatment as the /brands index): label aligned with the
                Careers eyebrow, each row jumps to open roles. Hover: number
                and name turn accent, name nudges right, a down arrow shows. */}
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.2}>
              <Eyebrow>Where people build</Eyebrow>
              <ul className="mt-8 border-b border-line">
                {careerIndex.map((c, i) => (
                  <li key={c.name}>
                    <a
                      href="#open-roles"
                      className="group flex items-center gap-5 border-t border-line py-3 outline-none focus-visible:bg-[#FAFAFC]"
                    >
                      <span className="w-6 shrink-0 font-mono text-[0.6875rem] tabular-nums tracking-[0.12em] text-accent/70 transition-colors duration-[400ms] ease-editorial group-hover:text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0 flex-1 transition-transform duration-[400ms] ease-editorial group-hover:translate-x-1">
                        <span className="block font-serif text-[1.25rem] leading-tight tracking-tight text-ink transition-colors duration-[400ms] ease-editorial group-hover:text-accent">
                          {c.name}
                        </span>
                        <span className="mt-1 block truncate font-mono text-[0.625rem] uppercase tracking-meta text-muted">
                          {c.focus}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-accent opacity-0 transition-[opacity,transform] duration-[400ms] ease-editorial group-hover:translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100"
                      >
                        &darr;
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 - Why join the group. Flows straight on from the white hero:
          no top padding and no hairline (a rule here could sit right at the
          fold and read as a stray line); the hero's bottom padding sets the
          gap. */}
      <section className="pb-10 sm:pb-12 lg:pb-16">
        <div className="shell">
          <div>
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

            {/* One hairline panel (collapsed borders: grid top/left, cells
                right/bottom), 3-up - the site's panel language. Hover: soft
                tint, accent rule across the top, number + tick light up,
                title nudges right in accent. */}
            <div className="mt-10 grid border-l border-t border-line sm:mt-12 lg:grid-cols-3">
              {whyJoin.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.08} className="h-full">
                  <div className="group relative h-full border-b border-r border-line px-6 py-8 transition-colors duration-500 ease-editorial hover:bg-[#FAFAFC] sm:px-8 sm:py-9">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100"
                    />
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[0.6875rem] tabular-nums tracking-meta text-accent/70 transition-colors duration-500 ease-editorial group-hover:text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-0 bg-accent transition-[width] duration-500 ease-editorial group-hover:w-8"
                      />
                    </span>
                    <h3 className="mt-6 font-serif text-[1.625rem] font-normal leading-tight tracking-tight text-ink transition-[color,transform] duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-accent">
                      {w.title}
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-[0.9375rem] leading-[1.65] text-muted transition-colors duration-500 ease-editorial group-hover:text-ink/75">
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
                <p className="max-w-[44ch] text-[1.0625rem] leading-[1.7] text-muted lg:pb-2">
                  We look for people who combine ambition with judgment - people
                  who care about craft, ownership, and useful outcomes.
                </p>
              </Reveal>
            </div>

            {/* Values as their own contrast: each is "X over Y", so the kept
                word is set large in ink and "over Y" sits beneath it, quieter
                and in italic. One hairline panel, 3-up; the site's hover. */}
            <div className="mt-10 grid border-l border-t border-line sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v, i) => {
                const [keep, over] = v.title.split(/\s+over\s+/i)
                return (
                  <Reveal key={v.title} delay={(i % 3) * 0.06} className="h-full">
                    <div className="group relative h-full border-b border-r border-line px-6 py-7 transition-colors duration-500 ease-editorial hover:bg-[#FAFAFC] sm:px-8 sm:py-8">
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100"
                      />
                      <span className="font-mono text-[0.6875rem] tabular-nums tracking-meta text-accent/70 transition-colors duration-500 ease-editorial group-hover:text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-5 transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                        <span className="block font-serif text-[1.75rem] font-normal leading-none tracking-tight text-ink transition-colors duration-500 ease-editorial group-hover:text-accent">
                          {keep}
                        </span>
                        {over && (
                          <span className="mt-1.5 block font-serif text-[1.0625rem] italic leading-snug text-muted">
                            over {over}
                          </span>
                        )}
                      </h3>
                      <p className="mt-4 max-w-[36ch] text-[0.9375rem] leading-[1.65] text-muted transition-colors duration-500 ease-editorial group-hover:text-ink/75">
                        {v.body}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Companies and career paths */}
      <section className="pt-10 sm:pt-12 lg:pt-16">
        <div className="shell">
          <div className="border-t border-line pt-8 sm:pt-10">
            <Reveal>
              <Eyebrow>Careers across the group</Eyebrow>
              <h2 className="display mt-6 max-w-[16ch] text-statement">
                Five brands.{' '}
                <em className="italic text-accent">Many ways to build</em>.
              </h2>
            </Reveal>

            {/* Brand panel - the /about ecosystem treatment: one hairline grid,
                3-up, logo leading in full colour at one optical size (name kept
                as an sr-only heading), category, what the brand does, then a
                footer rail. Hover speaks the brand's own colour: faint tint,
                rule drawn across the top, logo lifting, CTA tinting. */}
            <div className="mt-10 grid sm:mt-12 sm:grid-cols-4 lg:grid-cols-6">
              {companies.map((c, i) => {
                const cc = companyCareers[c.id]
                return (
                  <Reveal key={c.id} delay={(i % 3) * 0.06} className={`h-full min-w-0 border-line ${cell2then3(i, companies.length)}`}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${c.name} - ${cc.label}. View opportunities (opens in a new tab).`}
                      className="group relative flex h-full flex-col px-6 py-7 outline-none transition-colors duration-500 ease-editorial hover:bg-[color-mix(in_srgb,var(--brand)_4%,white)] focus-visible:bg-[color-mix(in_srgb,var(--brand)_4%,white)] sm:px-8 sm:py-8"
                      style={{ '--brand': c.primaryColor } as React.CSSProperties}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-[var(--brand)] transition-transform duration-500 ease-editorial group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      />
                      <div className="flex h-12 items-center justify-between gap-4">
                        {c.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={withBase(c.logo)}
                            alt=""
                            loading="lazy"
                            width={c.logoWidth}
                            height={c.logoHeight}
                            className={`w-auto object-contain object-left transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 ${
                              c.id === 'digital-web-solutions' ? 'max-h-12 max-w-[6rem]' : 'max-h-7 max-w-[10rem]'
                            }`}
                          />
                        ) : (
                          <span className="whitespace-nowrap font-serif text-[1.5rem] leading-none tracking-tight text-ink transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5">
                            {c.name}
                          </span>
                        )}
                        <span className="self-start font-mono text-[0.6875rem] tabular-nums tracking-meta text-[var(--brand)]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="sr-only">{c.name}</h3>
                      <span className="mt-6 block font-mono text-[0.625rem] uppercase tracking-meta text-muted">
                        {cc.label}
                      </span>
                      <p className="mt-2.5 max-w-[40ch] text-[0.9375rem] leading-[1.6] text-muted transition-colors duration-500 ease-editorial group-hover:text-ink/75">
                        {c.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between gap-6 pt-6">
                        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted/70">
                          {c.founded ? `Est. ${c.founded}` : c.status ?? 'In development'}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink/70 transition-colors duration-500 ease-editorial group-hover:text-[var(--brand)]">
                          View opportunities
                          <span className="transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
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
            : 'pb-12 pt-12 sm:pb-14 sm:pt-14 lg:pb-16 lg:pt-16'
        }
      >
        <div className="shell">
          {/* No rule of its own: the brand panel's bottom edge above is the
              seam (a second rule there read as an empty band). */}
          {/* Empty state: headline left, the status card right (both centred
              on one axis), so the right half isn't left blank. With roles,
              the list runs full width under the header. */}
          <div
            className={
              roles.length === 0
                ? 'grid gap-y-10 lg:grid-cols-2 lg:items-center lg:gap-x-24'
                : ''
            }
          >
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
                <div className="border border-line border-t-2 border-t-accent bg-[#F6F6FA] px-7 py-8 sm:px-9 sm:py-9">

                  <p className="font-serif text-[clamp(1.5rem,2.3vw,1.875rem)] font-light leading-[1.12] tracking-tightest text-ink">
                    No open roles right now.
                  </p>

                  <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-[1.65] text-muted sm:text-base">
                    We hire selectively across the group. Share your profile and
                    area of interest, and we will keep it in mind when a
                    relevant opportunity opens.
                  </p>

                  <div className="mt-7 flex flex-col gap-x-8 gap-y-4 sm:flex-row sm:items-center">
                    <a
                      href="#general-interest"
                      className="group inline-flex min-h-[2.75rem] items-center gap-2.5 rounded-xl bg-ink px-6 py-3 text-sm font-medium text-white transition-[background-color,transform] duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent"
                    >
                      <span>Share Your Profile</span>
                      <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </a>
                    <Link
                      href="/brands"
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
          <div className="grid gap-y-12 lg:grid-cols-12 lg:items-center lg:gap-x-16">
            {/* Left: pitch + what happens next, centred on the form panel's
                axis so the two columns balance. */}
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow tone="light">Don&rsquo;t see the right role?</Eyebrow>
              </Reveal>
              <TextReveal
                as="h2"
                className="display mt-7 text-[clamp(2.25rem,3.6vw,3.25rem)] text-white"
                lines={[
                  <>Good people are</>,
                  <>worth knowing</>,
                  <>
                    <em className="italic text-accent">before the role exists</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-[40ch] text-base leading-[1.7] text-white/60">
                  Tell us what you do, what kind of problems you want to solve, and
                  which Digital Next brand interests you.
                </p>
              </Reveal>

              {/* What happens next - three quiet steps on hairlines */}
              <Reveal delay={0.22}>
                <ol className="mt-9 max-w-[26rem] border-t border-white/10">
                  {[
                    ['Share your profile', 'Two minutes, one form.'],
                    ['We review it', 'With the brand closest to your work.'],
                    ['We reach out', 'When a role that fits opens.'],
                  ].map(([title, body], i) => (
                    <li
                      key={title}
                      className="group flex items-baseline gap-5 border-b border-white/10 py-4"
                    >
                      <span className="font-mono text-[0.625rem] tabular-nums tracking-meta text-accent/70 transition-colors duration-300 ease-editorial group-hover:text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="whitespace-nowrap text-[0.9375rem] text-white transition-[color,transform] duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-accent">
                        {title}
                      </span>
                      <span className="ml-auto hidden text-right text-[0.8125rem] text-white/45 sm:inline">
                        {body}
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal delay={0.28}>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex min-h-[2.75rem] items-center gap-2 text-sm font-medium text-white transition-colors duration-300 ease-editorial hover:text-accent"
                >
                  <span className="relative">
                    Or contact us directly
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-editorial group-hover:scale-x-100" />
                  </span>
                  <span className="text-accent transition-transform duration-300 ease-editorial group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7" delay={0.12}>
              <CareerForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
