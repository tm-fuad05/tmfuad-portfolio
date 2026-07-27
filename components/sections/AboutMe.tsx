"use client";

import { useState } from "react";
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
  FolderOpen,
  ChevronDown,
  Layers,
  Activity,
  Sparkles,
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

        {/* UNIFIED STUDIO WORKBENCH SHELL WITH GRADIENT SHIMMER BORDER */}
        <div className="relative group p-[1px] rounded-3xl bg-gradient-to-b from-white/20 via-primary/30 to-purple-500/20 shadow-[0_0_50px_rgba(30,144,255,0.15)] transition-all duration-700 hover:shadow-[0_0_80px_rgba(30,144,255,0.25)]">
          <div className="relative w-full rounded-[23px] bg-[#12131a]/95 backdrop-blur-2xl overflow-hidden font-geistMono">
            {/* Unified Studio Top Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0e0f15] border-b border-white/10 relative z-10">
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
                <Terminal size={14} className="text-primary animate-pulse" />
                <span className="hidden md:inline">Status:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Active System
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-all border border-white/10 hover:border-primary/50 shadow-sm active:scale-95 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* MAIN WORKBENCH GRID (Left Explorer + Right Editor) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-115">
              {/* LEFT PANEL: Interactive File Tree & Tech Status (4 cols) */}
              <div className="hidden lg:col-span-4 bg-[#161722]/80 border-b lg:border-b-0 lg:border-r border-white/10 p-4 sm:p-5 lg:flex lg:flex-col justify-between gap-6 relative">
                <div className="space-y-4">
                  {/* Explorer Header */}
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono tracking-wider uppercase border-b border-white/10 pb-2.5">
                    <span className="flex items-center gap-2 text-slate-200">
                      <Layers size={14} className="text-primary" /> Explorer
                    </span>
                    <span className="text-[10px] text-slate-500 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      src/content
                    </span>
                  </div>

                  {/* File Tree List */}
                  <div className="space-y-1 font-mono text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400 py-1 px-2">
                      <ChevronDown size={14} />
                      <FolderOpen size={14} className="text-amber-400" />
                      <span className="text-slate-300 font-medium">
                        content
                      </span>
                    </div>

                    <div className="pl-6 space-y-1.5">
                      {/* File 1: profile.ts */}
                      <button
                        onClick={() => setActiveFile("profile")}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer border ${
                          activeFile === "profile"
                            ? "bg-primary/20 border-primary/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] font-semibold"
                            : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <FileCode2 size={15} className="text-blue-400" />
                          <span>profile.ts</span>
                        </div>
                        {activeFile === "profile" && (
                          <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_#3b82f6]" />
                        )}
                      </button>

                      {/* File 2: expertise.ts */}
                      <button
                        onClick={() => setActiveFile("expertise")}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer border ${
                          activeFile === "expertise"
                            ? "bg-purple-500/20 border-purple-500/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] font-semibold"
                            : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <FileCode2 size={15} className="text-purple-400" />
                          <span>expertise.ts</span>
                        </div>
                        {activeFile === "expertise" && (
                          <span className="size-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Integrated Mini System Radar Card with Neon Accent */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent border border-white/10 space-y-3 shadow-inner relative overflow-hidden group/radar">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none group-hover/radar:scale-150 transition-transform duration-500" />

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-200 font-semibold flex items-center gap-2">
                      <Activity
                        size={14}
                        className="text-primary animate-pulse"
                      />{" "}
                      System Metrics
                    </span>
                    <span className="text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                      100% Type-Safe
                    </span>
                  </div>

                  {/* Glowing Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[11px] font-mono shadow-[0_0_10px_rgba(59,130,246,0.15)]">
                      Next.js 15
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                      TypeScript
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                      Prisma
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL: Code Editor Area (8 cols) */}
              <div className="lg:col-span-8 flex flex-col justify-between bg-[#13141f]/90 relative">
                <div>
                  {/* Editor Tabs Bar */}
                  <div className="flex bg-[#0e0f15]/90 border-b border-white/10 overflow-x-auto">
                    <button
                      onClick={() => setActiveFile("profile")}
                      className={`relative flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm transition-colors cursor-pointer border-r border-white/10 ${
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
                      className={`relative flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm transition-colors cursor-pointer border-r border-white/10 ${
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
                  <div className="flex items-center gap-1.5 px-6 py-2 text-[11px] text-slate-500 border-b border-white/5 font-mono bg-white/[0.01]">
                    <span>src</span>
                    <ChevronRight size={12} className="text-slate-600" />
                    <span>content</span>
                    <ChevronRight size={12} className="text-slate-600" />
                    <span className="text-primary font-medium">
                      {activeFile}.ts
                    </span>
                  </div>

                  {/* Code Area with High-Contrast Syntax Colors */}
                  <div className="p-4 sm:p-6 text-slate-300 leading-relaxed font-mono text-xs sm:text-sm h-92 lg:h-87.5 overflow-x-auto relative">
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
                            <div className="flex flex-col text-slate-600 select-none pr-4 border-r border-white/10 text-right">
                              {Array.from({ length: 11 }).map((_, i) => (
                                <span key={i}>{i + 1}</span>
                              ))}
                            </div>
                            {/* Code Content */}
                            <div className="pl-4 sm:pl-6 space-y-1">
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
                            <div className="flex flex-col text-slate-600 select-none pr-4 border-r border-white/10 text-right">
                              {Array.from({ length: 11 }).map((_, i) => (
                                <span key={i}>{i + 1}</span>
                              ))}
                            </div>
                            {/* Code Content */}
                            <div className="pl-4 sm:pl-6 space-y-1">
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

                {/* IDE Bottom Status Bar */}
                <div className="flex items-center justify-between px-5 py-2.5 bg-[#0e0f15] border-t border-white/10 text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-primary font-medium">
                      <GitBranch size={13} /> main*
                    </span>
                    <span className="hidden sm:inline-block text-slate-500">
                      0 errors, 0 warnings
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block text-slate-500">
                      UTF-8
                    </span>
                    <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                      <Cpu size={13} /> TypeScript React
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* INTEGRATED FOOTER CONTROL BAR (Socials + Dev Quote) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 sm:p-6 bg-[#0e0f15]/95 border-t border-white/10 items-center">
              {/* Social Links */}
              <div className="md:col-span-6 flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                  Connect:
                </span>
                <div className="flex gap-2.5">
                  {socialIcons.map((icon, idx) => (
                    <a
                      key={idx}
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
                    >
                      <span className="text-lg">{icon.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Dev Quote Card */}
              <div className="md:col-span-6 flex items-center gap-3 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 px-4 py-3 rounded-2xl shadow-inner relative overflow-hidden group/quote">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover/quote:shadow-[0_0_10px_#3b82f6] transition-all" />
                <BiSolidQuoteLeft className="text-xl text-primary shrink-0 ml-1" />
                <p className="text-slate-300 italic font-sans text-xs leading-relaxed">
                  "You’re never behind — You only pick up from where you
                  paused."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
