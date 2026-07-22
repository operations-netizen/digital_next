/**
 * Editorial "Principles Panel" companion for each timeline stage in
 * "How we operate". No decorative graphics - the storytelling is purely
 * typographic: an oversized keyword, one strong statement, four concise
 * principles with thin separators, and a stage indicator. Dark, minimal,
 * generous negative space, one restrained blue accent. Entrance (fade +
 * slide) is handled by the <Reveal> wrapper in the timeline.
 */

type Stage = 'found' | 'build' | 'scale'

const PANELS: Record<
  Stage,
  { keyword: string; statement: string; principles: string[]; step: string }
> = {
  found: {
    keyword: 'FOUND',
    statement: 'We invest in exceptional operators before products.',
    principles: [
      'Thesis-driven investing',
      'Founder-first approach',
      'Long-term ownership',
      'High-conviction decisions',
    ],
    step: '01 / 03',
  },
  build: {
    keyword: 'BUILD',
    statement: 'We build durable companies on shared capital, talent, and technology.',
    principles: [
      'Senior operating teams',
      'Shared infrastructure',
      'Product & brand ownership',
      'A bias for shipping',
    ],
    step: '02 / 03',
  },
  scale: {
    keyword: 'SCALE',
    statement: 'We compound value across the group over decades, not quarters.',
    principles: [
      'Shared distribution',
      'Cross-company expertise',
      'Independent brands',
      'Patient long-term ownership',
    ],
    step: '03 / 03',
  },
}

export default function PrinciplesPanel({
  stage,
}: {
  stage: Stage
  reduce?: boolean | null
}) {
  const p = PANELS[stage]

  return (
    <div className="w-full max-w-md">
      {/* Oversized keyword */}
      <h3 className="font-serif text-5xl font-light uppercase leading-none tracking-[0.05em] text-white sm:text-6xl">
        {p.keyword}
      </h3>

      {/* Strong statement */}
      <p className="mt-7 font-serif text-xl font-light leading-snug text-white/85 sm:text-2xl">
        {p.statement}
      </p>

      {/* Principles with thin separators */}
      <ul className="mt-9 border-t border-white/12">
        {p.principles.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3.5 border-b border-white/12 py-3.5 text-[15px] text-white/70"
          >
            <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>

      {/* Stage indicator */}
      <p className="mt-8 font-mono text-[11px] tracking-meta text-white/40">
        <span className="text-accent">{p.step.split(' / ')[0]}</span> / {p.step.split(' / ')[1]}
      </p>
    </div>
  )
}
