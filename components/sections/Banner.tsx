"use client";
import Image from "next/image";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { IoMdCloudDownload } from "react-icons/io";
// import { Link as ScrollLink } from "react-scroll";
import { ReactNode } from "react";
import Link from "next/link";

const Banner = () => {
  // Download Resume
  const handlePDFDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

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
    <div
      id="home"
      className="grid-background px-6 md:px-10 lg:px-16 bg-cover flex flex-col min-h-screen pb-12 relative"
    >
      {/* Glow Circle */}
      <div className="relative z-1">
        <div className="absolute -top-38 -left-38 w-120 md:w-175 h-175 rounded-full blur-3xl bg-primary/3"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between lg:items-center gap-20 md:gap-8 pt-25 md:pt-30 lg:pt-34 z-2">
        {/* Content  */}
        <motion.div
          className="flex flex-col items-center md:items-start gap-3 md:w-7/12"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <h5 className="text-slate-100 font-medium text-[15px] md:text-lg lg:text-xl">
              Hello, I'm Md. Tanvir Mahmud{" "}
              <span className="bg-linear-to-r from-secondary backdrop-blur text-white py-1 px-3 rounded-md rounded-bl-none">
                Fuad
              </span>
            </h5>
            <RiReactjsFill
              className=" text-[#61DBFB] animate-[spin_4s_linear_infinite]"
              size={30}
            />
          </div>
          {/* Title */}
          <h1 className="capitalize text-center md:text-left text-blue-100 font-bold text-4xl lg:text-6xl h-18.75 md:h-21.25 lg:h-30">
            <Typewriter
              words={["FrontEnd developer", "MERN stack specialist"]}
              loop={0}
              cursor={false}
              cursorStyle="|"
              cursorColor="#7C3AED"
              typeSpeed={60}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-paragraph max-sm:text-sm font-medium text-center md:text-left md:pr-5">
            I develop high-performance, secure, and user-friendly applications
            with a focus on clean architecture and seamless functionality.
            Dedicated to building innovative solutions that enhance user
            experiences and drive efficiency.
          </p>
          {/* Social Links */}
          <div className="flex gap-2 text-primary">
            {socialIcons.map((i, idx) => (
              <a
                key={idx}
                href={i.link}
                target="_blank"
                className="rounded-md border-2 p-1.5 hover:shadow-sm hover:shadow-primary text-xl md:text-2xl"
              >
                {i.icon}
              </a>
            ))}
          </div>
          {/* Button */}
          <div className="flex gap-3 mt-5">
            <button
              onClick={handlePDFDownload}
              className=" bg-linear-to-r from-secondary to-transparent text-white hover:bg-linear-to-r hover:from-secondary hover:to-primary/50 transition duration-300 rounded-md px-4 py-2 font-semibold  cursor-pointer flex items-center gap-2"
            >
              <IoMdCloudDownload /> Resume
            </button>
            <a href="tel:+8801622737988">
              <button className=" border border-secondary text-white rounded-md px-4 py-2 font-semibold hover:shadow-[0_0_5px_#7c3aed] cursor-pointer duration-300 capitalize flex items-center gap-2 ">
                <FaPhoneAlt /> contact me
              </button>
            </a>
          </div>
        </motion.div>
        {/* Profile Picture */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <figure className="md:mr-5 w-78 h-84 lg:w-100 lg:h-112.5 relative group rotate-5 hover:rotate-0 transition-all duration-600">
              <div className="absolute bg-pink-200 rounded-full rounded-bl-none px-4 py-2 z-1 -top-2 left-44 lg:left-52 opacity-0 group-hover:opacity-100 duration-300">
                <p className="font-semibold">Hello☺️</p>
              </div>
              <Image
                className="bg-linear-to-r from-secondary to-transparent pb-0 object-top rounded-[80px] object-cover border-b-5 shadow-primary shadow-lg border-paragraph"
                src="/images/me.png"
                fill
                alt="Me"
              />
              {/* Iconsss */}

              <RiTailwindCssFill className="text-[#06b6d4] absolute -top-8 -left-5 text-8xl lg:-top-12 lg:-left-7 lg:text-9xl" />
            </figure>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroller */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="pt-16 md:pt-5 lg:pt-8 mx-auto"
      >
        <Link href="#skills" className="cursor-pointer">
          <div className="relative w-20 h-28 lg:w-22 lg:h-30">
            <Image fill src="/images/scroll.png" alt="" />
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Banner;
