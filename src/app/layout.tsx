import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Watermark } from "@/components/layout/Watermark";
import { ContentProvider } from "@/context/ContentProvider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ContentProvider>
          <div className="flex flex-col min-h-screen items-center justify-center z-0 relative">

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
