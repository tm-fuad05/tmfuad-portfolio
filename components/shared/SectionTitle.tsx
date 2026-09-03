"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  id?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  icon = "",
  id,
}: SectionTitleProps) => {
  const sectionId = id || title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id={sectionId}
      className="relative mb-16 md:mb-20 flex flex-col items-center text-center will-change-transform"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-100 h-36 bg-primary/10 blur-[100px]  pointer-events-none" />

      {/* Main Title with JSX Brackets */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 md:gap-3">
        {icon && (
          <div className="p-2.5  bg-primary/10 border border-primary/20 text-primary hidden sm:flex items-center justify-center">
            {icon}
          </div>
        )}

        {/* Top Code Component Tag Badge */}
        <div className="relative z-10 mt-2 flex items-center gap-1.5 px-3 py-1  bg-white/[0.03] border border-white/10 font-mono text-xs text-slate-400 backdrop-blur-sm">
          <span className="text-primary font-semibold">&lt;Section</span>
          <span className="text-slate-500">id=</span>
          <span className="text-emerald-400">"{sectionId}"</span>
          <span className="text-primary font-semibold">/&gt;</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black capitalize tracking-tight flex items-center font-sans">
          {/* Opening Tag */}
          <span className="font-mono text-primary/50 text-2xl md:text-4xl font-light select-none mr-1">
            &lt;
          </span>

          <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-slate-100 to-slate-400">
            {title}
          </span>

          {/* Closing Tag */}
          <span className="font-mono text-primary/50 text-2xl md:text-4xl font-light select-none ml-1">
            /&gt;
          </span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="relative z-10 mt-3.5 max-w-xl mx-auto">
        <p className="text-slate-400 text-sm md:text-base font-normal leading-relaxed px-4">
          {subtitle}
        </p>
      </div>

      {/* JSX Comment Divider */}
      <div className="mt-6 flex items-center gap-3 font-mono text-xs text-slate-500 select-none">
        <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent to-primary/40" />
        <span className="text-slate-600">{`{/*`}</span>
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-1.5 h-1.5  bg-primary"
        />
        <span className="text-slate-600">{`*/}`}</span>
        <div className="h-px w-10 md:w-16 bg-linear-to-l from-transparent to-primary/40" />
      </div>
    </motion.div>
  );
};

export default SectionTitle;
