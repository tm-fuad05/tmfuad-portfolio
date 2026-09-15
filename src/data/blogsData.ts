import { BlogItem } from "@/sections/blog/BlogCards";
import axios from "axios";

export async function getBlogs() {
  const res = await axios.get<{ data: BlogItem[] }>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`,
  );

  return res.data.data;
}
