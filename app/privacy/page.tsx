import type { ReactNode } from 'react'
import Link from 'next/link'
import PrivacyHero from '@/components/privacy/PrivacyHero'
import PrivacySummary from '@/components/privacy/PrivacySummary'
import PrivacySection from '@/components/privacy/PrivacySection'
import JurisdictionDisclosure from '@/components/privacy/JurisdictionDisclosure'
import PrivacyTableOfContents from '@/components/privacy/PrivacyTableOfContents'
import PrivacyContactBlock from '@/components/privacy/PrivacyContactBlock'
import CopyEmail from '@/components/privacy/CopyEmail'
import CookiePreferencesButton from '@/components/privacy/CookiePreferencesButton'
import { P, Lead, UL, LI, DetailBlock, Ph } from '@/components/privacy/prose'
import { privacyConfig } from '@/lib/privacy'

const c = privacyConfig

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Digital Next collects, uses, shares, and protects personal information.',
  alternates: { canonical: c.canonicalUrl },
}

// Single source for both the sticky TOC and the rendered sections, so
// numbering stays consistent when conditional jurisdiction blocks toggle.
type Entry = { id: string; title: string; kind: 'section' | 'disclosure'; render: () => ReactNode }

const entries: Entry[] = [
  {
    id: 'who-we-are',
    title: 'Who We Are',
    kind: 'section',
    render: () => (
      <>
        <P>
          Digital Next is a technology holding company operating a group of
          independent internet businesses. Digital Next and its subsidiaries and
          affiliates collect and control personal data described in this notice.
          The entity responsible for this website is:
        </P>
        <DetailBlock>
          <p><Ph>{c.legalEntityName}</Ph></p>
          <p><Ph>{c.registeredAddress}</Ph></p>
          <p><Ph>{c.companyRegistration}</Ph></p>
          <p><CopyEmail email={c.privacyEmail} /></p>
        </DetailBlock>
        <P>
          Individual portfolio companies may act as separate, independent
          controllers for their own websites, services, customers, employees,
          and recruitment activities. Where a portfolio company publishes its
          own privacy notice, that notice governs its own processing. Please
          refer to each company&rsquo;s website for its separate privacy notice
          where available.
        </P>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    kind: 'section',
    render: () => (
      <>
        <Lead>Information you provide voluntarily</Lead>
        <UL>
          <LI>name;</LI>
          <LI>email address;</LI>
          <LI>physical address;</LI>
          <LI>telephone number;</LI>
          <LI>username, where an account is created;</LI>
          <LI>company, role, and inquiry details; and</LI>
          <LI>any other information you voluntarily submit.</LI>
        </UL>
        <Lead>Information collected automatically</Lead>
        <UL>
          <LI>browser type;</LI>
          <LI>IP address;</LI>
          <LI>operating system;</LI>
          <LI>domain name;</LI>
          <LI>pages visited and time spent on them; and</LI>
          <LI>click-through rates and similar usage data.</LI>
        </UL>
        <Lead>Information we do not collect</Lead>
        <P>
          Digital Next does not collect sensitive personal information such as
          information relating to health, race, ethnicity, sexual orientation,
          or political opinions.
        </P>
        <P>
          We do not collect payment information directly. Where a payment is
          required, you enter your details on the site of a well-known payment
          processor or payment gateway.
        </P>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking Technologies',
    kind: 'section',
    render: () => (
      <>
        <P>We may use the following cookies and similar technologies:</P>
        <UL>
          <LI>
            <strong className="font-medium text-ink">Session cookies</strong> -
            expire when you close your browser; used for authentication and
            fraud prevention.
          </LI>
          <LI>
            <strong className="font-medium text-ink">Persistent cookies</strong> -
            remain until they expire or are deleted; used to remember your
            preferences.
          </LI>
          <LI>
            <strong className="font-medium text-ink">Web beacons</strong> -
            record that a page has been visited or an email opened.
          </LI>
          <LI>
            <strong className="font-medium text-ink">Locally stored objects</strong>{' '}
            - hold preference data outside ordinary browser cookies.
          </LI>
        </UL>
        <P>You can manage non-essential cookies at any time:</P>
        <p>
          <CookiePreferencesButton />
        </p>
        <P>
          You can also adjust your browser settings to refuse cookies. Doing so
          may limit the functionality available to you on this website.
          {c.gpcStatus
            ? ' This website detects and honours Global Privacy Control signals.'
            : ''}
        </P>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Information',
    kind: 'section',
    render: () => (
      <>
        <P>Information collected may be used to:</P>
        <UL>
          <LI>respond to inquiries and process orders;</LI>
          <LI>develop our products and services;</LI>
          <LI>provide targeted content and advertising;</LI>
          <LI>send newsletters and promotional material;</LI>
          <LI>carry out research and improve site operations; and</LI>
          <LI>protect the security and integrity of our systems.</LI>
        </UL>
      </>
    ),
  },
  {
    id: 'how-we-share',
    title: 'How We Share Information',
    kind: 'section',
    render: () => (
      <>
        <P>We may share personal information with:</P>
        <UL>
          <LI>
            service providers who perform business functions on our behalf;
          </LI>
          <LI>
            law-enforcement and regulatory agencies, where required by law; and
          </LI>
          <LI>
            an acquiring entity in the event of a merger, acquisition, or
            bankruptcy proceeding.
          </LI>
        </UL>
        {c.saleOrSharingStatus && <P>{c.saleOrSharingStatus}</P>}
        <P>
          You may opt out of disclosure of your information to third parties by
          emailing <CopyEmail email={c.privacyEmail} />.
        </P>
      </>
    ),
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    kind: 'section',
    render: () => (
      <>
        <P>
          Permission to send you marketing email may be created when you:
        </P>
        <UL>
          <LI>enter your email address without opting out;</LI>
          <LI>complete a purchase or order form; or</LI>
          <LI>
            subscribe to a newsletter through an opt-in checkbox, which is
            unchecked by default.
          </LI>
        </UL>
        <P>
          Every marketing email we send includes a one-click unsubscribe or
          opt-out option.
        </P>
      </>
    ),
  },
  {
    id: 'telemarketing',
    title: 'Telemarketing',
    kind: 'section',
    render: () => (
      <>
        <P>
          By providing your telephone number, you consent to receive future
          information, including telemarketing, about products and services from
          Digital Next and its affiliates. Such calls may use automated dialing
          equipment or pre-recorded messages.
        </P>
        <P>
          You may opt out at any time by contacting us using the details in the
          Contact section below.
        </P>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    kind: 'section',
    render: () => (
      <>
        <P>
          Subject to applicable law, you may:
        </P>
        <UL>
          <LI>access and update your personal information;</LI>
          <LI>request correction of inaccurate information;</LI>
          <LI>opt in to or out of data collection and processing;</LI>
          <LI>
            withdraw your consent, which may limit the services available to
            you; and
          </LI>
          <LI>request erasure or removal of your information.</LI>
        </UL>
        <P>
          To make a request, email <CopyEmail email={c.privacyEmail} /> with the
          subject line &ldquo;Privacy Request&rdquo;. We may need to verify your
          identity before responding, and we may decline requests where
          permitted by law.
        </P>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Data Storage, Retention, and Anonymisation',
    kind: 'section',
    render: () => (
      <>
        <P>
          We retain personal information for as long as needed to fulfil the
          services requested, to meet regulatory obligations, and for internal
          analytics. When information is no longer required for those purposes,
          it is anonymised or securely deleted.
        </P>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    kind: 'section',
    render: () => (
      <>
        <P>
          We have taken physical, administrative, and technical steps to
          safeguard the information we hold. No method of transmission or
          storage is completely secure, and we cannot guarantee absolute
          security.
        </P>
        <P>
          Where we become aware of unauthorised or unlawful access to, or
          alteration of, your personal information, we will promptly notify you.
        </P>
      </>
    ),
  },
  {
    id: 'european-users',
    title: 'European Users (GDPR)',
    kind: 'section',
    render: () => (
      <>
        <P>
          Where personal data is processed within the European Union, we comply
          with the General Data Protection Regulation (GDPR).
        </P>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    kind: 'section',
    render: () => (
      <P>
        This website is not directed to children. We do not knowingly collect
        any personal information from children under the age of thirteen. If you
        believe a child has provided us with personal information, please
        contact <CopyEmail email={c.privacyEmail} /> and we will take
        appropriate steps to remove it.
      </P>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    kind: 'section',
    render: () => (
      <P>
        The website may link to portfolio-company and other third-party
        websites. We are not responsible for the content, policies, or security
        practices of those websites. We encourage you to review the privacy
        notice of any website you visit.
      </P>
    ),
  },
  {
    id: 'changes',
    title: 'Changes',
    kind: 'section',
    render: () => (
      <>
        <P>
          Digital Next reserves the right to revise this privacy statement at
          any time. Where changes are material, we will provide appropriate
          notice. The date at the top of this notice indicates when it was last
          updated (<Ph>{c.effectiveDate}</Ph>). Please review it periodically.
        </P>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    kind: 'section',
    render: () => (
      <P>
        Any dispute arising out of the usage of, or related to, this policy is
        subject to <Ph>{c.governingLaw}</Ph>, and the parties submit to the
        exclusive jurisdiction of <Ph>{c.jurisdiction}</Ph>.
      </P>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    kind: 'section',
    render: () => (
      <>
        <P>
          For questions about this notice or how we handle personal information,
          please contact us:
        </P>
        <PrivacyContactBlock />
      </>
    ),
  },
]

export default function PrivacyPage() {
  // Conditional jurisdiction blocks are enabled only by verified config; the
  // group policy this notice mirrors publishes none, so both stay off.
  const visible = entries.filter((e) => {
    if (e.id === 'california') return c.showCaliforniaDisclosures
    if (e.id === 'india') return c.showIndiaDisclosures
    return true
  })
  const toc = visible.map(({ id, title }) => ({ id, title }))

  return (
    <>
      <PrivacyHero />
      <PrivacySummary />

      {/* Full privacy notice */}
      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-12">
            <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12">
              {/* Table of contents */}
              <div className="lg:col-span-4 xl:col-span-3">
                <PrivacyTableOfContents items={toc} />
              </div>

              {/* Legal content */}
              <div className="max-w-[820px] lg:col-span-8 lg:col-start-5 xl:col-span-8">
                <div className="space-y-12 sm:space-y-16">
                  {visible.map((entry, i) => {
                    const index = String(i + 1).padStart(2, '0')
                    if (entry.kind === 'disclosure') {
                      return (
                        <JurisdictionDisclosure
                          key={entry.id}
                          id={entry.id}
                          index={index}
                          title={entry.title}
                        >
                          {entry.render()}
                        </JurisdictionDisclosure>
                      )
                    }
                    return (
                      <PrivacySection
                        key={entry.id}
                        id={entry.id}
                        index={index}
                        title={entry.title}
                      >
                        {entry.render()}
                      </PrivacySection>
                    )
                  })}
                </div>

                <p className="mt-16 border-t border-line pt-8 text-[13px] leading-relaxed text-muted/60">
                  If anything in this notice is unclear, or you would like to
                  exercise a right described above, please get in touch. See also
                  our{' '}
                  <Link
                    href="/contact"
                    className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-300 hover:decoration-accent"
                  >
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
