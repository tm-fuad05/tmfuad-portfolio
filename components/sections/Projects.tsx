"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { projectCards } from "../../data/projectData";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { LuCircleFadingArrowUp } from "react-icons/lu";

const Projects = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const [expandedTags, setExpandedTags] = useState<{ [key: number]: boolean }>(
    {},
  );
  const [isDivActive, setIsDivActive] = useState<null | number>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDivActive(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index: number) => {
    if (window.innerWidth < 1024) {
      setIsDivActive((prev) => (prev === index ? null : index));
    }
  };

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTagsExpand = (id: number) => {
    setExpandedTags((prev) => ({ ...prev, [id]: !prev[id] }));
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
          {projectCards.map((card, idx) => {
            const isTagsExpanded = expandedTags[card.id];
            const visibleTags = isTagsExpanded
              ? card.tags
              : card.tags.slice(0, 4);
            const remainingTagsCount = card.tags.length - 4;
            const activeDiv = isDivActive === idx;
            return (
              <div
                key={card.id}
                className={`border border-px border-paragraph h-fit rounded-3xl flex flex-col gap-2 hover:shadow-xl hover:shadow-primary transition-all duration-400 overflow-hidden group ${
                  activeDiv && "shadow-xl shadow-primary"
                }`}
                onClick={() => handleCardClick(idx)}
              >
                {/* Image */}
                <div
                  className={`relative group-hover:scale-107 duration-300 ${activeDiv && "scale-107"}`}
                >
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

                  {/* Description - Implemented Smooth height expansion with Framer Motion */}
                  <div className="grow">
                    <motion.div
                      initial={false}
                      animate={{ height: expanded[card.id] ? "auto" : "4.2em" }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-paragraph text-[15px]">
                        {card.description}
                      </p>
                    </motion.div>
                    <button
                      className="text-blue-400/80 hover:text-blue-400 font-medium cursor-pointer text-xs mt-1 underline underline-offset-2 transition-colors"
                      onClick={() => toggleExpand(card.id)}
                    >
                      {expanded[card.id] ? "See less" : "See more"}
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3 items-center">
                    {visibleTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-slate-700/50 rounded-full text-xs text-paragraph"
                      >
                        {tag}
                      </span>
                    ))}

                    {/* ৪টার বেশি ট্যাগ থাকলে এবং এক্সপ্যান্ড করা না থাকলে +N বাটন দেখাবে */}
                    {remainingTagsCount > 0 && !isTagsExpanded && (
                      <button
                        onClick={() => toggleTagsExpand(card.id)}
                        className="px-2.5 py-1.5 bg-primary/20 hover:bg-primary/40 text-primary border border-primary/30 rounded-full text-xs font-semibold cursor-pointer transition-colors"
                      >
                        +{remainingTagsCount}
                      </button>
                    )}

                    {/* এক্সপ্যান্ড করা থাকলে Show Less বাটন দেখাবে */}
                    {isTagsExpanded && card.tags.length > 4 && (
                      <button
                        onClick={() => toggleTagsExpand(card.id)}
                        className="px-2.5 py-1.5 bg-primary/20 hover:bg-primary/40 text-primary border border-primary/30 rounded-full text-xs font-semibold cursor-pointer transition-colors"
                      >
                        Less
                      </button>
                    )}
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
                    {card?.githubServer && (
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
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
