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
  metadataBase: new URL("https://harsh-chhabra-design-portfolio.harshchhabra3330.chatgpt.site"),
  title: "Harsh Chhabra — Graphic & UI/UX Designer",
  description:
    "Recruiter-ready selected work by Harsh Chhabra across product design, brand systems, campaigns, packaging and motion.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Harsh Chhabra — Design that makes brands unmissable",
    description:
      "Product design, brand systems, campaigns, packaging and motion—selected work by Harsh Chhabra.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Harsh Chhabra — Design that makes brands unmissable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Chhabra — Design Portfolio",
    description: "Product design, brand systems, campaigns, packaging and motion.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
