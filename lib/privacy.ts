// Privacy Policy - configuration + content.
//
// ⚠️ LEGAL REVIEW REQUIRED. Every value in `privacyConfig` and every clause
// below must be confirmed by Digital Next's legal counsel before publishing.
// Placeholders are written as [BRACKETED TEXT] and rendered visibly so they
// are impossible to miss during review. Do not remove a placeholder by
// guessing - replace it only with a verified value.

export interface PrivacyConfig {
  legalEntityName: string
  registeredAddress: string
  companyRegistration: string
  privacyEmail: string
  dpoContact: { name: string; email: string } | null
  grievanceContact: { name: string; email: string; address: string } | null
  effectiveDate: string
  analyticsProviders: string
  crmProviders: string
  cookieProviders: string
  cookieTool: string
  retentionPeriods: {
    contactInquiries: string
    candidateProfiles: string
    newsletterRecords: string
    websiteAnalytics: string
    securityLogs: string
  }
  applicableJurisdictions: string[]
  /** null = not yet verified; must be confirmed before a public claim. */
  saleOrSharingStatus: string | null
  /** true only if the site technically detects & honours Global Privacy Control. */
  gpcStatus: boolean
  /** toggle conditional jurisdiction blocks on only after counsel confirms. */
  showCaliforniaDisclosures: boolean
  showIndiaDisclosures: boolean
  canonicalUrl: string
}

// All company-specific values live here. Nothing unverified is hardcoded in
// the presentation components.
export const privacyConfig: PrivacyConfig = {
  legalEntityName: '[LEGAL ENTITY NAME]',
  registeredAddress: '[REGISTERED ADDRESS]',
  companyRegistration: '[COMPANY REGISTRATION DETAILS, IF REQUIRED]',
  privacyEmail: '[PRIVACY EMAIL]',
  dpoContact: null, // e.g. { name: '[DPO NAME OR TITLE]', email: '[DPO EMAIL]' }
  grievanceContact: null, // e.g. { name: '[GRIEVANCE OFFICER]', email: '[GRIEVANCE EMAIL]', address: '[POSTAL ADDRESS]' }
  effectiveDate: '[LAST UPDATED DATE]',
  analyticsProviders: '[ANALYTICS PROVIDER]',
  crmProviders: '[CRM PROVIDER]',
  cookieProviders: '[COOKIE TOOL]',
  cookieTool: '[COOKIE TOOL]',
  retentionPeriods: {
    contactInquiries: '[RETENTION PERIOD]',
    candidateProfiles: '[RETENTION PERIOD]',
    newsletterRecords: '[RETENTION PERIOD]',
    websiteAnalytics: '[RETENTION PERIOD]',
    securityLogs: '[RETENTION PERIOD]',
  },
  applicableJurisdictions: [], // e.g. ['EU/UK (GDPR)', 'California (CCPA/CPRA)', 'India (DPDP Act)']
  saleOrSharingStatus: null, // set only after verification (see clause 7)
  gpcStatus: false,
  showCaliforniaDisclosures: false, // enable only after counsel confirms applicability
  showIndiaDisclosures: false, // enable only after counsel confirms applicability
  canonicalUrl: '[PRIVACY POLICY URL]',
}

// Table of contents - id must match each PrivacySection's id.
export const privacyToc = [
  { id: 'who-we-are', title: 'Who We Are' },
  { id: 'scope', title: 'Scope of This Notice' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-collect', title: 'How We Collect Information' },
  { id: 'how-we-use', title: 'How We Use Information' },
  { id: 'legal-bases', title: 'Legal Bases' },
  { id: 'how-we-share', title: 'How We Share Information' },
  { id: 'retention', title: 'Retention' },
  { id: 'security', title: 'Security' },
  { id: 'international-transfers', title: 'International Transfers' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'california', title: 'California Disclosures', conditional: 'california' as const },
  { id: 'india', title: 'India Disclosures', conditional: 'india' as const },
  { id: 'cookies', title: 'Cookies' },
  { id: 'children', title: 'Children' },
  { id: 'third-party-links', title: 'Third-Party Links' },
  { id: 'changes', title: 'Changes' },
  { id: 'contact', title: 'Contact' },
]

// At-a-glance summary rows.
export const glanceRows = [
  {
    label: 'Information we collect',
    body: 'Contact details, inquiry information, application information, technical data, and information provided directly by you.',
  },
  {
    label: 'Why we use it',
    body: 'To respond to inquiries, operate the website, manage recruitment, improve services, maintain security, and meet legal obligations.',
  },
  {
    label: 'Who receives it',
    body: 'Relevant Digital Next companies, service providers, professional advisers, and authorities where legally required.',
  },
  {
    label: 'Your choices',
    body: 'Depending on your location, you may have rights to access, correct, delete, restrict, object to, or receive a copy of your information.',
  },
]
