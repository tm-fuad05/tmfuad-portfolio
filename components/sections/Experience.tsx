"use client";

import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";
import { expertise } from "@/data/experienceData";

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen py-20 px-6 md:px-10 lg:px-16  bg-slate-950/40 rounded-t-[40px] rounded-b-[40px]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionTitle
          title={"Experience"}
          subtitle={
            "Take a Look at My Journey and Experience in Web Development, Where Creativity Meets Technology"
          }
        />

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={index}
              className="group relative"
            >
              {/* Main card */}
              <div className="relative bg-linear-to-br from-gray-500/30  to-primary/8 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 overflow-hidden transition-all duration-500 group-hover:border-gray-500 ">
                {/* Metallic shine effect */}
                <div
                  className="absolute inset-0 bg-linear-to-tr from-transparent via-primary-100/20
               to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with metallic background */}
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-linear-to-br from-gray-700 via-gray-800 to-gray-900 border border-gray-600 shadow-xl group-hover:shadow-gray-500/50 transition-all duration-300 group-hover:scale-110">
                    {/* Icon glossy overlay */}

                    <div className="relative text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                      <item.icon size={30} />
                    </div>
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

                {/* Bottom metallic edge */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-500 to-transparent opacity-50"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
