import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import { timeline } from '@/lib/site'

/**
 * Our story - a visual timeline built from the group's real milestones.
 * A thin spine with a node per year; content alternates naturally down the
 * page. Vertical on mobile.
 */
export default function AboutTimeline() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="border-t border-line pt-8 sm:pt-10">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="display mt-6 max-w-[16ch] text-statement">
              Built steadily,{' '}
              <em className="italic text-accent">on purpose</em>.
            </h2>
          </Reveal>

          <ol className="relative mt-14 sm:mt-16">
            {/* spine */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[5px] top-2 w-px bg-line sm:left-[calc(9rem+5px)]"
            />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={(i % 2) * 0.05}>
                <li className="relative grid grid-cols-1 gap-x-10 gap-y-2 py-8 pl-9 sm:grid-cols-[9rem_1fr] sm:gap-x-16 sm:pl-0">
                  {/* node */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[2.35rem] h-[11px] w-[11px] rounded-full border border-ink bg-bg sm:left-[9rem]"
                  />
                  <span className="font-mono text-[13px] tabular-nums tracking-meta text-accent/80 sm:pt-1 sm:text-right sm:pr-2">
                    {t.year}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-normal tracking-tight text-ink">
                      {t.title}
                    </h3>
                    <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-muted">
                      {t.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
