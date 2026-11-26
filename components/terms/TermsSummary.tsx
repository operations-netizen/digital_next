import Eyebrow from '@/components/ui/Eyebrow'
import { termsSummary, termsConfig } from '@/lib/terms'
import CopyEmail from '@/components/privacy/CopyEmail'

/** Editorial overview shown before the full Terms. Does not replace them. */
export default function TermsSummary() {
  return (
    <section className="py-12 sm:py-16">
      <div className="shell">
        <div className="border-t border-line pt-10 sm:pt-12">
          <Eyebrow>Summary</Eyebrow>
          <div className="mt-8 max-w-[55rem]">
            {termsSummary.map((row) => (
              <div
                key={row.label}
                className="grid gap-x-10 gap-y-1 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-12"
              >
                <h3 className="font-serif text-xl tracking-tight text-ink sm:col-span-4">
                  {row.label}
                </h3>
                <p className="text-[1.0625rem] leading-[1.75] text-muted sm:col-span-8 sm:text-[1.125rem]">
                  {row.body}
                </p>
              </div>
            ))}
            <div className="grid gap-x-10 gap-y-1 border-t border-line py-6 sm:grid-cols-12">
              <h3 className="font-serif text-xl tracking-tight text-ink sm:col-span-4">
                Contact
              </h3>
              <p className="text-[1.0625rem] leading-[1.75] text-muted sm:col-span-8 sm:text-[1.125rem]">
                <CopyEmail email={termsConfig.contactEmail} />
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted/70">
            This summary is provided for convenience only and does not replace
            the full Terms below.
          </p>
        </div>
      </div>
    </section>
  )
}
