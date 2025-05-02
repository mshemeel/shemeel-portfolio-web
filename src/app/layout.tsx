import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { ThemeProvider } from "@/context/ThemeContext";

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muhammed Shemeel | Full Stack Developer",
  description: "Portfolio website of Muhammed Shemeel, an experienced Full Stack Developer specialized in Java, Spring Boot, and React.",
  keywords: "Muhammed Shemeel, Full Stack Developer, Java, Spring Boot, React, Software Engineer, Web Developer",
  authors: [{ name: "Muhammed Shemeel" }],
  creator: "Muhammed Shemeel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
