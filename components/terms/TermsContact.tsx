import { termsConfig } from '@/lib/terms'
import { Ph, Lead } from '@/components/privacy/prose'
import CopyEmail from '@/components/privacy/CopyEmail'

/** Final contact block for the Terms page. */
export default function TermsContact() {
  const { legalEntity, address, contactEmail } = termsConfig
  return (
    <div>
      <Lead>Contact</Lead>
      <div className="mt-4 space-y-1 text-[1.0625rem] leading-[1.9] text-ink/80 sm:text-[1.125rem]">
        <p><Ph>{legalEntity}</Ph></p>
        <p><Ph>{address}</Ph></p>
        <p><CopyEmail email={contactEmail} /></p>
      </div>
    </div>
  )
}
