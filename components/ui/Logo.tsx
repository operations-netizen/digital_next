'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/**
 * Digital Next logo.
 *
 * Renders your logo image from `/public/logo.png` (drop your file there,
 * or pass a different `src`). Your image contains the wordmark, so
 * nothing else is drawn once it loads.
 *
 * The image is preloaded in an effect and only rendered if it loads
 * successfully - so a missing/failed file can never show a broken-image
 * icon. Until a valid file exists, it falls back to the inline DN
 * monogram + a "DigitalNext" wordmark.
 *
 * `invert`: on dark surfaces (footer), flips a dark logo on a transparent
 * background to white. Export a transparent PNG for best results.
 */
export default function Logo({
  href = '/',
  src = '/logo.png',
  markClassName = 'h-10 w-auto',
  className = '',
  invert = false,
  onClick,
}: {
  href?: string
  src?: string
  markClassName?: string
  className?: string
  invert?: boolean
  onClick?: () => void
}) {
  const [hasImage, setHasImage] = useState(false)

  useEffect(() => {
    let active = true
    const probe = new window.Image()
    probe.onload = () => {
      // Guard against 0-byte / broken files that still "load".
      if (active) setHasImage(probe.naturalWidth > 0)
    }
    probe.onerror = () => {
      if (active) setHasImage(false)
    }
    probe.src = src
    return () => {
      active = false
    }
  }, [src])

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Digital Next - home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt="Digital Next"
          className={`${markClassName} object-contain ${invert ? 'invert' : ''}`}
        />
      ) : (
        <>
          <svg
            viewBox="0 0 124 128"
            className="h-9 w-auto"
            fill="currentColor"
            role="img"
            aria-label="Digital Next"
          >
            <path d="M22 20h14v88H22z" />
            <path d="M15 20h30v7H15z" />
            <path d="M15 101h30v7H15z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36 20h20c26 0 40 22 40 44s-14 44-40 44H36V96h18c20 0 28-16 28-32s-8-32-28-32H36z"
            />
            <path d="M52 20h14l28 88H80z" />
            <path d="M92 20h14v88H92z" />
            <path d="M92 20h22v7H92z" />
          </svg>
          <span className="font-sans text-lg font-normal leading-none tracking-tight">
            DigitalNext
          </span>
        </>
      )}
    </Link>
  )
}
