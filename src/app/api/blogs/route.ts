import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/client/client.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;
    const sort = url.searchParams.get("sort");

    let orderBy: any = undefined;
    if (sort === "upvotes_desc") {
      orderBy = { upvotes: "desc" };
    } else if (sort === "upvotes_asc") {
      orderBy = { upvotes: "asc" };
    }

    const blogs = await prisma.blog.findMany({
      skip,
      take: limit,
      ...(orderBy ? { orderBy } : {}),
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();

    if (typeof title !== "string" || title.trim().length === 0) {
      return NextResponse.json(
        { error: "Title must be a non-empty string" },
        { status: 400 }
      );
    }

    if (typeof content !== "string" || content.trim().length === 0) {
      return NextResponse.json(
        { error: "Content must be a non-empty string" },
        { status: 400 }
      );
    }

    const newBlog = await prisma.blog.create({
      data: { title, content, author: { connect: { id: 1 } } }, // Replace 1 with the actual numeric author ID
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error creating blog:", error.message, error.stack);
    } else {
      console.error("Error creating blog:", error);
    }
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}