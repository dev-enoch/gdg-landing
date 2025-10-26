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
    "DevFest Maiduguri 2025 brings together developers, designers, and tech enthusiasts to learn, build, and celebrate technology. The event includes key sessions, workshops, and panels.",
  keywords: [
    "GDG logo",
    "GDG Maiduguri",
    "About",
    "Speakers",
    "Agenda",
    "Sponsors",
    "Team",
    "Venue",
    "Get Tickets",
    "22th Nov, 2025 | 9:00 AM - 2:45 PM",
    "DevFest",
    "Maiduguri 2025",
    "Connect",
    "Learn",
    "Innovate",
    "Free tickets",
    "Fori Image",
    "Session",
    "Host",
    "Check-in & Seating",
    "Welcome & Opening Remarks",
    "Design (Inclusive Design in the African Context)",
    "Mental Health (Tech Burnout is Real)",
    "GDE Session 1",
    "Panel: Staying Human in Tech",
    "Kahoot! Icebreaker",
    "WTM Session",
    "Sponsor Lightning Demos",
    "Partners & Sponsors",
    "About DevFest Maiduguri 2025",
    "5th anniversary",
    "Facebook",
    "Instagram",
    "X",
    "YouTube",
    "Borno State Hotel Conference Hall",
    "Tech Festival",
    "Developers",
    "Designers",
    "Innovators",
  ],
  authors: [{ name: "GDG Maiduguri" }],
  creator: "GDG Maiduguri",
  publisher: "GDG Maiduguri",
  metadataBase: new URL("https://gdg.community.dev/gdg-maiduguri/"),
  openGraph: {
    title: "DevFest Maiduguri 2025 | GDG Maiduguri",
    description:
      "Overview of DevFest Maiduguri 2025, including event schedule, key sessions, speakers, and workshops for the tech community.",
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
      "Information on DevFest Maiduguri 2025: sessions, workshops, and key activities for developers and tech enthusiasts in Maiduguri.",
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
