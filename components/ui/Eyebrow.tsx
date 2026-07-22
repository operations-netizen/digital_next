export default function Eyebrow({
  children,
  className = '',
  tone = 'dark',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <span
      className={[
        'eyebrow',
        tone === 'light' ? 'text-white/50' : '',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
