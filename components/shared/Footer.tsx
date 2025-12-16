"use client";
import Link from "next/link";
// react icons

import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactNode } from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  const navLinks: string[] = [
    "home",
    "skills",
    "about",
    "experience",
    "projects",
  ];

  type SocialIcons = {
    link: string;
    icon: ReactNode;
  };

  const socialIcons: SocialIcons[] = [
    {
      link: "https://www.linkedin.com/in/tmfuad05/",
      icon: <FaLinkedinIn />,
    },
    {
      link: "https://x.com/tm_fuad05",
      icon: <FaXTwitter />,
    },
    {
      link: "https://www.facebook.com/nafu2308",
      icon: <FaFacebookF />,
    },
    {
      link: "https://github.com/tm-fuad05",
      icon: <FaGithub />,
    },
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 boxShadow rounded-xl w-full px-6 md:px-10 lg:px-16 py-10 grid-section relative">
      <div className="bg-black/50 inset-0 absolute z-[-1]"></div>
      <div className="flex justify-center gap-[30px] flex-wrap w-full ">
        <div className="flex justify-between items-center w-full">
          <figure className="relative w-8 h-8 md:w-10 md:h-8 lg:w-16 lg:h-13 mx-auto md:mx-0">
            <Image fill className="opacity-70" src="/images/logo2.png" alt="" />
          </figure>
          <nav
            id="nav"
            className="lg:flex gap-10 text-gray-400 text-lg hidden nav"
          >
            {navLinks.map((nav) => (
              <Link
                key={nav}
                href={`#${nav}`}
                className="hover:text-primary capitalize"
              >
                {nav}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t dark:border-slate-700 border-gray-200 pt-5 flex flex-col items-center lg:flex-row w-full flex-wrap gap-5 justify-between">
          {/* Social Links */}
          <div className="flex gap-2 text-gray-600">
            {socialIcons.map((icon) => (
              <a
                href={icon.link}
                target="_blank"
                className="rounded-full  p-1.5 hover:shadow-sm hover:bg-primary hover:text-white text-xl md:text-2xl transition-all duration-300"
              >
                {icon.icon}
              </a>
            ))}
          </div>
          <p className="text-xs md:text-md lg:text-lg text-gray-600">
            &copy; <span id="currentYear">{currentYear}</span> Tanvir Mahmud
            Fuad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
