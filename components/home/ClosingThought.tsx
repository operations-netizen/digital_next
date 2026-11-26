import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import Button from '@/components/ui/Button'
import { CONTACT_EMAIL } from '@/lib/site'

/**
 * Editorial closing statement - the conclusion of the Digital Next story.
 * Asymmetric like a publication's last page: a meta rule across the top,
 * the statement set large on the left, and the supporting copy + actions
 * bottom-aligned to it on the right. Carries the `contact` anchor for the nav.
 */
export default function ClosingThought() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-bg pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-16"
    >
      <div className="shell">
        {/* Meta rule */}
        <Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-line pb-5">
            <Eyebrow>Final thought</Eyebrow>
            <span className="hidden font-mono text-[0.6875rem] uppercase tracking-meta text-muted sm:block">
              Five brands <span className="px-2 text-line">/</span> One group
              <span className="px-2 text-line">/</span> Est. 2017
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-y-10 sm:mt-14 lg:mt-16 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <div className="lg:col-span-7">
            <TextReveal
              as="h2"
              className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[1.02] tracking-tightest text-ink"
              lines={[
                <>Built for decades.</>,
                <>
                  <em className="italic text-accent">Not quarters.</em>
                </>,
              ]}
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pb-3">
            <Reveal delay={0.15}>
              <p className="max-w-[30rem] text-base leading-[1.7] text-muted [text-wrap:pretty] sm:text-[1.0625rem]">
                Digital Next partners with exceptional founders to build,
                acquire, and scale independent internet businesses. Through
                shared expertise, long-term capital, and operational excellence,
                every brand has the freedom to grow while benefiting from the
                strength of the group.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Button href="/brands" variant="primary" arrow>
                  Explore our brands
                </Button>
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex w-fit items-center gap-2.5 text-[0.9375rem] font-medium leading-snug text-ink transition-colors duration-[250ms] ease-editorial hover:text-accent"
                >
                  <span className="relative">
                    Contact us
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[250ms] ease-editorial group-hover:scale-x-100" />
                  </span>
                  <span className="text-accent transition-transform duration-[250ms] ease-editorial group-hover:translate-x-[0.3125rem]">
                    &rarr;
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
