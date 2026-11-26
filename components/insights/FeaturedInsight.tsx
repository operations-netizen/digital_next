import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import FeaturedVisual from './FeaturedVisual'
import type { Insight } from '@/lib/insights'

/**
 * The featured essay - an editorial feature, not a card. A restrained
 * monochrome plate on the left; the essay set in type on the right, where
 * hierarchy is carried by scale and space.
 */
export default function FeaturedInsight({ insight }: { insight: Insight }) {
  const href = `/insights/${insight.slug}`
  return (
    <article className="grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
      <Reveal className="lg:col-span-5">
        <Link
          href={href}
          aria-label={insight.title}
          className="block outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
        >
          <FeaturedVisual />
        </Link>
      </Reveal>

      <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.12}>
        <span className="block font-mono text-[0.625rem] uppercase tracking-meta text-accent">
          {insight.category}
        </span>
        <h3 className="mt-6 max-w-[16ch] font-serif text-[clamp(2rem,3.8vw,3.4rem)] font-normal leading-[1.08] tracking-tightest text-ink">
          <Link
            href={href}
            className="outline-none transition-colors duration-[600ms] ease-editorial focus-visible:text-accent"
          >
            {insight.title}
          </Link>
        </h3>
        <p className="mt-7 max-w-[48ch] text-xl leading-[1.65] text-muted">
          {insight.excerpt}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-meta text-muted/70">
          <span>{insight.readTime}</span>
          <span aria-hidden="true" className="h-2.5 w-px bg-line" />
          <time dateTime={insight.publishedDate}>{insight.dateLabel}</time>
        </div>
        <Link
          href={href}
          className="group mt-9 inline-flex min-h-[2.75rem] items-center gap-2 text-sm font-medium text-accent outline-none"
        >
          <span className="relative">
            Read article
            <span className="absolute -bottom-1 left-0 h-px w-full bg-accent/30 transition-colors duration-[600ms] ease-editorial group-hover:bg-accent" />
          </span>
          <span className="transition-transform duration-[600ms] ease-editorial group-hover:translate-x-1.5">
            &rarr;
          </span>
        </Link>
      </Reveal>
    </article>
  )
}
