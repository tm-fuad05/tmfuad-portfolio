"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
import { ArrowUpRight, BookOpen } from "lucide-react";

export interface BlogItem {
  id: number;
  title: string;
  image: string;
  link: string;
}

const dummyBlogs: BlogItem[] = [
  {
    id: 1,
    title:
      "Mastering Next.js 15 & React 19: Best Practices for High Performance",
    image: "/images/logiclab/1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Designing Scalable MongoDB Schemas for Modern Web Apps",
    image: "/images/fitrack/1.png",
    link: "#",
  },
  {
    id: 3,
    title: "Advanced TypeScript Patterns Every Full-Stack Engineer Should Know",
    image: "/images/pastportals/1.png",
    link: "#",
  },
  {
    id: 4,
    title: "Building Real-Time Multi-User Collaboration with WebSockets",
    image: "/images/devtech.png",
    link: "#",
  },
  {
    id: 5,
    title: "Optimizing Web Vitals & Core Performance Metrics to 99+",
    image: "/images/lingobingo/1.png",
    link: "#",
  },
  {
    id: 6,
    title: "Microservices Architecture vs Modular Monolith in 2026",
    image: "/images/visorix/1.png",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Featured Blogs"
          subtitle="Read my latest articles, web development insights, and technical guides."
          id="blog"
        />

        {/* RELATIVE WRAPPER:
            - Mobile / sm (1 col): shows 3 cards, 4th card half-cut under overlay (~960px)
            - md (2 cols): shows 4 cards (2 rows x 2 cols), 5th & 6th half-cut under overlay (~720px)
            - lg (3 cols): shows 3 cards (1 row x 3 cols), 4th-6th half-cut under overlay (~480px)
        */}
        <div className="relative w-full overflow-hidden max-h-[960px] sm:max-h-[960px] md:max-h-[720px] lg:max-h-[480px]">
          {/* BLOG GRID */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full pb-10"
          >
            {dummyBlogs.map((item, index) => {
              // sm (1 col): index >= 3 is masked
              // md (2 cols): index >= 4 is masked
              // lg (3 cols): index >= 3 is masked
              const isMaskedInLg = index >= 3;
              const isMaskedInMd = index >= 4;
              const isMaskedInSm = index >= 3;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
                  className={`group relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden border border-white/10 shadow-xl transition-all duration-500 bg-slate-950 ${
                    // Interactivity & masking based on breakpoint
                    isMaskedInMd
                      ? "pointer-events-none select-none opacity-40"
                      : isMaskedInLg
                        ? "lg:pointer-events-none lg:select-none lg:opacity-40 hover:border-primary/60 cursor-pointer"
                        : isMaskedInSm
                          ? "pointer-events-none select-none opacity-40 md:pointer-events-auto md:select-auto md:opacity-100 hover:border-primary/60 cursor-pointer"
                          : "hover:border-primary/60 cursor-pointer"
                  }`}
                >
                  <Link
                    href={item.link}
                    className="block w-full h-full relative"
                  >
                    {/* 1. Main Background Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-108 transition-all duration-700 ease-out"
                    />

                    {/* 2. Top-Right Floating Arrow Badge */}
                    <div className="absolute top-3.5 right-3.5 z-20 w-9 h-9 bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    {/* 3. Bottom Black Gradient Overlay with Title */}
                    <div className="absolute inset-x-0 bottom-0 z-10 pt-16 pb-5 px-5 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col justify-end">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-2 drop-shadow-md transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </h3>
                    </div>

                    {/* 4. Subtle Border Glow on Hover */}
                    <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* SOLID FADE OVERLAY: COVERS SUBSEQUENT CARDS + CENTERED BUTTON */}
          <div className="absolute inset-x-0 bottom-0 h-44 sm:h-52 md:h-56 lg:h-60 bg-gradient-to-t from-background via-background/95 to-transparent flex flex-col items-center justify-end pb-6 sm:pb-8 z-30 pointer-events-none">
            <div className="pointer-events-auto shadow-2xl">
              <Link href="/blog">
                <ButtonPrimary>
                  <BookOpen size={16} />
                  <span>See All Blogs</span>
                  <ArrowUpRight size={16} />
                </ButtonPrimary>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
