import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import TextReveal from '@/components/ui/TextReveal'
import ContactForm from '@/components/home/ContactForm'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata = {
  title: 'Contact',
  description:
    'Reach Digital Next - founders exploring a sale, operators who want to build, and partners across the group.',
}

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
      {/* 01 - Hero + contact channels */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pb-24">
        <div className="shell">
          <div className="grid gap-y-16 lg:grid-cols-12 lg:items-start lg:gap-x-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Contact</Eyebrow>
              </Reveal>
              <TextReveal
                as="h1"
                trigger="mount"
                className="display mt-8 max-w-[15ch] text-hero"
                lines={[
                  <>Let&rsquo;s build something</>,
                  <>
                    <em className="italic text-accent">enduring</em>.
                  </>,
                ]}
              />
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-[50ch] text-lg leading-relaxed text-muted">
                  Whether you&rsquo;re a founder exploring a sale, an operator who
                  wants to build with us, or a partner across the group - we&rsquo;d
                  like to hear from you.
                </p>
              </Reveal>
            </div>

            {/* Contact channels */}
            <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-3" delay={0.2}>
              <div>
                {channels.map((c) => {
                  const inner = (
                    <>
                      <div>
                        <span className="block font-mono text-[0.625rem] uppercase tracking-meta text-muted transition-colors duration-300 ease-editorial group-hover:text-ink/60">
                          {c.label}
                        </span>
                        <span className="mt-1.5 block font-serif text-xl tracking-tight text-ink">
                          {c.href ? (
                            <span className="relative inline-block">
                              {c.value}
                              <span
                                aria-hidden="true"
                                className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-editorial group-hover:scale-x-100"
                              />
                            </span>
                          ) : (
                            c.value
                          )}
                        </span>
                      </div>
                      {c.href && (
                        <span className="-translate-x-1 self-center text-accent opacity-0 transition-all duration-300 ease-editorial group-hover:translate-x-0 group-hover:opacity-100">
                          {c.cue}
                        </span>
                      )}
                    </>
                  )
                  const cls =
                    'group flex items-center justify-between gap-4 border-t border-line py-5 last:border-b'
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`${cls} outline-none focus-visible:ring-2 focus-visible:ring-accent/40`}
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

      {/* 02 - Inquiry form */}
      <section className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-14">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-14">
            <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <Eyebrow>Send an inquiry</Eyebrow>
                <h2 className="display mt-6 max-w-[12ch] text-statement">
                  Start a <em className="italic text-accent">conversation</em>.
                </h2>
                <p className="mt-6 max-w-[36ch] text-base leading-relaxed text-muted">
                  Tell us a little about you and why you&rsquo;re reaching out.
                </p>

                <div className="mt-10 border-t border-line pt-8">
                  <span className="block font-mono text-[0.625rem] uppercase tracking-meta text-muted">
                    Prefer email
                  </span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group mt-2 inline-block font-serif text-lg tracking-tight text-ink"
                  >
                    <span className="relative">
                      {CONTACT_EMAIL}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-editorial group-hover:scale-x-100" />
                    </span>
                  </a>
                  <p className="mt-6 max-w-[34ch] text-[0.8125rem] leading-relaxed text-muted/80">
                    Every message is read by the team. We reply within two
                    business days.
                  </p>
                </div>
              </Reveal>
              <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.12}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - FAQ */}
      <section className="pb-24 pt-0 sm:pb-32 lg:pb-40">
        <div className="shell">
          <div className="border-t border-line pt-14 sm:pt-16">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="display mt-7 max-w-[14ch] pb-1 text-statement leading-[1.08]">
                Common <em className="italic text-accent">questions</em>.
              </h2>
            </Reveal>

            <div className="mt-12 sm:mt-16">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.08}>
                  <div className="grid gap-x-10 gap-y-3 border-t border-line py-8 last:border-b lg:grid-cols-12 lg:py-10">
                    <span className="font-mono text-[0.8125rem] tracking-meta text-accent/70 lg:col-span-1 lg:pt-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-2xl font-normal tracking-tight text-ink lg:col-span-5">
                      {f.q}
                    </h3>
                    <p className="max-w-[52ch] text-lg leading-relaxed text-muted lg:col-span-5 lg:col-start-8">
                      {f.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 - Closing statement (dark) */}
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
