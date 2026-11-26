'use client'

import { useRef } from 'react'
import { useReducedMotion } from '@/lib/motion'

/**
 * Ultra-minimal ecosystem constellation for the "How we operate" intro.
 * Digital Next sits at the center of six connected nodes on faint orbital
 * rings - a system diagram, not an illustration. Pure SVG + CSS transforms
 * (opacity/transform only) for 60fps; everything sits at 4-15% opacity so
 * it reinforces the headline without competing with it.
 */
export default function EcosystemConstellation() {
  const reduce = useReducedMotion()
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  const C = 200
  const R = 128
  const nodes = Array.from({ length: 6 }, (_, i) => {
    const theta = (-90 + i * 60) * (Math.PI / 180)
    return {
      i,
      x: C + R * Math.cos(theta),
      y: C + R * Math.sin(theta),
    }
  })

  // Very subtle pointer parallax - direct style writes, no re-render.
  const onMove = (e: React.MouseEvent) => {
    if (reduce || !wrapRef.current || !innerRef.current) return
    const r = wrapRef.current.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height
    innerRef.current.style.transform = `translate(${dx * 10}px, ${dy * 10}px)`
  }
  const onLeave = () => {
    if (innerRef.current) innerRef.current.style.transform = 'translate(0,0)'
  }

  const anim = (a: string) => (reduce ? undefined : a)

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[28.75rem]"
    >
      <div
        ref={innerRef}
        className="h-full w-full transition-transform duration-500 ease-out"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
          <defs>
            <radialGradient id="cstGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4F46FF" stopOpacity="0.28" />
              <stop offset="55%" stopColor="#4F46FF" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#4F46FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Breathing center glow */}
          <circle
            cx={C}
            cy={C}
            r="70"
            fill="url(#cstGlow)"
            style={{
              transformBox: 'fill-box',
              transformOrigin: 'center',
              animation: anim('cst-breathe 4s ease-in-out infinite'),
            }}
          />

          {/* Orbital rings */}
          <circle cx={C} cy={C} r="68" fill="none" stroke="#fff" strokeOpacity="0.08" strokeWidth="1" />
          <circle cx={C} cy={C} r={R} fill="none" stroke="#fff" strokeOpacity="0.06" strokeWidth="1" />
          <circle cx={C} cy={C} r="184" fill="none" stroke="#fff" strokeOpacity="0.04" strokeWidth="1" />

          {/* Slowly rotating highlight arc on the middle ring */}
          <g
            style={{
              transformBox: 'view-box',
              transformOrigin: '200px 200px',
              animation: anim('cst-spin 55s linear infinite'),
            }}
          >
            <circle
              cx={C}
              cy={C}
              r={R}
              fill="none"
              stroke="#4F46FF"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="54 750"
            />
          </g>
          {/* Counter-rotating faint arc on the outer ring */}
          <g
            style={{
              transformBox: 'view-box',
              transformOrigin: '200px 200px',
              animation: anim('cst-spin 85s linear infinite reverse'),
            }}
          >
            <circle
              cx={C}
              cy={C}
              r="184"
              fill="none"
              stroke="#fff"
              strokeOpacity="0.12"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="30 1100"
            />
          </g>

          {/* Connection spokes */}
          {nodes.map((n) => (
            <line
              key={`l-${n.i}`}
              x1={C}
              y1={C}
              x2={n.x}
              y2={n.y}
              stroke="#fff"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          ))}
          {/* One illuminating spoke that softly cycles */}
          {nodes.map((n) => (
            <line
              key={`li-${n.i}`}
              x1={C}
              y1={C}
              x2={n.x}
              y2={n.y}
              stroke="#4F46FF"
              strokeWidth="1"
              strokeOpacity="0"
              style={{
                animation: anim(
                  `cst-line 4.4s ease-in-out ${n.i * 0.72}s infinite`
                ),
              }}
            />
          ))}

          {/* Surrounding nodes */}
          {nodes.map((n) => (
            <g key={`n-${n.i}`}>
              <circle
                cx={n.x}
                cy={n.y}
                r="9"
                fill="#4F46FF"
                fillOpacity="0.08"
                style={{
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  animation: anim(
                    `cst-pulse 3.8s ease-in-out ${n.i * 0.56}s infinite`
                  ),
                }}
              />
              <circle cx={n.x} cy={n.y} r="3.2" fill="#fff" fillOpacity="0.55" />
            </g>
          ))}

          {/* Drifting particles */}
          {!reduce && (
            <>
              <circle cx="120" cy="96" r="1.6" fill="#fff" fillOpacity="0.4" style={{ animation: 'cst-drift-a 7s ease-in-out infinite' }} />
              <circle cx="300" cy="150" r="1.4" fill="#4F46FF" fillOpacity="0.5" style={{ animation: 'cst-drift-b 9s ease-in-out infinite' }} />
              <circle cx="150" cy="300" r="1.5" fill="#fff" fillOpacity="0.35" style={{ animation: 'cst-drift-c 8s ease-in-out infinite' }} />
            </>
          )}

          {/* Center hub */}
          <circle cx={C} cy={C} r="12" fill="none" stroke="#4F46FF" strokeOpacity="0.5" strokeWidth="1" />
          <circle
            cx={C}
            cy={C}
            r="6"
            fill="#4F46FF"
            fillOpacity="0.9"
            style={{
              transformBox: 'fill-box',
              transformOrigin: 'center',
              animation: anim('cst-pulse 3.4s ease-in-out infinite'),
            }}
          />
          <text
            x={C}
            y="238"
            textAnchor="middle"
            fill="#fff"
            fillOpacity="0.5"
            style={{ font: '600 9px var(--font-mono), monospace', letterSpacing: '0.22em' }}
          >
            DIGITAL NEXT
          </text>
        </svg>
      </div>
    </div>
  )
}
