import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import { groupLeadership, brandLeadership, type LeaderMember } from '@/lib/about'

/** initials from a name, e.g. "Vaibhav Kakkar" → "VK" */
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
}

function Profile({ m, delay }: { m: LeaderMember; delay: number }) {
  return (
    <Reveal delay={delay} amount={0.15}>
      <div className="group">
        {/* Portrait or monogram - subjects sit on a unified black gradient */}
        <div
          className="relative aspect-[4/5] w-full overflow-hidden border border-white/10"
          style={{
            background:
              'radial-gradient(120% 100% at 50% 0%, #20232b 0%, #0f1118 48%, #0a0b0f 100%)',
          }}
        >
          {m.photo ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={m.photo}
              alt={`${m.name}, ${m.role}`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-serif text-6xl font-light tracking-tight text-white/25">
                {initials(m.name)}
              </span>
            </div>
          )}
          {/* corner index so the placeholder reads as intentional */}
          {!m.photo && (
            <span
              aria-hidden="true"
              className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-meta text-white/30"
            >
              {initials(m.name)}
            </span>
          )}
        </div>

        <h4 className="mt-6 font-serif text-[2.35rem] font-normal leading-[1.1] tracking-tight text-ink">
          {m.name}
        </h4>
        <span className="mt-2.5 block font-mono text-[12px] uppercase tracking-meta text-accent">
          {m.role}
        </span>
        <p className="mt-4 max-w-[42ch] text-[19px] leading-[1.65] text-muted">
          {m.bio}
        </p>
        {m.linkedin && (
          <a
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${m.name} on LinkedIn`}
            className="group/li mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-meta text-muted transition-colors duration-300 ease-editorial hover:text-accent"
          >
            LinkedIn
            <span className="transition-transform duration-300 ease-editorial group-hover/li:translate-x-0.5 group-hover/li:-translate-y-0.5">
              &#8599;
            </span>
          </a>
        )}
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
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="border-t border-line pt-8 sm:pt-10">
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
          <div className="mt-16 sm:mt-20">
            <Reveal>
              <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-muted/50">
                Group Leadership
              </span>
            </Reveal>
            <div className="mt-10 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {groupLeadership.map((m, i) => (
                <Profile key={m.name} m={m} delay={(i % 3) * 0.06} />
              ))}
            </div>
          </div>

          {/* Brand leadership */}
          <div className="mt-20 sm:mt-24">
            <Reveal>
              <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-muted/50">
                Brand Leadership
              </span>
            </Reveal>
            <div className="mt-10 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {brandLeadership.map((m, i) => (
                <Profile key={m.name} m={m} delay={(i % 3) * 0.06} />
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <Reveal delay={0.1}>
            <div className="mt-20 border-t border-line pt-10 text-center sm:mt-24">
              <p className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tight text-ink">
                Different expertise.{' '}
                <em className="italic text-accent">One shared vision</em>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
