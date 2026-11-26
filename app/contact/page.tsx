import { pageMetadata } from '@/lib/seo'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import ContactForm from '@/components/home/ContactForm'
import ContactRoutes from '@/components/contact/ContactRoutes'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Reach Digital Next - founders exploring a sale, operators who want to build, and partners across the group.',
  path: '/contact',
})

const channels = [
  { label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, cue: '→' },
  { label: 'Office', value: 'Global - remote-first' },
  { label: 'LinkedIn', value: 'Digital Next', href: 'https://www.linkedin.com', cue: '↗' },
]

const faqs = [
  {
    q: 'Business acquisitions',
    a: 'We acquire profitable internet businesses and hold them for the long term. If you are considering a sale, send a short overview - we read and reply to every founder.',
  },
  {
    q: 'Partnerships',
    a: 'We partner with operators, agencies, and platforms across the group. Tell us what you have in mind and we will route it to the right person.',
  },
  {
    q: 'Response time',
    a: 'Every inquiry is read by a member of the team. We typically respond within two business days.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* 01 - Hero (dark). Headline left, a glass contact card right, both
          centred on one axis. Behind: a faint hairline grid fading out from
          the top, and an accent glow behind the card. */}
      <section
        data-nav-dark
        className="relative overflow-hidden bg-[#0B0D12] pb-16 pt-32 text-white sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-36"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '4.5rem 4.5rem',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black, transparent 75%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(40% 55% at 78% 45%, rgba(79,70,255,0.16), transparent 70%)',
          }}
        />

        <div className="shell relative">
          <div className="grid gap-y-12 lg:grid-cols-12 lg:items-center lg:gap-x-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="light">Contact</Eyebrow>
              </Reveal>
              <TextReveal
                as="h1"
                trigger="mount"
                className="display mt-6 max-w-[15ch] text-hero text-white"
                lines={[
                  <>Let&rsquo;s build something</>,
                  <>
                    <em className="italic text-accent">enduring</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-[1.7] text-white/60">
                  Whether you&rsquo;re a founder exploring a sale, an operator who
                  wants to build with us, or a partner across the group -
                  we&rsquo;d like to hear from you.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-8">
                  <a
                    href="#inquiry"
                    className="group inline-flex min-h-[2.75rem] items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                  >
                    Send an Inquiry
                    <span className="transition-transform duration-300 ease-editorial group-hover:translate-y-0.5">
                      &darr;
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Glass contact card - hairline frame, accent top edge, header
                strip, one row per channel. Hover: row lifts, accent rule
                draws across its top, value nudges right in accent. */}
            <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.2}>
              <div className="border border-white/10 border-t-2 border-t-accent bg-white/[0.03] shadow-[0_40px_90px_-40px_rgba(79,70,255,0.35)] backdrop-blur-sm">
                <div className="border-b border-white/10 px-6 py-4 font-mono text-[0.625rem] uppercase tracking-meta text-white/70 sm:px-8">
                  Reach us directly
                </div>
                {channels.map((c, i) => {
                  const inner = (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100"
                      />
                      <div className="min-w-0">
                        <span className="flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-meta">
                          <span className="tabular-nums text-accent/80 transition-colors duration-500 ease-editorial group-hover:text-accent">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-white/45">{c.label}</span>
                        </span>
                        <span className="mt-2 block truncate font-serif text-[1.375rem] tracking-tight text-white transition-[color,transform] duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-accent sm:text-[1.5rem]">
                          {c.value}
                        </span>
                      </div>
                      {c.href && (
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-lg text-white/30 transition-[color,transform] duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-accent"
                        >
                          {c.cue}
                        </span>
                      )}
                    </>
                  )
                  const cls = `group relative flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-500 ease-editorial hover:bg-white/[0.04] sm:px-8 sm:py-6${
                    i ? ' border-t border-white/10' : ''
                  }`
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`${cls} outline-none focus-visible:bg-white/[0.04]`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label} className={cls}>
                      {inner}
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 - Who's writing: split header, then three routes into the form */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-6 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <Eyebrow>Who&rsquo;s writing</Eyebrow>
              <h2 className="display mt-6 text-statement">
                Three ways <em className="italic text-accent">in</em>.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
              <p className="max-w-[38ch] text-base leading-[1.7] text-muted">
                Pick the one closest to you - we&rsquo;ll set up the form for
                it.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.08} className="mt-10 sm:mt-12">
            <ContactRoutes />
          </Reveal>
        </div>
      </section>

      {/* 03 - Inquiry form, on a full-bleed tint band so the white panel
          lifts off it. Left: pitch, what happens next, direct email -
          centred on the panel's axis. */}
      <section id="inquiry" className="scroll-mt-16 bg-[#F6F6FA] py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Send an inquiry</Eyebrow>
                <h2 className="display mt-6 text-statement">
                  Start a <em className="italic text-accent">conversation</em>.
                </h2>
                <p className="mt-6 max-w-[40ch] text-base leading-[1.7] text-muted">
                  Tell us a little about you and why you&rsquo;re reaching out.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <ol className="mt-9 max-w-[26rem] border-t border-line">
                  {[
                    ['You write in', 'Five fields, one message.'],
                    ['We route it', 'To the team closest to it.'],
                    ['We reply', 'Within two business days.'],
                  ].map(([title, body], i) => (
                    <li key={title} className="group flex items-baseline gap-5 border-b border-line py-4">
                      <span className="font-mono text-[0.625rem] tabular-nums tracking-meta text-accent/70 transition-colors duration-300 ease-editorial group-hover:text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="whitespace-nowrap text-[0.9375rem] text-ink transition-[color,transform] duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-accent">
                        {title}
                      </span>
                      <span className="ml-auto hidden text-right text-[0.8125rem] text-muted sm:inline">
                        {body}
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8">
                  <span className="block font-mono text-[0.625rem] uppercase tracking-meta text-muted">
                    Prefer email
                  </span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group mt-2 inline-flex items-center gap-2 font-serif text-lg tracking-tight text-ink"
                  >
                    <span className="relative">
                      {CONTACT_EMAIL}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-editorial group-hover:scale-x-100" />
                    </span>
                    <span className="text-accent transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7" delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 - FAQ: split header, then one hairline panel 3-up with the
          site's hover (tint, accent rule, number + tick, title nudge). */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-6 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="display mt-6 text-statement">
                Common <em className="italic text-accent">questions</em>.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
              <p className="max-w-[38ch] text-base leading-[1.7] text-muted">
                Something else on your mind? Write to{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-ink underline decoration-line underline-offset-4 transition-colors duration-300 ease-editorial hover:text-accent hover:decoration-accent"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid border-l border-t border-line sm:mt-12 md:grid-cols-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06} className="h-full">
                <div className="group relative h-full border-b border-r border-line px-6 py-7 transition-colors duration-500 ease-editorial hover:bg-[#FAFAFC] sm:px-8 sm:py-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100"
                  />
                  <span className="flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-meta">
                    <span className="tabular-nums text-accent/70 transition-colors duration-500 ease-editorial group-hover:text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-4 bg-line transition-[width,background-color] duration-500 ease-editorial group-hover:w-7 group-hover:bg-accent"
                    />
                  </span>
                  <h3 className="mt-5 font-serif text-[1.5rem] font-normal leading-[1.15] tracking-tight text-ink transition-[color,transform] duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-accent">
                    {f.q}
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[0.9375rem] leading-[1.65] text-muted transition-colors duration-500 ease-editorial group-hover:text-ink/75">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 - Closing statement (dark) */}
      <section
        data-nav-dark
        className="relative overflow-hidden bg-[#0B0D12] py-28 text-center text-white sm:py-36"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[23.75rem] w-[42.5rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(79,70,255,0.08), transparent 70%)',
          }}
        />
        <div className="shell relative z-10">
          <Reveal>
            <p className="mx-auto max-w-[22ch] font-serif text-[clamp(2rem,4.6vw,3.5rem)] font-light leading-[1.12] tracking-tight text-white">
              Every enduring company begins with a{' '}
              <em className="italic text-accent">conversation</em>.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group mt-10 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-meta text-white/55 transition-colors duration-300 ease-editorial hover:text-white"
            >
              {CONTACT_EMAIL}
              <span className="text-accent transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
