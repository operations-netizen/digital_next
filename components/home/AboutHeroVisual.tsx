import { companies } from '@/lib/companies'

/**
 * About-page hero companion - a portfolio map. Digital Next is the hub on
 * the left; thin connector lines fan out to the six companies on the right,
 * each labelled with its name and founding year. Static, typographic, and
 * editorial - a holdings register plotted as a structure, not a network
 * diagram or orbit. Pure SVG; lines draw in on load, labels stagger. No JS.
 */

const ACCENT = '#4F46FF'
const HUB = { x: 120, y: 262 }
const ANCHOR_X = 252
const ROWS = [64, 144, 224, 304, 384, 464]
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
  // Oldest brand first; anything without a launch year yet sorts last.
  const year = (founded: string) => Number(founded) || Infinity
  const holdings = [...companies].sort(
    (a, b) => year(a.founded) - year(b.founded)
  )

  return (
    <div className="ml-auto w-full max-w-[440px]">
      <svg viewBox="0 0 480 520" className="h-auto w-full overflow-visible">
        {/* Connector lines - hub → each company */}
        {holdings.map((c, i) => (
          <line
            key={`l-${c.id}`}
            x1={HUB.x}
            y1={HUB.y}
            x2={ANCHOR_X}
            y2={ROWS[i]}
            stroke="#111"
            strokeOpacity="0.16"
            strokeWidth="1"
            pathLength={1}
            style={drawIn(0.25 + i * 0.12)}
          />
        ))}

        {/* Hub - Digital Next */}
        <g style={fadeIn(0.1)}>
          <text
            x={HUB.x}
            y={HUB.y - 20}
            textAnchor="middle"
            fill="#111"
            style={{ font: '400 16px var(--font-serif), serif' }}
          >
            Digital Next
          </text>
          <circle cx={HUB.x} cy={HUB.y} r="3.5" fill={ACCENT} />
          <text
            x={HUB.x}
            y={HUB.y + 24}
            textAnchor="middle"
            fill="#666"
            style={{ font: '500 8px var(--font-mono), monospace', letterSpacing: '0.2em' }}
          >
            HOLDING COMPANY
          </text>
        </g>

        {/* Companies - node, name, founding year */}
        {holdings.map((c, i) => (
          <g key={`c-${c.id}`} style={fadeIn(0.55 + i * 0.1)}>
            <circle cx={ANCHOR_X} cy={ROWS[i]} r="2.4" fill={ACCENT} />
            <text
              x={ANCHOR_X + 14}
              y={ROWS[i]}
              dominantBaseline="central"
              fill="#111"
              style={{ font: '400 16px var(--font-serif), serif' }}
            >
              {c.name}
            </text>
            <text
              x="472"
              y={ROWS[i]}
              textAnchor="end"
              dominantBaseline="central"
              fill="#666"
              style={{ font: '400 11px var(--font-mono), monospace', letterSpacing: '0.08em' }}
            >
              {c.founded || 'In dev.'}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
