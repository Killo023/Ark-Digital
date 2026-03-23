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
    default: "Ark Digital - Custom Business Operation Solutions",
    template: "%s | Ark Digital",
  },
  description: "ARK DIGITAL develops custom business operation solutions. We design and build workflows, automation, and operational systems tailored to how your business runs—not generic software.",
  keywords: ["custom business operations", "workflow automation", "operational solutions", "business systems", "process automation", "Ark Digital"],
  authors: [{ name: "Ark Digital" }],
  creator: "Ark Digital",
  publisher: "Ark Digital",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://arkdigital.com"),
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
    siteName: "Ark Digital",
    title: "Ark Digital - Custom Business Operation Solutions",
    description: "We develop custom business operation solutions—workflows, automation, and systems tailored to your processes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ark Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ark Digital - Custom Business Operation Solutions",
    description: "We develop custom business operation solutions—workflows, automation, and systems tailored to your processes.",
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
    // Add verification codes here when available
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
