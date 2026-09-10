import type { Metadata } from "next";
import localFont from "next/font/local";
import { Oxanium, Geist_Mono, Hind_Siliguri } from "next/font/google";
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
const hind_siliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
});

// const googleSans = localFont({
//   src: "./fonts/GoogleSansFlex-VariableFont_GRAD,ROND,opsz,slnt,wdth,wght.ttf",
//   variable: "--font-google-sans",
//   display: "swap",
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://tanvirmahmud.online"),
  title: {
    default: "Tanvir Mahmud Fuad",
    template: "%s | Tanvir Mahmud Fuad",
  },
  description:
    "Portfolio of Tanvir Mahmud Fuad (TM Fuad) - Professional Full Stack & MERN Stack Developer specializing in Next.js, React, Node.js, and modern web application development.",
  keywords: [
    // Name variations
    "Tanvir Mahmud Fuad",
    "Tanvir Fuad",
    "TM Fuad",
    "tmfuad",
    "Mahmud Fuad",
    "Tanvir",
    "Fuad",
    "Tanvir Mahmud",
    "TM Fuad portfolio",
    "Tanvir Fuad developer",
    "Tanvir portfolio",

    // Skills & Role based
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Developer Bangladesh",
    "Portfolio Website",
  ],
  authors: [
    { name: "Tanvir Mahmud Fuad", url: "https://github.com/tm-fuad05" },
  ],
  creator: "Tanvir Mahmud Fuad",
  publisher: "Tanvir Mahmud Fuad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanvirmahmud.online",
    title: "Tanvir Mahmud Fuad",
    description:
      "Explore the portfolio of Tanvir Mahmud Fuad (TM Fuad) – Full Stack & Next.js Developer.",
    siteName: "Tanvir Mahmud Fuad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanvir Mahmud Fuad",
    description:
      "Explore the portfolio of Tanvir Mahmud Fuad (TM Fuad) – Full Stack & Next.js Developer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <body
        className={`${oxanium.variable} ${geist_mono.variable} ${hind_siliguri.variable}`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
