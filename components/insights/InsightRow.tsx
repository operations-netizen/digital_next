import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import type { Insight } from '@/lib/insights'

/**
 * An editorial article row - no numbers, no card. The essay block and its
 * metadata swap sides on alternating rows to create rhythm while scrolling.
 * A single hairline divider separates each.
 */
export default function InsightRow({
  insight,
  reverse = false,
  delay = 0,
}: {
  insight: Insight
  reverse?: boolean
  delay?: number
}) {
  const textCol = reverse
    ? 'lg:col-span-8 lg:col-start-5'
    : 'lg:col-span-8 lg:col-start-1'
  const metaCol = reverse
    ? 'lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:text-left'
    : 'lg:col-span-3 lg:col-start-10 lg:text-right'

  return (
    <Reveal delay={delay}>
      <article>
        <Link
          href={`/insights/${insight.slug}`}
          className="group grid items-baseline gap-x-16 gap-y-4 border-t border-line py-10 outline-none transition-colors duration-[500ms] ease-editorial last:border-b focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/40 sm:py-12 lg:grid-cols-12 lg:py-14"
        >
          <div className={textCol}>
            <span className="block font-mono text-[10px] uppercase tracking-meta text-accent">
              {insight.category}
            </span>
            <h3 className="mt-4 max-w-[22ch] font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-normal leading-[1.1] tracking-tight text-ink transition-transform duration-[500ms] ease-editorial group-hover:-translate-y-0.5">
              {insight.title}
            </h3>
            <p className="mt-4 max-w-[54ch] text-lg leading-[1.65] text-muted transition-colors duration-[500ms] ease-editorial group-hover:text-ink/75">
              {insight.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-[500ms] ease-editorial group-hover:text-accent">
              <span className="relative">
                Read
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[500ms] ease-editorial group-hover:scale-x-100" />
              </span>
              <span className="transition-transform duration-[500ms] ease-editorial group-hover:translate-x-1.5">
                &rarr;
              </span>
            </span>
          </div>

          <div
            className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-meta text-muted/70 lg:flex-col lg:items-start lg:gap-2 ${metaCol}`}
          >
            <time dateTime={insight.publishedDate}>{insight.dateLabel}</time>
            <span aria-hidden="true" className="h-2.5 w-px bg-line lg:hidden" />
            <span>{insight.readTime}</span>
          </div>
        </Link>
      </article>
    </Reveal>
  )
}
