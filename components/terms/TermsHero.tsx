import Eyebrow from '@/components/ui/Eyebrow'
import { termsConfig } from '@/lib/terms'
import { Ph } from '@/components/privacy/prose'

/** Compact, formal masthead - no marketing emphasis in the heading. */
export default function TermsHero() {
  return (
    <section className="pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pt-28">
      <div className="shell">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="display mt-6 text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
          Terms &amp; Conditions
        </h1>
        <p className="mt-8 max-w-[62ch] text-[1.0625rem] leading-[1.8] text-muted sm:text-[1.125rem]">
          These Terms govern access to and use of the Digital Next website. By
          accessing or using this website, you agree to these Terms.
        </p>
        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-6 font-mono text-[0.6875rem] uppercase tracking-meta">
          <div className="flex items-baseline gap-2.5">
            <dt className="text-muted/50">Effective date</dt>
            <dd className="text-ink"><Ph>{termsConfig.effectiveDate}</Ph></dd>
          </div>
          <div className="flex items-baseline gap-2.5">
            <dt className="text-muted/50">Company</dt>
            <dd className="text-ink"><Ph>{termsConfig.legalEntity}</Ph></dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
