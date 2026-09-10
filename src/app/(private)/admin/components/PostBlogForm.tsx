import React from "react";
import { Image as ImageIcon, Send } from "lucide-react";

export default function PostBlogForm() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Post a New Blog
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Create and publish a new blog post.
        </p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8">
        <form className="space-y-5">
          {/* English Title */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Title (English)
            </label>
            <input
              type="text"
              placeholder="Enter English blog title..."
              className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm"
            />
          </div>

          {/* Bangla Title */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Title (Bangla)
            </label>
            <input
              type="text"
              placeholder="ব্লগের বাংলা শিরোনাম লিখুন..."
              className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm"
            />
          </div>

          {/* Image URL / Path */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
              <ImageIcon className="size-4 text-primary" />
              Featured Image URL / Path
            </label>
            <input
              type="text"
              placeholder="/images/blogs/your_image.png"
              className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm"
            />
          </div>

          {/* Bangla Description */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Blog Content (Bangla)
            </label>
            <textarea
              rows={6}
              placeholder="বাংলা কনটেন্ট লিখুন (Markdown supported)..."
              className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm font-mono"
            />
          </div>

          {/* English Description */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Blog Content (English)
            </label>
            <textarea
              rows={6}
              placeholder="Write English blog content (Markdown supported)..."
              className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm font-mono"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-semibold transition-all cursor-pointer"
            >
              <Send className="size-4" />
              Publish Blog Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
