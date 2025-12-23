"use client";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidQuoteLeft } from "react-icons/bi";
import BasicTabs from "../shared/BasicTabs";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  const socialIcons = [
    {
      link: "https://www.linkedin.com/in/tmfuad05/",
      icon: <FaLinkedinIn className="text-md" />,
    },
    {
      link: "https://x.com/tm_fuad05",
      icon: <FaXTwitter className="text-md" />,
    },
    {
      link: "https://www.facebook.com/nafu2308",
      icon: <FaFacebookF className="text-md" />,
    },
    {
      link: "https://github.com/tm-fuad05",
      icon: <FaGithub className="text-md" />,
    },
  ];

  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center px-6 md:px-10 lg:px-16"
    >
      <div className="w-full h-fit flex flex-col-reverse lg:grid lg:grid-cols-2 p-4 lg:p-6 border-2 border-main rounded-3xl gap-5 shadow-[0_0_5px_#1e90ff,0_0_12px_#1e90ff] bg-white/5 grid-section relative">
        <div className="bg-black/20 inset-0 rounded-3xl absolute z-[-1]"></div>

        {/* Profile Pic */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-100 md:h-256 lg:h-145 relative"
        >
          <Image
            src="/images/aboutme.png"
            fill
            className="rounded-3xl object-cover object-top border-2 border-gray-50/20 "
            alt=""
          />
        </motion.div>

        {/* About Me Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="capitalize flex flex-col items-start gap-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-linear-to-l from-main to-white/90 font-bold text-title capitalize">
            about me
          </h1>

          <BasicTabs />

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl text-white font-semibold mb-4">
              Contact Me
            </h3>
            <div className="flex gap-2 text-white/80">
              {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.link}
                  target="_blank"
                  className="rounded-sm text-3xl border border-main shadow-[0_0_2px_#1e90ff,0_0_2px_#1e90ff] p-1.5 hover:shadow-sm hover:bg-main/50 transition-all"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Quote */}
          <div className="relative bg-linear-to-r from-main/10 to-muted/10 border border-gray-50/10 rounded-xl p-5">
            <BiSolidQuoteLeft className="absolute text-2xl lg:text-4xl text-muted -top-2 -left-2 lg:-top-4 lg:-left-4" />
            <p className="text-paragraph font-semibold">
              You’re never behind — You only pick up from where you paused.
            </p>
            <BiSolidQuoteLeft className="absolute text-2xl lg:text-4xl text-main -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 rotate-180" />
          </div>
        </motion.div>
      </div>
    </div>
    // </div>
  );
};

export default AboutMe;
