import type { Metadata } from "next";
import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Watermark } from "@/components/layout/Watermark";
import { ContentProvider } from "@/context/ContentProvider";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marc DOSSA",
  description: "Software engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", workSans.variable, geistSans.variable, geistMono.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <ContentProvider>
          <div className="flex flex-col min-h-dvh items-center justify-center z-0 relative">

            <Navbar />
            <Watermark />

            <main className="grow">
              {children}
            </main>

            <Footer />

          </div>
        </ContentProvider>
      </body>
    </html>
  );
}
