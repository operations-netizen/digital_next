/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  // Sub-path deploys (e.g. cPanel `/testing`) set NEXT_PUBLIC_BASE_PATH at build time.
  ...(basePath ? { basePath } : {}),
  // Self-contained server bundle for Passenger/cPanel Node hosting.
  // Separate build dir so a deploy build doesn't clobber the dev server's .next.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  ...(process.env.BUILD_STANDALONE ? { output: 'standalone' } : {}),
}

export default nextConfig
