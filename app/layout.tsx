import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elitesolutionusa.com"),
  title: "Elite Solution USA — Accounting, Tax & Business Services",
  description:
    "CPA-led accounting, bookkeeping, tax, payroll, audit, and CFO services — plus web development, design, SEO, and marketing.",
  openGraph: {
    title: "Elite Solution USA — Accounting, Tax & Business Services",
    description:
      "Digital and financial solutions that drive real business growth.",
    url: "https://elitesolutionusa.com",
    siteName: "Elite Solution USA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#060b10] text-slate-200">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
