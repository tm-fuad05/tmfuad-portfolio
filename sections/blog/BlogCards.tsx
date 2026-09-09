"use client";
import BlogCard from "@/app/(public)/blog/components/BlogCard";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
import { dummyBlogs } from "@/data/blogData";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCards() {
  console.log(dummyBlogs?.length);
  return (
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
          // Cards under the bottom overlay (4th card onwards, i.e. index >= 3) cannot be clicked
          const isUnderOverlay = index >= 3;

          return (
            <BlogCard
              key={item.id}
              item={item}
              index={index}
              disabled={isUnderOverlay}
            />
          );
        })}
      </motion.div>

      {/* SOLID FADE OVERLAY: COVERS SUBSEQUENT CARDS + CENTERED BUTTON */}
      {dummyBlogs?.length > 3 ? (
        <div
          className={`absolute inset-x-0 bottom-0 h-44 sm:h-52 md:h-56 lg:h-60 bg-gradient-to-t from-background via-background/95 to-transparent flex flex-col items-center justify-end pb-6 sm:pb-8 z-30 pointer-events-none`}
        >
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
      ) : (
        <div className="w-fit mx-auto">
          <Link href="/blog">
            <ButtonPrimary>
              <BookOpen size={16} />
              <span>See All Blogs</span>
              <ArrowUpRight size={16} />
            </ButtonPrimary>
          </Link>
        </div>
      )}
    </div>
  );
}
