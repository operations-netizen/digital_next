import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import CountUp from '@/components/ui/CountUp'
import { impactStats } from '@/lib/site'

// Shown on About - omit Users and Products shipped per current direction.
const stats = impactStats.filter(
  (s) => s.label !== 'Users' && s.label !== 'Products shipped'
)

/** By the numbers - the group's real figures, animated on scroll. */
export default function AboutStats() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="border-t border-line pt-8 sm:pt-10">
          <Reveal>
            <Eyebrow>By the numbers</Eyebrow>
            <h2 className="display mt-6 max-w-[18ch] text-statement">
              A group with{' '}
              <em className="italic text-accent">real scale</em>.
            </h2>
          </Reveal>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-4 lg:gap-x-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 3) * 0.06}>
                <div className="border-t border-line pt-6">
                  <dd className="font-serif text-[clamp(2.75rem,5vw,4rem)] font-light leading-none tracking-tightest text-ink">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-4 font-mono text-[11px] uppercase tracking-meta text-muted">
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
