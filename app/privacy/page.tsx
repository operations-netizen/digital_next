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
import { P, Lead, UL, LI, DetailBlock, ReviewNote, Ph } from '@/components/privacy/prose'
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
          independent internet businesses. The data controller responsible for
          this website is:
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
    id: 'scope',
    title: 'Scope of This Notice',
    kind: 'section',
    render: () => (
      <>
        <P>This notice applies to:</P>
        <UL>
          <LI>visitors to the Digital Next website;</LI>
          <LI>people who contact Digital Next;</LI>
          <LI>business partners and prospective partners;</LI>
          <LI>candidates who submit profiles or applications;</LI>
          <LI>newsletter subscribers, where newsletters are enabled; and</LI>
          <LI>other individuals who interact directly with Digital Next.</LI>
        </UL>
        <P>
          It does not automatically govern the separate websites or services of
          portfolio companies, which may maintain their own privacy notices.
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
        <Lead>Information you provide directly</Lead>
        <UL>
          <LI>name;</LI>
          <LI>email address;</LI>
          <LI>phone number, if provided;</LI>
          <LI>company and role;</LI>
          <LI>message or inquiry details;</LI>
          <LI>LinkedIn or website links;</LI>
          <LI>resume, portfolio, and recruitment information;</LI>
          <LI>newsletter preferences; and</LI>
          <LI>any other information you voluntarily submit.</LI>
        </UL>
        <Lead>Information collected automatically</Lead>
        <UL>
          <LI>IP address;</LI>
          <LI>browser type;</LI>
          <LI>device information;</LI>
          <LI>pages visited and referring pages;</LI>
          <LI>approximate location derived from IP address;</LI>
          <LI>cookie identifiers;</LI>
          <LI>interaction and performance data; and</LI>
          <LI>security and diagnostic logs.</LI>
        </UL>
        <Lead>Information from third parties</Lead>
        <UL>
          <LI>portfolio companies;</LI>
          <LI>business partners;</LI>
          <LI>recruitment platforms;</LI>
          <LI>analytics providers;</LI>
          <LI>publicly available professional sources; and</LI>
          <LI>service providers.</LI>
        </UL>
        <ReviewNote>
          Legal review: confirm each category above is actually collected;
          remove any that do not apply.
        </ReviewNote>
      </>
    ),
  },
  {
    id: 'how-we-collect',
    title: 'How We Collect Information',
    kind: 'section',
    render: () => (
      <>
        <P>We may collect information through:</P>
        <UL>
          <LI>contact forms;</LI>
          <LI>careers or general-interest forms;</LI>
          <LI>newsletter sign-up;</LI>
          <LI>direct email;</LI>
          <LI>meetings and business communications;</LI>
          <LI>cookies and similar technologies;</LI>
          <LI>service providers;</LI>
          <LI>portfolio companies; and</LI>
          <LI>professional and public sources.</LI>
        </UL>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Information',
    kind: 'section',
    render: () => (
      <>
        <P>We may use personal information to:</P>
        <UL>
          <LI>respond to inquiries;</LI>
          <LI>evaluate partnerships or acquisition opportunities;</LI>
          <LI>manage business relationships;</LI>
          <LI>evaluate candidates and manage recruitment;</LI>
          <LI>route inquiries to relevant portfolio companies;</LI>
          <LI>operate and improve the website;</LI>
          <LI>measure website performance;</LI>
          <LI>prevent fraud and maintain security;</LI>
          <LI>maintain records;</LI>
          <LI>comply with legal obligations;</LI>
          <LI>establish, exercise, or defend legal claims; and</LI>
          <LI>send communications where consent or another lawful basis exists.</LI>
        </UL>
      </>
    ),
  },
  {
    id: 'legal-bases',
    title: 'Legal Bases',
    kind: 'section',
    render: () => (
      <>
        <P>
          Where a data-protection law requires a legal basis for processing, we
          rely, as applicable, on:
        </P>
        <UL>
          <LI>your consent;</LI>
          <LI>performance of a contract, or steps requested before a contract;</LI>
          <LI>our legitimate interests;</LI>
          <LI>compliance with legal obligations; and</LI>
          <LI>the establishment or defence of legal claims.</LI>
        </UL>
        <P>
          Where we rely on legitimate interests, those interests include
          operating and securing our website, understanding and improving how it
          is used, managing inquiries and recruitment, and running and
          protecting our business. We balance those interests against your
          rights and freedoms.
        </P>
        <ReviewNote>
          Legal review: confirm each basis applies before publication. For
          India-specific processing, align wording with applicable consent,
          legitimate-use, notice, and rights obligations once confirmed by
          counsel.
        </ReviewNote>
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
          <LI>Digital Next portfolio companies;</LI>
          <LI>hosting and infrastructure providers;</LI>
          <LI>analytics providers (<Ph>{c.analyticsProviders}</Ph>);</LI>
          <LI>CRM and communication providers (<Ph>{c.crmProviders}</Ph>);</LI>
          <LI>recruitment platforms;</LI>
          <LI>professional advisers, auditors, and insurers;</LI>
          <LI>
            transaction counterparties in a merger, acquisition, financing, or
            restructuring; and
          </LI>
          <LI>
            regulators, courts, and law-enforcement authorities where required.
          </LI>
        </UL>
        {c.saleOrSharingStatus ? (
          <P>{c.saleOrSharingStatus}</P>
        ) : (
          <ReviewNote>
            Legal review: confirm and insert a verified statement on whether
            Digital Next sells personal information or shares it for
            cross-context behavioural advertising (e.g. &ldquo;We do not sell
            personal information&rdquo; or the applicable CCPA/CPRA disclosure).
            Do not publish an unverified claim.
          </ReviewNote>
        )}
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Retention',
    kind: 'section',
    render: () => (
      <>
        <P>
          We retain personal information only for as long as reasonably
          necessary for the purpose for which it was collected, and to meet
          legal and regulatory obligations, resolve disputes, maintain security,
          and keep records. Retention periods depend on the type of information
          and the context in which it was collected.
        </P>
        <UL>
          <LI>Contact inquiries: <Ph>{c.retentionPeriods.contactInquiries}</Ph></LI>
          <LI>Candidate profiles: <Ph>{c.retentionPeriods.candidateProfiles}</Ph></LI>
          <LI>Newsletter records: <Ph>{c.retentionPeriods.newsletterRecords}</Ph></LI>
          <LI>Website analytics: <Ph>{c.retentionPeriods.websiteAnalytics}</Ph></LI>
          <LI>Security logs: <Ph>{c.retentionPeriods.securityLogs}</Ph></LI>
        </UL>
        <ReviewNote>
          Legal review: insert verified retention periods. Do not publish
          estimated or invented periods.
        </ReviewNote>
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
          We use reasonable administrative, technical, and organisational
          safeguards designed to protect personal information. However, no
          method of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </P>
        <ReviewNote>
          Legal review: describe specific safeguards (e.g. access controls,
          secure hosting, restricted access, monitoring, vendor controls) only
          where they are actually in place.
        </ReviewNote>
      </>
    ),
  },
  {
    id: 'international-transfers',
    title: 'International Transfers',
    kind: 'section',
    render: () => (
      <>
        <P>
          Personal information may be processed in countries other than the one
          in which you are located, including where our service providers or
          portfolio companies operate. Those countries may have different data
          protection laws than your own.
        </P>
        <P>
          Where required, we put in place appropriate safeguards for such
          transfers, which may include:
        </P>
        <UL>
          <LI>adequacy decisions;</LI>
          <LI>standard contractual clauses;</LI>
          <LI>contractual protections; and</LI>
          <LI>other legally recognised transfer mechanisms.</LI>
        </UL>
        <ReviewNote>
          Legal review: confirm the transfer mechanisms actually relied upon and
          remove those that do not apply.
        </ReviewNote>
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
          Depending on your location, you may have some or all of the following
          rights in relation to your personal information:
        </P>
        <UL>
          <LI>access;</LI>
          <LI>correction;</LI>
          <LI>deletion;</LI>
          <LI>restriction of processing;</LI>
          <LI>objection to processing;</LI>
          <LI>portability;</LI>
          <LI>withdrawal of consent, where processing is based on consent;</LI>
          <LI>complaint to a supervisory authority;</LI>
          <LI>opting out of sale or sharing, where applicable;</LI>
          <LI>limiting the use of sensitive personal information, where applicable; and</LI>
          <LI>nomination or grievance rights, where applicable under Indian law.</LI>
        </UL>
        <P>
          To make a request, email <CopyEmail email={c.privacyEmail} /> with the
          subject line &ldquo;Privacy Request&rdquo;. We may need to verify your
          identity before responding, and we may decline requests where
          permitted by law. Where applicable law allows, an authorised agent may
          submit a request on your behalf, subject to verification.
        </P>
        <P>We will respond within the period required by applicable law.</P>
      </>
    ),
  },
  {
    id: 'california',
    title: 'California Disclosures',
    kind: 'disclosure',
    render: () => (
      <>
        <P>
          These disclosures supplement the notice above and apply to California
          residents under the CCPA/CPRA.
        </P>
        <UL>
          <LI>categories of personal information collected;</LI>
          <LI>purposes for which each category is used;</LI>
          <LI>categories of sources;</LI>
          <LI>categories of recipients;</LI>
          <LI>sale or sharing disclosures;</LI>
          <LI>retention criteria;</LI>
          <LI>consumer rights and how to exercise them;</LI>
          <LI>authorised-agent requests;</LI>
          <LI>the right to non-discrimination for exercising rights; and</LI>
          <LI>
            recognition of Global Privacy Control{' '}
            {c.gpcStatus ? '(honoured by this website)' : '(pending verification)'}.
          </LI>
        </UL>
        <ReviewNote>
          Legal review: complete and verify each item, and add a &ldquo;Do Not
          Sell or Share My Personal Information&rdquo; link where required,
          before enabling this section publicly.
        </ReviewNote>
      </>
    ),
  },
  {
    id: 'india',
    title: 'India Disclosures',
    kind: 'disclosure',
    render: () => (
      <>
        <P>
          These disclosures address applicable Indian data-protection
          obligations and supplement the notice above.
        </P>
        <UL>
          <LI>identity of the Data Fiduciary: <Ph>{c.legalEntityName}</Ph>;</LI>
          <LI>categories and purposes of processing;</LI>
          <LI>consent and withdrawal of consent, where applicable;</LI>
          <LI>access and correction requests;</LI>
          <LI>erasure requests;</LI>
          <LI>nomination rights, where applicable;</LI>
          <LI>grievance contact and complaint escalation; and</LI>
          <LI>security safeguards and breach-handling procedures at a high level.</LI>
        </UL>
        <ReviewNote>
          Legal review: confirm which provisions are operational before
          enabling this section. Do not state that a provision is in effect
          without confirmation.
        </ReviewNote>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    kind: 'section',
    render: () => (
      <>
        <P>We may use the following categories of cookies and similar technologies:</P>
        <UL>
          <LI>
            <strong className="font-medium text-ink">Strictly necessary</strong> -
            required for the website to function.
          </LI>
          <LI>
            <strong className="font-medium text-ink">Analytics</strong> - help us
            understand how the website is used.
          </LI>
          <LI>
            <strong className="font-medium text-ink">Preference</strong> - remember
            choices you make.
          </LI>
        </UL>
        <P>
          You can manage non-essential cookies at any time:
        </P>
        <p>
          <CookiePreferencesButton />
        </p>
        <P>
          You can also control cookies through your browser settings; blocking
          some cookies may affect how the website works.
          {c.gpcStatus
            ? ' This website detects and honours Global Privacy Control signals.'
            : ''}
        </P>
        <ReviewNote>
          Legal review: confirm the cookie categories actually used, connect the
          consent tool (<Ph>{c.cookieTool}</Ph>), add advertising cookies only
          if used, and link a separate Cookie Policy if one will exist. Mention
          Global Privacy Control only if the site technically honours it.
        </ReviewNote>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    kind: 'section',
    render: () => (
      <>
        <P>
          The website is not directed to children. We do not knowingly collect
          personal information from children below the age applicable in their
          jurisdiction. If you believe a child has provided us with personal
          information, please contact <CopyEmail email={c.privacyEmail} /> and we
          will take appropriate steps to remove it.
        </P>
        <ReviewNote>
          Legal review: confirm the applicable minimum age and intended audience
          before publication.
        </ReviewNote>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    kind: 'section',
    render: () => (
      <P>
        The website may link to portfolio-company and other third-party
        websites. We are not responsible for the privacy practices or content of
        those websites. We encourage you to review the privacy notices of any
        website you visit.
      </P>
    ),
  },
  {
    id: 'changes',
    title: 'Changes',
    kind: 'section',
    render: () => (
      <P>
        We may update this notice from time to time. Where changes are material,
        we may communicate them through the website or by other appropriate
        means. The date at the top of this notice indicates when it was last
        updated (<Ph>{c.effectiveDate}</Ph>). Please review it periodically.
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
        <ReviewNote>
          Legal review: include supervisory-authority information and any
          Data Protection Officer or grievance-officer details where legally
          appropriate for the relevant jurisdictions.
        </ReviewNote>
      </>
    ),
  },
]

export default function PrivacyPage() {
  // Drop conditional jurisdiction blocks unless enabled by verified config.
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
                  This document contains placeholders and conditional clauses
                  marked for legal review and must be reviewed and approved by
                  counsel before publication. See also our{' '}
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
