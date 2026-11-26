import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import { locations } from '@/lib/about'

/**
 * Global presence - a restrained, typographic take (no decorative world map).
 * Countries listed as an editorial index alongside a statement about how
 * distributed collaboration strengthens each company.
 */
export default function GlobalPresence() {
  return (
    <section data-nav-dark className="bg-dark py-16 text-white sm:py-20 lg:py-24">
      <div className="shell">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="light">Global presence</Eyebrow>
            </Reveal>
            <h2 className="display mt-6 max-w-[16ch] text-statement text-white">
              Remote-first,{' '}
              <em className="italic text-accent">globally connected</em>.
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-white/55">
                Our teams work across time zones by default. That distance is an
                advantage: talent is hired where it lives, work follows the sun,
                and every company draws on the whole group&rsquo;s experience -
                not just the people in one building.
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-2" delay={0.12}>
            <span className="block font-mono text-[0.625rem] uppercase tracking-[0.24em] text-white/40">
              Where we work
            </span>
            <ul className="mt-6">
              {locations.map((loc, i) => (
                <li
                  key={loc}
                  className="flex items-baseline gap-5 border-t border-white/10 py-4 last:border-b"
                >
                  <span className="w-6 shrink-0 font-mono text-[0.625rem] tabular-nums tracking-meta text-accent/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-xl tracking-tight text-white/90">
                    {loc}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
