import type { ReactNode } from 'react'
import Link from 'next/link'
import TermsHero from '@/components/terms/TermsHero'
import TermsSummary from '@/components/terms/TermsSummary'
import TermsSection from '@/components/terms/TermsSection'
import TermsTOC from '@/components/terms/TermsTOC'
import TermsContact from '@/components/terms/TermsContact'
import CopyEmail from '@/components/privacy/CopyEmail'
import { P, Lead, UL, LI, ReviewNote, Ph } from '@/components/privacy/prose'
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
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to
        and use of the Digital Next website (the &ldquo;website&rdquo;). Digital
        Next is a technology holding company operating a group of independent
        internet businesses.
      </P>
      <P>
        By accessing or using the website, you agree to be bound by these Terms.
        If you do not agree, please do not use the website. Your continued use of
        the website constitutes acceptance of these Terms as they may be updated
        from time to time.
      </P>
    </>
  ),
  eligibility: () => (
    <P>
      You may use the website only if you are legally capable of entering into a
      binding agreement under the laws applicable to you. By using the website,
      you represent that you meet this requirement.
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
        The website and its contents - including its design, brand, logos,
        trademarks, text, images, graphics, code, and other content - are owned
        by <Ph>{c.legalEntity}</Ph>, its portfolio companies, or its licensors,
        and are protected by applicable intellectual-property laws.
      </P>
      <P>
        No licence or right is granted to you except a limited, revocable,
        non-exclusive right to view the website for your personal,
        non-commercial use. You may not reproduce, distribute, modify, or create
        derivative works from the website or its content without prior written
        permission, except as permitted by applicable law.
      </P>
    </>
  ),
  'user-content': () => (
    <>
      <P>
        If you submit inquiries or other information through the website, you
        confirm that you have the right to submit it, and you grant Digital Next
        permission to review and respond to it for the purposes of handling your
        request.
      </P>
      <P>
        Submitting information does not automatically create any confidential,
        advisory, fiduciary, employment, or other business relationship between
        you and Digital Next. Please do not send information you consider
        confidential unless we have agreed in writing to receive it on that
        basis.
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
      <ReviewNote>
        Legal review: confirm the liability cap, carve-outs, and any
        jurisdiction-specific mandatory rights before publication. Do not
        publish a limitation that is unenforceable in an applicable jurisdiction.
      </ReviewNote>
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
      We may update these Terms from time to time. Where changes are material, we
      will post the updated Terms on the website. The date at the top of this
      page indicates when these Terms were last updated (
      <Ph>{c.effectiveDate}</Ph>). Your continued use of the website after an
      update constitutes acceptance of the revised Terms.
    </P>
  ),
  termination: () => (
    <P>
      To the extent permitted by applicable law, we may suspend or terminate your
      access to the website, in whole or in part, at any time and without notice,
      including if we believe you have breached these Terms. Provisions that by
      their nature should survive termination will continue to apply.
    </P>
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
      <ReviewNote>
        Legal review: confirm governing law and forum, and add any dispute-
        resolution, arbitration, or venue provisions counsel requires. Do not
        publish placeholder values.
      </ReviewNote>
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
