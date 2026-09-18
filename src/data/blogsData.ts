/* eslint-disable @typescript-eslint/no-explicit-any */
import { cache } from "react";
import client from "@/lib/dbConnect";
import { BlogItem } from "@/sections/blog/BlogCards";
import { ObjectId } from "mongodb";
import axios from "axios";

const blogCollection = client.db("portfolioDB").collection("blogs");

export async function getBlogs(): Promise<BlogItem[]> {
  try {
    const blogs = await blogCollection.find().toArray();
    return blogs.map((blog) => ({
      _id: blog._id.toString(),
      titleE: blog.titleE,
      titleB: blog.titleB,
      image: blog.image,
      descriptionBangla: blog.descriptionBangla,
      descriptionEnglish: blog.descriptionEnglish,
    }));
  } catch (error: any) {
    console.error("Blogs get Error:", error.message);
    return [];
  }
}

export const getBlogById = cache(async (id: string) => {
  const blog = await blogCollection.findOne({ _id: new ObjectId(id) });
  return blog;
});
