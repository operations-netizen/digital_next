import { CONTACT_EMAIL } from './site'

// Terms & Conditions - configuration + table of contents.
//
// ⚠️ LEGAL REVIEW REQUIRED. Every value in `termsConfig` and every clause on
// the page must be confirmed by Digital Next's legal counsel before
// publishing. Placeholders are written as [BRACKETED TEXT] and rendered
// visibly so they cannot be missed. Do not replace a placeholder by guessing.

export interface TermsConfig {
  legalEntity: string
  address: string
  contactEmail: string
  effectiveDate: string
  governingLaw: string
  jurisdiction: string
  canonicalUrl: string
}

// All company-specific values live here - nothing unverified is hardcoded in
// the presentation components.
// These Terms mirror the group's published terms at
// digitalwebsolutions.com/terms-and-conditions/, with Digital Next as the
// named entity. Governing law/jurisdiction are taken from the group's privacy
// policy, since the published terms state neither.
export const termsConfig: TermsConfig = {
  legalEntity: 'Digital Next',
  address: '[REGISTERED ADDRESS]', // the group publishes office locations only
  contactEmail: CONTACT_EMAIL,
  effectiveDate: '[EFFECTIVE DATE]', // the group's terms carry no date
  governingLaw: 'the laws of India',
  jurisdiction: 'the courts at Gurugram, Haryana, India',
  canonicalUrl: '[TERMS URL]',
}

// Table of contents - each id must match a TermsSection id.
export const termsToc = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'who-we-work-with', title: 'Who We Work With & How These Terms Apply' },
  { id: 'information-we-collect', title: "Information We Collect and How It's Used" },
  { id: 'service-scope', title: 'Service Scope and Client Responsibilities' },
  { id: 'subscriptions', title: 'Subscription Plans & Automatic Renewals' },
  { id: 'payment', title: 'Payment Terms' },
  { id: 'trial-credits', title: 'Trial Credits & Promotional Offers' },
  { id: 'delivery', title: 'Content and Delivery' },
  { id: 'account-security', title: 'Platform Access and Account Security' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'acceptable-use', title: 'Acceptable Use Policy' },
  { id: 'confidentiality', title: 'Confidentiality & White-Label Protection' },
  { id: 'website-use', title: 'Website Use' },
  { id: 'third-party-links', title: 'Linked Third-Party Websites' },
  { id: 'data-retention', title: 'Data Storage, Retention, and Anonymisation' },
  { id: 'disclaimers', title: 'Disclaimers' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'privacy', title: 'Privacy' },
  { id: 'termination', title: 'Termination' },
  { id: 'changes', title: 'Updates to These Terms' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact', title: 'Contact' },
]

// Summary rows shown before the full terms.
export const termsSummary = [
  {
    label: 'Who these apply to',
    body: 'Direct clients, agencies and resellers, platform users, brand partners, and visitors to this website.',
  },
  {
    label: 'Commercial terms',
    body: 'Prepayment, automatic renewal of subscriptions unless cancelled, and non-refundable fees once work is in production.',
  },
  {
    label: 'Delivery',
    body: 'Nothing goes live without your approval, and original work becomes yours on full payment.',
  },
  {
    label: 'Acceptable use',
    body: 'No unlawful, deceptive, or black-hat activity, and no interference with our systems.',
  },
]
