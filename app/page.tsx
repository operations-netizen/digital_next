import Hero from '@/components/home/Hero'
import StatsStrip from '@/components/home/StatsStrip'
import WhoWeAre from '@/components/home/WhoWeAre'
import Portfolio from '@/components/home/Portfolio'
import Philosophy from '@/components/home/Philosophy'
import ClosingThought from '@/components/home/ClosingThought'
import AnimatedDivider from '@/components/ui/AnimatedDivider'
import JsonLd from '@/components/seo/JsonLd'
import { companies } from '@/lib/companies'
import { CONTACT_EMAIL } from '@/lib/site'
import {
  SITE_DESCRIPTION,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  pageMetadata,
} from '@/lib/seo'

export const metadata = pageMetadata({
  description: SITE_DESCRIPTION,
  path: '/',
})

// Organization + WebSite structured data: tells search engines who the
// group is and which brands it owns (subOrganization), for knowledge-panel
// and sitelinks eligibility.
const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  alternateName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/logo-dn.png'),
  email: CONTACT_EMAIL,
  description: SITE_DESCRIPTION,
  subOrganization: companies.map((c) => ({
    '@type': 'Organization',
    name: c.name,
    url: c.url,
  })),
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
}

export default function Home() {
  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
      <Hero />
      <StatsStrip />
      <AnimatedDivider />
      {/* WhoWeAre closes on a full-bleed dark band - that is the seam. */}
      <WhoWeAre />
      <Portfolio />
      <Philosophy />
      <ClosingThought />
    </>
  )
}
