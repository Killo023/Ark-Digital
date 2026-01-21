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
    default: "Ark Digital - Navigating the Flood of Data",
    template: "%s | Ark Digital",
  },
  description: "ARK DIGITAL - Transforming Businesses. Your Partner in Software Development. We pioneer digital solutions that empower businesses to thrive through tailored software development and digital transformation.",
  keywords: ["software development", "web development", "full-stack development", "AI integration", "security", "Ark Digital"],
  authors: [{ name: "Ark Digital" }],
  creator: "Ark Digital",
  publisher: "Ark Digital",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://arkdigital.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ark Digital",
    title: "Ark Digital - Navigating the Flood of Data",
    description: "A software firm focused on integrity, security, and navigating the flood of data.",
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
    title: "Ark Digital - Navigating the Flood of Data",
    description: "A software firm focused on integrity, security, and navigating the flood of data.",
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
