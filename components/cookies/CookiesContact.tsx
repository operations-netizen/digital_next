import { cookiesConfig } from '@/lib/cookies'
import { Ph, Lead } from '@/components/privacy/prose'
import CopyEmail from '@/components/privacy/CopyEmail'

/** Final contact block for the Cookies Policy page. */
export default function CookiesContact() {
  const { legalEntity, contactEmail } = cookiesConfig
  return (
    <div>
      <Lead>Contact</Lead>
      <div className="mt-4 space-y-1 text-[17px] leading-[1.9] text-ink/80 sm:text-[18px]">
        <p><Ph>{legalEntity}</Ph></p>
        <p><CopyEmail email={contactEmail} /></p>
      </div>
    </div>
  )
}
