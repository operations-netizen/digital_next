import { withBase } from '@/lib/asset'
import Link from 'next/link'
import { companies } from '@/lib/companies'
import { CONTACT_EMAIL } from '@/lib/site'

// Short, footer-specific category labels.
const CATEGORY: Record<string, string> = {
  'digital-web-solutions': 'Digital Marketing',
  wytlabs: 'Marketing Agency (US)',
  hirenext: 'ATS Platform',
  rankwatch: 'SEO SaaS Platform',
  collabx: 'Influencer Platform',
  smegoweb: 'Marketing Agency (ANZ)',
}

const explore = [
  { label: 'Home', href: '/' },
  { label: 'Brands', href: '/brands' },
  { label: 'Careers', href: '/careers' },
]
const group = [
  { label: 'About', href: '/about' },
  { label: 'Culture', href: '/culture' },
  { label: 'Contact', href: '/contact' },
]
const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'YouTube', href: 'https://www.youtube.com' },
]

const heading = 'font-mono text-[0.6875rem] uppercase tracking-meta text-white/40'
const textLink =
  'group inline-flex items-center text-sm text-white/60 transition-all duration-300 ease-out hover:translate-x-0.5 hover:text-white'

export default function Footer() {
  return (
    <footer data-nav-dark className="relative overflow-hidden bg-dark text-white">
      {/* Subtle radial glow behind the brand */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[28.75rem] w-[35rem]"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(77,76,255,0.12), transparent 45%)',
        }}
      />

      <div className="shell relative py-24 sm:py-32">
        <div className="grid gap-x-8 gap-y-16 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Digital Next - home"
              className="group inline-flex items-center"
            >
              {/* Inverted for the dark footer - see the note in Nav. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/logo-dn.png")}
                alt=""
                width={565}
                height={120}
                className="h-8 w-auto opacity-90 invert transition-opacity duration-300 group-hover:opacity-100"
              />
            </Link>
            <p className={`mt-6 ${heading}`}>Technology Holding Company</p>
            <h2 className="mt-8 max-w-sm font-serif text-2xl font-light leading-snug tracking-tighter text-white/85 sm:text-[1.75rem]">
              Building internet brands that{' '}
              <em className="italic text-accent">compound for decades</em>.
            </h2>

            <div className="mt-12">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
              <div className="mt-5">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-300 ease-out hover:text-accent"
                >
                  <span className="relative">
                    Contact
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                  <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Companies */}
          <div className="lg:col-span-4">
            <h3 className={heading}>Brands</h3>
            <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {companies.map((c) => (
                <a
                  key={c.id}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="flex items-center gap-1.5 text-sm text-white/85 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    <span className="relative">
                      {c.name}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </span>
                    <span className="-translate-x-1 text-accent opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                      &#8599;
                    </span>
                  </span>
                  <span className="mt-1 block font-mono text-[0.625rem] uppercase tracking-meta text-white/35">
                    {CATEGORY[c.id] ?? c.category}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore + Group */}
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h3 className={heading}>Explore</h3>
              <ul className="mt-5 space-y-3">
                {explore.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={textLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={heading}>Group</h3>
              <ul className="mt-5 space-y-3">
                {group.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={textLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h3 className={heading}>Follow</h3>
            <ul className="mt-5 space-y-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-white"
                  >
                    {s.label}
                    <span className="text-white/35 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
                      &#8599;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Premium divider - line · glowing dot · line */}
        <div aria-hidden="true" className="mt-20 flex items-center gap-4">
          <span className="h-px flex-1 bg-white/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(79,70,255,0.6)]" />
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3">
            <span>&copy; 2026 Digital Next</span>
            <span aria-hidden="true" className="hidden h-3 w-px bg-white/15 sm:inline-block" />
            <span>Technology Holding Company</span>
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Cookies', href: '/cookies' },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="transition-colors duration-300 hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
