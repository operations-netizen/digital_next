import Eyebrow from '@/components/ui/Eyebrow'
import { termsConfig } from '@/lib/terms'
import { Ph } from '@/components/privacy/prose'

/** Compact, formal masthead - no marketing emphasis in the heading. */
export default function TermsHero() {
  return (
    <section className="pt-32 pb-10 sm:pt-40 sm:pb-14">
      <div className="shell">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="display mt-6 text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
          Terms &amp; Conditions
        </h1>
        <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.8] text-muted sm:text-[18px]">
          These Terms govern access to and use of the Digital Next website. By
          accessing or using this website, you agree to these Terms.
        </p>
        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-meta">
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
