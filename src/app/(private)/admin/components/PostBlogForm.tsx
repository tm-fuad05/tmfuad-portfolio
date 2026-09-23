"use client";

import React, { useRef, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { BlogItem } from "@/sections/blog/BlogCards";
import { apiClient } from "@/lib/axios";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ImageUploader from "@/components/shared/ImageUploader";

export default function PostBlogForm() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const queryClient = useQueryClient();

  // Post Mutation
  const postMutation = useMutation({
    mutationFn: async (newBlog: BlogItem) => {
      const res = await apiClient.post("/api/blogs", newBlog);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        Swal.fire({
          position: "center",
          title: "Posted successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1300,
        });
        setImageUrl(null);
        formRef.current?.reset();
      }
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    onError: (error) => {
      Swal.fire({
        position: "center",
        title: "Error",
        text: `${error?.message}`,
        icon: "error",
        showConfirmButton: false,
        timer: 1300,
      });
    },
  });

  const formAction = async (formData: FormData) => {
    if (!imageUrl) {
      alert("Select an image");
      return;
    }

    const newBlog: BlogItem = {
      titleE: formData.get("titleE") as string,
      titleB: formData.get("titleB") as string,
      image: imageUrl,
      descriptionBangla: formData.get("descriptionB") as string,
      descriptionEnglish: formData.get("descriptionE") as string,
    };

    postMutation.mutate(newBlog);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto font-hind">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Post a New Blog
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Create and publish a new blog post.
        </p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8">
        <form
          data-lenis-prevent
          ref={formRef}
          action={formAction}
          className="space-y-5"
        >
          {/* English Title */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Title (English)
            </label>
            <input
              type="text"
              name="titleE"
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
              name="titleB"
              placeholder="ব্লগের বাংলা শিরোনাম লিখুন..."
              className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm"
            />
          </div>

          {/* Image File Input & Preview (Cloudinary) */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Featured Cover Image
            </label>
            <ImageUploader
              isUploading={isUploading}
              setIsUploading={setIsUploading}
              defaultImage={imageUrl}
              onImageUploaded={(url) => setImageUrl(url)}
              onImageRemoved={() => setImageUrl(null)}
            />
          </div>

          {/* Bangla Description */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Blog Content (Bangla)
            </label>
            <textarea
              rows={6}
              name="descriptionB"
              placeholder="বাংলা কনটেন্ট লিখুন (Markdown supported)..."
              className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm scrollbar-none"
            />
          </div>

          {/* English Description */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Blog Content (English)
            </label>
            <textarea
              rows={6}
              name="descriptionE"
              placeholder="Write English blog content (Markdown supported)..."
              className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm scrollbar-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={postMutation.isPending || isUploading}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary text-white rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-lg shadow-primary/20"
            >
              {postMutation.isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Publishing...</span>
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  <span>Publish Blog Post</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
