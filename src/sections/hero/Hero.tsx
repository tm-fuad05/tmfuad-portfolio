"use client";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";
import { DynamicSpotlight } from "@/components/ui/dynamic-spotlight";
import Content from "./Content";
import Profile from "./Profile";

// Social Links
export interface SocialIcon {
  link: string;
  icon: ReactNode;
}
export const socialIcons: SocialIcon[] = [
  {
    link: "https://www.linkedin.com/in/tmfuad05/",
    icon: <FaLinkedinIn />,
  },
  {
    link: "https://x.com/tm_rounded05",
    icon: <FaXTwitter />,
  },
  {
    link: "https://www.facebook.com/tmfuad05",
    icon: <FaFacebookF />,
  },
  {
    link: "https://github.com/tm-rounded05",
    icon: <FaGithub />,
  },
];

const Hero = () => {
  return (
    <DynamicSpotlight
      radius={{ sm: 800, md: 400, lg: 700 }}
      darkness={0.95}
      revealOpacity={0.7}
      initialPos={{ x: 50, y: 0 }}
      isPersist
      id="home"
      className=" min-h-screen pb-22 grid-background bg-[url('/images/bg.avif')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute w-full h-30 bg-linear-to-t from-slate-950 to-transparent -bottom-22" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start lg:items-center gap-20 md:gap-8 pt-25 md:pt-30 lg:pt-34 z-2">
        {/* Content  */}
        <Content socialIcons={socialIcons} />
        {/* Profile Picture */}
        <Profile />
      </div>
      {/* Scroller */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="pt-16 md:pt-5 lg:pt-8 "
      >
        <Link href="#about" className="cursor-pointer">
          <div className="relative w-20 h-28 lg:w-22 lg:h-30 mx-auto">
            <Image fill src="/images/scroll.png" alt="" />
          </div>
        </Link>
      </motion.div>
    </DynamicSpotlight>
  );
};

export default Hero;
