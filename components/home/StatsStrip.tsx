import Reveal from '@/components/ui/Reveal'
import CountUp from '@/components/ui/CountUp'
import { quickStats } from '@/lib/site'

/**
 * Group figures, directly beneath the hero. The rule above sits on the shell
 * content edge, matching the AnimatedDivider that closes the strip below
 * (a full-bleed border here doubled up against that shell-width divider and
 * read as a broken line on wide screens).
 */
export default function StatsStrip() {
  return (
    <section className="shell">
      <div className="grid grid-cols-2 gap-y-10 border-t border-line py-10 sm:grid-cols-4 sm:gap-y-0 sm:py-12">
        {quickStats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className={[
              'px-1 sm:px-8 sm:first:pl-0',
              i > 0 ? 'sm:border-l sm:border-line' : '',
            ].join(' ')}
          >
            <div className="font-serif text-[3rem] font-light leading-none tracking-tighter text-ink sm:text-[3.75rem]">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-4 font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
