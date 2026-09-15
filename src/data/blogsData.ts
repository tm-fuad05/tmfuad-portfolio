import { apiClient } from "@/lib/axios";
import { BlogItem } from "@/sections/blog/BlogCards";

export async function getBlogs() {
  const res = await apiClient.get<{ data: BlogItem[] }>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`,
  );

  return res.data.data;
}
