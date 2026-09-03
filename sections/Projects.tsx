"use client";
import { useEffect, useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { projectCards, ProjectCard } from "../data/projectData";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import {
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useLenis } from "lenis/react";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [expandedTags, setExpandedTags] = useState<{ [key: number]: boolean }>(
    {},
  );
  const [isDivActive, setIsDivActive] = useState<null | number>(null);

  // Modal State
  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(
    null,
  );
  const [[currentImageIndex, direction], setPage] = useState<[number, number]>([
    0, 0,
  ]);
  const [isAutoSliding, setIsAutoSliding] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDivActive(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lenis = useLenis();

  // Handle modal body scroll lock, Lenis instance control, resetting slider index & preloading images
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
      setPage([0, 0]);
      setIsAutoSliding(true);

      // Preload images into browser memory to eliminate buffering during slide transitions
      selectedProject.image.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    } else {
      document.body.style.overflow = "unset";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "unset";
      lenis?.start();
    };
  }, [selectedProject, lenis]);

  // Auto Slider effect
  useEffect(() => {
    if (!selectedProject || !isAutoSliding || selectedProject.image.length <= 1)
      return;

    const timer = setInterval(() => {
      setPage(([prevIndex]) => [
        prevIndex === selectedProject.image.length - 1 ? 0 : prevIndex + 1,
        1,
      ]);
    }, 3500);

    return () => clearInterval(timer);
  }, [selectedProject, isAutoSliding]);

  const handleCardClick = (index: number) => {
    if (window.innerWidth < 1024) {
      setIsDivActive((prev) => (prev === index ? null : index));
    }
  };

  const toggleTagsExpand = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedTags((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setPage(([prev]) => [
      prev === selectedProject.image.length - 1 ? 0 : prev + 1,
      1,
    ]);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setPage(([prev]) => [
      prev === 0 ? selectedProject.image.length - 1 : prev - 1,
      -1,
    ]);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section id="projects" className="scroll-mt-0">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full items-start">
            {projectCards.map((card, idx) => {
              const isTagsExpanded = expandedTags[card.id];
              const visibleTags = isTagsExpanded
                ? card.tags
                : card.tags.slice(0, 3);
              const remainingTagsCount = card.tags.length - 3;
              const activeDiv = isDivActive === idx;
              return (
                <div className="relative group/gparent h-fit" key={card.id}>
                  <div
                    className={`flex flex-col transition-all duration-300 overflow-hidden bg-[#0a0f1d] border border-white/8 hover:border-primary/40 h-fit cursor-pointer group/parent ${
                      activeDiv && "border-primary/40"
                    }`}
                    onClick={() => handleCardClick(idx)}
                  >
                    {/* Image */}
                    <div
                      className={`relative group-hover/parent:scale-107 duration-300 shrink-0 ${
                        activeDiv && "scale-107"
                      }`}
                    >
                      <img
                        className="pb-2 w-full h-58 object-cover"
                        src={card?.image[0]}
                        alt={card.title}
                      />
                      {card?.processing && (
                        <p className="absolute bottom-2 bg-emerald-950/80 border-t border-emerald-500/30 inset-x-px pl-2 pt-1 text-sm text-emerald-400 font-medium text-center">
                          In Development
                        </p>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 pt-0 border-t border-white/10 flex flex-col justify-between grow">
                      <div>
                        {/* Title & Date */}
                        <div className="flex justify-between items-center text-sm my-3 gap-2">
                          <h3 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-200 font-bold truncate">
                            {card.title}
                          </h3>
                          <p className="text-slate-400 text-xs font-mono shrink-0">
                            {card.date}
                          </p>
                        </div>

                        {/* Description - Fixed height for 3 lines to ensure exact layout balance */}
                        <div className="h-[4.2rem]">
                          <p className="text-slate-300/80 text-[15px] line-clamp-3 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      <div>
                        {/* Tags Container with consistent min-height */}
                        <div className="flex flex-wrap gap-1.5 mt-4 items-center min-h-[36px]">
                          {visibleTags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-slate-900/90 text-xs text-slate-300 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}

                          {remainingTagsCount > 0 && !isTagsExpanded && (
                            <button
                              onClick={(e) => toggleTagsExpand(card.id, e)}
                              className="px-2.5 py-1 bg-primary/20 hover:bg-primary/40 text-primary border border-primary/30 text-xs font-semibold cursor-pointer transition-colors"
                            >
                              +{remainingTagsCount}
                            </button>
                          )}

                          {/* এক্সপ্যান্ড করা থাকলে Show Less বাটন দেখাবে */}
                          {isTagsExpanded && card.tags.length > 3 && (
                            <button
                              onClick={(e) => toggleTagsExpand(card.id, e)}
                              className="px-2.5 py-1 bg-primary/20 hover:bg-primary/40 text-primary border border-primary/30 text-xs font-semibold cursor-pointer transition-colors"
                            >
                              Less
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(card)}
                    className="absolute z-10 right-0 bottom-0 bg-background w-13 h-13 border border-l-white/8 border-t-white/8 border-b-background border-r-background group-hover/gparent:border-l-primary/40 group-hover/gparent:border-t-primary/40 hover:border-t-white/8 hover:border-l-white/8 group/child transition-colors duration-300 flex justify-center items-center cursor-pointer"
                  >
                    <ArrowUpRight
                      size={32}
                      className=" text-amber-400 group-hover/child:translate-x-1 group-hover/child:-translate-y-1 transition-transform duration-200"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-[#0b0f17] border border-slate-800  shadow-2xl shadow-emerald-950/20 overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col text-slate-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-slate-900/80 hover:bg-slate-900/90 text-slate-200  transition-colors cursor-pointer border border-slate-700/60 shadow-lg"
                aria-label="Close modal"
              >
                <FiX className="text-lg" />
              </button>

              {/* Scrollable Modal Container */}
              <div
                data-lenis-prevent
                className="overflow-y-auto scrollbar-none"
              >
                {/* Header Image Slider Container - Full Width */}
                <div
                  className="relative group w-full bg-slate-950 h-64 sm:h-96 flex items-center justify-center overflow-hidden touch-pan-y"
                  onMouseEnter={() => setIsAutoSliding(false)}
                  onMouseLeave={() => setIsAutoSliding(true)}
                >
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProject.image[currentImageIndex]}
                      alt={`${selectedProject.title} preview ${currentImageIndex + 1}`}
                      initial={{ x: direction > 0 ? "100%" : "-100%" }}
                      animate={{ x: "0%" }}
                      exit={{ x: direction > 0 ? "-100%" : "100%" }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.15}
                      onDragEnd={(_, info) => {
                        const swipeThreshold = 30;
                        if (info.offset.x < -swipeThreshold) {
                          nextImage();
                        } else if (info.offset.x > swipeThreshold) {
                          prevImage();
                        }
                      }}
                      className="absolute inset-0 w-full h-full object-top object-cover cursor-grab active:cursor-grabbing select-none"
                    />
                  </AnimatePresence>

                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute z-10 inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/40 to-transparent  pointer-events-none" />

                  {/* Slider Arrows - Hidden on sm and md screens, visible on lg screens */}
                  {selectedProject.image.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 p-2.5  bg-slate-900/80 hover:bg-slate-900/90 text-white transition-all cursor-pointer border border-slate-700/50 opacity-0 group-hover:opacity-100 shadow-md z-20"
                        aria-label="Previous image"
                      >
                        <FiChevronLeft className="text-lg" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 p-2.5  bg-slate-900/80 hover:bg-slate-900/90 text-white transition-all cursor-pointer border border-slate-700/50 opacity-0 group-hover:opacity-100 shadow-md z-20"
                        aria-label="Next image"
                      >
                        <FiChevronRight className="text-lg" />
                      </button>

                      {/* Pagination Dots - Positioned directly inside the bottom black gradient overlay */}
                      <div className="absolute bottom-3 inset-x-0 flex justify-center items-center gap-1.5 z-20 pointer-events-auto">
                        {selectedProject.image.map((_, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              setPage([
                                index,
                                index > currentImageIndex ? 1 : -1,
                              ])
                            }
                            className={`h-0.5  transition-all cursor-pointer ${
                              currentImageIndex === index
                                ? "w-6 bg-amber-400"
                                : "w-1.5 bg-slate-400/60 hover:bg-slate-200"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Content Container with Padding */}
                <div className="p-5 sm:p-7 space-y-6">
                  {/* Title & Main Description */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {selectedProject.title}
                      </h2>
                      <span className="text-xs font-mono text-blue-400 bg-primary/15 px-3 py-1  border border-primary/40">
                        {selectedProject.date}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Key Highlights Section */}
                  {selectedProject.keyHighlights &&
                    selectedProject.keyHighlights.length > 0 && (
                      <div className="space-y-3">
                        <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                          <span className="text-amber-400">⚡</span> KEY
                          HIGHLIGHTS
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {selectedProject.keyHighlights.map(
                            (highlight, index) => (
                              <div
                                key={index}
                                className="bg-slate-900/60 border border-slate-800/80  p-3 text-xs sm:text-[13px] text-slate-300 flex items-start gap-2.5 hover:border-slate-700/80 transition-colors"
                              >
                                <span className="w-1.5 h-1.5  bg-primary mt-1.5 shrink-0" />
                                <span>{highlight}</span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                  {/* Problem It Solves & How The Idea Started (Side-by-Side Cards) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Problem It Solves */}
                    <div className="bg-slate-900/50 border border-slate-800/80  p-4 sm:p-5 space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2  bg-amber-500/10 text-amber-400 border border-amber-500/20 text-sm">
                          📦
                        </div>
                        <h4 className="text-sm font-bold text-slate-100">
                          Problem It Solves
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {selectedProject.problemItSolves ||
                          selectedProject.description}
                      </p>
                    </div>

                    {/* How The Idea Started */}
                    <div className="bg-slate-900/50 border border-slate-800/80  p-4 sm:p-5 space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2  bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm">
                          💡
                        </div>
                        <h4 className="text-sm font-bold text-slate-100">
                          How The Idea Started
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {selectedProject.howIdeaStarted ||
                          selectedProject.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      TECH STACK
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300  text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Buttons Matrix */}
                  <div className="pt-3 flex flex-wrap sm:flex-nowrap justify-end items-center gap-3 border-t border-slate-800/80">
                    {/* GitHub Client / Source Code */}
                    {selectedProject.githubClient && (
                      <a
                        href={selectedProject.githubClient}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <button className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80  text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors">
                          <FaGithub className="text-base" />
                          <span>CLIENT</span>
                        </button>
                      </a>
                    )}

                    {/* GitHub Server (if available) */}
                    {selectedProject.githubServer && (
                      <a
                        href={selectedProject.githubServer}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <button className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80  text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors">
                          <FaGithub className="text-base" />
                          <span>SERVER</span>
                        </button>
                      </a>
                    )}

                    {/* Live Preview Button */}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <button className="w-full sm:w-auto px-6 py-2.5 bg-linear-to-r from-primary to-secondary hover:from-secondary  hover:to-primary hover:scale-[1.02] active:scale-[0.98] font-bold  text-xs sm:text-sm flex items-center justify-center gap-2  cursor-pointer transition-all uppercase tracking-wide">
                          <FiExternalLink className="text-base" />
                          <span>LIVE PREVIEW</span>
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
