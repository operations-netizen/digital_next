import { privacyConfig } from '@/lib/privacy'
import { Ph, Lead } from './prose'
import CopyEmail from './CopyEmail'

/** Final contact / grievance block. Optional roles render only when set. */
export default function PrivacyContactBlock() {
  const {
    legalEntityName,
    registeredAddress,
    privacyEmail,
    contactPhone,
    dpoContact,
    grievanceContact,
  } = privacyConfig

  return (
    <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
      <div>
        <Lead>Privacy contact</Lead>
        <div className="mt-4 space-y-1 text-[1.0625rem] leading-[1.9] text-ink/80 sm:text-[1.125rem]">
          <p><Ph>{legalEntityName}</Ph></p>
          <p><Ph>{registeredAddress}</Ph></p>
          <p><CopyEmail email={privacyEmail} /></p>
          {contactPhone && (
            <p>
              <a
                href={`tel:${contactPhone.replace(/[^\d+]/g, '')}`}
                className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-300 ease-editorial hover:decoration-accent"
              >
                {contactPhone}
              </a>
            </p>
          )}
        </div>
      </div>

      {dpoContact && (
        <div>
          <Lead>Data Protection Officer</Lead>
          <div className="mt-4 space-y-1 text-[1.0625rem] leading-[1.9] text-ink/80 sm:text-[1.125rem]">
            <p><Ph>{dpoContact.name}</Ph></p>
            <p><CopyEmail email={dpoContact.email} /></p>
          </div>
        </div>
      )}

      {grievanceContact && (
        <div>
          <Lead>Grievance contact (India)</Lead>
          <div className="mt-4 space-y-1 text-[1.0625rem] leading-[1.9] text-ink/80 sm:text-[1.125rem]">
            <p><Ph>{grievanceContact.name}</Ph></p>
            <p><Ph>{grievanceContact.address}</Ph></p>
            <p><CopyEmail email={grievanceContact.email} /></p>
          </div>
        </div>
      )}
    </div>
  )
}
