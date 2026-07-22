// Portfolio companies - single source of truth. Edit copy, tags,
// stats and URLs here; the whole site reads from this file.
// Swap `ticker` wordmarks for real logos later.

export type CompanyTag =
  | 'Agency'
  | 'Platform'
  | 'SaaS'
  | 'Recruitment'
  | 'Enterprise'
  | 'SEO'

export interface Company {
  id: string
  ticker: string
  name: string
  category: string
  tags: CompanyTag[]
  description: string
  mission: string
  founded: string
  industry: string
  employees: string
  url: string
  /** Path under /public to the official logo, or '' if none retrieved. */
  logo: string
  /** Brand color, for subtle accents. */
  primaryColor: string
}

export const companies: Company[] = [
  {
    id: 'digital-web-solutions',
    ticker: 'DWS',
    name: 'Digital Web Solutions',
    category: 'Digital Marketing & SEO',
    tags: ['Agency', 'SEO'],
    description:
      'Full-service performance marketing and SEO - strategy, media, and web under one roof.',
    mission: 'Performance marketing that compounds.',
    founded: '2012',
    industry: 'Digital Marketing',
    employees: '160+',
    url: 'https://www.digitalwebsolutions.com/',
    logo: '/logos/digital-web-solutions.svg',
    primaryColor: '#2563EB', // blue
  },
  {
    id: 'wytlabs',
    ticker: 'WYT',
    name: 'Wytlabs',
    category: 'AI & Digital Solutions',
    tags: ['Agency', 'SEO'],
    description:
      'AI-driven growth and digital solutions for teams where search and automation are core.',
    mission: 'AI-native growth engineering.',
    founded: '2016',
    industry: 'AI & Growth',
    employees: '90+',
    url: 'https://wytlabs.com/',
    logo: '/logos/wytlabs.png',
    primaryColor: '#7C3AED', // purple
  },
  {
    id: 'hirenext',
    ticker: 'HRN',
    name: 'HireNext',
    category: 'Recruitment Technology',
    tags: ['Platform', 'Recruitment'],
    description:
      'Recruitment technology that streamlines how modern teams source, assess, and hire.',
    mission: 'Hiring, re-engineered.',
    founded: '2020',
    industry: 'HR Technology',
    employees: '40+',
    url: 'https://hirenext.io/',
    logo: '', // official logo is client-rendered inline SVG; not retrievable as a file
    primaryColor: '#14B8A6', // teal
  },
  {
    id: 'rankwatch',
    ticker: 'RKW',
    name: 'RankWatch',
    category: 'SEO Intelligence Platform',
    tags: ['SaaS', 'SEO'],
    description:
      'SEO intelligence and rank tracking that turns ranking data into confident decisions.',
    mission: 'See every rank, everywhere.',
    founded: '2014',
    industry: 'SaaS | SEO',
    employees: '60+',
    url: 'https://www.rankwatch.com/',
    logo: '/logos/rankwatch.png',
    primaryColor: '#16A34A', // green
  },
  {
    id: 'collabx',
    ticker: 'CBX',
    name: 'CollabX',
    category: 'Creator Economy Platform',
    tags: ['Platform'],
    description:
      'A collaboration platform connecting brands and creators with performance-grade rigor.',
    mission: 'Where brands and creators meet.',
    founded: '2021',
    industry: 'Creator Economy',
    employees: '35+',
    url: 'https://collabx.com/',
    logo: '/logos/collabx.svg',
    primaryColor: '#22C55E', // bright green
  },
  {
    id: 'smegoweb',
    ticker: 'SMG',
    name: 'SMEGOWEB',
    category: 'Enterprise Digital Solutions',
    tags: ['Enterprise', 'Agency'],
    description:
      'Enterprise-grade web, marketing, and automation, delivered as managed programs.',
    mission: 'Enterprise digital, delivered.',
    founded: '2018',
    industry: 'Enterprise Digital',
    employees: '70+',
    url: 'https://smegoweb.co.nz/',
    logo: '/logos/smegoweb.png',
    primaryColor: '#1E3A8A', // navy
  },
]

export const filters = [
  'All',
  'Agency',
  'Platform',
  'SaaS',
  'Recruitment',
  'Enterprise',
  'SEO',
] as const

export type Filter = (typeof filters)[number]
