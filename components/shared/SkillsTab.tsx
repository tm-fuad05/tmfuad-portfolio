"use client";
import { motion } from "framer-motion";

export default function Tabs({
  tabList,
  activeTab,
  setActiveTab,
}: {
  tabList: string[];
  activeTab: string;
  setActiveTab(tab: string): void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
      {tabList.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
          relative px-5 py-2.5 rounded-lg text-sm md:text-base font-medium
          transition-all duration-300 border backdrop-blur-md cursor-pointer
          ${
            isActive
              ? "border-blue-500/50 text-white shadow-[0_0_10px_rgba(37,99,235,0.3)]"
              : "border-white/10  text-slate-400 hover:bg-slate-900/40 hover:border-white/20"
          }
        `}
          >
            {/* Active Gradient Background */}
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute -inset-px rounded-lg bg-linear-to-br from-primary to-secondary  shadow-lg shadow-blue-500/20"
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Glossy Overlay (Static or Hover) */}
            <div className="absolute -inset-px rounded-lg bg-linear-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />

            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
}
