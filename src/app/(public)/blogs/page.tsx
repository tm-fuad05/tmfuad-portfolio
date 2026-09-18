import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import ScrollToUp from "@/components/shared/ScrollToUp";
import BlogHeader from "./components/BlogHeader";
import BlogList from "./components/BlogList";
import { getBlogs } from "@/data/blogsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col justify-between">
      {/* Navigation */}
      <Navbar />

      {/* Main Container */}
      <div className="flex-1">
        {/* Header Component (Search removed) */}
        <BlogHeader totalCount={blogs.length} />

        {/* Blog Content with working pagination */}
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <BlogList blogs={blogs} />
        </div>
      </div>

      {/* Footer & Scroll to Top */}
      <Footer />
      <ScrollToUp />
    </main>
  );
}
