import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import { lifeFrames } from '@/lib/about'

/**
 * Life at Digital Next - an editorial gallery. Frames are intentional
 * placeholders (captioned, monochrome) until real photography is added, so
 * there is no stock-photo filler. Swap `image` in per frame in lib/about.ts.
 */
export default function LifeGallery() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="border-t border-line pt-8 sm:pt-10">
          <Reveal>
            <Eyebrow>Life at Digital Next</Eyebrow>
            <h2 className="display mt-6 max-w-[18ch] text-statement">
              How the work{' '}
              <em className="italic text-accent">actually feels</em>.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {lifeFrames.map((f, i) => (
              <Reveal
                key={f.caption}
                delay={(i % 3) * 0.06}
                className={f.span === 'wide' ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <figure className="group">
                  <div
                    className={`relative overflow-hidden border border-line bg-[#FAFAFA] ${
                      f.span === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    {f.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={f.image}
                        alt={f.caption}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale transition-[filter] duration-500 ease-editorial group-hover:grayscale-0"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-meta text-muted/40"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    )}
                  </div>
                  <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-meta text-muted">
                    {f.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
