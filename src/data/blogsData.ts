import { apiClient } from "@/lib/axios";
import { BlogItem } from "@/sections/blog/BlogCards";

export async function getBlogs() {
  const res = await apiClient.get<{ data: BlogItem[] }>("api/blogs");

  return res.data.data;
}
