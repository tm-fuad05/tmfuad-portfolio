"use client";
import SectionTitle from "../shared/SectionTitle";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";
import Tabs from "../shared/SkillsTab";
import { useState } from "react";

interface Logo {
  logo: string;
  name: string;
  category: string;
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const logos: Logo[] = [
    {
      logo: "/images/icons/html.png",
      name: "HTML",
      category: "Frontend",
    },
    {
      logo: "/images/icons/css.png",
      name: "CSS",
      category: "Frontend",
    },
    {
      logo: "/images/icons/javascript.png",
      name: "Javascript",
      category: "Frontend",
    },
    {
      logo: "/images/icons/typescript.png",
      name: "Typescript",
      category: "Frontend",
    },
    {
      logo: "/images/icons/tailwind.png",
      name: "Tailwind",
      category: "Frontend",
    },
    {
      logo: "/images/icons/react.png",
      name: "React",
      category: "Frontend",
    },
    {
      logo: "/images/icons/nextjs.png",
      name: "Next JS",
      category: "Frontend",
    },
    {
      logo: "/images/icons/motion.png",
      name: "Framer Motion",
      category: "Frontend",
    },
    {
      logo: "/images/icons/node.png",
      name: "Node.js",
      category: "Backend",
    },
    {
      logo: "/images/icons/express.png",
      name: "Express.js",
      category: "Backend",
    },
    {
      logo: "/images/icons/jwt.svg",
      name: "JWT",
      category: "Backend",
    },

    {
      logo: "/images/icons/mongodb.png",
      name: "MongoDB",
      category: "Database",
    },
    {
      logo: "/images/icons/postgresql.png",
      name: "PostgreSQL",
      category: "Database",
    },
    {
      logo: "/images/icons/firebase.png",
      name: "Firebase",
      category: "Authentication",
    },

    {
      logo: "/images/icons/nextauth.png",
      name: "NextAuth",
      category: "Authentication",
    },
    {
      logo: "/images/icons/clerk.png",
      name: "Clerk",
      category: "Authentication",
    },

    {
      logo: "/images/icons/zustand.svg",
      name: "Zustand",
      category: "State & Validation",
    },
    {
      logo: "/images/icons/zod.png",
      name: "Zod",
      category: "State & Validation",
    },
    {
      logo: "/images/icons/tanstack.png",
      name: "Tanstack",
      category: "State & Validation",
    },
    {
      logo: "/images/icons/vscode.png",
      name: "VS Code",
      category: "Tools",
    },
    {
      logo: "/images/icons/git.png",
      name: "Git",
      category: "Tools",
    },
    {
      logo: "/images/icons/github.webp",
      name: "Github",
      category: "Tools",
    },
  ];

  const filteredLogos =
    activeTab === "All"
      ? logos
      : logos.filter((logo) => logo.category === activeTab);

  const tabList: string[] = [
    "All",
    ...new Set(logos.map((tab) => tab.category)),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="skills"
      className="section flex flex-col items-center px-6 md:px-10 lg:px-16"
    >
      <SectionTitle
        title={"Skills"}
        subtitle={
          "A snapshot of the technologies I use to build robust and modern web applications."
        }
      />

      <Tabs
        tabList={tabList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="py-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4">
        {filteredLogos.map((logo, idx) => (
          <div
            key={idx}
            className={`relative group flex flex-col items-center justify-center w-35 md:w-35 py-6 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-md transition-all duration-500 ease-outhover:border-primary/50 hover:bg-primary/5 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)] overflow-hidden animate-in slide-in-from-bottom-5 fade-in`}
          >
            {/* Background Glow on Hover */}
            <div className="absolute -inset-px bg-linear-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            {/* Logo Container */}
            <figure className="relative w-12 h-12 md:w-10 md:h-10 z-10">
              <Image
                fill
                className="object-contain filter  group-hover:scale-110 transition-all duration-500 ease-in-out"
                src={logo.logo}
                alt={logo.name}
              />
            </figure>

            {/* Text Style */}
            <p className="z-10 mt-4 text-center text-xs md:text-sm font-semibold tracking-wide text-slate-400 group-hover:text-white transition-colors duration-300">
              {logo.name.toUpperCase()}
            </p>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
