import { EducationEntry } from "@/data/educationData";
import { AnimatePresence, motion } from "framer-motion";
import {
  BuildingIcon,
  CalendarIcon,
  GraduationCapIcon,
  MapPinIcon,
} from "lucide-react";

export default function TabContent({
  selectedIndex,
  activeEntry,
}: {
  selectedIndex: number;
  activeEntry: EducationEntry;
}) {
  return (
    <div className="lg:col-span-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -20, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="relative  bg-[#16161e]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute -top-20 -right-20 size-48 bg-primary/15  blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Status / Year Badge */}
            <div className="flex items-center justify-between">
              {activeEntry.kind === "ongoing" ? (
                <span className="inline-flex items-center gap-2  border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono font-medium text-blue-400">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping  bg-blue-400 opacity-75" />
                    <span className="relative inline-flex size-2  bg-blue-500" />
                  </span>
                  {activeEntry.statusLabel ?? "Ongoing Study"}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5  border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-slate-300">
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
              <div className="p-4  bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase flex items-center gap-1">
                  <BuildingIcon size={12} className="text-primary" />{" "}
                  Institution
                </span>
                <p className="text-slate-200 font-medium text-sm sm:text-base">
                  {activeEntry.institution}
                </p>
              </div>

              <div className="p-4  bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase flex items-center gap-1">
                  <MapPinIcon size={12} className="text-primary" /> Location
                </span>
                <p className="text-slate-200 font-medium text-sm sm:text-base">
                  {activeEntry.location}
                </p>
              </div>
            </div>

            {/* Highlights / Academic Notes Banner */}
            <div className="p-4  bg-primary/10 border border-primary/20 flex items-start gap-3">
              <GraduationCapIcon
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
  );
}
