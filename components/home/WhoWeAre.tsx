import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'

const principles: {
  no: string
  title: string
  body: string
  more: string
  cta: string
  href: string
}[] = [
  {
    no: '01',
    title: 'Long-term ownership',
    body: 'We keep the brands we build and measure success in decades, not exits.',
    more: 'Permanent capital lets each team build for the next decade, not the next quarter.',
    cta: 'Our approach',
    href: '/about',
  },
  {
    no: '02',
    title: 'Shared expertise',
    body: 'Capital, engineering, and talent move freely across every brand in the group.',
    more: 'Shared platforms in engineering, hiring, and growth compound across the group.',
    cta: 'How we operate',
    href: '/about',
  },
  {
    no: '03',
    title: 'Independent brands',
    body: 'Each business keeps its own brand, team, and roadmap. Autonomy by design.',
    more: 'No forced integrations and no rebrands. Support arrives only when a team asks.',
    cta: 'Explore brands',
    href: '/#portfolio',
  },
]

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="scroll-mt-24 pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
    >
      <div className="shell">
        {/* Section label on a shared top rule */}
        <Reveal>
          <div className="border-t border-line pt-6">
            <Eyebrow>Who we are</Eyebrow>
          </div>
        </Reveal>

        {/* Left: dominant editorial statement - the visual anchor.
            Right: supporting copy + guiding CTA. */}
        <div className="mt-6 grid gap-x-6 gap-y-10 lg:mt-6 lg:grid-cols-12 lg:gap-x-4">
          <div className="lg:col-span-6">
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

          <div className="lg:col-span-5 lg:col-start-7 lg:mt-[0.875rem]">
            <Reveal delay={0.15}>
              <p className="max-w-[32rem] text-lg leading-[1.78] text-ink sm:text-xl">
                Digital Next is a multi-brand digital services and technology
                group, headquartered in India with operating presence across the
                United States, Australia, and New Zealand.
              </p>
              <p className="mt-6 max-w-[32rem] text-base leading-[1.85] text-muted">
                Under a single group identity, we bring together specialist
                brands spanning digital marketing, SEO, performance marketing,
                influencer collaboration, and SaaS products. Each keeps its own
                team and roadmap, while sharing capital, technology, and talent
                across the group.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="/companies"
                className="group mt-11 inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-ink transition-colors duration-[250ms] ease-editorial hover:text-accent"
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
        </div>

        {/* Strategic principles */}
        <div className="mt-14 grid items-start gap-6 border-t border-line/60 pt-12 sm:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.12}>
              <Link
                href={p.href}
                className="group relative flex flex-col rounded-2xl border border-line/70 bg-white p-7 shadow-[0_6px_24px_-14px_rgba(17,17,17,0.12)] transition-[transform,box-shadow,border-color] duration-[250ms] ease-editorial hover:-translate-y-[0.1875rem] hover:border-line hover:shadow-[0_18px_44px_-26px_rgba(17,17,17,0.20),0_12px_36px_-18px_rgba(79,70,255,0.22)]"
              >
                {/* Top accent line, inset clear of the rounded corners */}
                <span
                  aria-hidden="true"
                  className="absolute left-7 right-7 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-[250ms] ease-editorial group-hover:scale-x-100"
                />

                <span className="block font-mono text-[0.6875rem] tracking-meta text-accent">
                  {p.no}
                </span>
                <h3 className="mt-7 font-serif text-2xl font-normal leading-tight tracking-tight text-ink/85 transition-[transform,color] duration-[250ms] ease-editorial group-hover:-translate-y-0.5 group-hover:text-ink">
                  {p.title}
                </h3>
                <p className="mt-5 max-w-[32ch] text-[0.9375rem] leading-relaxed text-muted transition-colors duration-[250ms] ease-editorial group-hover:text-ink/75">
                  {p.body}
                </p>

                {/* Progressive disclosure: one extra line, revealed on hover */}
                <span className="block max-h-0 max-w-[32ch] overflow-hidden text-[0.8125rem] leading-relaxed text-muted/85 opacity-0 transition-all duration-[250ms] ease-editorial group-hover:mt-3 group-hover:max-h-20 group-hover:opacity-100">
                  {p.more}
                </span>

                {/* Understated editorial CTA */}
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.8125rem] font-medium text-ink/45 transition-colors duration-[250ms] ease-editorial group-hover:text-accent">
                  <span className="relative">
                    {p.cta}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[250ms] ease-editorial group-hover:scale-x-100" />
                  </span>
                  <span className="transition-transform duration-[250ms] ease-editorial group-hover:translate-x-[0.3125rem]">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
