import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import { lookingAhead } from '@/lib/about'

/**
 * Looking ahead - closes on vision rather than history.
 *
 * The three commitments sit on a horizon line that runs left to right,
 * fading from hairline grey into accent and ending in an arrow - the
 * direction of travel. Each is a stop on the line (node, number, title,
 * body). On phones the line runs down the left edge instead. Hover fills
 * the node and nudges the title in accent.
 */
export default function LookingAhead() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="border-t border-line pt-8 sm:pt-10">
          <Reveal>
            <Eyebrow>Looking ahead</Eyebrow>
          </Reveal>
          <TextReveal
            as="h2"
            className="display mt-6 text-statement"
            lines={[
              <>
                The next <em className="italic text-accent">decade</em>.
              </>,
            ]}
          />

          <div className="relative mt-12 sm:mt-14">
            {/* Horizon - horizontal from sm up, vertical on phones */}
            <span
              aria-hidden="true"
              className="absolute left-[0.3125rem] top-0 h-full w-px bg-gradient-to-b from-line via-accent/40 to-accent sm:left-0 sm:right-6 sm:top-[0.3125rem] sm:h-px sm:w-auto sm:bg-gradient-to-r"
            />
            <span
              aria-hidden="true"
              className="absolute right-0 top-[-0.0625rem] hidden font-mono text-sm leading-none text-accent sm:block"
            >
              &rarr;
            </span>

            <ol className="grid gap-10 pl-8 sm:grid-cols-3 sm:gap-x-12 sm:pl-0 lg:gap-x-16">
              {lookingAhead.map((item, i) => (
                <Reveal key={item.lead} as="li" delay={i * 0.1} className="group relative sm:pt-10">
                  <span
                    aria-hidden="true"
                    className="absolute -left-8 top-1 h-[0.6875rem] w-[0.6875rem] rounded-full border-2 border-accent bg-white transition-colors duration-500 ease-editorial group-hover:bg-accent sm:left-0 sm:top-0"
                  />
                  <span className="font-mono text-[0.6875rem] tabular-nums tracking-meta text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-serif text-[1.5rem] font-normal leading-[1.15] tracking-tight text-ink transition-[color,transform] duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-accent sm:text-[1.625rem]">
                    {item.lead}
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[0.9375rem] leading-[1.65] text-muted">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
