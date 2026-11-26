import type { ReactNode } from 'react'
import Link from 'next/link'
import CookiesHero from '@/components/cookies/CookiesHero'
import CookiesSummary from '@/components/cookies/CookiesSummary'
import CookieSection from '@/components/cookies/CookieSection'
import CookiesTOC from '@/components/cookies/CookiesTOC'
import CookieCategoriesTable from '@/components/cookies/CookieCategoriesTable'
import CookieManagement from '@/components/cookies/CookieManagement'
import CookiesContact from '@/components/cookies/CookiesContact'
import CopyEmail from '@/components/privacy/CopyEmail'
import { P, Lead, UL, LI, Ph } from '@/components/privacy/prose'
import { cookiesConfig, cookiesToc } from '@/lib/cookies'

const c = cookiesConfig

export const metadata = {
  title: 'Cookies Policy',
  description:
    'Learn how Digital Next uses cookies and similar technologies to improve website functionality and user experience.',
  alternates: { canonical: c.canonicalUrl },
}

const sections: Record<string, () => ReactNode> = {
  introduction: () => (
    <P>
      Digital Next uses cookies and similar technologies to improve the
      functionality and performance of its website and to provide a better
      browsing experience. This policy explains what these technologies are, why
      we use them, and how you can control them.
    </P>
  ),
  'what-are-cookies': () => (
    <>
      <P>
        Cookies are small text files that a website stores in your browser when
        you visit. They are widely used to make websites work, to work more
        efficiently, and to provide information to the website&rsquo;s operators.
      </P>
      <P>Cookies and similar technologies can:</P>
      <UL>
        <LI>store small amounts of information in your browser;</LI>
        <LI>recognise returning visitors;</LI>
        <LI>remember your preferences and settings; and</LI>
        <LI>help improve how the website functions.</LI>
      </UL>
    </>
  ),
  'why-we-use': () => (
    <>
      <P>We use cookies and similar technologies for purposes including:</P>
      <UL>
        <LI>enabling core website functionality;</LI>
        <LI>measuring website performance;</LI>
        <LI>understanding how the website is used through analytics;</LI>
        <LI>helping keep the website secure;</LI>
        <LI>remembering your preferences; and</LI>
        <LI>improving the overall user experience.</LI>
      </UL>
    </>
  ),
  types: () => (
    <>
      <UL>
        <LI>
          <strong className="font-medium text-ink">Essential cookies</strong> -
          required for the website to function and cannot usually be switched off.
        </LI>
        <LI>
          <strong className="font-medium text-ink">Performance cookies</strong> -
          measure website usage and performance so we can keep it reliable.
        </LI>
        <LI>
          <strong className="font-medium text-ink">Analytics cookies</strong> -
          help us understand visitor behaviour and improve the website.
        </LI>
        <LI>
          <strong className="font-medium text-ink">Functional cookies</strong> -
          remember your preferences and settings.
        </LI>
        <LI>
          <strong className="font-medium text-ink">Marketing cookies</strong> -
          where applicable, support advertising or measurement.
        </LI>
      </UL>
      <P>
        A summary of the categories we may use, with generic examples and typical
        durations, is set out in the table below.
      </P>
      <div className="mt-8">
        <Lead>Cookie categories</Lead>
        <div className="mt-5">
          <CookieCategoriesTable />
        </div>
      </div>
    </>
  ),
  'third-party': () => (
    <P>
      Some cookies may be set by third-party services we use, such as analytics
      providers, embedded media, or other external services. These third parties
      may process information in accordance with their own privacy and cookie
      policies, which we do not control. We encourage you to review those
      policies where relevant.
    </P>
  ),
  managing: () => <CookieManagement />,
  updates: () => (
    <P>
      We may update this Cookies Policy from time to time. Changes become
      effective when the updated policy is published on the website. The date at
      the top of this page indicates when it was last updated (
      <Ph>{c.effectiveDate}</Ph>). Please review it periodically.
    </P>
  ),
  contact: () => (
    <>
      <P>
        For questions about this Cookies Policy, please contact us. For more on
        how we handle personal information, see our{' '}
        <Link
          href="/privacy"
          className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-300 hover:decoration-accent"
        >
          Privacy Policy
        </Link>
        .
      </P>
      <CookiesContact />
    </>
  ),
}

export default function CookiesPage() {
  return (
    <>
      <CookiesHero />
      <CookiesSummary />

      {/* Full policy */}
      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-12">
            <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12">
              {/* Table of contents */}
              <div className="lg:col-span-4 xl:col-span-3">
                <CookiesTOC items={cookiesToc} />
              </div>

              {/* Legal content */}
              <div className="max-w-[51.25rem] lg:col-span-8 lg:col-start-5 xl:col-span-8">
                <div className="space-y-12 sm:space-y-16">
                  {cookiesToc.map((entry, i) => (
                    <CookieSection
                      key={entry.id}
                      id={entry.id}
                      index={String(i + 1).padStart(2, '0')}
                      title={entry.title}
                    >
                      {sections[entry.id]?.()}
                    </CookieSection>
                  ))}
                </div>

                <p className="mt-16 border-t border-line pt-8 text-[0.8125rem] leading-relaxed text-muted/60">
                  This document contains placeholders and clauses marked for
                  legal review and must be reviewed and approved by counsel before
                  publication. For questions, email{' '}
                  <CopyEmail email={c.contactEmail} />.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
