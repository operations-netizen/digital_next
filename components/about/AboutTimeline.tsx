import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import { timeline } from '@/lib/site'

/**
 * Our story - a visual timeline built from the group's real milestones.
 *
 * Two-column spread: the section heading holds the left four columns and
 * sticks while the milestones scroll past it, so the timeline reads against a
 * fixed anchor instead of leaving the right half of the page empty. A thin
 * spine runs the length of the list and dissolves after the last node.
 * Vertical, single-column on mobile.
 */
export default function AboutTimeline() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="border-t border-line pt-8 sm:pt-10">
          <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            {/* Heading - sticks alongside the scrolling milestones */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <Eyebrow>Our story</Eyebrow>
                <h2 className="display mt-6 max-w-[14ch] text-statement">
                  Built steadily,{' '}
                  <em className="italic text-accent">on purpose</em>.
                </h2>
                <p className="mt-7 max-w-[36ch] text-base leading-relaxed text-muted">
                  Two decades of building internet businesses - from a single
                  agency in 2006 to six brands across agency, platform, and
                  SaaS.
                </p>
              </Reveal>
            </div>

            <ol className="relative lg:col-span-7 lg:col-start-6">
              {/* Spine - fades out below the final node */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-[5px] top-3 w-px bg-gradient-to-b from-line via-line to-transparent sm:left-[calc(5.5rem+5px)]"
              />
              {timeline.map((t, i) => (
                <Reveal
                  as="li"
                  key={t.year}
                  delay={(i % 2) * 0.05}
                  className="relative grid grid-cols-1 gap-x-10 gap-y-2 py-7 pl-9 sm:grid-cols-[5.5rem_1fr] sm:pl-0"
                >
                  {/* node */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[2.05rem] flex h-[11px] w-[11px] items-center justify-center rounded-full border border-line bg-bg sm:left-[5.5rem]"
                  >
                    <span className="h-[3px] w-[3px] rounded-full bg-accent" />
                  </span>
                  <span className="font-mono text-[13px] tabular-nums tracking-[0.1em] text-accent/80 sm:pr-3 sm:pt-1 sm:text-right">
                    {t.year}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-normal tracking-tight text-ink">
                      {t.title}
                    </h3>
                    <p className="mt-2.5 max-w-[46ch] text-[15px] leading-[1.7] text-muted">
                      {t.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
