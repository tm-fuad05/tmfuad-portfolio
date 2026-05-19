"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";
import { educationEntries, type EducationEntry } from "@/data/educationData";

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function TimelineBadge({ entry }: { entry: EducationEntry }) {
  if (entry.kind === "ongoing") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.25)]">
        <Sparkles className="size-3.5 shrink-0" aria-hidden />
        {entry.statusLabel ?? "Ongoing"}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
      <Calendar className="size-3.5 shrink-0 text-primary/80" aria-hidden />
      {entry.passingYear}
    </span>
  );
}

function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <motion.li variants={itemVariants} className="relative pl-14 md:pl-16">
      {/* Timeline node */}
      <div
        className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 flex size-4 -translate-x-1/2 items-center justify-center"
        aria-hidden
      >
        <span className="absolute size-4 rounded-full bg-primary/30 blur-md" />
        <span className="relative size-3 rounded-full border-2 border-primary bg-slate-950 shadow-[0_0_12px_rgba(37,99,235,0.8)] ring-6 ring-primary/15" />
      </div>

      <article className="group relative rounded-2xl border border-white/[0.08] bg-slate-950/40 p-6 md:p-8 backdrop-blur-md will-change-transform transition-all duration-500 ease-out hover:scale-[1.02] hover:border-primary/35 hover:shadow-[0_0_40px_rgba(37,99,235,0.12)]">
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col gap-4">
          <motion.div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-slate-900/60 text-primary transition-colors duration-500 group-hover:border-primary/40 group-hover:bg-primary/10">
              <GraduationCap className="size-5" aria-hidden />
            </div>
            <TimelineBadge entry={entry} />
          </motion.div>

          <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-100 md:text-xl">
            {entry.degree}
          </h3>

          <motion.div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <p className="flex items-center gap-2 text-sm text-slate-400 md:text-base">
              <GraduationCap
                className="size-4 shrink-0 text-slate-500 group-hover:text-primary/80 transition-colors"
                aria-hidden
              />
              <span className="font-medium text-slate-300">
                {entry.institution}
              </span>
            </p>
            <p className="flex items-center gap-2 text-sm text-slate-400 md:text-base">
              <MapPin
                className="size-4 shrink-0 text-slate-500 group-hover:text-primary/80 transition-colors"
                aria-hidden
              />
              {entry.location}
            </p>
          </motion.div>
        </div>
      </article>
    </motion.li>
  );
}

const Education = () => {
  return (
    <section id="education" className="scroll-mt-0">
      <SectionTitle
        title="Education"
        subtitle="Academic foundation shaping my journey in computer science and engineering."
        icon={
          <GraduationCap className="size-9 text-white md:size-10 lg:size-11" />
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section px-6 md:px-10 lg:px-16"
      >
        <div className="relative mx-auto max-w-3xl">
          {/* Global timeline accent */}
          <div
            className="pointer-events-none absolute left-3 md:left-4 inset-y-0 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/20 to-transparent"
            aria-hidden
          />

          <motion.ol
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative flex flex-col gap-8 md:gap-10"
          >
            {educationEntries.map((entry) => (
              <EducationCard key={entry.degree} entry={entry} />
            ))}
          </motion.ol>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
