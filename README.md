# Ark Digital Website

A modern, high-performance rebranding website for Ark Digital - a software firm focused on integrity, security, and navigating the flood of data.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Components:** Shadcn/UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Homepage
│   ├── projects/           # Projects pages
│   ├── values/             # Values page
│   ├── services/           # Services page
│   └── contact/            # Contact page
├── components/
│   ├── ui/                 # Shadcn/UI components
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, ProjectsPreview)
│   └── projects/           # Project-related components
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── animations.ts       # Framer Motion variants
│   └── projects.ts         # Project data
└── public/
    └── images/
        └── projects/       # Project images (add your images here)
```

## Adding Project Images

Project images should be placed in the following structure:

```
public/images/projects/
├── chernelang-physio/
│   ├── hero.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   └── gallery-3.jpg
├── fitguide-pro/
│   ├── hero.jpg
│   └── gallery-*.jpg
├── skainet-cleaning/
├── dma-law/
└── skills-to-furnish/
```

### Image Requirements

- **Hero images:** Recommended size: 1920x1080px (16:9 aspect ratio)
- **Gallery images:** Recommended size: 1920x1080px or similar
- **Formats:** JPG, PNG, or WebP
- **Optimization:** Next.js automatically optimizes images, but keep file sizes reasonable

## Brand Colors

- **Deep Sea Navy:** `#1A2B3C` (primary)
- **Golden Accents:** `#D4AF37` (accent)
- **Slate Grays:** Various shades for text and backgrounds

## Typography

- **Headings:** Playfair Display (serif) or Montserrat (display)
- **Body:** Inter (sans-serif)

## Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized
- ✅ Accessible (A11Y)
- ✅ Image optimization
- ✅ Smooth animations
- ✅ Glassmorphism effects
- ✅ Project portfolio with detailed case studies
- ✅ Image gallery with lightbox

## Future Enhancements

- Values page content
- Services page content
- Contact form with Server Actions
- Blog functionality
- Additional project filtering

## License

Copyright © 2024 Ark Digital. All rights reserved.
