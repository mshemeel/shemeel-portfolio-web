import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { ThemeProvider } from "@/context/ThemeContext";
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
  openGraph: metadataConfig.openGraph,
  twitter: metadataConfig.twitter,
  robots: metadataConfig.robots,
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: metadataConfig.themeColor,
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={metadataConfig.language} className={inter.variable}>
      <body>
        <ThemeProvider>
        <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
