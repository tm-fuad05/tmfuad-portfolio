"use client";

import Swal from "sweetalert2";
import { apiClient } from "@/lib/axios";
import { BlogItem } from "@/sections/blog/BlogCards";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ImageIcon, Loader2, Send, Upload, X } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";

export default function UpdateBlogModal({
  blog,
  selectedBlog,
  setSelectedBlog,
}: {
  blog: BlogItem;
  selectedBlog: BlogItem | null;
  setSelectedBlog: (blog: BlogItem | null) => void;
}) {
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(
    blog.image || null,
  );

  const patchMutation = useMutation({
    mutationFn: async (updatedBlog: Partial<BlogItem>) => {
      const res = await apiClient.patch("/api/blogs", updatedBlog);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully updated",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Nothing has changed",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setSelectedBlog(null);
    },
    onError: (error) => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message || "Something went wrong",
        showConfirmButton: false,
        timer: 1000,
      });
    },
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const formAction = (formData: FormData) => {
    const updatedBlog = {
      _id: blog._id,
      titleB: formData.get("titleB") as string,
      titleE: formData.get("titleE") as string,
      image: imagePreview || blog.image,
      descriptionBangla: formData.get("descriptionBangla") as string,
      descriptionEnglish: formData.get("descriptionEnglish") as string,
    };

    patchMutation.mutate(updatedBlog);
  };

  if (!selectedBlog) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all text-left font-hind"
      onClick={() => setSelectedBlog(null)}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <h2 className="text-lg font-semibold text-white">Update Blog</h2>
          <button
            onClick={() => setSelectedBlog(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto  space-y-5 scrollbar-none">
          <form ref={formRef} action={formAction} className="space-y-5">
            {/* English Title */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Title (English)
              </label>
              <input
                type="text"
                name="titleE"
                defaultValue={blog.titleE}
                required
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
                defaultValue={blog.titleB}
                required
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
                <div className="relative w-full h-52 rounded-xl overflow-hidden border border-slate-700 group">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-3 right-3 p-1.5 bg-rose-600/80 hover:bg-rose-600 text-white rounded-lg backdrop-blur-sm transition-all shadow-lg"
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
                rows={5}
                name="descriptionBangla"
                defaultValue={blog.descriptionBangla}
                required
                placeholder="বাংলা কনটেন্ট লিখুন..."
                className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm  scrollbar-none"
              />
            </div>

            {/* English Description */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Blog Content (English)
              </label>
              <textarea
                rows={5}
                name="descriptionEnglish"
                defaultValue={blog.descriptionEnglish}
                required
                placeholder="Write English blog content..."
                className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 text-sm  scrollbar-none"
              />
            </div>

            {/* Submit & Cancel Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedBlog(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={patchMutation.isPending}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-primary/20"
              >
                {patchMutation.isPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
