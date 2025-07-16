import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from '@vercel/analytics/react';
import metadataConfig from "@/data/metadata.json";

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Generate metadata from configuration file
export const metadata: Metadata = {
  title: metadataConfig.title,
  description: metadataConfig.description,
  keywords: metadataConfig.keywords,
  authors: metadataConfig.authors,
  creator: metadataConfig.creator,
  publisher: metadataConfig.publisher,
  openGraph: metadataConfig.openGraph,
  twitter: metadataConfig.twitter,
  robots: metadataConfig.robots,
  alternates: metadataConfig.alternates,
  icons: metadataConfig.icons,
  manifest: metadataConfig.manifest,
  verification: metadataConfig.verification,
  applicationName: metadataConfig.applicationName,
  generator: metadataConfig.generator,
  referrer: "origin-when-cross-origin",
  category: "portfolio"
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: metadataConfig.themeColor,
  colorScheme: metadataConfig.colorScheme as 'light dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={metadataConfig.language} className={inter.variable}>
      <head>
        <link rel="canonical" href={metadataConfig.canonical} />
      </head>
      <body>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
