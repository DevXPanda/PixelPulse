import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
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
  title: "Pixel Pulses - Digital Growth Agency | High-Converting Ads, SEO & Web Development",
  description: "Transform your business with data-driven digital marketing and cutting-edge web development. Specializing in performance marketing, SEO, MERN stack development, and AI solutions that drive real results.",
  keywords: "digital marketing, SEO, web development, performance marketing, MERN stack, AI solutions, Meta Ads, Google Ads, social media management",
  authors: [{ name: "Pixel Pulses" }],
  icons: {
    icon: '/download.svg',
    shortcut: '/download.svg',
    apple: '/download.svg',
  },
  openGraph: {
    title: "Pixel Pulses - Digital Growth Agency",
    description: "Transform your business with data-driven digital marketing and cutting-edge web development",
    type: "website",
    locale: "en_US",
    siteName: "Pixel Pulses",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Pulses - Digital Growth Agency",
    description: "Transform your business with data-driven digital marketing and cutting-edge web development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
