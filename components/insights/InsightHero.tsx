import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'

/** Editorial masthead - title-led, no statistics, generous whitespace. */
export default function InsightHero() {
  return (
    <section className="pt-32 pb-20 sm:pt-44 sm:pb-28 lg:pb-32">
      <div className="shell">
        <Reveal>
          <Eyebrow>Insights</Eyebrow>
        </Reveal>
        <TextReveal
          as="h1"
          trigger="mount"
          className="display mt-8 max-w-[15ch] text-hero"
          lines={[
            <>Ideas for building</>,
            <>
              companies <em className="italic text-accent">that last</em>.
            </>,
          ]}
        />
        <Reveal delay={0.15}>
          <p className="mt-10 max-w-[46ch] text-xl leading-[1.7] text-muted">
            Selected writing on acquisitions, technology, company building, AI,
            leadership, and operating internet businesses.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <span className="mt-12 block font-mono text-[10px] uppercase tracking-meta text-muted/50">
            Notes from Digital Next · Written by operators · Published occasionally
          </span>
        </Reveal>
      </div>
    </section>
  )
}
