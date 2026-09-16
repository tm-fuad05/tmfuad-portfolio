/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useRef, useState, useEffect } from "react";
import { Loader2, Upload, X } from "lucide-react";
import Swal from "sweetalert2";

interface ImageUploaderProps {
  isUploading: boolean;
  setIsUploading: (value: boolean) => void;
  onImageUploaded: (url: string) => void;
  onImageRemoved?: () => void;
  defaultImage?: string | null;
}

export default function ImageUploader({
  isUploading,
  setIsUploading,
  onImageUploaded,
  onImageRemoved,
  defaultImage = null,
}: ImageUploaderProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(defaultImage);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setImageUrl(defaultImage);
  }, [defaultImage]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ফাইল সাইজ ভ্যালিডেশন (Max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Image size crosses 5 MB",
        showConfirmButton: false,
        timer: 1500,
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Upload failed");
      }

      setImageUrl(data.url);
      onImageUploaded(data.url);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Upload Failed",
        text: errorMessage,
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleRemove = () => {
    setImageUrl(null);
    if (onImageRemoved) {
      onImageRemoved();
    }
  };

  return (
    <div className="space-y-3 font-hind">
      {/* হিডেন ফাইল ইনপুট - কোনো পপআপ বা থার্ড পার্টি উইজেট ছাড়াই ব্রাউজারের নিজস্ব উইন্ডো খুলবে */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {imageUrl ? (
        <div className="relative w-full max-w-md h-52 rounded-xl overflow-hidden border border-slate-700 group shadow-md">
          <img
            src={imageUrl}
            alt="Uploaded Preview"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-3 right-3 p-1.5 bg-rose-600/90 hover:bg-rose-600 text-white rounded-lg backdrop-blur-sm transition-all cursor-pointer shadow-lg"
            title="Remove Image"
          >
            <X className="size-4" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => !isUploading && fileInputRef.current?.click()}
          className={`flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-slate-700 hover:border-primary/60 rounded-2xl cursor-pointer bg-slate-950/50 hover:bg-slate-900/40 transition-all group ${
            isUploading ? "pointer-events-none opacity-60" : ""
          }`}
        >
          {isUploading ? (
            <div className="flex flex-col items-center justify-center py-6 text-slate-300">
              <Loader2 className="size-8 animate-spin text-primary mb-2" />
              <p className="text-sm font-medium">Uploading image...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-slate-400 group-hover:text-slate-300">
              <div className="p-3 rounded-full bg-slate-800/80 mb-3 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <Upload className="size-6" />
              </div>
              <p className="mb-1 text-sm font-medium">
                <span className="text-primary font-semibold">
                  Click to select image
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-slate-500">PNG, JPG, WEBP (Max 5MB)</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
