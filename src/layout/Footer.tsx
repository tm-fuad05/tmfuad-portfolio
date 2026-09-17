"use client";
import Link from "next/link";
import Image from "next/image";
import { socialIcons } from "@/sections/hero/Hero";
import Logo from "@/components/shared/Logo";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  const navLinks: string[] = [
    "home",
    "skills",
    "about",
    "experience",
    "projects",
  ];

  return (
    <footer className="bg-gray-950 boxShadow - w-full py-10 grid-section relative">
      {/* Top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
      <div className="bg-black/50 inset-0 absolute z-[-1]" />
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center gap-7.5 flex-wrap w-full ">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="w-fit mx-auto lg:mx-0">
              <Logo />
            </div>
            <nav
              id="nav"
              className="lg:flex gap-10 text-gray-400 text-lg hidden nav"
            >
              {navLinks.map((nav) => (
                <Link
                  key={nav}
                  href={`/#${nav}`}
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
              {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.link}
                  target="_blank"
                  className="  p-1.5 rounded-full! hover:shadow-sm hover:bg-primary hover:text-white text-xl md:text-2xl transition-all duration-300"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
            <p className="text-xs md:text-md lg:text-lg text-gray-600">
              &copy; <span id="currentYear">{currentYear}</span>{" "}
              <span className="text-white font-normal">Tanvir Mahmud Fuad</span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
