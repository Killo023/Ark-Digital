# Ark Digital - Project Context

## Overview
Next.js 15 (App Router) website for **Ark Digital** — currently pivoting from custom software development shop to a **GTM & Revenue Automation Agency**.

**Domain:** arc digital.solutions  
**Tagline:** Navigating the Flood of Data / Automated GTM Systems  
**Target:** B2B SMEs in South Africa (ZAR) and globally (USD)

---

## Tech Stack
| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript strict |
| Styling | Tailwind CSS 3.4 + CSS variables |
| UI Components | Custom shadcn-style (Radix primitives, CVA) |
| Animations | Framer Motion 11 |
| Icons | Lucide React 0.344 |
| Fonts | Inter (sans), Playfair Display (serif), Montserrat (display) |

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, Navbar/Footer/WhatsApp
│   ├── page.tsx            # Homepage — Hero, Mission, Why Choose, Services Preview
│   ├── globals.css         # Tailwind directives, CSS variables, base styles
│   ├── contact/page.tsx    # ContactPage → ContactForm component
│   ├── projects/
│   │   ├── page.tsx        # Project listing grid
│   │   └── [slug]/
│   │       ├── page.tsx    # Dynamic project detail page
│   │       └── not-found.tsx
│   ├── services/page.tsx   # Services listing (old: custom dev, cloud, dig. transformation)
│   ├── values/page.tsx     # Company values
│   └── test/page.tsx       # Style-test page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed nav, scroll-blur, mobile hamburger
│   │   └── Footer.tsx      # 4-col footer: brand, company, legal, contact
│   ├── sections/
│   │   ├── Hero.tsx        # Full-screen hero with watermarked logo, badges, CTAs
│   │   └── ProjectsPreview.tsx  # 3 featured project cards grid
│   ├── projects/
│   │   ├── ProjectCard.tsx      # Card with image, category badge, hover effects
│   │   ├── ProjectGrid.tsx      # Staggered motion grid of ProjectCards
│   │   ├── ProjectDetail.tsx    # Full case study layout
│   │   ├── ProjectGallery.tsx   # Image gallery with lightbox
│   │   └── BackToProjects.tsx   # Back-link component
│   ├── contact/
│   │   └── ContactForm.tsx  # Full-page form with name/email/company/phone/service/message
│   └── ui/                 # shadcn-style primitives
│       ├── button.tsx, card.tsx, dialog.tsx, input.tsx, textarea.tsx
│       ├── WhatsAppButton.tsx  # Floating green WhatsApp CTA (fixed bottom-right)
│       ├── placeholder-image.tsx
│       └── reveal.tsx      # Scroll-triggered fade/slide animation wrapper
├── lib/
│   ├── utils.ts            # cn() — clsx + tailwind-merge
│   ├── animations.ts       # Framer Motion variants (fadeIn, slideUp, staggerContainer, etc.)
│   └── projects.ts         # Project data + getProjectBySlug/getProjectsByCategory
├── public/
│   └── images/
│       ├── Logo.png, Logo white text.png, Logo side by side.png, Logo Icon.png, etc.
│       └── projects/       # Screenshots for each case study
├── tailwind.config.ts      # Custom colors: black, yellow/gold, navy, slate; fonts; keyframes
├── next.config.ts          # Image remotePatterns for unsplash + screenshot APIs
└── vercel.json
```

---

## Brand System

### Colors
- **Background:** `#000000` (black), `#1A1A1A` (black-light)
- **Primary Accent:** `#FFD700` (yellow/gold — used for borders, highlights, CTAs)
- **Secondary:** `#1A2B3C` (navy), `#2A3B4C` (navy-light) — used in cards/sections
- **Text:** white, slate-300/400 for body

### Typography
- **Headings:** Playfair Display (serif) — `.font-serif`
- **Display/Subheads:** Montserrat (sans) — `.font-display`
- **Body:** Inter (sans-serif) — `.font-sans`

### Design Patterns
- Dark mode throughout (black backgrounds)
- Glassmorphism cards (`bg-black-light/30 backdrop-blur-sm`)
- Gold borders on cards/sections (`border-yellow/30 hover:border-yellow/70`)
- Hover scale transitions on images (`group-hover:scale-110`)
- Full-width background images with dark overlays (`opacity-10 to opacity-20`)

---

## Current Page Inventory

| Route | Purpose | Status |
|---|---|---|---|
| `/` | Home — Hero, Problem/Fix, Core Services, Pricing, Stats, Projects, CTA | Complete (GTM messaging) |
| `/services` | Services — 3 verticals, How It Works, CTA | Complete |
| `/projects` | Portfolio grid (5 case studies) | Reframed for GTM |
| `/projects/[slug]` | Individual project detail | Reframed descriptions |
| `/values` | Mission/Values page | Rewritten for GTM positioning |
| `/contact` | Contact form + GTM Audit booking | Complete |
| `/test` | Dev test page | Present |

---

## Known Issues / TODOs

- **Case studies still show web dev projects** (physio, cleaning, law) — need real GTM automation cases
- **No testimonials or client logo strip** — add social proof section
- **No blog/content marketing** — add `/blog` for SEO
- **No email capture** — add newsletter opt-in or lead magnet download
- **No anchor nav** — consider sticky section nav for long pages

---

## Animation System

All sections use scroll-triggered fade/slide animations via Framer Motion:

| Component | File | Usage |
|---|---|---|
| `<Reveal>` | `components/ui/reveal.tsx` | Wraps any section/content. Props: `direction` (up/down/left/right/none), `delay`, `duration`, `once` |
| `.Hero` | `components/sections/Hero.tsx` | Built-in stagger + glow blob animations |
| `.ProjectGrid` | `components/projects/ProjectGrid.tsx` | Uses `staggerContainer` from `lib/animations.ts` |
| `.ProjectCard` | `components/projects/ProjectCard.tsx` | Uses `fadeIn` with per-card delay |
| `lib/animations.ts` | Variants: `fadeIn`, `slideUp`, `slideDown`, `staggerContainer`, `staggerItem` | Shared across components |

---

## Build Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```
