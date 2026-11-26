import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import CountUp from '@/components/ui/CountUp'
import { impactStats } from '@/lib/site'

/**
 * By the numbers - the group's real figures, animated on scroll.
 *
 * Six figures on a 3-up grid (2-up on mobile) so every row is full; a 4-up
 * grid leaves two dead cells on the second row. Each figure sits under its
 * own hairline, matching the top-rule rhythm used across the site.
 */
export default function AboutStats() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="border-t border-line pt-8 sm:pt-10">
          <div className="grid gap-x-16 gap-y-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>By the numbers</Eyebrow>
                <h2 className="display mt-6 max-w-[18ch] text-statement">
                  A group with{' '}
                  <em className="italic text-accent">real scale</em>.
                </h2>
              </Reveal>
            </div>

            <Reveal
              className="self-end lg:col-span-4 lg:col-start-9 lg:pb-2"
              delay={0.12}
            >
              <p className="max-w-[38ch] text-base leading-[1.85] text-muted">
                Independent brands, one shared platform. These are the group
                figures behind that model.
              </p>
            </Reveal>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-14 sm:mt-20 sm:grid-cols-3 lg:gap-x-16">
            {impactStats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 3) * 0.06}>
                <div className="border-t border-line pt-6">
                  <dd className="font-serif text-[clamp(3rem,5.5vw,4.5rem)] font-light leading-[0.95] tracking-tightest text-ink tabular-nums">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-5 font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
                    {s.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
