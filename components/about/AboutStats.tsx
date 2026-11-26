import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import CountUp from '@/components/ui/CountUp'
import { impactStats } from '@/lib/site'

/**
 * By the numbers - the group's real figures, animated on scroll.
 *
 * One compact band (the StatsStrip vocabulary): six figures in a single row
 * on desktop between two rules, split by hairlines; 3-up on tablets, 2-up
 * on phones. Figures are capped at 3rem so the band reads as data, not as
 * six headlines.
 */
export default function AboutStats() {
  return (
    <section className="py-12 sm:py-14 lg:py-16">
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
              <p className="max-w-[38ch] text-base leading-[1.7] text-muted">
                Independent brands, one shared platform. These are the group
                figures behind that model.
              </p>
            </Reveal>
          </div>

          <dl className="mt-12 grid grid-cols-2 border-y border-line sm:mt-14 sm:grid-cols-3 lg:grid-cols-6">
            {impactStats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={(i % 6) * 0.05}
                className={[
                  'flex flex-col border-line py-6 sm:py-7',
                  // Exactly one left/top value per breakpoint (2 / 3 / 6 cols):
                  // a hairline between cells in a row, a rule between rows.
                  i % 2 ? 'border-l pl-5' : 'border-l-0 pl-0',
                  i % 3 ? 'sm:border-l sm:pl-6' : 'sm:border-l-0 sm:pl-0',
                  i ? 'lg:border-l lg:pl-6' : 'lg:border-l-0 lg:pl-0',
                  i >= 2 ? 'border-t' : 'border-t-0',
                  i >= 3 ? 'sm:border-t' : 'sm:border-t-0',
                  'lg:border-t-0',
                ].join(' ')}
              >
                <dt className="mt-3 font-mono text-[0.625rem] uppercase tracking-meta text-muted">
                  {s.label}
                </dt>
                <dd className="order-first font-serif text-[clamp(2rem,3vw,3rem)] font-light leading-none tracking-tightest text-ink tabular-nums">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
