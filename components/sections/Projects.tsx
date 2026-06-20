"use client";
import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { projectCards } from "../../data/projectData";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { LuCircleFadingArrowUp } from "react-icons/lu";

const Projects = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="scroll-mt-0">
      <SectionTitle
        title={"projects"}
        subtitle={
          "Explore My Projects and Discover How I Transform Ideas into Functional, Impactful Web Solutions"
        }
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section flex flex-col items-center"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-6
        md:px-10 lg:px-16"
        >
          {projectCards.map((card) => (
            <div
              key={card.id}
              className="border border-[2px] border-paragraph h-fit rounded-3xl flex flex-col gap-2 hover:shadow-xl hover:shadow-primary transition-all duration-400 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative group-hover:scale-107 duration-300">
                <img className="pb-2 rounded-t-3xl" src={card.image} alt="" />
                {card?.processing && (
                  <p className="absolute bottom-2 bg-green-800 inset-x-px pl-2 pt-1 text-sm text-white font-medium text-center">
                    In Development
                  </p>
                )}
              </div>

              {/* Content */}
              <div className="p-5 pt-0 border-t border-paragraph flex flex-col grow">
                {/* Title & Date */}
                <div className="flex justify-between items-center text-sm my-3">
                  <h3 className="text-2xl bg-clip-text text-transparent bg-linear-to-l from-primary to-white font-bold">
                    {card.title}
                  </h3>
                  <p className="text-slate-100 opacity-50 text-xs font-medium">
                    {card.date}
                  </p>
                </div>

                {/* Description */}
                <p className="text-paragraph grow text-[15px]">
                  {expanded[card.id]
                    ? card.description
                    : card.description.slice(0, 200) + "..."}
                  {card.description.length > 200 && (
                    <button
                      className="text-blue-400/70 font-medium hover:opacity-60 cursor-pointer ml-1"
                      onClick={() => toggleExpand(card.id)}
                    >
                      {expanded[card.id] ? "See less" : "See more"}
                    </button>
                  )}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-700/50 rounded-full text-xs text-paragraph"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Premium 3-Button Row Matrix */}
                <div className="mt-5 grid grid-cols-3 gap-2 w-full">
                  {/* Live Demo */}
                  <a
                    href={card.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <button className="w-full py-2.5 bg-linear-to-br from-primary to-secondary shadow-lg shadow-blue-500/10 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-1 cursor-pointer hover:from-secondary hover:to-primary transition duration-300 whitespace-nowrap">
                      Live{" "}
                      <LuCircleFadingArrowUp className="text-sm rotate-45 flex-shrink-0" />
                    </button>
                  </a>

                  {/* Client Repo */}
                  <a
                    href={card.githubClient}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <button className="w-full py-2.5 border border-primary/60 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-1 cursor-pointer hover:bg-primary/5 hover:shadow-sm hover:shadow-primary/50 transition duration-300 whitespace-nowrap">
                      Client <FaGithub className="text-sm flex-shrink-0" />
                    </button>
                  </a>

                  {/* Server Repo */}
                  <a
                    href={card.githubServer}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <button className="w-full py-2.5 border border-secondary/60 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-1 cursor-pointer hover:bg-secondary/5 hover:shadow-sm hover:shadow-secondary/50 transition duration-300 whitespace-nowrap">
                      Server <FaGithub className="text-sm flex-shrink-0" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
