// Portfolio companies - single source of truth. Edit copy, tags,
// stats and URLs here; the whole site reads from this file.
// Swap `ticker` wordmarks for real logos later.
//
// Founding years and headcounts come from the internal "Digital Next -
// Company Reference Document" (July 2026). Per-brand headcounts in that
// document were last recorded Dec 2025 and are flagged there as pending a
// refresh - re-verify before treating them as current.

export type CompanyTag =
  | 'Agency'
  | 'Platform'
  | 'SaaS'
  | 'SEO'

export interface Company {
  id: string
  ticker: string
  name: string
  category: string
  tags: CompanyTag[]
  description: string
  mission: string
  /** Founding/launch year, or '' for brands that have not launched yet -
   *  in which case `status` is shown in its place. Never invent a year. */
  founded: string
  /** Lifecycle label used wherever `founded` is empty. */
  status?: string
  industry: string
  employees: string
  url: string
  /** Path under /public to the official logo, or '' if none retrieved. */
  logo: string
  /** Intrinsic pixel dimensions of `logo`. Set as width/height attributes on
   *  every <img> so the browser reserves the aspect ratio before the asset
   *  loads - without them the logos jump from zero width and shift the
   *  layout. Omit only when there is no logo file. */
  logoWidth?: number
  logoHeight?: number
  /** Brand color, for subtle accents. */
  primaryColor: string
}

// Display order (owner's sequence, used site-wide): Digital Web Solutions,
// RankWatch, Wytlabs, CollabX, SmegoWeb.
export const companies: Company[] = [
  {
    id: 'digital-web-solutions',
    ticker: 'DWS',
    name: 'Digital Web Solutions',
    category: 'Digital Marketing & SEO',
    tags: ['Agency', 'SEO'],
    description:
      'Advanced digital marketing and performance strategy for agencies and enterprises.',
    mission: 'Performance marketing that compounds.',
    founded: '2006',
    industry: 'Digital Marketing',
    employees: '~180',
    url: 'https://www.digitalwebsolutions.com/',
    logo: '/logos/digital-web-solutions.svg',
    logoWidth: 149,
    logoHeight: 74,
    primaryColor: '#2563EB', // blue
  },
  {
    id: 'rankwatch',
    ticker: 'RKW',
    name: 'RankWatch',
    category: 'SEO & Rank-Tracking SaaS',
    tags: ['SaaS', 'SEO'],
    description:
      'A proprietary SaaS platform for SEO tracking, competitor analysis, and data-driven decisions.',
    mission: 'See every rank, everywhere.',
    founded: '2015',
    industry: 'SaaS | SEO',
    employees: '~23',
    url: 'https://www.rankwatch.com/',
    logo: '/logos/rankwatch.png',
    logoWidth: 143,
    logoHeight: 32,
    primaryColor: '#16A34A', // green
  },
  {
    id: 'wytlabs',
    ticker: 'WYT',
    name: 'Wytlabs',
    category: 'Full-Service Marketing (US)',
    tags: ['Agency', 'SEO'],
    description:
      'Full-service marketing for eCommerce, SaaS, and healthcare brands in the United States.',
    mission: 'Growth engineered for US brands.',
    founded: '2019',
    industry: 'Marketing Agency',
    employees: '~99',
    url: 'https://wytlabs.com/',
    logo: '/logos/wytlabs.png',
    logoWidth: 237,
    logoHeight: 38,
    primaryColor: '#7C3AED', // purple
  },
  {
    id: 'collabx',
    ticker: 'CBX',
    name: 'CollabX',
    category: 'Influencer & Partnership Platform',
    tags: ['Platform'],
    description:
      'Influencer and partnership management, from collaboration to campaign analytics.',
    mission: 'Where brands and influencers meet.',
    founded: '2025',
    industry: 'Influencer Marketing',
    employees: '~18',
    url: 'https://collabx.com/',
    logo: '/logos/collabx.svg',
    logoWidth: 158,
    logoHeight: 35,
    primaryColor: '#22C55E', // bright green
  },
  {
    id: 'smegoweb',
    ticker: 'SMG',
    name: 'SmegoWeb',
    category: 'Full-Service Marketing (ANZ)',
    tags: ['Agency'],
    description:
      'Full-service marketing for small and medium businesses across Australia and New Zealand.',
    mission: 'Full-service growth for ANZ.',
    founded: '2012',
    industry: 'Marketing Agency',
    employees: '~19',
    url: 'https://smegoweb.co.nz/',
    logo: '/logos/smegoweb.png',
    logoWidth: 234,
    logoHeight: 43,
    primaryColor: '#1E3A8A', // navy
  },
]

export const filters = [
  'All',
  'Agency',
  'Platform',
  'SaaS',
  'SEO',
] as const

export type Filter = (typeof filters)[number]
