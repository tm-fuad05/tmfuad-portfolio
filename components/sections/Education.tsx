"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  GraduationCap as GradIcon,
  MapPin as MapPinIcon,
  Sparkles as SparklesIcon,
  ChevronRight as ChevronIcon,
  Building2 as BuildingIcon,
} from "lucide-react";
import SectionTitle from "../shared/SectionTitle";
import { educationEntries, type EducationEntry } from "@/data/educationData";

const Education = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeEntry = educationEntries[selectedIndex] || educationEntries[0];

  return (
    <section id="education" className="scroll-mt-10 relative">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-primary/10 blur-[140px]" />

      <SectionTitle
        title="Education"
        subtitle="Academic foundation shaping my expertise in computer science and software engineering."
        icon={<GradIcon className="size-9 text-white md:size-10 lg:size-11" />}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mt-10">
        {/* UNIFIED MILESTONE INSPECTOR SHELL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT: Milestone Selector Tabs (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1 px-1">
              // Select Milestone
            </p>

            {educationEntries.map((entry, idx) => {
              const isSelected = selectedIndex === idx;
              const isOngoing = entry.kind === "ongoing";

              return (
                <button
                  key={entry.degree || idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 relative overflow-hidden flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? "bg-[#16161e] border-primary/50 text-white shadow-[0_0_25px_rgba(30,144,255,0.15)] scale-[1.02]"
                      : "bg-[#16161e]/50 border-white/5 text-slate-400 hover:bg-[#16161e]/80 hover:border-white/10 hover:text-slate-200"
                  }`}
                >
                  {/* Selected Active Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeMilestoneIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-blue-400"
                    />
                  )}

                  <div className="flex items-center gap-3.5 pl-2">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isSelected ? "text-primary" : "text-slate-600"
                      }`}
                    >
                      0{idx + 1}.
                    </span>

                    <div>
                      <h4 className="font-bold text-sm sm:text-base line-clamp-1">
                        {entry.degree}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {isOngoing
                          ? (entry.statusLabel ?? "Ongoing")
                          : entry.passingYear}
                      </p>
                    </div>
                  </div>

                  <ChevronIcon
                    size={16}
                    className={`transition-transform duration-300 ${
                      isSelected
                        ? "text-primary translate-x-1"
                        : "text-slate-600 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Detail Display Panel (8 Cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative rounded-3xl bg-[#16161e]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className="absolute -top-20 -right-20 size-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Status / Year Badge */}
                  <div className="flex items-center justify-between">
                    {activeEntry.kind === "ongoing" ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono font-medium text-blue-400">
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex size-2 rounded-full bg-blue-500" />
                        </span>
                        {activeEntry.statusLabel ?? "Ongoing Study"}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-slate-300">
                        <CalendarIcon size={13} className="text-primary" />
                        Passing Year: {activeEntry.passingYear}
                      </span>
                    )}
                  </div>

                  {/* Degree Name */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                      {activeEntry.degree}
                    </h3>
                  </div>

                  {/* Institution Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-[11px] font-mono text-slate-500 uppercase flex items-center gap-1">
                        <BuildingIcon size={12} className="text-primary" />{" "}
                        Institution
                      </span>
                      <p className="text-slate-200 font-medium text-sm sm:text-base">
                        {activeEntry.institution}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-[11px] font-mono text-slate-500 uppercase flex items-center gap-1">
                        <MapPinIcon size={12} className="text-primary" />{" "}
                        Location
                      </span>
                      <p className="text-slate-200 font-medium text-sm sm:text-base">
                        {activeEntry.location}
                      </p>
                    </div>
                  </div>

                  {/* Highlights / Academic Notes Banner */}
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-3">
                    <GradIcon
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Focused on building a strong foundation in core software
                      engineering principles, algorithms, and practical web
                      architecture.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
