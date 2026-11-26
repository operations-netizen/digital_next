import type { Metadata } from 'next'

/**
 * Single source of truth for the site's public identity and per-page SEO.
 *
 * SITE_URL is the canonical origin every canonical tag, Open Graph URL,
 * sitemap entry and JSON-LD id resolves against. Override with
 * NEXT_PUBLIC_SITE_URL if the site ever moves.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://digitalnextgroup.com').replace(
  /\/+$/,
  ''
)
export const SITE_NAME = 'Digital Next'
export const SITE_LEGAL_NAME = 'Digital Next Group'
export const SITE_TITLE = 'Digital Next - Building companies that build the future'
// Kept under ~155 characters so search results show it untruncated.
export const SITE_DESCRIPTION =
  'Digital Next is a technology holding company that builds, acquires, and scales internet businesses across AI, SaaS, recruitment, and digital marketing.'

/** The site-wide share card (app/opengraph-image.tsx). */
const SITE_OG_IMAGE = { url: '/opengraph-image', width: 1200, height: 630, alt: SITE_TITLE }

/**
 * Only the production root build is indexable. Sub-path builds (the
 * /testing preview) set NEXT_PUBLIC_BASE_PATH and must never be indexed -
 * they would compete with the real site as duplicate content.
 */
export const INDEXABLE = !process.env.NEXT_PUBLIC_BASE_PATH

/** Absolute URL on the canonical origin for a site path ("/about"). */
export function absoluteUrl(path = '/'): string {
  return `${SITE_URL}${path === '/' ? '' : path}`
}

/**
 * Per-page metadata: title, description, canonical, Open Graph and Twitter
 * card in one place, so no page ships a half-filled set of tags.
 *
 * Next doesn't apply the layout's title template to openGraph/twitter
 * titles, so the full "Page | Digital Next" string is built here. A page's
 * openGraph object replaces the inherited one wholesale (dropping the root
 * opengraph-image), so the site card is attached explicitly; articles have
 * their own opengraph-image file, which takes precedence.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  authors,
}: {
  /** Page title without the brand suffix. Omit for the home page. */
  title?: string
  description: string
  /** Site path, e.g. "/about". Canonical and og:url resolve against SITE_URL. */
  path: string
  type?: 'website' | 'article'
  publishedTime?: string
  authors?: string[]
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE
  const images = type === 'article' ? undefined : [SITE_OG_IMAGE]
  return {
    title: title ?? { absolute: SITE_TITLE },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_US',
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
      ...(type === 'article' ? { publishedTime, authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
    },
  }
}
