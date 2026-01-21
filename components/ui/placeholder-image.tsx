"use client";

import Image from "next/image";

interface PlaceholderImageProps {
  alt: string;
  className?: string;
}

export function PlaceholderImage({ alt, className }: PlaceholderImageProps) {
  // SVG placeholder as data URI
  const placeholderSvg = `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1A2B3C;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0A1B2C;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#D4AF37" text-anchor="middle" dy=".3em" font-weight="bold">${alt}</text>
    </svg>`
  ).toString("base64")}`;

  return (
    <Image
      src={placeholderSvg}
      alt={alt}
      fill
      className={className}
      unoptimized
    />
  );
}
