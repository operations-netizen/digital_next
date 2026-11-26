import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'
import { insights } from '@/lib/insights'

type Entry = MetadataRoute.Sitemap[number]

const pages: Array<{ path: string; priority: number; changeFrequency: Entry['changeFrequency'] }> = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/brands', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/how-we-build', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/culture', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/insights', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.2, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((p) => ({
      url: absoluteUrl(p.path),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...insights.map((i) => ({
      url: absoluteUrl(`/insights/${i.slug}`),
      lastModified: new Date(i.publishedDate),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
