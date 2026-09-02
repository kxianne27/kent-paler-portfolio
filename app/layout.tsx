import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    default: "Kent Niño Paler | Systems Analyst & Software Engineer",
    template: "%s | Kent Niño Paler",
  },

  description:
    "Professional portfolio of Kent Niño Paler showcasing enterprise information systems, software engineering, systems analysis, and government digital transformation projects.",

  keywords: [
    "Systems Analyst",
    "Software Engineer",
    "Data Analyst",
    "PHP Developer",
    "SQL Server",
    "MySQL",
    "Next.js",
    "TypeScript",
    "Government Information Systems",
    "Digital Transformation",
    "Business Process Automation",
  ],

  authors: [
    {
      name: "Kent Niño Paler",
    },
  ],

  creator: "Kent Niño Paler",

  openGraph: {
    title: "Kent Niño Paler",
    description:
      "Systems Analyst • Software Engineer • Enterprise Information Systems",
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
