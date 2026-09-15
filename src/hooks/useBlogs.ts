import { apiClient } from "@/lib/axios";
import { BlogItem } from "@/sections/blog/BlogCards";
import { useQuery } from "@tanstack/react-query";

export default function useBlogs() {
  const {
    isPending,
    error,
    data: blogs,
  } = useQuery<BlogItem[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await apiClient.get("/api/blogs");
      return res.data.data;
    },
  });
  return { isPending, error, blogs };
}
