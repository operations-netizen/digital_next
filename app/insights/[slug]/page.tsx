import Link from 'next/link'
import { notFound } from 'next/navigation'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import { insights, getInsight } from '@/lib/insights'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_NAME, SITE_URL, absoluteUrl, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const insight = getInsight(params.slug)
  if (!insight) return { title: 'Insight', robots: { index: false } }
  return pageMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
    type: 'article',
    publishedTime: insight.publishedDate,
    authors: [insight.author],
  })
}

export default function InsightArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const insight = getInsight(params.slug)
  if (!insight) notFound()

  const url = absoluteUrl(`/insights/${insight.slug}`)
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.publishedDate,
    articleSection: insight.category,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${url}/opengraph-image`,
    // Bylines are the team, not a named person.
    author: { '@type': 'Organization', name: insight.author, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/logo-dn.png') },
    },
  }

  return (
    <article className="pt-32 sm:pt-40">
      <JsonLd data={articleLd} />
      {/* Header */}
      <header className="shell">
        <Reveal>
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-meta text-muted transition-colors duration-300 ease-editorial hover:text-ink"
          >
            <span className="transition-transform duration-300 ease-editorial group-hover:-translate-x-1">
              &larr;
            </span>
            Insights
          </Link>
        </Reveal>

        <div className="mt-10 max-w-[22ch]">
          <Reveal>
            <span className="block font-mono text-[0.625rem] uppercase tracking-meta text-accent">
              {insight.category}
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <h1 className="display mt-5 max-w-[22ch] text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.05]">
            {insight.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6 font-mono text-[0.6875rem] uppercase tracking-meta text-muted/70">
            <span>{insight.author}</span>
            <span aria-hidden="true" className="h-2.5 w-px bg-line" />
            <time dateTime={insight.publishedDate}>{insight.dateLabel}</time>
            <span aria-hidden="true" className="h-2.5 w-px bg-line" />
            <span>{insight.readTime}</span>
          </div>
        </Reveal>
      </header>

      {/* Body */}
      <div className="shell mt-14 sm:mt-20 border-t border-line pt-14 sm:pt-16">
        <div className="mx-auto max-w-[68ch]">
          {insight.content.map((para, i) => (
            <Reveal key={i} delay={Math.min(i, 3) * 0.04}>
              {/* Index, not first:, because Reveal wraps each paragraph -
                  first: matched every one and set the whole article as lead. */}
              <p
                className={
                  i === 0
                    ? 'mb-7 text-[1.4rem] leading-[1.7] text-ink'
                    : 'mb-7 text-[1.25rem] leading-[1.8] text-ink/80'
                }
              >
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Foot */}
      <div className="shell mt-16 pb-28 sm:mt-24 sm:pb-40">
        <div className="mx-auto max-w-[68ch] border-t border-line pt-10">
          <Eyebrow>Keep reading</Eyebrow>
          <Link
            href="/insights"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 ease-editorial hover:text-accent"
          >
            <span className="relative">
              All insights
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-editorial group-hover:scale-x-100" />
            </span>
            <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1.5">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}
