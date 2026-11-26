import Eyebrow from '@/components/ui/Eyebrow'
import { privacyConfig } from '@/lib/privacy'
import { Ph } from './prose'

/** Compact, formal masthead - no marketing emphasis in the heading. */
export default function PrivacyHero() {
  return (
    <section className="pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pt-28">
      <div className="shell">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="display mt-6 text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
          Privacy Policy
        </h1>
        <p className="mt-8 max-w-[62ch] text-[1.0625rem] leading-[1.8] text-muted sm:text-[1.125rem]">
          This notice explains how Digital Next collects, uses, shares, and
          protects personal information when you visit our website, contact us,
          apply for opportunities, or otherwise interact with the group.
        </p>
        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-6 font-mono text-[0.6875rem] uppercase tracking-meta">
          <div className="flex items-baseline gap-2.5">
            <dt className="text-muted/50">Last updated</dt>
            <dd className="text-ink"><Ph>{privacyConfig.effectiveDate}</Ph></dd>
          </div>
          <div className="flex items-baseline gap-2.5">
            <dt className="text-muted/50">Controller</dt>
            <dd className="text-ink"><Ph>{privacyConfig.legalEntityName}</Ph></dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
