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
export const termsConfig: TermsConfig = {
  legalEntity: '[LEGAL ENTITY NAME]',
  address: '[REGISTERED ADDRESS]',
  contactEmail: 'hello@digitalnext.com',
  effectiveDate: '[EFFECTIVE DATE]',
  governingLaw: '[GOVERNING LAW]',
  jurisdiction: '[JURISDICTION]',
  canonicalUrl: '[TERMS URL]',
}

// Table of contents - each id must match a TermsSection id.
export const termsToc = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'eligibility', title: 'Eligibility' },
  { id: 'website-use', title: 'Website Use' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'user-content', title: 'User Content' },
  { id: 'third-party-links', title: 'Third-Party Links' },
  { id: 'disclaimers', title: 'Disclaimers' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'privacy', title: 'Privacy' },
  { id: 'changes', title: 'Changes' },
  { id: 'termination', title: 'Termination' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact', title: 'Contact' },
]

// Summary rows shown before the full terms.
export const termsSummary = [
  {
    label: 'Website use',
    body: 'Who these Terms apply to and how the website may be used.',
  },
  {
    label: 'Content',
    body: 'Ownership of website content and the limits of permitted use.',
  },
  {
    label: 'Intellectual property',
    body: 'Protection of trademarks, branding, and content across the group.',
  },
  {
    label: 'Liability',
    body: 'Important disclaimers and limitations, to the extent the law allows.',
  },
]
