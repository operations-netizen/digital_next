import { CONTACT_EMAIL } from './site'

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
  /** Phone number published for privacy/opt-out contact, or null. */
  contactPhone: string | null
  governingLaw: string
  jurisdiction: string
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
}

// All company-specific values live here. Nothing unverified is hardcoded in
// the presentation components.
// This notice mirrors the group's published policy at
// digitalwebsolutions.com/privacy-policy/, with Digital Next as the named
// entity. Values marked "from DWS" come from that policy - a verified group
// source, not a guess. Anything DWS does not publish stays a placeholder.
export const privacyConfig: PrivacyConfig = {
  legalEntityName: 'Digital Next',
  registeredAddress: '[REGISTERED ADDRESS]', // DWS publishes no postal address
  companyRegistration: '[COMPANY REGISTRATION DETAILS, IF REQUIRED]',
  privacyEmail: CONTACT_EMAIL,
  dpoContact: null, // e.g. { name: '[DPO NAME OR TITLE]', email: '[DPO EMAIL]' }
  grievanceContact: null, // e.g. { name: '[GRIEVANCE OFFICER]', email: '[GRIEVANCE EMAIL]', address: '[POSTAL ADDRESS]' }
  effectiveDate: '[LAST UPDATED DATE]', // DWS's policy carries no date
  contactPhone: '0124-4204617', // from DWS
  governingLaw: 'the laws of India', // from DWS
  jurisdiction: 'the courts at Gurugram, Haryana, India', // from DWS
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
  // from DWS: Indian law governs; GDPR compliance asserted for EU processing.
  applicableJurisdictions: ['India', 'EU/UK (GDPR)'],
  // from DWS terms: "We do not sell or rent your data to third parties."
  saleOrSharingStatus:
    'We do not sell or rent personal information to third parties.',
  gpcStatus: false,
  showCaliforniaDisclosures: false, // DWS makes no CCPA/CPRA claims - leave off
  showIndiaDisclosures: false, // DWS publishes no separate India disclosures
}

// Table of contents - id must match each PrivacySection's id.
export const privacyToc = [
  { id: 'who-we-are', title: 'Who We Are' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'cookies', title: 'Cookies and Tracking Technologies' },
  { id: 'how-we-use', title: 'How We Use Information' },
  { id: 'how-we-share', title: 'How We Share Information' },
  { id: 'email-marketing', title: 'Email Marketing' },
  { id: 'telemarketing', title: 'Telemarketing' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'retention', title: 'Data Storage, Retention, and Anonymisation' },
  { id: 'security', title: 'Security' },
  { id: 'european-users', title: 'European Users (GDPR)' },
  { id: 'children', title: 'Children' },
  { id: 'third-party-links', title: 'Third-Party Links' },
  { id: 'changes', title: 'Changes' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact', title: 'Contact' },
]

// At-a-glance summary rows.
export const glanceRows = [
  {
    label: 'Information we collect',
    body: 'Name, email, address, phone, and username where provided, plus browser, IP, operating system, and usage data collected automatically. No sensitive personal information.',
  },
  {
    label: 'Why we use it',
    body: 'To respond to inquiries and orders, develop products and services, provide targeted content and newsletters, carry out research, and protect security.',
  },
  {
    label: 'Who receives it',
    body: 'Service providers acting on our behalf, law-enforcement and regulatory agencies where required, and an acquiring entity in a merger or acquisition. We do not sell or rent personal information.',
  },
  {
    label: 'Your choices',
    body: 'Access and update your information, request correction or erasure, opt out of marketing email and telemarketing, and withdraw consent.',
  },
]
