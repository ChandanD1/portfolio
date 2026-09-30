import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chandan Dhumale | Cybersecurity Engineer & Technology Builder",
  description: "Portfolio of Chandan Dhumale: Cybersecurity Engineer and Startup Founder. Engineering resilient systems, securing digital infrastructure, and building technology with purpose.",
  keywords: [
    "Chandan Dhumale",
    "Cybersecurity Engineer",
    "Technology Builder",
    "Astittva",
    "Founder & CEO",
    "Network Security",
    "Software Engineer",
    "Mumbai"
  ],
  authors: [{ name: "Chandan Dhumale" }],
  openGraph: {
    title: "Chandan Dhumale | Cybersecurity Engineer & Technology Builder",
    description: "Cybersecurity Engineer and Startup Founder. Engineering resilient systems, securing digital infrastructure, and building technology with purpose.",
    siteName: "Chandan Dhumale Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
