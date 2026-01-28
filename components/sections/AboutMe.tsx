"use client";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidQuoteLeft } from "react-icons/bi";
import BasicTabs from "../shared/BasicTabs";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  const socialIcons = [
    { link: "https://www.linkedin.com/in/tmfuad05/", icon: <FaLinkedinIn /> },
    { link: "https://x.com/tm_fuad05", icon: <FaXTwitter /> },
    { link: "https://www.facebook.com/nafu2308", icon: <FaFacebookF /> },
    { link: "https://github.com/tm-fuad05", icon: <FaGithub /> },
  ];

  return (
    <div id="about" className="py-20 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />

        <div className="relative w-full flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Side: Profile Image with Advanced Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full group"
          >
            <div className="relative aspect-4/5 w-full max-w-112.5 mx-auto">
              {/* Outer Glow Frame */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-[40px] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

              {/* Image Container */}
              <div className="relative h-full w-full rounded-[40px] overflow-hidden border border-white/10 bg-slate-900">
                <Image
                  src="/images/fuad.png"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  alt="Tanvir Mahmud Fuad"
                />
                {/* Overlay linear */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            <div className="space-y-4">
              <h4 className="text-primary font-mono tracking-widest uppercase text-sm">
                Introduction
              </h4>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                  Me
                </span>
              </h2>
            </div>

            {/* Tabs Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-2xl lg:min-h-80 flex flex-col">
              <BasicTabs />
            </div>

            {/* Contact & Quote Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Contact Icons */}
              <div className="space-y-4">
                <p className="text-gray-400 font-medium">Connect with me</p>
                <div className="flex gap-3">
                  {socialIcons.map((icon, idx) => (
                    <a
                      key={idx}
                      href={icon.link}
                      target="_blank"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-primary/30 text-white hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(30,144,255,0.1)] hover:shadow-primary/40"
                    >
                      <span className="text-xl">{icon.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quote Card */}
              <div className="relative group p-6 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                  <BiSolidQuoteLeft className="text-8xl rotate-180 text-primary" />
                </div>
                <BiSolidQuoteLeft className="text-2xl text-primary mb-2" />
                <p className="text-slate-300 italic font-medium relative z-10 leading-relaxed">
                  "You’re never behind — You only pick up from where you
                  paused."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
