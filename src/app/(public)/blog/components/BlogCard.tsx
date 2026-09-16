"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BlogItem } from "@/sections/blog/BlogCards";

interface BlogCardProps {
  item: BlogItem;
  index: number;
  disabled?: boolean;
}

export default function BlogCard({ item, index, disabled }: BlogCardProps) {
  const cardContent = (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={`group relative h-56 w-full overflow-hidden border border-white/10 ${
        disabled
          ? "pointer-events-none select-none cursor-default"
          : "hover:border-primary/60 cursor-pointer"
      } shadow-xl transition-all duration-500 bg-slate-950 flex flex-col justify-end`}
    >
      {/* 1. Main Background Image */}
      <Image
        src={item.image}
        alt={item.titleE || item.title || "Blog post thumbnail"}
        fill
        priority
        className="object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-108 transition-all duration-700 ease-out"
      />

      {/* 2. Top-Right Floating Arrow Badge */}
      <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      {/* 3. Bottom Black Gradient Overlay with Title and Action */}
      <div className="relative z-10 pt-20 pb-4 px-5 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col justify-end space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-2 drop-shadow-md transition-colors duration-300 group-hover:text-primary">
          {item.titleE || item.title}
        </h3>
      </div>

      {/* 4. Subtle Border Glow on Hover */}
      {!disabled && (
        <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
      )}
    </motion.article>
  );

  if (disabled) {
    return cardContent;
  }

  return <Link href={`/blog/${item._id}`}>{cardContent}</Link>;
}
