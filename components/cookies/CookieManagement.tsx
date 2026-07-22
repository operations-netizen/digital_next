import { cookiesConfig } from '@/lib/cookies'
import { P, UL, LI, ReviewNote, Ph } from '@/components/privacy/prose'
import CookiePreferencesButton from '@/components/privacy/CookiePreferencesButton'

/** How users can control cookies, plus the preferences entry point. */
export default function CookieManagement() {
  return (
    <>
      <P>You can control cookies in several ways. You may:</P>
      <UL>
        <LI>accept or reject non-essential cookies;</LI>
        <LI>delete cookies already stored by your browser;</LI>
        <LI>adjust your browser settings to block or limit cookies; and</LI>
        <LI>update your choices at any time using our cookie tools.</LI>
      </UL>
      <P>Manage your preferences at any time:</P>
      <p>
        <CookiePreferencesButton />
      </p>
      <P>
        Preferences can be managed through <Ph>{cookiesConfig.cookieConsentTool}</Ph>.
        Please note that disabling some cookies may affect the functionality and
        performance of the website.
      </P>
      <ReviewNote>
        Legal review: connect the consent tool (<Ph>{cookiesConfig.cookieConsentTool}</Ph>)
        and confirm the categories that can actually be toggled before
        publication.
      </ReviewNote>
    </>
  )
}
