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
  title: "DevFest Maiduguri 2025 | GDG Maiduguri",
  description:
    "Join DevFest Maiduguri 2025 by Google Developer Groups. Connect, learn, and innovate with developers, designers, and tech enthusiasts. Secure your free ticket now.",
  keywords: [
    "DevFest Maiduguri 2025",
    "GDG Maiduguri",
    "Google Developer Groups",
    "DevFest",
    "Tech Conference Maiduguri",
    "Developers in Nigeria",
    "Google Developers",
    "Tech Event",
    "Programming",
    "Software Engineering",
  ],
  authors: [{ name: "GDG Maiduguri" }],
  creator: "GDG Maiduguri",
  publisher: "GDG Maiduguri",
  metadataBase: new URL("https://gdg.community.dev/gdg-maiduguri/"),
  openGraph: {
    title: "DevFest Maiduguri 2025 | GDG Maiduguri",
    description:
      "Be part of the biggest tech celebration in Maiduguri. Join developers, designers, and innovators at DevFest Maiduguri 2025. Free tickets available.",
    url: "https://gdg.community.dev/e/mzbnsy/",
    siteName: "GDG Maiduguri",
    images: [
      {
        url: "/images/register.png",
        width: 1200,
        height: 630,
        alt: "DevFest Maiduguri 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFest Maiduguri 2025 | GDG Maiduguri",
    description:
      "Connect, learn, and innovate at DevFest Maiduguri 2025. Join the largest developer festival in Maiduguri. Get your free tickets now.",
    images: ["/images/register.png"],
    creator: "@gdgmaiduguri",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://gdg.community.dev/e/mzbnsy/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFFDEB] dark:bg-[#FFFDEB]`}
      >
        <main className="max-w-[1440px] w-full mx-auto">{children}</main>
      </body>
    </html>
  );
}
