/* eslint-disable @typescript-eslint/no-explicit-any */
import client from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { verifySession } from "../verifySession";
import { revalidatePath } from "next/cache";

// Blog Collection from mongodb
const blogCollection = client.db("portfolioDB").collection("blogs");
export async function GET() {
  try {
    const blogs = await blogCollection.find().toArray();
    return NextResponse.json(
      {
        success: true,
        data: blogs,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Fetch Error:", error.message);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch blogs! Please try again later.",
      },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  if (!(await verifySession())) {
    return NextResponse.json(
      { success: false, error: "Unauthorized access!" },
      { status: 401 },
    );
  }
  try {
    const blog = await req.json();

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          error: "No blog to post!",
        },
        { status: 400 },
      );
    }

    const result = await blogCollection.insertOne(blog);

    // Clear Cache
    revalidatePath("/");
    revalidatePath("/blogs");

    return NextResponse.json(
      {
        success: result.insertedId,
        data: blog,
      },
      {
        status: 201,
      },
    );
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to post blog!",
      },
      { status: 500 },
    );
  }
}

// Helper function: ক্লাউডিনারি থেকে ছবি ডিলিট করা
async function deleteCloudinaryImage(imageUrl: string | undefined | null) {
  if (
    !imageUrl ||
    typeof imageUrl !== "string" ||
    !imageUrl.includes("res.cloudinary.com")
  ) {
    return;
  }

  try {
    const splitUrl = imageUrl.split("/upload/");
    if (splitUrl.length > 1) {
      const afterUpload = splitUrl[1];
      const parts = afterUpload.split("/");
      // প্রথম পার্ট যদি ভার্সন (v123...) হয় তাহলে বাদ যাবে
      if (parts[0].startsWith("v") && !isNaN(Number(parts[0].substring(1)))) {
        parts.shift();
      }
      const publicIdWithExt = parts.join("/");
      const publicId = publicIdWithExt.substring(
        0,
        publicIdWithExt.lastIndexOf("."),
      );

      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }
    }
  } catch (cloudErr: any) {
    console.error("Cloudinary delete helper error:", cloudErr.message);
  }
}

export async function PATCH(req: NextRequest) {
  if (!(await verifySession())) {
    return NextResponse.json(
      { success: false, error: "Unauthorized access!" },
      { status: 401 },
    );
  }
  try {
    const body = await req.json();
    const { _id, ...updatedData } = body;

    if (!body || !_id) {
      return NextResponse.json(
        {
          success: false,
          error: "No updated blog or ID to change!",
        },
        { status: 400 },
      );
    }

    const filter = { _id: new ObjectId(_id as string) };

    // ১. আগের ব্লগটি ডাটাবেজ থেকে খুঁজে দেখা
    const existingBlog = await blogCollection.findOne(filter);

    // ২. যদি নতুন ইমেজ পাঠানো হয় এবং তা আগের ইমেজের চেয়ে আলাদা হয়, তবে আগেরটি ক্লাউডিনারি থেকে মুছে ফেলা হবে
    if (
      updatedData.image &&
      existingBlog?.image &&
      updatedData.image !== existingBlog.image
    ) {
      await deleteCloudinaryImage(existingBlog.image);
    }

    const updatedDoc = {
      $set: updatedData,
    };

    const result = await blogCollection.updateOne(filter, updatedDoc);

    // Clear Cache
    revalidatePath("/");
    revalidatePath("/blogs");
    revalidatePath(`/blogs/${_id}`);

    return NextResponse.json(
      {
        success: result.modifiedCount > 0,
        data: updatedData,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Patch Error", error.message);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update blog!",
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await verifySession())) {
    return NextResponse.json(
      { success: false, error: "Unauthorized access!" },
      { status: 401 },
    );
  }
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Blog not found!",
        },
        { status: 404 },
      );
    }

    const blogObjectId = new ObjectId(id as string);

    // ১. প্রথমে ব্লগটি খুঁজে বের করে ক্লাউডিনারি থেকে ছবি ডিলিট করা
    const blogToDelete = await blogCollection.findOne({ _id: blogObjectId });
    if (blogToDelete?.image) {
      await deleteCloudinaryImage(blogToDelete.image);
    }

    // ২. ডাটাবেজ থেকে ব্লগ ডিলিট করা
    const result = await blogCollection.deleteOne({
      _id: blogObjectId,
    });

    // Clear Cache
    revalidatePath("/");
    revalidatePath("/blogs");
    revalidatePath(`/blogs/${id}`);

    return NextResponse.json(
      {
        success: result.deletedCount > 0,
        blogId: id,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Delete Error:", error.message);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete blog!",
      },
      { status: 500 },
    );
  }
}
