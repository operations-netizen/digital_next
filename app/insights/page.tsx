import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import InsightHero from '@/components/insights/InsightHero'
import FeaturedInsight from '@/components/insights/FeaturedInsight'
import InsightRow from '@/components/insights/InsightRow'
import TopicIndex from '@/components/insights/TopicIndex'
import NewsletterSection from '@/components/insights/NewsletterSection'
import { featuredInsight, latestInsights } from '@/lib/insights'

export const metadata = pageMetadata({
  title: 'Insights',
  description:
    'Selected writing from Digital Next on company building, acquisitions, technology, leadership, and long-term ownership.',
  path: '/insights',
})

const manifesto = [
  'No weekly newsletters.',
  'No SEO articles.',
  'No growth hacks.',
]

const continueExploring = [
  { label: 'Brands', href: '/brands' },
  { label: 'How We Build', href: '/how-we-build' },
  { label: 'About', href: '/about' },
]

export default function InsightsPage() {
  const list = latestInsights.slice(0, 6)

  return (
    <>
      {/* 01 - Hero */}
      <InsightHero />

      {/* 02 - Featured essay. Flows on from the white hero: no top padding
          or hairline; the hero's bottom padding sets the gap. */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="shell">
          <div>
            <Reveal>
              <Eyebrow>Featured essay</Eyebrow>
            </Reveal>
            <div className="mt-12 sm:mt-16">
              <FeaturedInsight insight={featuredInsight} />
            </div>
          </div>
        </div>
      </section>

      {/* 03 - Selected writing */}
      <section id="latest-writing" className="py-16 sm:py-24 lg:py-28">
        <div className="shell">
          <div className="border-t border-line pt-12 sm:pt-16">
            <Reveal>
              <Eyebrow>Selected writing</Eyebrow>
            </Reveal>
            <div className="mt-8 sm:mt-12">
              {list.map((insight, i) => (
                <InsightRow
                  key={insight.slug}
                  insight={insight}
                  reverse={i % 2 === 1}
                  delay={(i % 2) * 0.05}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 - Why we write (dark) */}
      <section data-nav-dark className="bg-dark py-28 text-white sm:py-36 lg:py-44">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <Eyebrow tone="light">Why we write</Eyebrow>
            </Reveal>
            <div className="lg:col-span-8 lg:col-start-5">
              <TextReveal
                as="p"
                className="max-w-[24ch] font-serif text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.16] tracking-tight text-white"
                lines={[
                  <>We publish only when</>,
                  <>
                    we have something{' '}
                    <em className="italic text-accent">worth saying</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.2}>
                <div className="mt-14 flex flex-wrap gap-x-12 gap-y-3">
                  {manifesto.map((m) => (
                    <span
                      key={m}
                      className="font-mono text-[0.6875rem] uppercase tracking-meta text-white/45"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="mt-12 max-w-[46ch] text-lg leading-[1.8] text-white/60">
                  Only lessons earned through building and operating companies -
                  written by the people doing the work.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Topics */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="shell">
          <div className="border-t border-line pt-12 sm:pt-16">
            <Reveal>
              <Eyebrow>Topics</Eyebrow>
            </Reveal>
            <div className="mt-10 sm:mt-12">
              <TopicIndex />
            </div>
          </div>
        </div>
      </section>

      {/* 06 - Newsletter (compact) */}
      <section className="pb-4">
        <div className="shell">
          <NewsletterSection />
        </div>
      </section>

      {/* 07 - Soft closing */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="shell">
          <div className="border-t border-line pt-12 sm:pt-16">
            <Reveal>
              <Eyebrow>Continue exploring</Eyebrow>
            </Reveal>
            <div className="mt-8 flex flex-col gap-x-16 gap-y-4 sm:flex-row sm:flex-wrap">
              {continueExploring.map((l, i) => (
                <Reveal key={l.href} delay={i * 0.06}>
                  <Link
                    href={l.href}
                    className="group inline-flex min-h-[2.75rem] items-center gap-2 font-serif text-[clamp(1.75rem,3vw,2.5rem)] tracking-tight text-ink transition-colors duration-[500ms] ease-editorial hover:text-accent"
                  >
                    <span className="relative">
                      {l.label}
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[500ms] ease-editorial group-hover:scale-x-100" />
                    </span>
                    <span className="text-accent transition-transform duration-[500ms] ease-editorial group-hover:translate-x-1.5">
                      &rarr;
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
