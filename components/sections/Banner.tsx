"use client";
import Image from "next/image";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { MdRocketLaunch } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { IoMdCloudDownload } from "react-icons/io";
// import { Link as ScrollLink } from "react-scroll";
import { ReactNode } from "react";
import Link from "next/link";
import { DynamicSpotlight } from "../ui/dynamic-spotlight";

const Banner = () => {
  // Download Resume
  const handlePDFDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  interface SocialIcons {
    link: string;
    icon: ReactNode;
  }

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
    <DynamicSpotlight
      radius={{ sm: 500, md: 400, lg: 700 }}
      darkness={0.95}
      revealOpacity={0.7}
      initialPos={{ x: 50, y: 0 }}
      isPersist
      id="home"
      className=" min-h-screen pb-22 grid-background bg-[url('/images/bg.avif')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute w-full h-30 bg-linear-to-t from-slate-950 to-transparent -bottom-22" />

      <div className="px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center md:items-start lg:items-center gap-20 md:gap-8 pt-25 md:pt-30 lg:pt-34 z-2">
        {/* Content  */}
        <motion.div
          className="flex flex-col items-center md:items-start gap-3 md:w-7/12"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <h5 className="text-slate-100 font-medium text-[15px] md:text-lg lg:text-xl ">
              Hello, I'm Md. Tanvir Mahmud{" "}
              <span className="bg-linear-to-r from-secondary backdrop-blur text-white py-1 px-3 rounded-md rounded-bl-none ">
                Fuad
              </span>
            </h5>
            <RiReactjsFill
              className=" text-[#61DBFB] animate-[spin_4s_linear_infinite]"
              size={30}
            />
          </div>
          {/* Title */}
          <div>
            <h1 className="bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-500 bg-opacity-50 capitalize text-center md:text-left font-extrabold text-4xl md:text-5xl lg:text-7xl h-18.75 md:h-25 lg:h-36">
              <Typewriter
                words={["FrontEnd developer", "MERN stack specialist"]}
                loop={0}
                typeSpeed={60}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </h1>
          </div>

          <p className="text-paragraph text-sm lg:text-[16px] text-center md:text-left md:pr-5">
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
              className=" bg-linear-to-r from-secondary to-transparent text-white hover:bg-linear-to-r hover:from-secondary hover:to-primary transition duration-300 rounded-md px-4 py-2 font-semibold  cursor-pointer flex items-center gap-2"
            >
              <IoMdCloudDownload /> Resume
            </button>
            <Link href="#projects">
              <button className=" border border-primary text-white rounded-md px-4 py-2 font-semibold hover:shadow-sm hover:shadow-primary cursor-pointer duration-300 capitalize flex items-center gap-2 ">
                <MdRocketLaunch /> view projects
              </button>
            </Link>
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
            <figure className="md:mr-5 w-70 h-76 lg:w-100 lg:h-112.5 relative group rotate-5 hover:rotate-0 transition-all duration-600 bg-linear-to-r from-secondary to-primary/10 rounded-[80px]">
              <div className="absolute bg-primary/90 rounded-full rounded-bl-none px-4 py-2 z-1 -top-2 left-44 lg:left-52 opacity-0 text-white group-hover:opacity-100 duration-300">
                <p className="font-semibold">Hello☺️</p>
              </div>
              <Image
                className=" pb-0 object-top  object-cover border-b-5 shadow-primary rounded-[80px] shadow-lg border-paragraph"
                src="/images/me.png"
                fill
                alt="Me"
              />
              {/* Overlay */}
              <div className="absolute inset-0  inset-y-1 rounded-[80px] bg-linear-to-t from-black/50 via-transparent to-transparent" />

              <RiTailwindCssFill className="text-[#06b6d4] absolute -top-8 -left-5 text-8xl lg:-top-12 lg:-left-7 lg:text-9xl" />
            </figure>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroller */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="pt-16 md:pt-5 lg:pt-8 "
      >
        <Link href="#skills" className="cursor-pointer">
          <div className="relative w-20 h-28 lg:w-22 lg:h-30 mx-auto">
            <Image fill src="/images/scroll.png" alt="" />
          </div>
        </Link>
      </motion.div>
    </DynamicSpotlight>
  );
};

export default Banner;
