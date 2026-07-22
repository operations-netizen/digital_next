import Reveal from '@/components/ui/Reveal'
import { topics } from '@/lib/insights'

/**
 * Browse topics - an editorial index, not navigation. No counts, no cards.
 * Each row scrolls to the writing list; on hover the underline grows, the
 * text darkens, and an arrow appears.
 */
export default function TopicIndex() {
  return (
    <ul>
      {topics.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.04}>
          <li>
            <a
              href="#latest-writing"
              className="group flex min-h-[44px] items-center justify-between gap-6 border-t border-line py-6 outline-none transition-colors duration-[500ms] ease-editorial last:border-b focus-visible:text-accent"
            >
              <span className="relative font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] tracking-tight text-muted transition-colors duration-[500ms] ease-editorial group-hover:text-ink">
                {t.name}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[500ms] ease-editorial group-hover:scale-x-100" />
              </span>
              <span
                aria-hidden="true"
                className="-translate-x-1 text-accent opacity-0 transition-all duration-[500ms] ease-editorial group-hover:translate-x-0 group-hover:opacity-100"
              >
                &rarr;
              </span>
            </a>
          </li>
        </Reveal>
      ))}
    </ul>
  )
}
