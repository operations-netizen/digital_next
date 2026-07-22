// Editorial content for the Insights publication - single source of truth.
// Each insight is structured so it opens into its own article page
// (see app/insights/[slug]/page.tsx). Counts shown across the page are
// derived from this corpus, never hard-coded.

export interface Insight {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  /** ISO date, for <time dateTime> and sorting. */
  publishedDate: string
  /** Human display date, e.g. "July 2026". */
  dateLabel: string
  /** e.g. "8 min read". */
  readTime: string
  /** Abstract cover word used on the article page. */
  coverWord: string
  featured?: boolean
  /** Body paragraphs for the article page. */
  content: string[]
}

export const insights: Insight[] = [
  {
    slug: 'built-for-decades-not-exits',
    title:
      'Why the best internet businesses are built for decades, not exits.',
    excerpt:
      'Short-term optimization creates fragile companies. Durable businesses are built through patient ownership and years of accumulated advantage.',
    category: 'Ownership',
    author: 'The Digital Next Team',
    publishedDate: '2026-07-01',
    dateLabel: 'July 2026',
    readTime: '8 min read',
    coverWord: 'Decades.',
    featured: true,
    content: [
      'Most companies are shaped, quietly, by the horizon of the people who own them. A three-year horizon produces three-year decisions: growth pulled forward, costs deferred, advantages spent rather than built. The business that results can look strong on a spreadsheet and still be fragile underneath.',
      'We start from the opposite premise. When the intended holding period is measured in decades, the calculus changes. Retention matters more than acquisition, reputation compounds, and the boring investments start to pay for themselves many times over.',
      'None of this requires slowing down. It requires refusing to trade the next ten years for the next two quarters - the single discipline that separates a durable internet business from one that was merely well-timed.',
    ],
  },
  {
    slug: 'operating-systems-behind-enduring-companies',
    title: 'The operating systems behind enduring internet companies.',
    excerpt:
      'The repeatable capabilities that let independent businesses compound without heroics.',
    category: 'Company Building',
    author: 'The Digital Next Team',
    publishedDate: '2026-06-24',
    dateLabel: 'June 2026',
    readTime: '7 min read',
    coverWord: 'Systems.',
    content: [
      'Enduring companies rarely run on heroics. They run on systems - the repeatable ways a business hires, ships, sells, and reinvests. A good system keeps working long after the person who designed it has moved on.',
      'The systems that matter most are the least glamorous: how capital is allocated, how talent is sourced, how a product decision gets made. We invest in those first, because they are the parts that compound.',
    ],
  },
  {
    slug: 'what-we-look-for-before-acquiring',
    title: 'What we look for before acquiring an internet business.',
    excerpt:
      'Beyond revenue and growth: durable advantages, strong operators, and long-term potential.',
    category: 'Acquisitions',
    author: 'The Digital Next Team',
    publishedDate: '2026-06-10',
    dateLabel: 'June 2026',
    readTime: '6 min read',
    coverWord: 'Signal.',
    content: [
      'Revenue tells you what happened. It does not tell you whether it will keep happening. Before we acquire a business, we spend most of our attention on the things that do not show up cleanly in the numbers.',
      'We look for a durable reason customers stay, an operator we would back again, and a market where patience is rewarded. When those three are present, the financials tend to take care of themselves.',
    ],
  },
  {
    slug: 'ai-should-improve-the-operating-system',
    title: 'AI should improve the operating system, not become the story.',
    excerpt:
      'Using AI as quiet infrastructure across product, marketing, hiring, and operations.',
    category: 'AI',
    author: 'The Digital Next Team',
    publishedDate: '2026-05-28',
    dateLabel: 'May 2026',
    readTime: '5 min read',
    coverWord: 'Quietly.',
    content: [
      'The most useful technology tends to disappear into the work. We treat AI the same way: not as a headline feature, but as infrastructure that makes existing operations faster and more consistent.',
      'The question is never "where can we add AI?" It is "where is there real operating friction?" Start there, and the technology earns its place. Start with the technology, and you usually end up with a demo instead of a business.',
    ],
  },
  {
    slug: 'backing-operators-with-conviction',
    title: 'Backing operators with conviction.',
    excerpt:
      'Why experienced builders, ownership, and autonomy matter more than consensus.',
    category: 'Leadership',
    author: 'The Digital Next Team',
    publishedDate: '2026-05-12',
    dateLabel: 'May 2026',
    readTime: '6 min read',
    coverWord: 'Conviction.',
    content: [
      'Good companies are run by people who are trusted to run them. We back operators with real ownership and real authority, then get out of the way on the decisions that are theirs to make.',
      'Conviction is not the absence of disagreement. It is a willingness to give a capable operator the room - and the time - to be right in ways that would never survive a committee.',
    ],
  },
  {
    slug: 'what-independent-companies-learn',
    title: 'What six independent companies can learn from one another.',
    excerpt:
      'Shared knowledge compounds when each business keeps its own identity.',
    category: 'Portfolio Notes',
    author: 'The Digital Next Team',
    publishedDate: '2026-04-30',
    dateLabel: 'April 2026',
    readTime: '5 min read',
    coverWord: 'Together.',
    content: [
      'Independence and isolation are not the same thing. Each company keeps its own brand, roadmap, and culture - and still benefits from what the others have already learned.',
      'A hiring playbook proven in one business shortcuts the next. A hard-won lesson about a market becomes a warning the others never have to relearn. The identity stays local; the knowledge travels.',
    ],
  },
  {
    slug: 'shared-infrastructure-is-an-advantage',
    title: 'Shared infrastructure is a competitive advantage, not a cost center.',
    excerpt:
      'What every company inherits on day one that would take years to build alone.',
    category: 'Technology',
    author: 'The Digital Next Team',
    publishedDate: '2026-04-08',
    dateLabel: 'April 2026',
    readTime: '6 min read',
    coverWord: 'Foundation.',
    content: [
      'Standalone companies spend their first years rebuilding the same foundations: analytics, hiring, payments, security. Shared infrastructure hands those to a business on day one, so its scarce attention goes to the work only it can do.',
      'Treated as a cost center, shared services get starved. Treated as an advantage, they become the reason a small company can move like a large one.',
    ],
  },
  {
    slug: 'cash-flow-is-the-quietest-freedom',
    title: 'Cash flow is the quietest form of freedom.',
    excerpt:
      'Why a business that funds itself gets to make decisions on its own terms.',
    category: 'Operations',
    author: 'The Digital Next Team',
    publishedDate: '2026-03-18',
    dateLabel: 'March 2026',
    readTime: '5 min read',
    coverWord: 'Freedom.',
    content: [
      'A company that funds itself answers to fewer people. It can be patient, say no, and invest through a downturn instead of retreating into one. Cash flow is not glamorous, but it buys the rarest thing in business: optionality.',
      'We would rather own a company that grows a little slower and controls its own destiny than one that grows quickly on someone else’s terms.',
    ],
  },
  {
    slug: 'where-ai-pays-for-itself',
    title: 'Where AI actually pays for itself inside an operating company.',
    excerpt:
      'A short field guide to the workflows where the return is real and repeatable.',
    category: 'AI',
    author: 'The Digital Next Team',
    publishedDate: '2026-02-20',
    dateLabel: 'February 2026',
    readTime: '4 min read',
    coverWord: 'Return.',
    content: [
      'The clearest wins are unglamorous: support triage, first-draft content, code review, data cleanup, and the long tail of internal questions that used to interrupt someone’s day.',
      'The pattern is consistent. AI pays for itself where the work is high-volume, low-stakes per instance, and expensive in aggregate - and disappoints wherever judgment is the whole job.',
    ],
  },
  {
    slug: 'small-teams-real-ownership',
    title: 'Small teams, real ownership, and the bias to ship.',
    excerpt:
      'How a handful of senior people outbuild a crowd, given room to decide.',
    category: 'Company Building',
    author: 'The Digital Next Team',
    publishedDate: '2025-12-05',
    dateLabel: 'December 2025',
    readTime: '5 min read',
    coverWord: 'Fewer.',
    content: [
      'A small team of senior people, each owning real outcomes, tends to outbuild a large team optimizing for coordination. Fewer handoffs, fewer meetings, more shipping.',
      'Ownership is the multiplier. When people own the result rather than a task, the work quietly gets better in a hundred places no manager would have thought to ask about.',
    ],
  },
  {
    slug: 'acquisition-process-that-respects-the-founder',
    title: 'How to run an acquisition process that respects the founder.',
    excerpt:
      'Rigorous does not have to mean adversarial - and the difference compounds.',
    category: 'Acquisitions',
    author: 'The Digital Next Team',
    publishedDate: '2025-11-14',
    dateLabel: 'November 2025',
    readTime: '6 min read',
    coverWord: 'Trust.',
    content: [
      'A founder is handing over something they built. The process should honor that: clear questions, honest timelines, and no games. Diligence can be thorough without being hostile.',
      'How you behave before the deal predicts how you will behave after it. Founders notice, and word travels - the reputation you build in one process wins you the next.',
    ],
  },
  {
    slug: 'manager-versus-owner',
    title: 'The difference between a manager and an owner.',
    excerpt:
      'One optimizes the quarter. The other protects the decade.',
    category: 'Leadership',
    author: 'The Digital Next Team',
    publishedDate: '2025-10-02',
    dateLabel: 'October 2025',
    readTime: '5 min read',
    coverWord: 'Owner.',
    content: [
      'A manager is measured on the quarter and behaves accordingly. An owner carries the consequences of every decision into the future and behaves accordingly. The two make different choices with the same information.',
      'We look for owners - and then we give them the mandate that makes ownership more than a word.',
    ],
  },
  {
    slug: 'buy-build-or-inherit',
    title: 'Buy, build, or inherit: how portfolio companies choose their stack.',
    excerpt:
      'A simple rule for deciding what to build and what to take off the shelf.',
    category: 'Technology',
    author: 'The Digital Next Team',
    publishedDate: '2025-08-21',
    dateLabel: 'August 2025',
    readTime: '6 min read',
    coverWord: 'Choose.',
    content: [
      'Build what is core and differentiating. Buy what is solved and commoditized. Inherit what the group already runs well. Most stack debates end quickly once a team is honest about which of the three a component really is.',
      'The failure mode is building the undifferentiated middle - pouring scarce engineering into problems the market solved years ago.',
    ],
  },
  {
    slug: 'the-unglamorous-work-that-compounds',
    title: 'The unglamorous work that compounds.',
    excerpt:
      'Documentation, onboarding, and follow-through rarely trend - and always pay.',
    category: 'Operations',
    author: 'The Digital Next Team',
    publishedDate: '2025-07-09',
    dateLabel: 'July 2025',
    readTime: '4 min read',
    coverWord: 'Diligence.',
    content: [
      'The work that compounds is usually the work no one applauds: writing things down, onboarding people well, closing loops, keeping promises. None of it trends. All of it accrues.',
      'Companies that respect this quietly pull ahead of companies chasing the next visible thing.',
    ],
  },
  {
    slug: 'staying-independent-after-acquisition',
    title: 'Why we keep companies independent after we acquire them.',
    excerpt:
      'Integration destroys more value than it creates when the brand was the point.',
    category: 'Company Building',
    author: 'The Digital Next Team',
    publishedDate: '2025-06-11',
    dateLabel: 'June 2025',
    readTime: '5 min read',
    coverWord: 'Intact.',
    content: [
      'The instinct after an acquisition is to integrate - merge the brand, the team, the roadmap. More often than not, that dissolves the very thing that made the company worth buying.',
      'We keep companies independent and add strength beneath them. Autonomy on top, shared advantage below. The identity stays intact, and so does the reason customers chose it.',
    ],
  },
]

export const featuredInsight = insights.find((i) => i.featured) ?? insights[0]

export const latestInsights = insights
  .filter((i) => !i.featured)
  .sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1))

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug)
}

// Topics shown in the editorial index, with counts derived from the corpus.
const TOPIC_ORDER = [
  'Company Building',
  'Acquisitions',
  'Technology',
  'Leadership',
  'Operations',
  'AI',
]

export const topics = TOPIC_ORDER.map((name) => ({
  name,
  count: insights.filter((i) => i.category === name).length,
}))

export const totalEssays = insights.length
export const totalTopics = topics.length

// Publication archive, grouped by year (newest first).
export const archive = Array.from(
  new Set(insights.map((i) => i.publishedDate.slice(0, 4)))
)
  .sort()
  .reverse()
  .map((year) => ({
    year,
    count: insights.filter((i) => i.publishedDate.startsWith(year)).length,
  }))
