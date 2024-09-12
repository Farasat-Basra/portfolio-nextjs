import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";

import { ChildrenProps } from "@/definitions/types";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";

const GoToTop = dynamic(() => import("@/components/core/go-to-top"), {
  ssr: false,
});

import "lenis/dist/lenis.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import "./globals.css";

const openSans = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500","700", "900"],
});

export const metadata: Metadata = {
  title: "Farasat Ali",
  description: "Next js Portfolio created by Farasat Ali S.",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <LenisProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <GoToTop />
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
