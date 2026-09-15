"use client";

import BlogsTable from "./BlogsTable";

export default function ManageBlogs() {
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
      <BlogsTable />
    </div>
  );
}
