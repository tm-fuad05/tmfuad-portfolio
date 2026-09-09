"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";

interface BlogHeaderProps {
  totalCount: number;
}

export default function BlogHeader({ totalCount }: BlogHeaderProps) {
  return (
    <div className="relative pt-28 pb-10 sm:pt-36 sm:pb-14 border-b border-white/8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-start text-left">
        {/* Back to Home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-primary transition-colors group mb-6"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Big Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black capitalize tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500  drop-shadow-sm mb-4"
        >
          Featured Articles & Insights
        </motion.h1>

        {/* Subtitle & Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-paragraph text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Deep dives into browser rendering engines, database architecture and
            modern web engineering principles.
          </motion.p>

          <span className="text-xs font-mono text-slate-400 shrink-0">
            Total Articles:{" "}
            <span className="text-primary font-bold">{totalCount}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
