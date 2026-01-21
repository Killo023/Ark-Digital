import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  // Prevent Next from inferring a higher-level workspace root due to other lockfiles on disk.
  // This ensures output file tracing and page module resolution use THIS project directory.
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.thum.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.screenshotone.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.screenshotmachine.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'screenshot.guru',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
