import React from "react";
import { Edit, Trash2, Eye } from "lucide-react";
import { dummyBlogs } from "@/data/blogData";

export default function ManageBlogsTable() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Manage Blogs
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          List of all blog posts available in the system.
        </p>
      </div>

      {/* Table Shell */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
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
              {dummyBlogs?.map((blog) => (
                <tr
                  key={blog.id}
                  className="hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-4 px-6 text-slate-400 font-mono text-xs">
                    #{blog.id}
                  </td>
                  <td className="px-6">
                    <img
                      src={blog.image}
                      alt=""
                      className="w-15 h-9 border border-slate-500/60"
                    />
                  </td>
                  <td className="py-4 px-6 font-medium text-white">
                    {blog.titleE}
                  </td>
                  <td className="py-4 px-6 text-slate-400">{blog.titleB}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        title="View"
                        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <Eye className="size-4" />
                      </button>
                      <button
                        title="Edit"
                        className="p-2 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-colors cursor-pointer"
                      >
                        <Edit className="size-4" />
                      </button>
                      <button
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
      </div>
    </div>
  );
}
