// Site-wide content: navigation, group stats, philosophy, timeline,
// advantages, insights, and contact. Editable in one place.

export const CONTACT_EMAIL = 'hello@digitalnextgroup.com'

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Brands', href: '/companies' },
  { label: 'How We Build', href: '/how-we-build' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

// Headline group figures shown in the strip just under the hero.
// All figures below trace to the internal "Digital Next - Company Reference
// Document" (July 2026): 6 brands (5 active, 1 pre-launch), 450+ people,
// 100+ global partners, and 2006 as the founding year. Country and office
// counts exclude the UK, which stays out of all public-facing copy: 4
// countries (India, USA, Australia, New Zealand) and 5 offices. The previous
// "5,000+ Clients", "12M+ Users" and "100+ Products shipped" figures had no
// source and were removed.
export const quickStats = [
  { value: 6, suffix: '', label: 'Brands' },
  { value: 450, suffix: '+', label: 'Employees' },
  { value: 4, suffix: '', label: 'Countries' },
  { value: 20, suffix: '+', label: 'Years' },
]

export const impactStats = [
  { value: 6, suffix: '', label: 'Brands' },
  { value: 450, suffix: '+', label: 'People' },
  { value: 4, suffix: '', label: 'Countries' },
  { value: 5, suffix: '', label: 'Offices' },
  { value: 100, suffix: '+', label: 'Global partners' },
  { value: 20, suffix: '+', label: 'Years building' },
]

export const philosophy = [
  {
    no: '01',
    title: 'Found',
    body: 'We start companies where the internet is heading - with operators who have a sharp thesis and real skin in the game.',
  },
  {
    no: '02',
    title: 'Build',
    body: 'Small senior teams, genuine ownership, a bias for shipping. Product, brand, and P&L stay with the company that owns them.',
  },
  {
    no: '03',
    title: 'Scale',
    body: 'Shared capital, distribution, and talent move across the portfolio, so every brand compounds faster than it could alone.',
  },
]

// Milestones follow section 4 of the internal Company Reference Document
// (July 2026). The story opens in 2006 with the original brand, not with the
// holding company that later formed around it. The document's 2009, 2012 and
// 2014 UK milestones are intentionally omitted - the UK stays out of all
// public-facing copy.
export const timeline = [
  { year: '2006', title: 'Origins', body: 'Digital Web Solutions Pvt. Ltd. is founded in India - the first and still the largest brand in the group, and the start of an agency for agencies.' },
  { year: '2012', title: 'Australia & New Zealand', body: 'Smego Web launches, taking the full-service agency model to SMBs across the ANZ market.' },
  { year: '2015', title: 'First product', body: 'RankWatch is introduced, moving the group beyond services into proprietary SaaS.' },
  { year: '2019', title: 'United States', body: 'Wytlabs is founded to serve US eCommerce, SaaS, and healthcare brands.' },
  { year: '2025', title: 'New platforms', body: 'CollabX launches into influencer and partnership management, and enters a high-growth scale-up phase.' },
  { year: '2026', title: 'One group, six brands', body: 'The group takes the Digital Next name across six brands, four countries, and 450+ people, with Hire Next in development as shared talent infrastructure.' },
  { year: 'Next', title: "Building what's next", body: 'The next decade of internet businesses - founded, built, and scaled.' },
]

export const advantages = [
  { title: 'Capital', body: 'Patient funding that backs decade-long bets, not quarterly ones.' },
  { title: 'Engineering', body: 'Shared platforms, infrastructure, and technical leadership.' },
  { title: 'Hiring', body: 'A recruitment engine that staffs every brand from day one.' },
  { title: 'Operations', body: 'Finance, legal, and ops handled so teams can build.' },
  { title: 'Marketing', body: 'Distribution and demand generation across the group.' },
  { title: 'Leadership', body: 'Operators who have built and scaled before, in your corner.' },
  { title: 'Global network', body: 'Clients, partners, and talent across multiple countries.' },
  { title: 'Shared technology', body: 'Data, AI, and tooling that every brand inherits.' },
]

export const insights = [
  {
    tag: 'Acquisition',
    date: 'Jun 2026',
    title: 'Digital Next adds its sixth brand to the portfolio.',
  },
  {
    tag: 'Team',
    date: 'May 2026',
    title: 'The group crosses 450 people across four countries.',
  },
  {
    tag: 'Product',
    date: 'Apr 2026',
    title: 'RankWatch ships real-time competitive intelligence.',
  },
]

export const brandOptions = [
  'The group',
  'Digital Web Solutions',
  'Wytlabs',
  'Hire Next',
  'RankWatch',
  'CollabX',
  'Smego Web',
  'Careers',
]
