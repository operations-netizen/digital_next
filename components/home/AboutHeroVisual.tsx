import { companies } from '@/lib/companies'

/**
 * About-page hero companion - a portfolio map. Digital Next is the hub on
 * the left; thin connector lines fan out to each brand on the right, labelled
 * with its name, what it does, and its index. Rows are spaced evenly for
 * however many brands there are, with the hub centred on them. Each brand is
 * a link to its site; hover lifts it into the accent (name, connector, node).
 * Pure SVG; lines draw in on load, labels stagger. No JS.
 */

const ACCENT = '#4F46FF'
const HUB_X = 120
const ANCHOR_X = 252
const TOP = 56 // y of the first row
const GAP = 92 // vertical distance between rows
const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const drawIn = (delay: number) => ({
  strokeDasharray: 1,
  strokeDashoffset: 1,
  animation: `hero-draw 1.1s ${EASE} forwards`,
  animationDelay: `${delay}s`,
})
const fadeIn = (delay: number) => ({
  opacity: 0,
  animation: `hero-fade 0.7s ${EASE} forwards`,
  animationDelay: `${delay}s`,
})

export default function AboutHeroVisual() {
  // Same order as everywhere else on the site (the companies list).
  const holdings = companies
  const rows = holdings.map((_, i) => TOP + i * GAP)
  const hubY = TOP + ((holdings.length - 1) * GAP) / 2
  const height = TOP * 2 + (holdings.length - 1) * GAP

  return (
    <div className="mx-auto w-full max-w-[27.5rem]">
      <svg
        viewBox={`0 0 480 ${height}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label={`Digital Next and its brands: ${holdings.map((c) => c.name).join(', ')}`}
      >
        {/* Hub - Digital Next */}
        <g style={fadeIn(0.1)}>
          <text
            x={HUB_X}
            y={hubY - 20}
            textAnchor="middle"
            fill="#111"
            style={{ font: '400 16px var(--font-serif), serif' }}
          >
            Digital Next
          </text>
          <circle cx={HUB_X} cy={hubY} r="3.5" fill={ACCENT} />
          <circle cx={HUB_X} cy={hubY} r="9" fill={ACCENT} fillOpacity="0.1" />
          <text
            x={HUB_X}
            y={hubY + 26}
            textAnchor="middle"
            fill="#666"
            style={{ font: '500 8px var(--font-mono), monospace', letterSpacing: '0.2em' }}
          >
            HOLDING COMPANY
          </text>
        </g>

        {/* Brands - connector, node, name, focus, index; each links out */}
        {holdings.map((c, i) => (
          <a
            key={c.id}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${c.name} - ${c.category} (opens in a new tab)`}
            className="group outline-none"
          >
            <line
              x1={HUB_X}
              y1={hubY}
              x2={ANCHOR_X}
              y2={rows[i]}
              strokeWidth="1"
              pathLength={1}
              className="stroke-ink/[0.16] transition-[stroke] duration-500 ease-editorial group-hover:stroke-accent group-focus-visible:stroke-accent"
              style={drawIn(0.25 + i * 0.12)}
            />
            <g style={fadeIn(0.55 + i * 0.1)}>
              {/* generous invisible hit area across the whole row */}
              <rect x={ANCHOR_X - 12} y={rows[i] - 30} width={480 - ANCHOR_X + 12} height="60" fill="transparent" />
              <circle
                cx={ANCHOR_X}
                cy={rows[i]}
                r="2.4"
                fill={ACCENT}
                className="origin-center transition-transform duration-500 ease-editorial [transform-box:fill-box] group-hover:scale-[1.8] group-focus-visible:scale-[1.8]"
              />
              <text
                x={ANCHOR_X + 14}
                y={rows[i] - 7}
                dominantBaseline="central"
                className="fill-ink transition-[fill] duration-500 ease-editorial group-hover:fill-accent group-focus-visible:fill-accent"
                style={{ font: '400 17px var(--font-serif), serif' }}
              >
                {c.name}
              </text>
              <text
                x={ANCHOR_X + 14}
                y={rows[i] + 15}
                dominantBaseline="central"
                fill="#666"
                style={{ font: '500 9px var(--font-mono), monospace', letterSpacing: '0.14em' }}
              >
                {c.category.toUpperCase()}
              </text>
              <text
                x="472"
                y={rows[i] - 7}
                textAnchor="end"
                dominantBaseline="central"
                className="fill-accent/70 transition-[fill] duration-500 ease-editorial group-hover:fill-accent"
                style={{ font: '400 10px var(--font-mono), monospace', letterSpacing: '0.12em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </text>
            </g>
          </a>
        ))}
      </svg>
    </div>
  )
}
