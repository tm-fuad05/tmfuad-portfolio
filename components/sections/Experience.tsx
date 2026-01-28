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
      className="min-h-screen py-20 px-6 md:px-10 lg:px-16 bg-black rounded-t-[40px] rounded-b-[40px] relative"
    >
      <div className="w-full absolute inset-0 z-0">
        <SparklesCore
          id="sparkles-footer"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#1e90ff"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionTitle
          title={"Experience"}
          subtitle={
            "Take a Look at My Journey and Experience in Web Development, Where Creativity Meets Technology"
          }
        />

        {/* Expertise Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.4 } },
          }}
          viewport={{ once: true }}
        >
          {expertise.map((item, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, skewY: 20 },
                show: {
                  opacity: 1,
                  skewY: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              key={index}
            >
              {/* Main card */}

              <HoverLight
                size={250}
                color="#1e90ff"
                borderOpacity={100}
                innerOpacity={30}
                border={2}
                className="h-full"
              >
                {/* Content */}
                <div className="relative backdrop-blur-xl rounded-3xl p-7 h-full bg-[#071324] border-2 border-slate-800 lg:border-none group">
                  <div className="relative z-10">
                    {/* Icon with metallic background */}
                    <div className="mb-6 inline-flex p-4 rounded-xl bg-linear-to-br from-gray-700 via-gray-800 to-gray-900 border border-gray-600 shadow-xl text-white group-hover:shadow-gray-500/50 transition-all duration-300 group-hover:scale-110">
                      <item.icon size={30} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4 group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm lg:text-md text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
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
