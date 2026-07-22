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

          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-5 sm:mt-14">
            {techStack.map((t, i) => (
              <Reveal key={t} delay={(i % 6) * 0.04}>
                <li className="font-serif text-2xl tracking-tight text-ink/80 transition-colors duration-300 ease-editorial hover:text-ink sm:text-[1.75rem]">
                  {t}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
