"use client";

import { useState } from "react";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import ScrollToUp from "@/components/shared/ScrollToUp";
import { dummyBlogs, BlogItem } from "@/data/blogData";
import BlogHeader from "./components/BlogHeader";
import BlogCard from "./components/BlogCard";
import BlogPagination from "./components/BlogPagination";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination calculations
  const totalPages = Math.ceil(dummyBlogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentBlogs = dummyBlogs.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col justify-between">
      {/* Navigation */}
      <Navbar />

      {/* Main Container */}
      <div className="flex-1">
        {/* Header Component (Search removed) */}
        <BlogHeader totalCount={dummyBlogs.length} />

        {/* Blog Grid Content */}
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog, idx) => (
              <BlogCard key={blog.id} item={blog} index={idx} />
            ))}
          </div>

          {/* Pagination Component */}
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {/* Footer & Scroll to Top */}
      <Footer />
      <ScrollToUp />
    </main>
  );
}
