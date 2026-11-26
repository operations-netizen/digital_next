import { CONTACT_EMAIL } from './site'
// Cookies Policy - configuration + content.
//
// ⚠️ LEGAL REVIEW REQUIRED. Every value in `cookiesConfig` and every clause on
// the page must be confirmed by Digital Next's legal counsel before
// publishing. Placeholders are written as [BRACKETED TEXT] and rendered
// visibly so they cannot be missed. Do not replace a placeholder by guessing.

export interface CookiesConfig {
  legalEntity: string
  contactEmail: string
  effectiveDate: string
  cookieConsentTool: string
}

// All company-specific values live here - nothing unverified is hardcoded in
// the presentation components.
export const cookiesConfig: CookiesConfig = {
  legalEntity: '[LEGAL ENTITY NAME]',
  contactEmail: CONTACT_EMAIL,
  effectiveDate: '[EFFECTIVE DATE]',
  cookieConsentTool: '[COOKIE CONSENT TOOL]',
}

// Table of contents - each id must match a CookieSection id.
export const cookiesToc = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'what-are-cookies', title: 'What Are Cookies' },
  { id: 'why-we-use', title: 'Why We Use Cookies' },
  { id: 'types', title: 'Types of Cookies' },
  { id: 'third-party', title: 'Third-Party Cookies' },
  { id: 'managing', title: 'Managing Cookies' },
  { id: 'updates', title: 'Updates' },
  { id: 'contact', title: 'Contact' },
]

// Summary rows shown before the full policy.
export const cookiesSummary = [
  {
    label: 'What are cookies?',
    body: 'Small text files stored by your browser that help websites work and remember your preferences.',
  },
  {
    label: 'How we use them',
    body: 'To operate the website, measure performance, understand usage, and improve the browsing experience.',
  },
  {
    label: 'Cookie categories',
    body: 'Essential, performance, analytics, and functional cookies - and marketing cookies where applicable.',
  },
  {
    label: 'Managing preferences',
    body: 'You can accept, reject, or delete cookies through your browser and our cookie tools.',
  },
]

// Cookie categories table. Generic examples only - no invented cookie names
// or vendors.
export interface CookieCategory {
  category: string
  purpose: string
  example: string
  duration: string
  conditional?: boolean
}

export const cookieCategories: CookieCategory[] = [
  {
    category: 'Essential',
    purpose: 'Required for the website to function and to keep it secure.',
    example: 'Session and security cookies',
    duration: 'Session',
  },
  {
    category: 'Performance',
    purpose: 'Measure how the website performs so we can keep it reliable.',
    example: 'Load and error-measurement cookies',
    duration: 'Session - persistent',
  },
  {
    category: 'Analytics',
    purpose: 'Help us understand how visitors interact with the website.',
    example: 'Usage and page-view cookies',
    duration: 'Persistent',
  },
  {
    category: 'Functional',
    purpose: 'Remember your preferences and settings.',
    example: 'Preference cookies',
    duration: 'Persistent',
  },
  {
    category: 'Marketing (where applicable)',
    purpose: 'Support advertising or measurement, only if such cookies are used.',
    example: 'Advertising cookies, where applicable',
    duration: 'Persistent',
    conditional: true,
  },
]
