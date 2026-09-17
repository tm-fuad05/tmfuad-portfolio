import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Copy,
  Cpu,
  FileCode2,
  GitBranch,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useState } from "react";

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

export default function CodeBlock({
  isIdeActive,
  handleIdeClick,
}: {
  isIdeActive: boolean;
  handleIdeClick: () => void;
}) {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="lg:col-span-8 flex flex-col h-full transform-gpu"
    >
      <div
        onClick={handleIdeClick}
        className={`relative group p-[1px]  bg-gradient-to-b from-white/20 via-primary/30 to-purple-500/20 shadow-[0_0_30px_rgba(30,144,255,0.12)] transition-shadow duration-300 h-full cursor-pointer ${
          isIdeActive
            ? "shadow-[0_0_50px_rgba(30,144,255,0.2)]"
            : "hover:shadow-[0_0_50px_rgba(30,144,255,0.2)]"
        }`}
      >
        <div className="relative w-full h-full -[23px] bg-[#12131a]/95 backdrop-blur-md overflow-hidden font-geistMono flex flex-col justify-between">
          <div>
            {/* IDE Top Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-[#0e0f15] border-b border-white/10 relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3  bg-[#ff5f56] shadow-[0_0_8px_#ff5f56]" />
                  <div className="w-3 h-3  bg-[#ffbd2e] shadow-[0_0_8px_#ffbd2e]" />
                  <div className="w-3 h-3  bg-[#27c93f] shadow-[0_0_8px_#27c93f]" />
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-primary/20 px-3 py-1  transition-all border border-white/10 hover:border-primary/50 shadow-sm active:scale-95 cursor-pointer"
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

            {/* IDE File Selector Tabs */}
            <div className="flex bg-[#0e0f15]/90 border-b border-white/10 overflow-x-auto">
              <button
                onClick={() => setActiveFile("profile")}
                className={`relative flex items-center gap-2 px-5 py-3 text-xs sm:text-sm transition-colors cursor-pointer border-r border-white/10 ${
                  activeFile === "profile"
                    ? "text-white bg-[#13141f] font-medium"
                    : "text-paragraph hover:text-slate-200"
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
                    : "text-paragraph hover:text-slate-200"
                }`}
              >
                <FileCode2 size={15} className="text-purple-400" />
                <span>expertise.ts</span>
                {activeFile === "expertise" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-purple-500 via-pink-500 to-indigo-400 shadow-[0_0_12px_#c084fc]"
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
              <span className="text-primary font-medium">{activeFile}.ts</span>
            </div>

            {/* Code Editor Body - Fixed Height Matching Expertise Tab Content */}
            <div className="p-4 sm:p-5 text-slate-300 leading-relaxed font-mono text-xs sm:text-sm h-[385px] md:h-[355px] overflow-x-auto relative scrollbar-none">
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
                          <span className="text-[#4ade80]">"Next.js"</span>,{" "}
                          <span className="text-[#4ade80]">"TypeScript"</span>
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
                          <span className="text-[#4ade80]">"Tailwind CSS"</span>
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
                          <span className="text-[#38bdf8]">coreStack</span>: [
                          <span className="text-[#4ade80]">"Next.js"</span>,{" "}
                          <span className="text-[#4ade80]">"React"</span>,{" "}
                          <span className="text-[#4ade80]">"TypeScript"</span>
                          ],
                        </p>
                        <p className="pl-4">
                          <span className="text-[#38bdf8]">backendAndDB</span>:
                          [
                        </p>
                        <p className="pl-8 text-[#4ade80]!">
                          "PostgreSQL (Prisma)", "MongoDB", "Node.js"
                        </p>
                        <p className="pl-4">],</p>
                        <p className="pl-4">
                          <span className="text-[#38bdf8]">
                            authAndSecurity
                          </span>
                          : [
                        </p>
                        <p className="pl-8 text-[#4ade80]!">
                          "Clerk", "NextAuth", "JWT", "Firebase"
                        </p>
                        <p className="pl-4">],</p>
                        <p className="pl-4">
                          <span className="text-[#38bdf8]">
                            reliabilityAndState
                          </span>
                          : [
                        </p>
                        <p className="pl-8 text-[#4ade80]!">
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3 bg-[#0e0f15] border-t border-white/10 text-[11px] text-paragraph font-mono">
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
  );
}
