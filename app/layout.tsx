import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "Fuad Portfolio",
  description: "MERN & Next.js developer portfolio website",
  openGraph: {
    title: "Fuad Portfolio",
    description: "MERN & Next.js developer portfolio website",
    url: "https://your-portfolio.com",
    siteName: "Fuad Portfolio",
    type: "website",
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
