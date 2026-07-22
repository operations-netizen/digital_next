import Eyebrow from '@/components/ui/Eyebrow'
import { cookiesSummary, cookiesConfig } from '@/lib/cookies'
import CopyEmail from '@/components/privacy/CopyEmail'

/** Editorial overview shown before the full policy. Does not replace it. */
export default function CookiesSummary() {
  return (
    <section className="py-12 sm:py-16">
      <div className="shell">
        <div className="border-t border-line pt-10 sm:pt-12">
          <Eyebrow>Summary</Eyebrow>
          <div className="mt-8 max-w-[880px]">
            {cookiesSummary.map((row) => (
              <div
                key={row.label}
                className="grid gap-x-10 gap-y-1 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-12"
              >
                <h3 className="font-serif text-xl tracking-tight text-ink sm:col-span-4">
                  {row.label}
                </h3>
                <p className="text-[17px] leading-[1.75] text-muted sm:col-span-8 sm:text-[18px]">
                  {row.body}
                </p>
              </div>
            ))}
            <div className="grid gap-x-10 gap-y-1 border-t border-line py-6 sm:grid-cols-12">
              <h3 className="font-serif text-xl tracking-tight text-ink sm:col-span-4">
                Contact
              </h3>
              <p className="text-[17px] leading-[1.75] text-muted sm:col-span-8 sm:text-[18px]">
                <CopyEmail email={cookiesConfig.contactEmail} />
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-[62ch] text-[15px] leading-relaxed text-muted/70">
            This summary is provided for convenience only and does not replace
            the full policy below.
          </p>
        </div>
      </div>
    </section>
  )
}
