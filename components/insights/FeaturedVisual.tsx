/**
 * A restrained monochrome plate for the featured essay - fine line geometry,
 * not a photo or a filled card. A single hairline frame, ink line-work at low
 * opacity, and one quiet accent mark. Purely decorative.
 */
export default function FeaturedVisual({
  className = '',
}: {
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[4/5] w-full overflow-hidden border border-line ${className}`}
    >
      <svg
        viewBox="0 0 400 500"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        {/* fine structure */}
        <line x1="80" y1="0" x2="80" y2="500" stroke="#111111" strokeOpacity="0.06" />
        <line x1="0" y1="150" x2="400" y2="150" stroke="#111111" strokeOpacity="0.06" />

        {/* concentric geometry */}
        <circle cx="250" cy="315" r="70" stroke="#111111" strokeOpacity="0.14" />
        <circle cx="250" cy="315" r="125" stroke="#111111" strokeOpacity="0.10" />
        <circle cx="250" cy="315" r="180" stroke="#111111" strokeOpacity="0.06" />

        {/* horizon + a single accent radius */}
        <line x1="80" y1="315" x2="420" y2="315" stroke="#111111" strokeOpacity="0.08" />
        <line x1="250" y1="315" x2="250" y2="135" stroke="#4F46FF" strokeWidth="1.5" />
        <circle cx="250" cy="135" r="3.5" fill="#4F46FF" />
      </svg>

      <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-meta text-muted/50">
        Notes from Digital Next
      </span>
    </div>
  )
}
