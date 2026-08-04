import type { ReactNode } from 'react'
import Link from 'next/link'
import TermsHero from '@/components/terms/TermsHero'
import TermsSummary from '@/components/terms/TermsSummary'
import TermsSection from '@/components/terms/TermsSection'
import TermsTOC from '@/components/terms/TermsTOC'
import TermsContact from '@/components/terms/TermsContact'
import CopyEmail from '@/components/privacy/CopyEmail'
import { P, Lead, UL, LI, Ph } from '@/components/privacy/prose'
import { termsConfig, termsToc } from '@/lib/terms'

const c = termsConfig

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Read the Terms & Conditions governing the use of the Digital Next website.',
  alternates: { canonical: c.canonicalUrl },
}

const sections: Record<string, () => ReactNode> = {
  introduction: () => (
    <>
      <P>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) form an agreement
        between you (the &ldquo;Client&rdquo;) and Digital Next, and govern your
        use of our services, platforms, deliverables, and this website. Digital
        Next is a technology holding company operating a group of independent
        internet businesses.
      </P>
      <P>
        By accessing or using our services or this website, you agree to be
        bound by these Terms. If you do not agree with them, you should not use
        our services. Your continued use constitutes acceptance of these Terms
        as they may be updated from time to time.
      </P>
    </>
  ),
  'who-we-work-with': () => (
    <>
      <P>These Terms apply to:</P>
      <UL>
        <LI>direct clients;</LI>
        <LI>agencies and resellers;</LI>
        <LI>platform users;</LI>
        <LI>brand partners; and</LI>
        <LI>visitors to this website.</LI>
      </UL>
      <P>
        They cover one-time campaigns, monthly subscriptions, and white-label
        arrangements alike, and apply whether services are delivered by Digital
        Next or by one of its brands.
      </P>
    </>
  ),
  'information-we-collect': () => (
    <>
      <P>In the course of providing services we may collect:</P>
      <UL>
        <LI>business contact details;</LI>
        <LI>campaign briefs and related materials; and</LI>
        <LI>platform credentials you choose to share with us.</LI>
      </UL>
      <P>
        We use this information to fulfil orders, manage communication, improve
        our platforms, and ensure security. We do not sell or rent your data to
        third parties. Our{' '}
        <Link
          href="/privacy"
          className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-300 hover:decoration-accent"
        >
          Privacy Policy
        </Link>{' '}
        explains this in full.
      </P>
    </>
  ),
  'service-scope': () => (
    <>
      <P>
        Depending on the engagement, services may include digital PR, content
        strategy, outreach, search and performance marketing, platform access,
        and white-label delivery.
      </P>
      <P>
        We do not support spammy tactics, private blog networks, or paid links
        disguised as editorial placements.
      </P>
      <Lead>Your responsibilities</Lead>
      <UL>
        <LI>provide accurate and complete information;</LI>
        <LI>
          avoid requesting tactics that violate search-engine guidelines; and
        </LI>
        <LI>respond to approval requests within a reasonable time.</LI>
      </UL>
    </>
  ),
  subscriptions: () => (
    <P>
      Monthly and quarterly subscriptions renew automatically unless cancelled
      at least fifteen (15) days before the renewal date. By subscribing, you
      authorise us to charge the applicable fee automatically on each renewal.
    </P>
  ),
  payment: () => (
    <>
      <P>
        Prepayment is required unless otherwise agreed in writing. Payments are
        non-refundable once work has started or deliverables are in production.
      </P>
      <P>
        Late payment may result in the suspension of active campaigns or
        services until the outstanding amount is settled.
      </P>
    </>
  ),
  'trial-credits': () => (
    <P>
      Trial credits and promotional offers must be used within thirty (30) days
      of issue. They are non-transferable and limited to one-time use per
      business.
    </P>
  ),
  delivery: () => (
    <>
      <P>
        Delivery follows a transparent approval process. Nothing goes live
        without your approval.
      </P>
      <P>
        We do not guarantee one hundred per cent indexing of any placement. If a
        placement is removed within twelve (12) months of going live, we will
        provide a one-time replacement.
      </P>
    </>
  ),
  'account-security': () => (
    <P>
      You are responsible for keeping your account credentials secure and for
      activity carried out under your account. We reserve the right to revoke
      platform access where we identify misuse.
    </P>
  ),
  'acceptable-use': () => (
    <>
      <P>You must not use our services or platforms to:</P>
      <UL>
        <LI>publish content depicting or promoting violence or hate;</LI>
        <LI>carry out illegal activity;</LI>
        <LI>distribute deceptive or misleading content;</LI>
        <LI>pursue black-hat search tactics;</LI>
        <LI>contact our publishers or partners without authorisation; or</LI>
        <LI>interfere with, disrupt, or gain unauthorised access to our systems.</LI>
      </UL>
      <P>
        Violations may result in suspension or termination of services without
        refund.
      </P>
    </>
  ),
  confidentiality: () => (
    <P>
      We will not disclose your projects, data, or end clients, and we will not
      reuse deliverables produced for you. Our team members are bound by
      internal non-disclosure agreements, which supports white-label and
      reseller arrangements.
    </P>
  ),
  'data-retention': () => (
    <P>
      Information is retained for as long as needed to fulfil services, to meet
      regulatory obligations, and for internal analytics. When it is no longer
      required for those purposes, it is anonymised or securely deleted.
    </P>
  ),
  'website-use': () => (
    <>
      <Lead>You may</Lead>
      <UL>
        <LI>browse the website;</LI>
        <LI>read the content we make available;</LI>
        <LI>contact Digital Next; and</LI>
        <LI>submit inquiries through the forms or channels we provide.</LI>
      </UL>
      <Lead>You must not</Lead>
      <UL>
        <LI>use the website for any unlawful purpose;</LI>
        <LI>attempt to gain unauthorised access to the website or its systems;</LI>
        <LI>interfere with or disrupt the website or its services;</LI>
        <LI>copy protected content beyond the limited use permitted below; or</LI>
        <LI>upload or transmit malicious software or harmful code.</LI>
      </UL>
    </>
  ),
  'intellectual-property': () => (
    <>
      <P>
        All original content created by <Ph>{c.legalEntity}</Ph> for your
        campaign becomes your property upon full payment. Until payment is
        received in full, we retain ownership of the deliverables.
      </P>
      <P>
        We retain ownership of our internal tools, systems, platforms, and
        processes at all times. Nothing in these Terms transfers any right in
        them to you.
      </P>
      <P>
        This website and its contents - including its design, brand, logos,
        trademarks, text, images, graphics, and code - are owned by{' '}
        <Ph>{c.legalEntity}</Ph>, its portfolio companies, or its licensors, and
        are protected by applicable intellectual-property laws. You are granted
        only a limited, revocable, non-exclusive right to view the website for
        personal, non-commercial use.
      </P>
    </>
  ),
  'third-party-links': () => (
    <P>
      The website may contain links to portfolio-company websites and other
      third-party websites. We provide these links for convenience only. We do
      not control and are not responsible for the content, products, services,
      or privacy practices of any third-party website. Accessing them is at your
      own risk, and we encourage you to review their terms and policies.
    </P>
  ),
  disclaimers: () => (
    <>
      <P>
        To the fullest extent permitted by applicable law, the website and its
        content are provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis, without warranties of any kind, whether express
        or implied.
      </P>
      <P>
        We do not warrant that the website will be uninterrupted, error-free, or
        secure, or that the content is accurate, complete, or current. Any
        reliance you place on the website or its content is at your own risk.
      </P>
    </>
  ),
  'limitation-of-liability': () => (
    <>
      <P>
        To the maximum extent permitted by applicable law, Digital Next, its
        portfolio companies, and their respective officers, employees, and
        agents will not be liable for any indirect, incidental, special,
        consequential, or punitive damages, or for any loss of profits, data,
        goodwill, or other intangible losses, arising out of or relating to your
        use of, or inability to use, the website.
      </P>
    </>
  ),
  indemnification: () => (
    <P>
      To the extent permitted by applicable law, you agree to indemnify and hold
      harmless Digital Next, its portfolio companies, and their respective
      officers, employees, and agents from and against any claims, liabilities,
      damages, losses, and expenses arising out of your misuse of the website or
      your breach of these Terms.
    </P>
  ),
  privacy: () => (
    <P>
      We handle personal information in accordance with our{' '}
      <Link
        href="/privacy"
        className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-300 hover:decoration-accent"
      >
        Privacy Policy
      </Link>
      , which explains how we collect, use, share, and protect personal
      information. Please review it to understand our practices.
    </P>
  ),
  changes: () => (
    <P>
      We may update these Terms from time to time. Changes take effect when the
      updated Terms are posted, together with an updated date. The date at the
      top of this page indicates when these Terms were last updated (
      <Ph>{c.effectiveDate}</Ph>). Your continued use of our services or this
      website after an update constitutes acceptance of the revised Terms.
    </P>
  ),
  termination: () => (
    <>
      <P>
        Ongoing monthly services may be terminated by either party on thirty
        (30) days&rsquo; written notice. Unused credits expire ninety (90) days
        after the date of issue.
      </P>
      <P>
        We may terminate or suspend services immediately in the event of a
        breach of these Terms or non-payment, and may suspend access to this
        website where we believe it is being misused. Provisions that by their
        nature should survive termination will continue to apply.
      </P>
    </>
  ),
  'governing-law': () => (
    <>
      <P>
        These Terms, and any dispute arising out of or relating to them or the
        website, are governed by:
      </P>
      <p className="text-[17px] leading-[1.9] text-ink/80 sm:text-[18px]">
        <Ph>{c.governingLaw}</Ph>
      </p>
      <P>The courts of the following jurisdiction shall have jurisdiction:</P>
      <p className="text-[17px] leading-[1.9] text-ink/80 sm:text-[18px]">
        <Ph>{c.jurisdiction}</Ph>
      </p>
    </>
  ),
  contact: () => (
    <>
      <P>For questions about these Terms, please contact us:</P>
      <TermsContact />
    </>
  ),
}

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsSummary />

      {/* Full terms */}
      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <div className="border-t border-line pt-10 sm:pt-12">
            <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12">
              {/* Table of contents */}
              <div className="lg:col-span-4 xl:col-span-3">
                <TermsTOC items={termsToc} />
              </div>

              {/* Legal content */}
              <div className="max-w-[820px] lg:col-span-8 lg:col-start-5 xl:col-span-8">
                <div className="space-y-12 sm:space-y-16">
                  {termsToc.map((entry, i) => (
                    <TermsSection
                      key={entry.id}
                      id={entry.id}
                      index={String(i + 1).padStart(2, '0')}
                      title={entry.title}
                    >
                      {sections[entry.id]?.()}
                    </TermsSection>
                  ))}
                </div>

                <p className="mt-16 border-t border-line pt-8 text-[13px] leading-relaxed text-muted/60">
                  For questions about these Terms, email{' '}
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
