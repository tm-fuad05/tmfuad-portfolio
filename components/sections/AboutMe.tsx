"use client";

import { useState } from "react";
import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { socialIcons } from "./Banner";
import {
  FileCode2,
  Copy,
  Check,
  GitBranch,
  ChevronRight,
  Terminal,
  Cpu,
  Sparkles,
  BadgeCheck,
  Layers,
  Activity,
} from "lucide-react";
import SectionTitle from "../shared/SectionTitle";

const profileCode = `export const developer = {
  name: "Tanvir Mahmud Fuad",
  role: "Software Developer",
  stack: ["MERN", "Next.js", "TypeScript"],
  databaseTransition: {
    from: "NoSQL (MongoDB)",
    to: "PostgreSQL with Prisma ORM"
  },
  focus: "Type-safe, scalable code & robust backends",
  styling: "Tailwind CSS"
};`;

const expertiseCode = `export const expertise = {
  coreStack: ["Next.js", "React", "TypeScript"],
  backendAndDB: ["PostgreSQL (Prisma)", "MongoDB", "Node.js"],
  authAndSecurity: ["Clerk", "NextAuth", "JWT", "Firebase"],
  reliabilityAndState: ["Zod", "TanStack Query", "Zustand"]
};`;

const AboutMe = () => {
  const [activeFile, setActiveFile] = useState<"profile" | "expertise">(
    "profile",
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = activeFile === "profile" ? profileCode : expertiseCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="about"
      className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden relative"
    >
      {/* Dynamic Animated Ambient Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/4 left-10 size-96 rounded-full bg-primary/25 blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-1/4 right-10 size-96 rounded-full bg-purple-600/20 blur-[150px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionTitle
          title="About Me"
          subtitle="Architecting Scalable Systems & Type-Safe Web Applications"
        />

        {/* SIDE-BY-SIDE GRID CONTAINER (Left: Profile Image UI | Right: Streamlined Code Plate) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT COLUMN: Profile Image with Premium UI Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col h-full"
          >
            {/* Interactive Image Frame with Responsive Aspect Ratio & Offset Border */}
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full group/img pr-2 pb-2 sm:pr-3.5 sm:pb-3.5">
              {/* Offset Decorative Border Frame (Closer on Small Devices to Prevent Margin Overflow) */}
              <div className="absolute inset-0 translate-x-2 translate-y-3 sm:translate-x-3.5 sm:translate-y-3.5 rounded-2xl border-2 border-primary/60 group-hover/img:translate-x-0.5 group-hover/img:translate-y-0.5 sm:group-hover/img:translate-x-1 sm:group-hover/img:translate-y-1 group-hover/img:border-primary shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-500 ease-out pointer-events-none z-0" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden z-10 border border-white/10 shadow-2xl">
                {/* Profile Image */}
                <Image
                  src="/images/about_me.webp"
                  alt="Tanvir Mahmud Fuad"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 35vw"
                  className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                  priority
                />

                {/* Bottom Black Gradient Overlay containing Dev Quote */}
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/90 to-transparent pt-12 sm:pt-16 pb-4 sm:pb-5 px-4 sm:px-5 flex items-center gap-2.5 sm:gap-3">
                  <div className="w-1 self-stretch bg-primary rounded-full shrink-0 shadow-[0_0_10px_#3b82f6]" />
                  <BiSolidQuoteLeft className="text-lg sm:text-2xl text-primary shrink-0" />
                  <p className="text-slate-200 italic font-sans text-[13px] sm:text-[15px] leading-relaxed drop-shadow">
                    "You’re never behind — You only pick up from where you
                    paused."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Streamlined IDE Code Workbench */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 flex flex-col h-full"
          >
            <div className="relative group p-[1px] rounded-3xl bg-gradient-to-b from-white/20 via-primary/30 to-purple-500/20 shadow-[0_0_50px_rgba(30,144,255,0.15)] transition-all duration-700 hover:shadow-[0_0_80px_rgba(30,144,255,0.25)] h-full">
              <div className="relative w-full h-full rounded-[23px] bg-[#12131a]/95 backdrop-blur-2xl overflow-hidden font-geistMono flex flex-col justify-between">
                <div>
                  {/* IDE Top Header Bar */}
                  <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-[#0e0f15] border-b border-white/10 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_#27c93f]" />
                      </div>
                      <span className="hidden sm:flex items-center gap-2 text-xs font-sans text-slate-400 border-l border-white/10 pl-3">
                        <Sparkles
                          size={13}
                          className="text-amber-400 animate-pulse"
                        />
                        tanvir-studio — workspace v2.0
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-300 text-xs font-sans">
                      <Terminal
                        size={14}
                        className="text-primary animate-pulse"
                      />
                      <span className="hidden sm:inline">Status:</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Active System
                      </span>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-primary/20 px-3 py-1 rounded-lg transition-all border border-white/10 hover:border-primary/50 shadow-sm active:scale-95 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-emerald-400" />
                          <span className="text-emerald-400 font-medium">
                            Copied
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* IDE File Selector Tabs */}
                  <div className="flex bg-[#0e0f15]/90 border-b border-white/10 overflow-x-auto">
                    <button
                      onClick={() => setActiveFile("profile")}
                      className={`relative flex items-center gap-2 px-5 py-3 text-xs sm:text-sm transition-colors cursor-pointer border-r border-white/10 ${
                        activeFile === "profile"
                          ? "text-white bg-[#13141f] font-medium"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <FileCode2 size={15} className="text-blue-400" />
                      <span>profile.ts</span>
                      {activeFile === "profile" && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 via-primary to-cyan-400 shadow-[0_0_12px_#3b82f6]"
                        />
                      )}
                    </button>

                    <button
                      onClick={() => setActiveFile("expertise")}
                      className={`relative flex items-center gap-2 px-5 py-3 text-xs sm:text-sm transition-colors cursor-pointer border-r border-white/10 ${
                        activeFile === "expertise"
                          ? "text-white bg-[#13141f] font-medium"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <FileCode2 size={15} className="text-purple-400" />
                      <span>expertise.ts</span>
                      {activeFile === "expertise" && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-400 shadow-[0_0_12px_#c084fc]"
                        />
                      )}
                    </button>
                  </div>

                  {/* Breadcrumb Path */}
                  <div className="flex items-center gap-1.5 px-5 py-2 text-[11px] text-slate-500 border-b border-white/5 font-mono bg-white/[0.01]">
                    <span>src</span>
                    <ChevronRight size={12} className="text-slate-600" />
                    <span>content</span>
                    <ChevronRight size={12} className="text-slate-600" />
                    <span className="text-primary font-medium">
                      {activeFile}.ts
                    </span>
                  </div>

                  {/* Code Editor Body - Fixed Height Matching Expertise Tab Content */}
                  <div className="p-4 sm:p-5 text-slate-300 leading-relaxed font-mono text-xs sm:text-sm h-[370px] md:h-[355px] overflow-x-auto relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFile}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {activeFile === "profile" ? (
                          <div className="flex">
                            {/* Line Numbers */}
                            <div className="flex flex-col text-slate-600 select-none pr-3 border-r border-white/10 text-right">
                              {Array.from({ length: 11 }).map((_, i) => (
                                <span key={i}>{i + 1}</span>
                              ))}
                            </div>
                            {/* Code Content */}
                            <div className="pl-3 sm:pl-5 space-y-1">
                              <p>
                                <span className="text-[#c084fc] font-semibold">
                                  export const
                                </span>{" "}
                                <span className="text-[#60a5fa] font-bold">
                                  developer
                                </span>{" "}
                                = {"{"}
                              </p>
                              <p className="pl-4">
                                <span className="text-[#38bdf8]">name</span>:{" "}
                                <span className="text-[#4ade80]">
                                  "Tanvir Mahmud Fuad"
                                </span>
                                ,
                              </p>
                              <p className="pl-4">
                                <span className="text-[#38bdf8]">role</span>:{" "}
                                <span className="text-[#4ade80]">
                                  "Software Developer"
                                </span>
                                ,
                              </p>
                              <p className="pl-4">
                                <span className="text-[#38bdf8]">stack</span>: [
                                <span className="text-[#4ade80]">"MERN"</span>,{" "}
                                <span className="text-[#4ade80]">
                                  "Next.js"
                                </span>
                                ,{" "}
                                <span className="text-[#4ade80]">
                                  "TypeScript"
                                </span>
                                ],
                              </p>
                              <p className="pl-4">
                                <span className="text-[#38bdf8]">
                                  databaseTransition
                                </span>
                                : {"{"}
                              </p>
                              <p className="pl-8">
                                <span className="text-[#38bdf8]">from</span>:{" "}
                                <span className="text-[#4ade80]">
                                  "NoSQL (MongoDB)"
                                </span>
                                ,
                              </p>
                              <p className="pl-8">
                                <span className="text-[#38bdf8]">to</span>:{" "}
                                <span className="text-[#4ade80]">
                                  "PostgreSQL with Prisma ORM"
                                </span>
                              </p>
                              <p className="pl-4">{"}"},</p>
                              <p className="pl-4">
                                <span className="text-[#38bdf8]">focus</span>:{" "}
                                <span className="text-[#4ade80]">
                                  "Type-safe, scalable code & robust backends"
                                </span>
                                ,
                              </p>
                              <p className="pl-4">
                                <span className="text-[#38bdf8]">styling</span>:{" "}
                                <span className="text-[#4ade80]">
                                  "Tailwind CSS"
                                </span>
                              </p>
                              <p>{"};"}</p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex">
                            {/* Line Numbers */}
                            <div className="flex flex-col text-slate-600 select-none pr-3 border-r border-white/10 text-right">
                              {Array.from({ length: 12 }).map((_, i) => (
                                <span key={i}>{i + 1}</span>
                              ))}
                            </div>
                            {/* Code Content */}
                            <div className="pl-3 sm:pl-5 space-y-1">
                              <p>
                                <span className="text-[#c084fc] font-semibold">
                                  export const
                                </span>{" "}
                                <span className="text-[#c084fc] font-bold">
                                  expertise
                                </span>{" "}
                                = {"{"}
                              </p>
                              <p className="pl-4">
                                <span className="text-[#38bdf8]">
                                  coreStack
                                </span>
                                : [
                                <span className="text-[#4ade80]">
                                  "Next.js"
                                </span>
                                ,{" "}
                                <span className="text-[#4ade80]">"React"</span>,{" "}
                                <span className="text-[#4ade80]">
                                  "TypeScript"
                                </span>
                                ],
                              </p>
                              <p className="pl-4">
                                <span className="text-[#38bdf8]">
                                  backendAndDB
                                </span>
                                : [
                              </p>
                              <p className="pl-8 text-[#4ade80]">
                                "PostgreSQL (Prisma)", "MongoDB", "Node.js"
                              </p>
                              <p className="pl-4">],</p>
                              <p className="pl-4">
                                <span className="text-[#38bdf8]">
                                  authAndSecurity
                                </span>
                                : [
                              </p>
                              <p className="pl-8 text-[#4ade80]">
                                "Clerk", "NextAuth", "JWT", "Firebase"
                              </p>
                              <p className="pl-4">],</p>
                              <p className="pl-4">
                                <span className="text-[#38bdf8]">
                                  reliabilityAndState
                                </span>
                                : [
                              </p>
                              <p className="pl-8 text-[#4ade80]">
                                "Zod", "TanStack Query", "Zustand"
                              </p>
                              <p className="pl-4">]</p>
                              <p>{"};"}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* IDE Bottom Status & Social Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3 bg-[#0e0f15] border-t border-white/10 text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-primary font-medium">
                      <GitBranch size={13} /> main*
                    </span>
                    <span className="text-slate-500">0 errors, 0 warnings</span>
                  </div>

                  <div className="hidden md:flex items-center gap-4">
                    <span className="text-slate-500">UTF-8</span>
                    <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                      <Cpu size={13} /> TypeScript React
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
