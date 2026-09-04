import { educationEntries } from "@/data/educationData";
import { motion } from "framer-motion";
import { ChevronUpIcon } from "lucide-react";

export default function Tabs({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}) {
  return (
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
            className={`w-full text-left p-4 sm:p-5  transition-all duration-300 relative overflow-hidden flex items-center justify-between border cursor-pointer ${
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

            <ChevronUpIcon
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
  );
}
