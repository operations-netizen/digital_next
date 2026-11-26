import { ImageResponse } from 'next/og'
import { OG_CONTENT_TYPE, OG_SIZE, OgFrame, logoDataUri, ogFonts } from '@/lib/og'
import { getInsight, insights } from '@/lib/insights'

// Per-article share card: the article's own title on the brand frame.
export const alt = 'Digital Next Insights'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }))
}

export default async function InsightOgImage({ params }: { params: { slug: string } }) {
  const insight = getInsight(params.slug)
  const [fonts, logo] = await Promise.all([ogFonts(), logoDataUri()])
  const title = insight?.title ?? 'Insights'
  // Step the size down for long headlines so they stay within three lines.
  const fontSize = title.length > 70 ? 58 : title.length > 48 ? 66 : 76

  return new ImageResponse(
    (
      <OgFrame
        logo={logo}
        eyebrow={insight ? `Insights · ${insight.category}` : 'Insights'}
        footerLeft={insight ? `${insight.dateLabel} · ${insight.readTime}` : 'Digital Next'}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'Fraunces',
            fontWeight: 300,
            fontSize,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
      </OgFrame>
    ),
    { ...OG_SIZE, fonts }
  )
}
