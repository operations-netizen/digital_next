import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import { techStack } from '@/lib/about'

/**
 * Technology - the tools and platforms used across the group, set as a quiet
 * typographic index (no logo soup). Renders nothing if the list is empty.
 */
export default function TechStack() {
  if (techStack.length === 0) return null

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="border-t border-line pt-8 sm:pt-10">
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <Eyebrow>Technology</Eyebrow>
              <h2 className="display mt-6 max-w-[18ch] text-statement">
                The tools we{' '}
                <em className="italic text-accent">build with</em>.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.12}>
              <p className="max-w-[38ch] text-lg leading-relaxed text-muted">
                A shared technology foundation every company inherits - proven
                platforms, chosen for the long term.
              </p>
            </Reveal>
          </div>

          {/* One hairline grid (collapsed borders: list top/left, cells
              right/bottom), 4-up on desktop so all eight sit in two even
              rows. Each cell: what the platform is used for, then its name.
              Hover: tint, accent rule across the top, name nudges right in
              accent - the site-wide hover language. */}
          <ul className="mt-10 grid grid-cols-2 border-l border-t border-line sm:mt-12 lg:grid-cols-4">
            {techStack.map((t, i) => (
              <Reveal
                key={t.name}
                as="li"
                delay={(i % 4) * 0.05}
                className="group relative border-b border-r border-line px-5 py-6 transition-colors duration-500 ease-editorial hover:bg-[#FAFAFC] sm:px-7 sm:py-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100"
                />
                <span className="flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-meta">
                  <span className="tabular-nums text-accent/70 transition-colors duration-500 ease-editorial group-hover:text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-muted">{t.role}</span>
                </span>
                <span className="mt-4 block font-serif text-[1.375rem] tracking-tight text-ink transition-[color,transform] duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-accent sm:text-[1.625rem]">
                  {t.name}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
