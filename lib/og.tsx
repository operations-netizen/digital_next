import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { SITE_URL } from '@/lib/seo'

/**
 * Shared pieces for the generated Open Graph images (1200x630), rendered at
 * build time by next/og. Brand type comes from Google Fonts as TTF (the
 * renderer can't read woff2); if a fetch fails the image still renders in
 * the default face rather than failing the build.
 */

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

const INK = '#111111'
const MUTED = '#666666'
const LINE = '#EAEAEA'
export const ACCENT = '#4F46FF'

type Font = { name: string; data: ArrayBuffer; weight: 300 | 400 | 500; style: 'normal' | 'italic' }

async function googleTtf(family: string, axis: string): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}:${axis}`)
    ).text()
    const url = css.match(/src: url\(([^)]+)\) format\('truetype'\)/)?.[1]
    if (!url) return null
    return await (await fetch(url)).arrayBuffer()
  } catch {
    return null
  }
}

export async function ogFonts(): Promise<Font[]> {
  const [serif, serifItalic, mono] = await Promise.all([
    googleTtf('Fraunces', 'wght@300'),
    googleTtf('Fraunces', 'ital,wght@1,300'),
    googleTtf('IBM+Plex+Mono', 'wght@400'),
  ])
  const fonts: Font[] = []
  if (serif) fonts.push({ name: 'Fraunces', data: serif, weight: 300, style: 'normal' })
  if (serifItalic) fonts.push({ name: 'Fraunces', data: serifItalic, weight: 300, style: 'italic' })
  if (mono) fonts.push({ name: 'Plex Mono', data: mono, weight: 400, style: 'normal' })
  return fonts
}

export async function logoDataUri(): Promise<string | null> {
  try {
    const png = await readFile(join(process.cwd(), 'public', 'logo-dn.png'))
    return `data:image/png;base64,${png.toString('base64')}`
  } catch {
    return null
  }
}

const mono = {
  fontFamily: 'Plex Mono',
  fontSize: 18,
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color: MUTED,
}

/** The editorial frame shared by every card: logo, eyebrow, body, footer rule. */
export function OgFrame({
  logo,
  eyebrow,
  footerLeft,
  children,
}: {
  logo: string | null
  eyebrow: string
  footerLeft: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#FFFFFF',
        padding: '64px 72px 56px',
        color: INK,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logo} width={226} height={48} alt="" />
        ) : (
          <div style={{ display: 'flex', fontFamily: 'Fraunces', fontSize: 40 }}>Digital Next</div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 56 }}>
          <div style={{ width: 40, height: 2, background: ACCENT, marginRight: 18 }} />
          <div style={{ display: 'flex', ...mono }}>{eyebrow}</div>
        </div>
      </div>

      {children}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: `1px solid ${LINE}`,
          paddingTop: 26,
        }}
      >
        <div style={{ display: 'flex', ...mono }}>{footerLeft}</div>
        <div style={{ display: 'flex', ...mono, color: INK, textTransform: 'none', letterSpacing: '0.04em' }}>
          {SITE_URL.replace(/^https?:\/\//, '')}
        </div>
      </div>
    </div>
  )
}
