import { pageMetadata } from '@/lib/seo'
import { withBase } from '@/lib/asset'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import CountUp from '@/components/ui/CountUp'
import AboutHeroVisual from '@/components/home/AboutHeroVisual'
import SharedPlatform from '@/components/home/SharedPlatform'
import AboutStats from '@/components/about/AboutStats'
import AboutTimeline from '@/components/about/AboutTimeline'
import GlobalPresence from '@/components/about/GlobalPresence'
import LeadershipGrid from '@/components/about/LeadershipGrid'
import LifeGallery from '@/components/about/LifeGallery'
import TechStack from '@/components/about/TechStack'
import AwardsSection from '@/components/about/AwardsSection'
import LookingAhead from '@/components/about/LookingAhead'
import { CONTACT_EMAIL } from '@/lib/site'
import { companies } from '@/lib/companies'
import { groupLeadership } from '@/lib/about'
import { cell2then3 } from '@/components/ui/gridSpan'

export const metadata = pageMetadata({
  title: 'About',
  description:
    'Digital Next is a technology holding company that founds, acquires, and scales internet businesses - and holds them for decades.',
  path: '/about',
})

// Operating principles - the group's beliefs, in its own words.
const principles = [
  {
    no: '01',
    title: 'Own for decades',
    body: 'We keep the brands we build. Success is measured in compounding, not exits.',
    icon: 'clock',
    meta: 'Long-term ownership',
  },
  {
    no: '02',
    title: 'Back real operators',
    body: 'We invest in exceptional founders before products - conviction over consensus.',
    icon: 'user',
    meta: 'Operating principle',
  },
  {
    no: '03',
    title: 'Share what compounds',
    body: 'Capital, engineering, and talent move freely across every brand in the group.',
    icon: 'compound',
    meta: 'Shared infrastructure',
  },
  {
    no: '04',
    title: 'Protect independence',
    body: 'Each business keeps its own brand, team, and roadmap. Autonomy by design.',
    icon: 'shield',
    meta: 'Independent execution',
  },
]


// The shared foundation under the brand panel.
const platformPillars = [
  { name: 'Capital', note: 'Patient, long-term funding.' },
  { name: 'Technology', note: 'Shared tools and platforms.' },
  { name: 'Infrastructure', note: 'Finance, legal, and operations.' },
  { name: 'Talent', note: 'Hiring and leadership.' },
]

// The Group CEO, for the founder's note.
const founder = groupLeadership.find((m) => /group ceo/i.test(m.role))

export default function AboutPage() {
  return (
    <>
      {/* 01 - Opening */}
      <section className="overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="shell">
          <div className="grid items-center gap-y-16 lg:grid-cols-[55fr_45fr] lg:gap-x-16">
            <div>
              <Reveal>
                <Eyebrow>About Digital Next</Eyebrow>
              </Reveal>
              <TextReveal
                as="h1"
                trigger="mount"
                className="display mt-8 text-hero [text-wrap:balance] lg:text-[clamp(2.5rem,4.2vw,4.125rem)]"
                lines={[
                  <>We build brands</>,
                  <>
                    and <em className="italic text-accent">grow them</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted [text-wrap:pretty]">
                  Digital Next is a technology holding company. We build and
                  scale independent internet businesses, and back them for
                  decades.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                  <Button href="/brands" variant="primary" arrow>
                    Explore our brands
                  </Button>
                  <Link
                    href="/how-we-build"
                    className="group flex w-fit items-center gap-2.5 text-[0.9375rem] font-medium leading-snug text-ink transition-colors duration-[250ms] ease-editorial hover:text-accent"
                  >
                    <span className="relative">
                      How we build
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[250ms] ease-editorial group-hover:scale-x-100" />
                    </span>
                    <span className="text-accent transition-transform duration-[250ms] ease-editorial group-hover:translate-x-[0.3125rem]">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
                  <span>Est. 2017</span>
                  <span aria-hidden="true" className="h-3 w-px bg-line" />
                  <span>Technology holding company</span>
                  <span aria-hidden="true" className="h-3 w-px bg-line" />
                  <span>Five brands</span>
                </div>
              </Reveal>
            </div>

            {/* Portfolio constellation - Digital Next and its brands */}
            <div className="hidden lg:block">
              <AboutHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 02 - Why we exist (dark) - the thesis, stated once, quietly */}
      <section data-nav-dark className="bg-dark py-16 text-white sm:py-20 lg:py-24">
        <div className="shell">
          <div className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow tone="light">Why we exist</Eyebrow>
              </Reveal>
              <TextReveal
                as="h2"
                className="display mt-8 max-w-[14ch] text-statement text-white"
                lines={[
                  <>Patience is our</>,
                  <>
                    <em className="italic text-accent">advantage</em>.
                  </>,
                ]}
              />
            </div>
            <div className="relative lg:col-span-5 lg:col-start-8 lg:mt-[0.875rem]">
              {/* Editorial divider between columns - a faint gradient line */}
              <span
                aria-hidden="true"
                className="absolute -left-8 bottom-4 top-1 hidden w-px lg:block"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent, rgba(255,255,255,0.16), transparent)',
                }}
              />
              <Reveal delay={0.15}>
                <p className="max-w-[52ch] text-xl leading-snug text-white/85 [text-wrap:pretty] sm:text-2xl">
                  Great internet businesses aren&rsquo;t made in a quarter. They
                  compound quietly, year after year, long after the noise has
                  moved on.
                </p>
                <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-white/55 [text-wrap:pretty]">
                  That&rsquo;s why we stay. We bring permanent capital and shared
                  infrastructure, and give every brand the freedom to grow on its
                  own terms.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* By the numbers - real group figures */}
      <AboutStats />

      {/* Our story - visual timeline */}
      <AboutTimeline />

      {/* Founder's note - the Group CEO's portrait (on the same dark
          gradient as the leadership portraits) beside a short quote. Name,
          role and photo come from the leadership data. */}
      {founder && (
        <section className="pb-14 sm:pb-16">
          <div className="shell">
            <figure className="grid gap-y-10 border-t border-line pt-14 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-x-16">
              <Reveal className="lg:col-span-4">
                <div
                  className="relative mx-auto aspect-square w-full max-w-[22rem] overflow-hidden lg:mx-0"
                  style={{
                    background:
                      'radial-gradient(120% 100% at 50% 0%, #20232b 0%, #0f1118 48%, #0a0b0f 100%)',
                  }}
                >
                  {founder.photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={withBase(founder.photo)}
                      alt={`${founder.name}, ${founder.role}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  )}
                </div>
              </Reveal>
              <Reveal className="lg:col-span-8 lg:col-start-5" delay={0.1}>
                <Eyebrow>From the founder</Eyebrow>
                <blockquote className="mt-6 font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-[1.2] tracking-tight text-ink [text-wrap:balance]">
                  &ldquo;Great companies are built by great teams{' '}
                  <em className="italic text-accent">given time</em>. Our role is
                  to give them both - the platform to move faster, and the
                  patience to go further.&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-8 bg-accent" />
                  <span>
                    <span className="block font-serif text-lg leading-tight text-ink">
                      {founder.name}
                    </span>
                    <span className="mt-1 block font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
                      {founder.role}
                    </span>
                  </span>
                </figcaption>
              </Reveal>
            </figure>
          </div>
        </section>
      )}

      {/* 03 - How we build. No top padding: the section above supplies the
          space before the hairline, so the rule sits evenly between them. */}
      <section className="pb-14 sm:pb-16">
        <div className="shell">
          {/* Centred header over the symmetric capability panel. */}
          <div className="flex flex-col items-center border-t border-line pt-14 text-center sm:pt-16">
            <Reveal>
              <Eyebrow>How we build</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 max-w-[22ch] text-statement [text-wrap:balance]">
                Every brand inherits the{' '}
                <em className="italic text-accent">strength of the group</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-[44ch] text-[1.0625rem] leading-[1.7] text-muted">
                Every brand starts independently, but grows with the same
                shared platform.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 sm:mt-10">
            <SharedPlatform />
          </div>
        </div>
      </section>

      {/* 04 - The ecosystem. No divider line; the section above's bottom
          padding alone sets the gap. */}
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="shell">
          <div>
            {/* Symmetric header (same as /how-we-build): both columns share a
                height - the figure block's top lines up with the eyebrow, the
                two-line statement's bottom with the headline's. */}
            <div className="grid gap-x-10 gap-y-10 lg:grid-cols-12 lg:items-stretch lg:gap-x-16">
              <Reveal className="lg:col-span-7 lg:flex lg:flex-col lg:items-start lg:justify-between">
                <Eyebrow>The ecosystem</Eyebrow>
                <h2 className="display mt-6 text-statement">
                  Independent by design,
                  <br className="hidden sm:block" />{' '}
                  <em className="italic text-accent">stronger together</em>.
                </h2>
              </Reveal>
              <Reveal className="lg:col-span-5 lg:col-start-8 lg:flex lg:flex-col lg:justify-between" delay={0.12}>
                <div className="flex items-end gap-5 border-b border-line pb-6">
                  <span className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-light leading-[0.8] tracking-tightest text-ink tabular-nums">
                    <CountUp value={companies.length} />
                  </span>
                  <span className="pb-1 font-mono text-[0.6875rem] uppercase leading-[1.7] tracking-meta text-muted">
                    Independent
                    <br />
                    brands
                  </span>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  <span className="text-ink">Shared</span> capital, technology,
                  and infrastructure.
                  <br />
                  <span className="text-ink">Independent</span> brands, teams,
                  and roadmaps.
                </p>
              </Reveal>
            </div>

            {/* Brand panel: one hairline grid (collapsed borders: container
                top/left, cells right/bottom), 3-up on desktop. The logo leads
                each cell in full colour at one optical size; the name is the
                cell's (visually hidden) heading so it isn't printed twice.
                Hover speaks the brand's own colour: a faint tint, a rule
                drawn across the top, the logo lifting, the CTA tinting.
                min-w-0: grid items default to min-width:auto. */}
            <div className="mt-10 grid sm:grid-cols-4 lg:mt-12 lg:grid-cols-6">
              {companies.map((c, i) => (
                <Reveal key={c.id} delay={(i % 3) * 0.08} className={`h-full min-w-0 border-line ${cell2then3(i, companies.length)}`}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${c.name} - ${c.category}. Visit website (opens in a new tab).`}
                    className="group relative flex h-full flex-col px-6 py-7 outline-none transition-colors duration-500 ease-editorial hover:bg-[color-mix(in_srgb,var(--brand)_4%,white)] focus-visible:bg-[color-mix(in_srgb,var(--brand)_4%,white)] sm:px-8 sm:py-8"
                    style={{ '--brand': c.primaryColor } as React.CSSProperties}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-[var(--brand)] transition-transform duration-500 ease-editorial group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    />

                    {/* Logo + number */}
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
                            c.id === 'digital-web-solutions'
                              ? 'max-h-12 max-w-[6rem]'
                              : 'max-h-7 max-w-[10rem]'
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
                      {c.category}
                    </span>
                    <p className="mt-2.5 max-w-[40ch] text-[0.9375rem] leading-[1.6] text-muted transition-colors duration-500 ease-editorial group-hover:text-ink/75">
                      {c.description}
                    </p>

                    {/* Footer rail - aligned across the row via mt-auto */}
                    <div className="mt-auto flex items-center justify-between gap-6 pt-6">
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted/70">
                        {c.founded ? `Est. ${c.founded}` : c.status ?? 'In development'}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink/70 transition-colors duration-500 ease-editorial group-hover:text-[var(--brand)]">
                        Visit
                        <span className="transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          &#8599;
                        </span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Shared foundation - the base the brands stand on: a tinted
                band with an accent rule on top. Label + one line on the left;
                the four pillars as hairline-divided cells on the right (index,
                name, note), each lifting into the accent on hover. Sits just
                below the panel so a centred last row of brands doesn't leave
                stray corners. */}
            <Reveal delay={0.1}>
              <div className="mt-4 grid border border-t-2 border-line border-t-accent bg-[#F6F6FA] lg:grid-cols-12">
                <div className="flex flex-col justify-center gap-2 px-6 py-6 sm:px-8 lg:col-span-4 lg:border-r lg:border-line">
                  <span className="font-mono text-[0.6875rem] uppercase tracking-meta text-accent">
                    One shared platform
                  </span>
                  <p className="font-serif text-xl leading-snug tracking-tight text-ink [text-wrap:balance]">
                    Every brand stands on the same foundation.
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-4 lg:col-span-8">
                  {platformPillars.map((p, i) => (
                    <li
                      key={p.name}
                      className={[
                        'group flex flex-col justify-start gap-1.5 border-line px-6 py-6 transition-colors duration-500 ease-editorial hover:bg-white sm:px-7',
                        'border-t lg:border-t-0',
                        i % 2 === 1 ? 'border-l' : '',
                        i > 0 ? 'sm:border-l' : 'sm:border-l-0',
                      ].join(' ')}
                    >
                      <span className="font-mono text-[0.625rem] tabular-nums tracking-meta text-accent/60 transition-colors duration-500 ease-editorial group-hover:text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-lg leading-tight tracking-tight text-ink transition-[color,transform] duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:text-accent">
                        {p.name}
                      </span>
                      <span className="text-[0.8125rem] leading-snug text-muted">
                        {p.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership - the people building the group */}
      <LeadershipGrid />

      {/* Global presence (dark) */}
      <GlobalPresence />

      {/* Life at Digital Next - placeholder gallery */}
      <LifeGallery />

      {/* Technology - tools across the group */}
      <TechStack />

      {/* 05 - Operating principles (dark) */}
      <section data-nav-dark className="bg-dark py-14 text-white sm:py-16 lg:py-20">
        <div className="shell">
          <Reveal>
            <Eyebrow tone="light">How we operate</Eyebrow>
            <h2 className="display mt-6 max-w-[18ch] text-statement text-white">
              Four principles we{' '}
              <em className="italic text-accent">don't compromise</em>.
            </h2>
          </Reveal>

          {/* The four principles as one hairline grid on the dark band
              (4-up desktop, 2-up tablet, stacked phone) instead of four
              screen-tall rows. Hover - the site language on dark: a faint
              lift, an accent rule with a soft glow drawn across the top,
              the number lights up with a growing tick, the title nudges
              right. */}
          <div className="mt-12 grid border-l border-t border-white/10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.08} className="h-full">
                <div className="group relative flex h-full flex-col border-b border-r border-white/10 px-6 py-8 transition-colors duration-500 ease-editorial hover:bg-white/[0.04] sm:px-7 sm:py-9">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-accent shadow-[0_0_1rem_0.125rem_rgba(79,70,255,0.5)] transition-transform duration-500 ease-editorial group-hover:scale-x-100"
                  />
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[0.6875rem] tabular-nums tracking-meta text-accent transition-colors duration-500 ease-editorial">
                      {p.no}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-accent transition-[width] duration-500 ease-editorial group-hover:w-8"
                    />
                  </span>
                  <h3 className="mt-6 font-serif text-[1.625rem] font-light leading-[1.15] tracking-tight text-white transition-transform duration-500 ease-editorial group-hover:translate-x-1 lg:text-[1.75rem]">
                    {p.title}
                  </h3>
                  <span className="mt-3 block font-mono text-[0.625rem] uppercase tracking-meta text-white/40">
                    {p.meta}
                  </span>
                  <p className="mt-4 text-[0.9375rem] leading-[1.65] text-white/60 transition-colors duration-500 ease-editorial group-hover:text-white/80">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards - hidden until real recognitions are added */}
      <AwardsSection />

      {/* Looking ahead - vision, not history */}
      <LookingAhead />

      {/* 08 - Vision / Final CTA - the page darkens into its closing chapter */}
      <section data-nav-dark className="relative overflow-hidden bg-[#0B0D12] pb-28 pt-20 text-center text-white sm:pb-32 sm:pt-24 lg:pb-40 lg:pt-32">
        {/* Soft ambient glow behind the heading (~9%) */}
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
              <Eyebrow tone="light">What&rsquo;s next</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              className="display mt-9 max-w-[18ch] text-[clamp(3rem,6.5vw,6rem)] font-light leading-[1.04] tracking-tightest text-white"
              lines={[
                <>Let&rsquo;s build what&rsquo;s</>,
                <>
                  next <em className="italic text-accent">together</em>.
                </>,
              ]}
            />
            <Reveal delay={0.15}>
              <p className="mx-auto mt-8 max-w-[40rem] text-lg leading-relaxed text-white/60">
                Digital Next exists to build and own enduring internet
                businesses. If you&rsquo;re building for the long term, we&rsquo;d
                love to start a conversation.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <Link
                  href="/brands"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_14px_34px_-12px_rgba(79,70,255,0.55)]"
                >
                  Explore the Group
                  <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-8 py-4 text-sm font-medium text-white transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white/[0.04]"
                >
                  Partner With Us
                  <span className="text-accent transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
