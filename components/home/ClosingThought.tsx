import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import Button from '@/components/ui/Button'
import { CONTACT_EMAIL } from '@/lib/site'

/**
 * Editorial closing statement - the conclusion of the Digital Next story.
 * Centered, typography-led, generous whitespace. Sits on the white
 * background as a clean transition into the footer. Carries the `contact`
 * anchor for the nav.
 */
export default function ClosingThought() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line bg-bg py-24 text-center sm:py-28 lg:py-32"
    >
      <div className="shell">
        <div className="mx-auto flex max-w-[840px] flex-col items-center">
          <Reveal>
            <Eyebrow>Final thought</Eyebrow>
          </Reveal>

          <TextReveal
            as="h2"
            className="mt-8 font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[1.03] tracking-tightest text-ink"
            lines={[
              <>Built for decades.</>,
              <>
                <em className="italic text-accent">Not quarters.</em>
              </>,
            ]}
          />

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-[660px] text-lg leading-relaxed text-muted">
              Digital Next partners with exceptional founders to build, acquire,
              and scale independent internet businesses. Through shared
              expertise, long-term capital, and operational excellence, every
              company has the freedom to grow while benefiting from the strength
              of the group.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
              <Button href="/#portfolio" variant="primary" arrow>
                Explore Our Companies
              </Button>
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="ghost" arrow>
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
