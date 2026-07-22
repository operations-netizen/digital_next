// Careers content - single source of truth. Roles are intentionally empty
// until real openings exist; the page renders an honest empty state rather
// than inventing vacancies.

export const careerIndex = [
  'Engineering',
  'Product',
  'Marketing',
  'Sales',
  'Operations',
  'People & Talent',
]

export const whyJoin = [
  {
    title: 'Ownership',
    body: 'You work close to decisions and see the direct impact of what you build.',
  },
  {
    title: 'Range',
    body: 'One group creates opportunities across products, industries, and stages of growth.',
  },
  {
    title: 'Long-term thinking',
    body: 'We build businesses to compound over years - not to optimize for the next quarter.',
  },
]

export const workPrinciples = [
  {
    no: '01',
    title: 'Work close to the problem',
    body: 'Teams stay close to customers, products, and real operating decisions.',
  },
  {
    no: '02',
    title: 'Own the outcome',
    body: 'Responsibility does not stop at completing a task. We care about what the work achieves.',
  },
  {
    no: '03',
    title: 'Move with judgment',
    body: 'We value thoughtful speed, clear reasoning, and people who can act without constant supervision.',
  },
  {
    no: '04',
    title: 'Share what helps',
    body: 'Knowledge, technology, hiring, and operating experience move across the group where they create an advantage.',
  },
]

export const values = [
  {
    title: 'Craft over noise',
    body: 'Strong work should speak more loudly than activity.',
  },
  {
    title: 'Ownership over permission',
    body: 'Move the work forward instead of waiting to be managed.',
  },
  {
    title: 'Clarity over theatre',
    body: 'Communicate directly, think carefully, and avoid unnecessary complexity.',
  },
  {
    title: 'Long-term over temporary',
    body: 'Make decisions that strengthen the company beyond the immediate task.',
  },
  {
    title: 'Team over ego',
    body: 'The best result matters more than individual credit.',
  },
  {
    title: 'Learning over certainty',
    body: 'Strong operators update their views when reality changes.',
  },
]

// Career-facing category label + inline logo height per company (id-keyed).
export const companyCareers: Record<
  string,
  { label: string; logoMax: string }
> = {
  'digital-web-solutions': { label: 'Performance Marketing & SEO', logoMax: 'h-7' },
  wytlabs: { label: 'AI & Digital Solutions', logoMax: 'h-5' },
  hirenext: { label: 'Recruitment Technology', logoMax: 'h-6' },
  rankwatch: { label: 'SEO Intelligence Platform', logoMax: 'h-5' },
  collabx: { label: 'Creator Economy Platform', logoMax: 'h-6' },
  smegoweb: { label: 'Enterprise Digital Solutions', logoMax: 'h-5' },
}

export const hiringProcess = [
  {
    no: '01',
    title: 'Application',
    body: 'Tell us about your experience, work, and the problems you want to solve.',
  },
  {
    no: '02',
    title: 'Conversation',
    body: 'A focused discussion about the role, team, and mutual expectations.',
  },
  {
    no: '03',
    title: 'Working Session',
    body: 'Depending on the position, we may discuss a real problem, portfolio, or practical scenario.',
  },
  {
    no: '04',
    title: 'Decision',
    body: 'Clear communication, direct feedback, and next steps without avoidable delays.',
  },
]

export interface Role {
  title: string
  company: string
  department: string
  location: string
  workModel: string
  url: string
}

// No open roles at present - the page renders the honest empty state.
export const roles: Role[] = []

export const roleFilters = [
  'All',
  'Engineering',
  'Product',
  'Marketing',
  'Sales',
  'Operations',
  'People',
]

export const areaOptions = [
  'Engineering',
  'Product',
  'Design',
  'Marketing',
  'Sales',
  'Operations',
  'People & Talent',
  'Finance',
  'Leadership',
  'Other',
]

export const companyOptions = [
  'Digital Next',
  'Digital Web Solutions',
  'Wytlabs',
  'HireNext',
  'RankWatch',
  'CollabX',
  'SMEGOWEB',
  'Open to Any',
]
