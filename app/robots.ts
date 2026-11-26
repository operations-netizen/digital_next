import type { MetadataRoute } from 'next'
import { INDEXABLE, SITE_URL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  // Preview builds (/testing) are closed to crawlers entirely.
  if (!INDEXABLE) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /testing is the preview deployment on the same domain; crawlers only
      // read the root robots.txt, so it is excluded here as well.
      disallow: ['/api/', '/testing/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
