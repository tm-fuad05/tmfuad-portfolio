"use client";

import React, { useRef, useState } from "react";
import { Image as ImageIcon, Loader2, Send, Upload, X } from "lucide-react";
import { BlogItem } from "@/sections/blog/BlogCards";
import { apiClient } from "@/lib/axios";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function PostBlogForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Image size crosses 2 MB",
        showConfirmButton: false,
        timer: 1000,
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const queryClient = useQueryClient();
  const postMutation = useMutation({
    mutationFn: async (newBlog: BlogItem) => {
      const res = await apiClient.post("/api/blogs", newBlog);
      return res.data;
    },
    onSuccess: (data) => {
      if (data) {
        Swal.fire({
          position: "center",
          title: "Posted successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        setImagePreview(null);
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
        timer: 1000,
      });
    },
  });

  const formAction = async (formData: FormData) => {
    if (!imagePreview) {
      alert("Select an image");
      return;
    }

    const newBlog: BlogItem = {
      titleE: formData.get("titleE") as string,
      titleB: formData.get("titleB") as string,
      image: imagePreview,
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

          {/* Image File Input & Preview */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
              <ImageIcon className="size-4 text-primary" />
              Featured Cover Image
            </label>

            {imagePreview ? (
              <div className="relative w-full max-w-md h-52 rounded-xl overflow-hidden border border-slate-700 group">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-3 right-3 p-1.5 bg-rose-600/80 hover:bg-rose-600 text-white rounded-lg backdrop-blur-sm transition-all cursor-pointer shadow-lg"
                  title="Remove Image"
                >
                  <X className="size-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-slate-700 hover:border-primary/60 rounded-2xl cursor-pointer bg-slate-950/50 hover:bg-slate-900/40 transition-all group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-slate-400 group-hover:text-slate-300">
                  <div className="p-3 rounded-full bg-slate-800/80 mb-3 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <Upload className="size-6" />
                  </div>
                  <p className="mb-1 text-sm font-medium">
                    <span className="text-primary font-semibold">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-slate-500">
                    PNG, JPG, WEBP (Max 2MB)
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
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
              disabled={postMutation.isPending}
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
