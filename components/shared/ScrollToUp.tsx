"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import up from "@/data/up.json";
import Link from "next/link";
const ScrollToUp = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href="#home"
      className={`fixed z-30 right-8 bottom-8 hidden md:block w-15 lg:w-16.25  rounded-full bg-linear-to-b from-primary/50 to-transparent hover:-translate-y-2 cursor-pointer transition transform duration-300 ${
        scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Lottie animationData={up} loop={true} />
    </Link>
  );
};

export default ScrollToUp;
