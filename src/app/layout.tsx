import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Saphir Agency — Studio Digital Premium",
    template: "%s | Saphir Agency",
  },
  description:
    "Studio digital spécialisé dans la création d'applications web et mobile sur mesure. Saphir Agency — Expertise, qualité et performance.",
  keywords: [
    "studio digital",
    "agence web",
    "développement web",
    "Next.js",
    "React",
    "TypeScript",
    "Saphir Agency",
  ],
  authors: [{ name: "Saphir Agency" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Saphir Agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-base text-ink antialiased">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
