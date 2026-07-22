// Site-wide content: navigation, group stats, philosophy, timeline,
// advantages, insights, and contact. Editable in one place.

export const CONTACT_EMAIL = 'hello@digitalnext.com'

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Companies', href: '/companies' },
  { label: 'How We Build', href: '/how-we-build' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

// Headline group figures shown in the strip just under the hero.
export const quickStats = [
  { value: 6, suffix: '', label: 'Companies' },
  { value: 450, suffix: '+', label: 'Employees' },
  { value: 4, suffix: '', label: 'Countries' },
  { value: 5000, suffix: '+', label: 'Clients' },
]

export const impactStats = [
  { value: 6, suffix: '', label: 'Companies' },
  { value: 450, suffix: '+', label: 'People' },
  { value: 4, suffix: '', label: 'Countries' },
  { value: 5000, suffix: '+', label: 'Clients' },
  { value: 12, suffix: 'M+', label: 'Users' },
  { value: 100, suffix: '+', label: 'Products shipped' },
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
    body: 'Shared capital, distribution, and talent move across the portfolio, so every company compounds faster than it could alone.',
  },
]

export const timeline = [
  { year: '2017', title: 'Founded', body: 'Digital Next begins with a single agency and a long-term thesis.' },
  { year: '2019', title: 'First acquisition', body: 'The group makes its first acquisition, proving the operating model.' },
  { year: '2020', title: 'Expansion', body: 'New platforms launch as the group moves beyond services.' },
  { year: '2022', title: 'Global growth', body: 'Teams and clients span multiple countries and time zones.' },
  { year: '2026', title: 'Six companies', body: 'A group of six companies across agency, platform, and SaaS.' },
  { year: 'Next', title: "Building what's next", body: 'The next decade of internet businesses - founded, built, and scaled.' },
]

export const advantages = [
  { title: 'Capital', body: 'Patient funding that backs decade-long bets, not quarterly ones.' },
  { title: 'Engineering', body: 'Shared platforms, infrastructure, and technical leadership.' },
  { title: 'Hiring', body: 'A recruitment engine that staffs every company from day one.' },
  { title: 'Operations', body: 'Finance, legal, and ops handled so teams can build.' },
  { title: 'Marketing', body: 'Distribution and demand generation across the group.' },
  { title: 'Leadership', body: 'Operators who have built and scaled before, in your corner.' },
  { title: 'Global network', body: 'Clients, partners, and talent across multiple countries.' },
  { title: 'Shared technology', body: 'Data, AI, and tooling that every company inherits.' },
]

export const insights = [
  {
    tag: 'Acquisition',
    date: 'Jun 2026',
    title: 'Digital Next adds its sixth company to the portfolio.',
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
  'HireNext',
  'RankWatch',
  'CollabX',
  'SMEGOWEB',
  'Careers',
]
