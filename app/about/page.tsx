import { withBase } from '@/lib/asset'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
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

export const metadata = {
  title: 'About',
  description:
    'Digital Next is a technology holding company that founds, acquires, and scales internet businesses - and holds them for decades.',
}

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


export default function AboutPage() {
  return (
    <>
      {/* 01 - Opening */}
      <section className="overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-16 lg:pb-20">
        <div className="shell">
          <div className="grid items-center gap-y-16 lg:grid-cols-[55fr_45fr] lg:gap-x-16">
            <div>
              <Reveal>
                <Eyebrow>About Digital Next</Eyebrow>
              </Reveal>
              <TextReveal
                as="h1"
                trigger="mount"
                className="display mt-8 max-w-[16ch] text-hero"
                lines={[
                  <>We build internet brands</>,
                  <>
                    - and <em className="italic text-accent">keep them</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted">
                  Digital Next is a technology holding company. We find, build,
                  and scale independent internet businesses - then hold them for
                  decades, not exits.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-meta text-muted">
                  <span>Est. 2017</span>
                  <span aria-hidden="true" className="h-3 w-px bg-line" />
                  <span>Technology holding company</span>
                  <span aria-hidden="true" className="h-3 w-px bg-line" />
                  <span>Six brands</span>
                </div>
              </Reveal>
            </div>

            {/* Portfolio constellation - Digital Next and its six companies */}
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
                  <>Most companies are built to be sold.</>,
                  <>
                    We build to{' '}
                    <em className="italic text-accent">own</em>.
                  </>,
                ]}
              />
            </div>
            <div className="relative lg:col-span-5 lg:col-start-8 lg:mt-[14px]">
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
                <p className="max-w-[52ch] text-xl leading-snug text-white/85 sm:text-2xl">
                  The internet rewards patience. The best businesses compound
                  quietly, over years - long after the market stops paying
                  attention.
                </p>
                <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-white/55">
                  So we don't flip. We provide permanent capital and
                  infrastructure, and give every brand the freedom to grow on
                  its own terms.
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

      {/* 03 - How we build */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <Reveal>
            <div className="border-t border-line pt-8 sm:pt-10">
              <Eyebrow>How we build</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-6 max-w-[20ch] text-statement">
              Every brand inherits the{' '}
              <em className="italic text-accent">strength of the group</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-muted">
              Every brand starts independently, but grows with the same
              shared platform.
            </p>
          </Reveal>

          <div className="mt-10">
            <SharedPlatform />
          </div>
        </div>
      </section>

      {/* 04 - The ecosystem */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="border-t border-line pt-8 sm:pt-10">
            <div className="grid gap-x-10 gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-16">
              <Reveal className="lg:col-span-6">
                <Eyebrow>The ecosystem</Eyebrow>
                <h2 className="display mt-6 max-w-[13ch] text-statement">
                  Independent by design,{' '}
                  <em className="italic text-accent">stronger together</em>.
                </h2>
              </Reveal>
              <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.12}>
                <p className="max-w-[40ch] text-xl leading-snug text-muted">
                  <span className="text-ink">Shared</span> capital, technology,
                  and infrastructure.
                  <br />
                  <span className="text-ink">Independent</span> brands, teams,
                  and roadmaps.
                </p>
              </Reveal>
            </div>

            {/* min-w-0 on each item: grid items default to min-width:auto,
                so a long brand name can size the track wider than the
                viewport. */}
            <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:mt-12 lg:gap-x-14 lg:gap-y-10">
              {companies.map((c, i) => (
                <Reveal key={c.id} delay={(i % 2) * 0.1} className="h-full min-w-0">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${c.name} - ${c.category}. Visit website (opens in a new tab).`}
                    className="group relative flex h-full flex-col border-t border-line pt-6 outline-none transition-colors duration-500 ease-editorial hover:border-ink/25 focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-bg lg:pt-7"
                  >
                    {/* Accent rule draws across the card's top hairline on
                        hover - a card-level affordance, since the whole tile
                        is the link, not just the name. */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[600ms] ease-editorial group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    />
                    {/* Header row: index + name + category left, logo right.
                        items-center so the mark sits on the vertical midpoint
                        of the index/name/category stack rather than hanging
                        off its top edge. */}
                    <div className="flex items-center justify-between gap-4 xs:gap-6">
                      <div className="min-w-0">
                        <span className="font-mono text-[11px] tracking-meta text-muted/45 transition-colors duration-500 ease-editorial group-hover:text-accent">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="mt-1.5 font-serif text-[1.55rem] font-light leading-[1.06] tracking-tightest text-ink xs:text-[1.9rem] sm:text-[2.05rem]">
                          {c.name}
                        </h3>
                        <span className="mt-2.5 block font-mono text-[10px] uppercase tracking-[0.24em] text-muted/70">
                          {c.category}
                        </span>
                      </div>

                      {/* Logo - right side, mono → colour on hover */}
                      <div className="flex h-9 shrink-0 items-center xs:h-11 sm:h-12">
                        {c.logo ? (
                          <img
                            src={withBase(c.logo)}
                            alt=""
                            loading="lazy"
                            width={c.logoWidth}
                            height={c.logoHeight}
                            className="max-h-9 w-auto max-w-[104px] object-contain object-right opacity-70 grayscale transition-[filter,opacity] duration-500 ease-editorial group-hover:opacity-100 group-hover:grayscale-0 xs:max-h-11 xs:max-w-[140px] sm:max-h-12 sm:max-w-[170px]"
                          />
                        ) : (
                          <span className="whitespace-nowrap font-sans text-[1.15rem] font-bold leading-none tracking-[-0.02em] text-ink xs:text-[1.35rem] sm:text-[1.5rem]">
                            HireNext
                            <span className="text-ink/40 transition-colors duration-500 ease-editorial group-hover:text-[#14B8A6]">
                              .io
                            </span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* What the brand does - straight from the data */}
                    <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.65] text-muted transition-colors duration-500 ease-editorial group-hover:text-ink/70">
                      {c.description}
                    </p>

                    {/* Footer rail - aligns across the row via mt-auto */}
                    <div className="mt-auto flex items-center justify-between gap-6 border-t border-line pt-3.5 transition-colors duration-500 ease-editorial group-hover:border-ink/15 lg:mt-6">
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted/60">
                        {c.founded
                          ? `Est. ${c.founded}`
                          : c.status ?? 'In development'}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors duration-500 ease-editorial group-hover:text-accent">
                        Explore Brand
                        <span className="transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Shared foundation - independent brands stand on one platform */}
            <Reveal delay={0.1}>
              <div className="mt-16 border-t border-line pt-8 text-center sm:mt-20">
                <span className="font-mono text-[11px] uppercase tracking-meta text-muted">
                  One shared platform
                </span>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-meta text-muted/50">
                  <span>Capital</span>
                  <span aria-hidden="true">·</span>
                  <span>Technology</span>
                  <span aria-hidden="true">·</span>
                  <span>Infrastructure</span>
                  <span aria-hidden="true">·</span>
                  <span>Talent</span>
                </div>
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
      <section data-nav-dark className="bg-dark py-16 text-white sm:py-20 lg:py-24">
        <div className="shell">
          <Reveal>
            <Eyebrow tone="light">How we operate</Eyebrow>
            <h2 className="display mt-6 max-w-[18ch] text-statement text-white">
              Four principles we{' '}
              <em className="italic text-accent">don't compromise</em>.
            </h2>
          </Reveal>

          <div className="mt-16 sm:mt-24">
            {principles.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.1}>
                <div className="group relative border-t border-white/10 transition-colors duration-300 ease-editorial hover:border-white/20">
                  {/* Accent segment grows along the top rule on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-px w-8 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-editorial group-hover:scale-x-100"
                  />
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 py-12 transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5 sm:py-16 lg:grid-cols-12 lg:items-baseline lg:gap-x-10">
                    {/* Index */}
                    <span className="font-mono text-[13px] tracking-meta text-accent/80 lg:col-span-1 lg:pt-2">
                      {p.no}
                    </span>

                    {/* Title - the focal statement, left */}
                    <h3 className="max-w-[14ch] font-serif text-4xl font-light leading-[1.05] tracking-tighter text-white sm:text-5xl lg:col-span-6">
                      {p.title}
                    </h3>

                    {/* Meta + description - right column fills the spread */}
                    <div className="lg:col-span-4 lg:col-start-9 lg:pt-2">
                      <span className="block font-mono text-[10px] uppercase tracking-meta text-white/35">
                        {p.meta}
                      </span>
                      <p className="mt-3.5 max-w-[42ch] text-lg leading-relaxed text-white/55">
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

      {/* Awards - hidden until real recognitions are added */}
      <AwardsSection />

      {/* Looking ahead - vision, not history */}
      <LookingAhead />

      {/* 08 - Vision / Final CTA - the page darkens into its closing chapter */}
      <section data-nav-dark className="relative overflow-hidden bg-[#0B0D12] pb-28 pt-20 text-center text-white sm:pb-32 sm:pt-24 lg:pb-40 lg:pt-32">
        {/* Soft ambient glow behind the heading (~9%) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[40%] z-0 h-[440px] w-[760px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(79,70,255,0.09), transparent 70%)',
          }}
        />

        <div className="shell relative z-10">
          <div className="mx-auto flex max-w-[880px] flex-col items-center">
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
              <p className="mx-auto mt-8 max-w-[640px] text-lg leading-relaxed text-white/60">
                Digital Next exists to build and own enduring internet
                businesses. If you&rsquo;re building for the long term, we&rsquo;d
                love to start a conversation.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <Link
                  href="/companies"
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
