"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  id?: string;
}

const SectionTitle = ({ title, subtitle, id }: SectionTitleProps) => {
  const sectionId = id || title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id={sectionId}
      data-section-title
      className="relative mb-14 md:mb-20 flex flex-col items-start text-left select-none w-full"
    >
      {/* 1. LAYERED TITLE CONTAINER (সবকিছু বামে অ্যালাইন করা) */}

      <h2 className="text-4xl md:text-5xl lg:text-7xl font-black capitalize tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
        {title}
      </h2>

      {/* 2. SUBTITLE (একদম বামে অ্যালাইনড) */}
      {subtitle && (
        <p className="relative z-10 mt-3 max-w-md text-paragraph text-sm sm:text-base font-normal leading-relaxed text-left">
          {subtitle}
        </p>
      )}

      {/* 3. MINIMAL DIVIDER LINE (বামে শুরু হওয়া অ্যাকসেন্ট লাইন) */}
      <div className="relative z-10 mt-5 flex items-center justify-start gap-1.5">
        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
        <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-primary to-transparent rounded-full" />
      </div>
    </motion.div>
  );
};

export default SectionTitle;
