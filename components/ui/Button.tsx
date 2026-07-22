import Link from 'next/link'

type Variant = 'primary' | 'ghost' | 'light'

const base =
  'group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium transition-all duration-300 ease-editorial hover:-translate-y-px'

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-bg hover:bg-accent',
  ghost: 'border border-black/[0.08] text-ink hover:border-accent hover:text-accent',
  light: 'border border-white/25 text-white hover:border-accent hover:text-accent',
}

function Inner({ children, arrow }: { children: React.ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-editorial group-hover:translate-x-1.5"
        >
          {'->'}
        </span>
      )}
    </>
  )
}

export default function Button({
  children,
  href,
  variant = 'primary',
  arrow = false,
  external = false,
  className = '',
}: {
  children: React.ReactNode
  href: string
  variant?: Variant
  arrow?: boolean
  external?: boolean
  className?: string
}) {
  const cls = [base, variants[variant], className].join(' ')

  if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
    return (
      <a
        href={href}
        className={cls}
        {...(external || href.startsWith('http')
          ? { target: '_blank', rel: 'noreferrer noopener' }
          : {})}
      >
        <Inner arrow={arrow}>{children}</Inner>
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  )
}
