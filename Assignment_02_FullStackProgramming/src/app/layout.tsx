import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import SiteHeader from "@/components/SiteHeader";
import MainNav from "@/components/MainNav";
import SponsorsBar from "@/components/SponsorsBar";
import SiteFooter from "@/components/SiteFooter";
import BackToTopButton from "@/components/BackToTopButton";
import ScrollAnimator from "@/components/ScrollAnimator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HotSpring Portable Spas",
    template: "%s | HotSpring Portable Spas",
  },
  description: "Premium hot tubs, spas and accessories for your home.",
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <TopBar />
        <SiteHeader />
        <MainNav />
        <div className="flex-1">{children}</div>
        <SponsorsBar />
        <SiteFooter />
        <BackToTopButton />
        <ScrollAnimator />
      </body>
    </html>
  );
}
