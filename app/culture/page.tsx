import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'

export const metadata = pageMetadata({
  title: 'Culture',
  description:
    'What it actually feels like to work inside Digital Next - how decisions get made, how we communicate, how people grow, and what we celebrate.',
  path: '/culture',
})

const timeline = [
  {
    when: 'Week one',
    body: 'You ship something real. Onboarding is a task you complete, not a month of reading about the work.',
  },
  {
    when: 'Month three',
    body: 'You own a surface area. People come to you for it, and you stop asking permission for the obvious.',
  },
  {
    when: 'Year one',
    body: 'You have made decisions that outlived the conversation that started them.',
  },
  {
    when: 'Five years',
    body: 'You have shaped how the next person works - and trained your own replacement more than once.',
  },
]

const neverHear = [
  'That’s not my job.',
  'We’ll get to it next quarter.',
  'Someone else owns that.',
  'Because that’s how we’ve always done it.',
  'Let’s book a meeting to plan the meeting.',
]

const hearOften = [
  'Ship it.',
  'Show me.',
  'Let’s simplify.',
  'What did we learn?',
  'Write it down.',
]

const decisions = [
  {
    title: 'Small teams',
    body: 'Two or three people, close to the problem, make most of the calls.',
  },
  {
    title: 'Reversible and fast',
    body: 'If a decision can be undone, we make it today and keep moving.',
  },
  {
    title: 'Written first',
    body: 'The proposal is a document, not a presentation. Reading beats performing.',
  },
  {
    title: 'Evidence over opinion',
    body: 'The strongest argument wins - and a little data usually settles it.',
  },
]

const communication = [
  'We write more than we meet.',
  'We document, so decisions outlast the people in the room.',
  'We debate ideas, never egos.',
  'Meetings are short. Writing lasts longer.',
  'Silence is not agreement - say the thing.',
  'Async by default; live when it is genuinely faster.',
]

const behaviors = [
  { title: 'Good writing', body: 'Clear words are clear thinking made visible.' },
  { title: 'Clean systems', body: 'We’d rather remove than add.' },
  { title: 'Fast iteration', body: 'Small steps, shipped often, beat big reveals.' },
  { title: 'Calm execution', body: 'Urgency without drama. Pressure without panic.' },
  { title: 'Helpful feedback', body: 'Direct, early, and always about the work.' },
  { title: 'Curiosity', body: 'The good questions matter more than quick answers.' },
]

const growth = [
  { stage: 'Contributor', body: 'You do excellent work and finish what you start.' },
  { stage: 'Owner', body: 'You take a problem end to end, without being asked.' },
  { stage: 'Mentor', body: 'Your standards quietly raise the people around you.' },
  { stage: 'Builder', body: 'You create the systems other people build on.' },
  { stage: 'Leader', body: 'You set a direction people choose to follow.' },
]

const ideas = [
  'Writing is thinking.',
  'Small teams, large trust.',
  'Compounding beats intensity.',
  'Simple scales; clever breaks.',
  'Taste is a skill you can practise.',
  'Feedback is a gift, not a verdict.',
]

const voices = [
  'The best idea usually wins.',
  'I’ve never learned this fast.',
  'We delete more than we build.',
  'Everyone ships.',
]

const celebrate = [
  'A clean launch.',
  'Architecture that ages well.',
  'The first customer of something new.',
  'A win that came from real care.',
  'Documentation people actually use.',
  'Someone who made a teammate better.',
  'A decision that looks obvious in hindsight.',
]

export default function CulturePage() {
  return (
    <>
      {/* 01 - Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-28">
        <div className="shell">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-16">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow>Culture</Eyebrow>
              </Reveal>
              <TextReveal
                as="h1"
                trigger="mount"
                className="display mt-8 max-w-[15ch] text-hero"
                lines={[
                  <>What it feels like</>,
                  <>
                    to <em className="italic text-accent">work here</em>.
                  </>,
                ]}
              />
            </div>
            <Reveal className="lg:col-span-4" delay={0.18}>
              <p className="max-w-[38ch] text-lg leading-[1.75] text-muted">
                Not what we believe - what actually happens on a Tuesday. How
                decisions get made, how people talk to each other, and what it
                looks like to grow here over years.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 - Your first week → five years */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-14">
            <Reveal>
              <Eyebrow>The shape of time here</Eyebrow>
              <h2 className="display mt-6 max-w-[18ch] text-statement">
                Responsibility arrives{' '}
                <em className="italic text-accent">early</em>.
              </h2>
            </Reveal>

            <ol className="mt-14 grid gap-x-12 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((t, i) => (
                <Reveal key={t.when} delay={(i % 4) * 0.06}>
                  <li className="relative border-t border-line pt-6">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-px w-8 bg-accent"
                    />
                    <span className="font-mono text-[0.625rem] uppercase tracking-meta text-muted/60">
                      {t.when}
                    </span>
                    <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink/80">
                      {t.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 03 - Things you'll never hear / hear often */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-14">
            <div className="grid gap-x-20 gap-y-14 lg:grid-cols-2">
              <Reveal>
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="h-px w-6 bg-muted/40" />
                  <span className="font-mono text-[0.625rem] uppercase tracking-meta text-muted">
                    Things you&rsquo;ll never hear
                  </span>
                </div>
                <ul className="mt-8">
                  {neverHear.map((line) => (
                    <li
                      key={line}
                      className="border-t border-line py-5 font-serif text-[1.4rem] leading-snug tracking-tight text-muted line-through decoration-line decoration-1 last:border-b"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="h-px w-6 bg-accent" />
                  <span className="font-mono text-[0.625rem] uppercase tracking-meta text-accent">
                    Things you&rsquo;ll hear often
                  </span>
                </div>
                <ul className="mt-8">
                  {hearOften.map((line) => (
                    <li
                      key={line}
                      className="border-t border-line py-5 font-serif text-[1.6rem] leading-snug tracking-tight text-ink last:border-b"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - How decisions happen (dark) */}
      <section data-nav-dark className="bg-dark py-20 text-white sm:py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <Eyebrow tone="light">How decisions happen</Eyebrow>
            <h2 className="display mt-6 max-w-[18ch] text-statement text-white">
              Close to the work,{' '}
              <em className="italic text-accent">made quickly</em>.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-16 gap-y-px sm:mt-16 sm:grid-cols-2">
            {decisions.map((d) => (
              <Reveal key={d.title}>
                <div className="group border-t border-white/10 py-9 lg:py-11">
                  <h3 className="font-serif text-2xl font-normal tracking-tight text-white/90 transition-transform duration-[600ms] ease-editorial group-hover:-translate-y-0.5 sm:text-[1.75rem]">
                    {d.title}
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-lg leading-[1.7] text-white/55 transition-colors duration-[600ms] ease-editorial group-hover:text-white/80">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 - How we communicate */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-14">
            <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <Eyebrow>How we communicate</Eyebrow>
                <p className="mt-6 max-w-[30ch] text-lg leading-[1.75] text-muted">
                  Most of what matters here is written. It makes us slower to
                  speak and faster to align.
                </p>
              </Reveal>
              <div className="lg:col-span-7 lg:col-start-6">
                {communication.map((line, i) => (
                  <Reveal key={line} delay={(i % 2) * 0.05}>
                    <p className={`${i === 0 ? '' : 'border-t border-line '}py-6 font-serif text-[clamp(1.35rem,2.2vw,1.85rem)] font-light leading-snug tracking-tight text-ink${i === communication.length - 1 ? ' border-b' : ''}`}>
                      {line}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 - Things that matter (behaviors) */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-14">
            <Reveal>
              <Eyebrow>Behaviors, not values</Eyebrow>
              <h2 className="display mt-6 max-w-[18ch] text-statement">
                What quietly{' '}
                <em className="italic text-accent">earns respect</em>.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-x-14 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {behaviors.map((b, i) => (
                <Reveal key={b.title} delay={(i % 3) * 0.06}>
                  <div className="border-t border-line pt-6">
                    <h3 className="font-serif text-[1.7rem] font-normal leading-tight tracking-tight text-ink">
                      {b.title}
                    </h3>
                    <p className="mt-3 max-w-[26ch] text-[0.9375rem] leading-[1.65] text-muted">
                      {b.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 - How people grow (dark) */}
      <section data-nav-dark className="bg-dark py-20 text-white sm:py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <Eyebrow tone="light">How people grow</Eyebrow>
            <h2 className="display mt-6 max-w-[20ch] text-statement text-white">
              Not titles.{' '}
              <em className="italic text-accent">Gravity</em>.
            </h2>
            <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-white/55">
              Growth here is measured by how much the work - and the people -
              lean on you. Each step is something you become, not something you
              are given.
            </p>
          </Reveal>

          <ol className="mt-14 sm:mt-16">
            {growth.map((g, i) => (
              <Reveal key={g.stage}>
                <li className={`group grid gap-x-12 gap-y-2 border-t border-white/10 py-8 lg:grid-cols-12 lg:py-9${i === growth.length - 1 ? ' border-b' : ''}`}>
                  <div className="flex items-baseline gap-6 lg:col-span-5">
                    <span className="font-mono text-[0.6875rem] tabular-nums tracking-meta text-accent/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-[1.9rem] font-normal leading-tight tracking-tight text-white/90 transition-transform duration-[600ms] ease-editorial group-hover:-translate-y-0.5">
                      {g.stage}
                    </h3>
                  </div>
                  <p className="text-lg leading-[1.7] text-white/55 transition-colors duration-[600ms] ease-editorial group-hover:text-white/80 lg:col-span-6 lg:col-start-7">
                    {g.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 08 - Ideas we keep coming back to */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-14">
            <Reveal>
              <Eyebrow>Ideas we keep coming back to</Eyebrow>
            </Reveal>
            <ul className="mt-10 max-w-[56.25rem]">
              {ideas.map((idea, i) => (
                <Reveal key={idea} delay={(i % 3) * 0.05}>
                  <li className={`border-t border-line py-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-tight tracking-tight text-ink${i === ideas.length - 1 ? ' border-b' : ''}`}>
                    {idea}
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted/70">
                Recurring ideas, not a required reading list - the ones that keep
                showing up in how we work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 - Voices (dark, centered) */}
      <section
        data-nav-dark
        className="bg-[#0B0D12] py-24 text-center text-white sm:py-32 lg:py-40"
      >
        <div className="shell">
          <Reveal>
            <Eyebrow tone="light">How it tends to feel</Eyebrow>
          </Reveal>
          <div className="mx-auto mt-10 max-w-[26ch] space-y-8">
            {voices.map((v, i) => (
              <Reveal key={v} delay={i * 0.08}>
                <p className="font-serif text-[clamp(1.6rem,3.4vw,2.6rem)] font-light leading-[1.2] tracking-tight text-white">
                  &ldquo;{v}&rdquo;
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-12 max-w-[40ch] text-[0.8125rem] leading-relaxed text-white/40">
              Representative of how people describe the work - shared anonymously.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 10 - What we celebrate */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-14">
            <Reveal>
              <Eyebrow>What we celebrate</Eyebrow>
              <h2 className="display mt-6 max-w-[18ch] text-statement">
                The work itself,{' '}
                <em className="italic text-accent">done well</em>.
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-x-16 sm:mt-14 sm:grid-cols-2">
              {celebrate.map((item, i) => (
                <Reveal key={item} delay={(i % 2) * 0.05}>
                  {/* Index, not last:, because Reveal wraps each item. The
                      closing rule goes under the last row: the last item on
                      phones, the last two in the sm two-column grid. */}
                  <li
                    className={`flex items-center gap-5 border-t border-line py-6${
                      i === celebrate.length - 1
                        ? ' border-b'
                        : celebrate.length % 2 === 0 && i === celebrate.length - 2
                          ? ' sm:border-b'
                          : ''
                    }`}
                  >
                    <span aria-hidden="true" className="h-px w-6 shrink-0 bg-accent" />
                    <span className="font-serif text-xl tracking-tight text-ink sm:text-2xl">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11 - CTA (dark) */}
      <section
        data-nav-dark
        className="relative overflow-hidden bg-dark py-24 text-center text-white sm:py-32 lg:py-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[26.25rem] w-[45rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(79,70,255,0.08), transparent 70%)',
          }}
        />
        <div className="shell relative z-10">
          <div className="mx-auto flex max-w-[53.75rem] flex-col items-center">
            <Reveal>
              <Eyebrow tone="light">Join us</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              className="display mt-7 max-w-[18ch] text-[clamp(2.4rem,5.2vw,4.75rem)] font-light leading-[1.06] tracking-tightest text-white"
              lines={[
                <>If this sounds like</>,
                <>
                  your kind of place,{' '}
                  <em className="italic text-accent">let&rsquo;s build together</em>.
                </>,
              ]}
            />
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <Link
                  href="/careers"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                >
                  View Careers
                  <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-8 py-4 text-sm font-medium text-white transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white/[0.04]"
                >
                  Contact
                  <span className="text-accent transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
