import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import { awards } from '@/lib/about'

/**
 * Awards & recognition. Renders nothing until real awards exist in
 * lib/about.ts - the section hides itself rather than showing invented ones.
 */
export default function AwardsSection() {
  if (awards.length === 0) return null

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="border-t border-line pt-8 sm:pt-10">
          <Reveal>
            <Eyebrow>Recognition</Eyebrow>
            <h2 className="display mt-6 max-w-[16ch] text-statement">
              Work that&rsquo;s been{' '}
              <em className="italic text-accent">noticed</em>.
            </h2>
          </Reveal>

          <ul className="mt-12 sm:mt-14">
            {awards.map((a, i) => (
              <Reveal key={`${a.title}-${i}`} delay={(i % 2) * 0.05}>
                <li className="grid gap-x-12 gap-y-1 border-t border-line py-7 last:border-b lg:grid-cols-12">
                  <span className="font-mono text-[0.8125rem] tabular-nums tracking-meta text-accent/80 lg:col-span-2">
                    {a.year}
                  </span>
                  <h3 className="font-serif text-2xl font-normal tracking-tight text-ink lg:col-span-7">
                    {a.title}
                  </h3>
                  <span className="font-mono text-[0.6875rem] uppercase tracking-meta text-muted lg:col-span-3 lg:text-right">
                    {a.org}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
