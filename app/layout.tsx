import type { Metadata } from "next";
import { Oxanium, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/lenis/SmoothScroll";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oxanium",
});
const geist_mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geistMono",
});

export const metadata: Metadata = {
  title: "Tanvir Mahmud Fuad",
  description: "MERN & Next.js developer",
  // Tab Icon
  icons: {
    icon: "/images/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable} ${geist_mono.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
