/**
 * Prefix a root-relative path with the deploy base path (e.g. `/testing`).
 *
 * next/link and next's own assets get `basePath` automatically, but raw
 * `<img src>` and `fetch()` URLs do not. Empty base path (local dev, root
 * deploys) makes this a no-op.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function withBase(path: string): string
export function withBase(path: string | undefined): string | undefined
export function withBase(path: string | undefined) {
  if (!path || !BASE_PATH || !path.startsWith('/') || path.startsWith('//')) return path
  return `${BASE_PATH}${path}`
}
