import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oxanium",
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
      <body className={oxanium.variable}>{children}</body>
    </html>
  );
}
