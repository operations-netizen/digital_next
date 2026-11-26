import { cookiesConfig } from '@/lib/cookies'
import { Ph, Lead } from '@/components/privacy/prose'
import CopyEmail from '@/components/privacy/CopyEmail'

/** Final contact block for the Cookies Policy page. */
export default function CookiesContact() {
  const { legalEntity, contactEmail } = cookiesConfig
  return (
    <div>
      <Lead>Contact</Lead>
      <div className="mt-4 space-y-1 text-[1.0625rem] leading-[1.9] text-ink/80 sm:text-[1.125rem]">
        <p><Ph>{legalEntity}</Ph></p>
        <p><CopyEmail email={contactEmail} /></p>
      </div>
    </div>
  )
}
