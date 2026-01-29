"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
}

const SectionTitle = ({ title, subtitle, icon }: SectionTitleProps) => {
  return (
    <div className="relative mb-20 flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-125 h-50 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      {icon && (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 mb-4 p-3 rounded-2xl shadow-2xl shadow-primary/20 bg-linear-to-b from-primary to-secondary"
        >
          {icon}
        </motion.div>
      )}

      <div className="relative z-10">
        {/* <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl lg:text-[10rem] font-black text-white/3 select-none whitespace-nowrap uppercase tracking-[0.2em]">
          {title}
        </h2> */}

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-center capitalize tracking-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-white to-primary/50">
            {title}
          </span>
        </h2>
      </div>

      <div className="relative z-10 mt-6 max-w-2xl mx-auto text-center">
        <p className="text-slate-400 text-base md:text-lg lg:text-xl font-light leading-relaxed px-4">
          {subtitle}
        </p>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <div className="h-px w-12 bg-linear-to-r from-transparent to-primary/50" />
        <div className="flex gap-1.5">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#1e90ff]"
          />
          <div className="w-2 h-2 rounded-full bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-slate-800" />
        </div>
        <div className="h-px w-12 bg-linear-to-l from-transparent to-primary/50" />
      </div>
    </div>
  );
};

export default SectionTitle;
