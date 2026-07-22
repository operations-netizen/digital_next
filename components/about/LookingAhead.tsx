import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import { lookingAhead } from '@/lib/about'

/** Looking ahead - closes on vision rather than history. */
export default function LookingAhead() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="border-t border-line pt-8 sm:pt-10">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Looking ahead</Eyebrow>
              </Reveal>
              <TextReveal
                as="h2"
                className="display mt-6 max-w-[14ch] text-statement"
                lines={[
                  <>The next</>,
                  <>
                    <em className="italic text-accent">decade</em>.
                  </>,
                ]}
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              {lookingAhead.map((item, i) => (
                <Reveal key={item.lead} delay={(i % 3) * 0.06}>
                  <div className="border-t border-line py-7 first:pt-0 last:pb-0 sm:py-8">
                    <h3 className="font-serif text-2xl font-normal tracking-tight text-ink sm:text-[1.6rem]">
                      {item.lead}
                    </h3>
                    <p className="mt-3 max-w-[48ch] text-lg leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
