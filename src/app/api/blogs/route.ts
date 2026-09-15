/* eslint-disable @typescript-eslint/no-explicit-any */
import client from "@/lib/dbConnect";
import { CommandSucceededEvent, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { takeCoverage } from "v8";

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

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { _id, ...updatedData } = body;

    if (!body) {
      return NextResponse.json(
        {
          success: false,
          error: "No updated blog to change!",
        },
        { status: 400 },
      );
    }

    const filter = { _id: new ObjectId(_id as string) };

    const updatedDoc = {
      $set: updatedData,
    };

    const result = await blogCollection.updateOne(filter, updatedDoc);
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

    const result = await blogCollection.deleteOne({
      _id: new ObjectId(id as string),
    });

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
