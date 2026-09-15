"use client";

import Swal from "sweetalert2";
import useBlogs from "@/hooks/useBlogs";
import { BlogItem } from "@/sections/blog/BlogCards";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/axios";
import CustomLoader from "@/components/shared/CustomLoader";
import UpdateBlogModal from "./UpdateBlog";
import { Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogsTable() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isPending, blogs } = useBlogs();
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      if (!id) return;
      const res = await apiClient.delete("/api/blogs", { data: { id } });
      return res.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully deleted",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleDeleteBlog = (id: string) => {
    Swal.fire({
      title: "Do you want to delete this blog?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  if (isPending) {
    return <CustomLoader />;
  }
  return (
    <div
      data-lenis-prevent
      className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/50 text-xs font-semibold uppercase text-slate-400">
              <th className="py-4 px-6">ID</th>
              <th className="py-4 px-6">Image</th>
              <th className="py-4 px-6">English Title</th>
              <th className="py-4 px-6">Bangla Title</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {blogs?.map((blog, idx) => (
              <tr
                key={blog._id}
                className="hover:bg-slate-800/30 transition-colors"
              >
                <td className="py-4 px-6 text-slate-400 font-mono text-xs">
                  #{idx + 1}
                </td>
                <td className="px-6">
                  <img
                    onClick={() => router.push(`/blog/${blog._id}`)}
                    src={blog.image}
                    alt=""
                    className="w-15 h-9 border border-slate-500/60 cursor-pointer"
                  />
                </td>
                <td className="py-4 px-6 font-medium text-white">
                  {blog.titleE}
                </td>
                <td className="py-4 px-6 text-slate-400">{blog.titleB}</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={(e) => {
                        setSelectedBlog(blog);
                        e.stopPropagation();
                      }}
                      title="Edit"
                      className="p-2 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-colors cursor-pointer"
                    >
                      <Edit className="size-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        if (!blog._id) return;
                        handleDeleteBlog(blog._id);
                        e.stopPropagation();
                      }}
                      title="Delete"
                      className="p-2 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors cursor-pointer"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal For update blog */}
      <UpdateBlogModal
        key={selectedBlog?._id}
        selectedBlog={selectedBlog}
        setSelectedBlog={setSelectedBlog}
      />
    </div>
  );
}
