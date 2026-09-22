import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { seo } from "@/data/content";
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
  metadataBase: new URL("https://kent-paler-portfolio.vercel.app"),

  title: {
    default: seo.title,
    template: "%s | Kent Niño Paler",
  },

  description: seo.description,

  keywords: seo.keywords,

  authors: [
    {
      name: "Kent Niño Paler",
    },
  ],

  creator: "Kent Niño Paler",

  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
