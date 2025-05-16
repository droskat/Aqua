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
  const { searchParams } = new URL(req.url);
  const blogId = Number(searchParams.get("blogId"));
  const userId = Number(searchParams.get("userId"));

  if (isNaN(blogId) || isNaN(userId)) {
    return NextResponse.json({ error: "Invalid blogId or userId" }, { status: 400 });
  }

  const upvote = await prisma.upvote.findUnique({
    where: {
      blogId_userId: {
        blogId,
        userId,
      },
    },
  });

  return NextResponse.json({ hasUpvoted: !!upvote });
}

export async function POST(req: Request) {
  const { blogId, userId } = await req.json();

  const existingUpvote = await prisma.upvote.findUnique({
    where: {
      blogId_userId: { blogId, userId },
    },
  });

  if (existingUpvote) {
    // Remove upvote
    await prisma.upvote.delete({
      where: {
        blogId_userId: { blogId, userId },
      },
    });

    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: { upvotes: { decrement: 1 } },
    });

    return new Response(JSON.stringify(updatedBlog));
  } else {
    // Add upvote
    await prisma.upvote.create({
      data: { blogId, userId },
    });

    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: { upvotes: { increment: 1 } },
    });

    return new Response(JSON.stringify(updatedBlog));
  }
}