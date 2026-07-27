import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arc Digital — Automated GTM Systems & Revenue Operations",
    template: "%s | Arc Digital",
  },
  description: "Arc Digital engineers automated GTM systems, outbound pipelines, and speed-to-lead workflows that eliminate manual overhead and accelerate revenue for B2B SMEs.",
  keywords: ["GTM automation", "revenue operations", "lead generation", "WhatsApp automation", "CRM reconciliation", "outbound pipelines", "Arc Digital"],
  authors: [{ name: "Arc Digital" }],
  creator: "Arc Digital",
  publisher: "Arc Digital",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://arcdigital.solutions"),
  icons: {
    icon: [
      { url: "/images/Logo%20Icon.png", sizes: "any", type: "image/png" },
      { url: "/images/Logo%20Icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/Logo%20Icon.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [
      { url: "/images/Logo%20Icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/Logo%20Icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Arc Digital",
    title: "Arc Digital — Automated GTM Systems & Revenue Operations",
    description: "Predictable revenue. Instant lead response. Automated growth. We build GTM systems that convert.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arc Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arc Digital — Automated GTM Systems & Revenue Operations",
    description: "Predictable revenue. Instant lead response. Automated growth. We build GTM systems that convert.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-black font-sans antialiased text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
