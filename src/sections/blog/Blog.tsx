import SectionTitle from "@/components/shared/SectionTitle";
import axios from "axios";
import BlogCards from "./BlogCards";
import { getBlogs } from "@/data/blogsData";

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <section id="blog" className="scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Featured Blogs"
          subtitle="Read my latest articles, web development insights, and technical guides."
          id="blog"
        />
        <BlogCards blogs={blogs} />
      </div>
    </section>
  );
}
