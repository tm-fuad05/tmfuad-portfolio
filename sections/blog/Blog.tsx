import SectionTitle from "@/components/shared/SectionTitle";
import { dummyBlogs } from "@/data/blogData";
import BlogCards from "./BlogCards";

export default function Blog() {
  console.log(dummyBlogs.length);
  return (
    <section id="blog" className="scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Featured Blogs"
          subtitle="Read my latest articles, web development insights, and technical guides."
          id="blog"
        />
        <BlogCards />
      </div>
    </section>
  );
}
