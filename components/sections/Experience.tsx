"use client";

import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";
import { expertise } from "@/data/experienceData";
import HoverLight from "../ui/hover-spotlight";
import { SparklesCore } from "../ui/sparkles";

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen py-24 px-6 md:px-10 lg:px-16 bg-black rounded-t-[60px] rounded-b-[60px] relative overflow-hidden"
    >
      <div className="w-full absolute inset-0 z-0">
        <SparklesCore
          id="experience-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={30}
          className="w-full h-full opacity-50"
          particleColor="#3b82f6"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title={"Experience"}
          subtitle="Merging cutting-edge technology with high-performance engineering."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          viewport={{ once: true }}
        >
          {expertise.map((item, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, skewY: 20, filter: "blur(10px)" },
                show: {
                  opacity: 1,
                  skewY: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.6 },
                },
              }}
              key={index}
              className="h-full relative"
            >
              <HoverLight
                size={250}
                color="var(--primary)"
                borderOpacity={90}
                innerOpacity={20}
                border={2}
                className="h-full rounded-3xl"
              >
                <div className="group relative h-full bg-slate-950 backdrop-blur-2xl rounded-3xl p-8 border border-white/5 flex flex-col items-center text-center transition-all duration-500">
                  <div className="relative z-10">
                    <div className="mb-8 relative inline-block">
                      <div className="absolute inset-0 bg-blue-600/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150" />
                      <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-slate-900 border border-blue-500/30 text-blue-400 group-hover:text-white group-hover:border-blue-400 transition-all duration-500">
                        <item.icon size={32} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-slate-100 mb-4 tracking-tight uppercase group-hover:tracking-[2px] transition-all duration-500">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-10 w-full flex items-center justify-center gap-2">
                    <div className="h-px w-10 bg-slate-800 group-hover:bg-blue-500 transition-all" />
                    <span className="text-[10px] text-slate-600 font-mono group-hover:text-blue-400 tracking-tighter transition-all">
                      {"< 0x01 / expertise >"}
                    </span>
                    <div className="h-px w-10 bg-slate-800 group-hover:bg-blue-500 transition-all" />
                  </div>
                </div>
              </HoverLight>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
