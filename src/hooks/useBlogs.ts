import { getBlogs } from "@/data/blogsData";
import { useQuery } from "@tanstack/react-query";

export default function useBlogs() {
  const {
    isPending,
    error,
    data: blogs,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const blogs = await getBlogs();
      return blogs;
    },
  });
  return { isPending, error, blogs };
}
