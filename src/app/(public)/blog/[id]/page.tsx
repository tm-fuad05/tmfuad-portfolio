import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import ScrollToUp from "@/components/shared/ScrollToUp";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogContent from "./BlogContent";
import { getBlogs } from "@/data/blogsData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const blogs = await getBlogs();
  const { id } = await params;
  const blog = blogs?.find((b) => b._id === id);

  if (!blog) {
    return {
      title: "Blog Not Found | Tanvir Mahmud Fuad",
    };
  }

  return {
    title: `${blog.title} | Tanvir Mahmud Fuad`,
    description: blog.title,
  };
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const blogs = await getBlogs();
  const { id } = await params;
  const blog = blogs.find((b) => b._id === id);

  if (!blog) {
    notFound();
  }

  // Related / Next posts
  const otherBlogs = blogs.filter((b) => b._id !== blog._id).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col justify-between">
      <Navbar />

      <div className="flex-1 pt-28 sm:pt-36 pb-20">
        <article className="w-full max-w-7xl lg:max-w-4xl px-6 lg:px-8 mx-auto font-hind">
          {/*  TOP BREADCRUMB & BACK BUTTON */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all articles</span>
            </Link>
          </div>

          {/*  */}
          <BlogContent
            titleB={blog.titleB}
            titleE={blog.titleE}
            title={blog.titleE}
            image={blog.image}
            descriptionB={blog.descriptionBangla}
            descriptionE={blog.descriptionEnglish}
          />

          {/*  SHARE & FOOTNOTE */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">
              Published on <span className="text-white">portfolio/blog</span>
            </span>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-primary/50 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <span>Explore More Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/*  MORE ARTICLES / NEXT READS */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Read Next
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherBlogs.map((other) => (
                <Link
                  key={other._id}
                  href={`/blog/${other._id}`}
                  className="group flex flex-col bg-[#0a0f1d] border border-white/10 hover:border-primary/50 overflow-hidden transition-all duration-300"
                >
                  <div className="relative w-full h-40 bg-slate-950 overflow-hidden">
                    <Image
                      src={other.image}
                      alt={other.titleE || other.title || "Blog article"}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between grow space-y-2">
                    <h4 className="text-sm font-bold text-white line-clamp-2 group-hover:text-primary transition-colors">
                      {other.titleE || other.title}
                    </h4>
                    <span className="text-xs text-primary font-semibold flex items-center gap-1 pt-1">
                      Read article &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>

      <Footer />
      <ScrollToUp />
    </main>
  );
}
