import { ImageResponse } from 'next/og'
import { ACCENT, OG_CONTENT_TYPE, OG_SIZE, OgFrame, logoDataUri, ogFonts } from '@/lib/og'
import { SITE_TITLE } from '@/lib/seo'

// Site-wide share card - inherited by every route without its own.
export const alt = SITE_TITLE
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function OpengraphImage() {
  const [fonts, logo] = await Promise.all([ogFonts(), logoDataUri()])
  return new ImageResponse(
    (
      <OgFrame
        logo={logo}
        eyebrow="A technology holding company"
        footerLeft="6 brands · 450+ people · 4 countries"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Fraunces',
            fontWeight: 300,
            fontSize: 84,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
          }}
        >
          <div style={{ display: 'flex' }}>Building the</div>
          <div style={{ display: 'flex', fontStyle: 'italic', color: ACCENT }}>next generation</div>
          <div style={{ display: 'flex' }}>of digital brands.</div>
        </div>
      </OgFrame>
    ),
    { ...OG_SIZE, fonts }
  )
}
