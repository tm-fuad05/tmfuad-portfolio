"use client";

import { useState } from "react";
import { BlogItem } from "@/sections/blog/BlogCards";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

interface BlogListProps {
  blogs: BlogItem[];
}

export default function BlogList({ blogs }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 6;

  const totalPages = Math.ceil((blogs?.length || 0) / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentBlogs = (blogs || []).slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Blog Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((blog, idx) => (
          <BlogCard key={blog._id} item={blog} index={idx} />
        ))}
      </div>

      {/* Pagination Component */}
      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
