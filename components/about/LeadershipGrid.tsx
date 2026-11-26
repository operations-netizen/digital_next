import { withBase } from '@/lib/asset'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import { groupLeadership, brandLeadership, type LeaderMember } from '@/lib/about'
import { companies } from '@/lib/companies'

/** initials from a name, e.g. "Vaibhav Kakkar" → "VK" */
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
}

/**
 * One leader. `size` sets the tier: "group" (4-up, larger type, full bio)
 * or "brand" (6-up, compact). Hover: the portrait eases in a touch, the
 * name turns accent.
 */
function Profile({
  m,
  delay,
  size = 'group',
}: {
  m: LeaderMember
  delay: number
  size?: 'group' | 'brand'
}) {
  const group = size === 'group'
  return (
    <Reveal delay={delay} amount={0.15}>
      <div className="group">
        {/* Portrait or monogram - subjects sit on a unified black gradient */}
        <div
          className="relative aspect-square w-full overflow-hidden"
          style={{
            background:
              'radial-gradient(120% 100% at 50% 0%, #20232b 0%, #0f1118 48%, #0a0b0f 100%)',
          }}
        >
          {m.photo ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={withBase(m.photo)}
              alt={`${m.name}, ${m.role}`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-[700ms] ease-editorial group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-serif text-5xl font-light tracking-tight text-white/25">
                {initials(m.name)}
              </span>
            </div>
          )}
        </div>

        <h4
          className={`mt-4 font-serif font-normal leading-[1.15] tracking-tight text-ink transition-colors duration-500 ease-editorial group-hover:text-accent ${
            group ? 'text-[1.5rem]' : 'text-[1.25rem]'
          }`}
        >
          {m.name}
        </h4>
        <span
          className={`mt-1.5 block font-mono uppercase tracking-meta text-accent ${
            group ? 'text-[0.6875rem]' : 'text-[0.625rem]'
          }`}
        >
          {m.role}
        </span>
        {m.bio && (
          <p
            className={`mt-3 leading-[1.6] text-muted ${
              group ? 'max-w-[38ch] text-[0.875rem]' : 'max-w-[30ch] text-[0.8125rem]'
            }`}
          >
            {m.bio}
          </p>
        )}
        {m.linkedin && (
          <a
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${m.name} on LinkedIn`}
            className="group/li mt-3 inline-flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-meta text-muted transition-colors duration-300 ease-editorial hover:text-accent"
          >
            LinkedIn
            <span className="transition-transform duration-300 ease-editorial group-hover/li:-translate-y-0.5 group-hover/li:translate-x-0.5">
              &#8599;
            </span>
          </a>
        )}
      </div>
    </Reveal>
  )
}

/** Tier label - accent tick, name, count. */
function TierLabel({ label, count }: { label: string; count: number }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-meta">
        <span aria-hidden="true" className="h-px w-6 bg-accent" />
        <span className="text-ink/70">{label}</span>
        <span className="tabular-nums text-accent">{String(count).padStart(2, '0')}</span>
      </div>
    </Reveal>
  )
}

/**
 * Leadership - the people leading the group and its brands. Two editorial
 * groups (Group / Brand), a responsive 3/2/1 grid, monogram placeholders
 * until real portraits exist, and a closing statement. Renders nothing if
 * both groups are empty.
 */
export default function LeadershipGrid() {
  if (groupLeadership.length === 0 && brandLeadership.length === 0) return null

  return (
    // No top rule of its own: on /about the ecosystem panel's bottom edge
    // sits directly above and is the seam (a second rule read as an empty band).
    <section className="pb-14 pt-4 sm:pb-16 sm:pt-6 lg:pb-20 lg:pt-8">
      <div className="shell">
        <div>
          {/* Section heading */}
          <Reveal>
            <Eyebrow>Leadership</Eyebrow>
          </Reveal>
          <TextReveal
            as="h2"
            className="display mt-6 max-w-[16ch] text-statement"
            lines={[
              <>The people building</>,
              <>
                what&rsquo;s <em className="italic text-accent">next</em>.
              </>,
            ]}
          />
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[60ch] text-lg leading-relaxed text-muted">
              Behind every company is a team of operators, builders, and
              specialists working together to create long-term value across the
              Digital Next ecosystem.
            </p>
          </Reveal>

          {/* Group leadership */}
          <div className="mt-12 sm:mt-14">
            <TierLabel label="Group leadership" count={groupLeadership.length} />
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
              {groupLeadership.map((m, i) => (
                <Profile key={m.name} m={m} delay={(i % 4) * 0.06} size="group" />
              ))}
            </div>
          </div>

          {/* Brand leadership */}
          <div className="mt-16 sm:mt-20">
            <TierLabel label="Brand leadership" count={brandLeadership.length} />
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
              {brandLeadership.map((m, i) => (
                <Profile key={m.name} m={m} delay={(i % 4) * 0.05} size="brand" />
              ))}
            </div>
          </div>

          {/* Closing statement - tied back to the people: every leader as a
              small overlapping portrait (fanning out a touch on hover), the
              line, and the counts (derived, never hard-coded). No rule above:
              the grid flows straight into it. */}
          <Reveal delay={0.1}>
            <div className="group/close mt-16 flex flex-col items-center text-center sm:mt-20">
              <div className="flex">
                {[...groupLeadership, ...brandLeadership].map((m, i) => (
                  <span
                    key={m.name}
                    className={`relative block h-11 w-11 overflow-hidden rounded-full bg-dark ring-[0.1875rem] ring-white transition-[margin] duration-500 ease-editorial sm:h-12 sm:w-12 ${
                      i ? '-ml-3 group-hover/close:-ml-1' : ''
                    }`}
                    style={{ zIndex: 20 - i }}
                    title={m.name}
                  >
                    {m.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={withBase(m.photo)}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center font-mono text-[0.625rem] text-white/60">
                        {initials(m.name)}
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <p className="mt-7 font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tight text-ink">
                Different expertise.{' '}
                <em className="italic text-accent">One shared vision</em>.
              </p>
              <span className="mt-4 font-mono text-[0.6875rem] uppercase tracking-meta text-muted">
                {groupLeadership.length + brandLeadership.length} leaders
                <span aria-hidden="true" className="mx-3 text-accent/50">
                  ·
                </span>
                {companies.length} brands
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
