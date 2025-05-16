import { PrismaClient } from "../../../generated/client/client.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(req: Request) {
  const { blogId, content } = await req.json();

  const newComment = await prisma.comment.create({
    data: {
      content,
      blogId,
    },
  });

  return new Response(JSON.stringify(newComment), { status: 201 });
}

export async function PATCH(req: Request) {
  const { commentId, action, userId } = await req.json();

  if (action === "upvote") {
    // Remove any existing downvote by this user and decrement downvotes if needed
    const downvote = await prisma.commentDownvote.findUnique({
      where: { commentId_userId: { commentId, userId } },
    });
    if (downvote) {
      await prisma.commentDownvote.delete({
        where: { commentId_userId: { commentId, userId } },
      });
      await prisma.comment.update({
        where: { id: commentId },
        data: { downvotes: { decrement: 1 } },
      });
    }

    const existing = await prisma.commentUpvote.findUnique({
      where: { commentId_userId: { commentId, userId } },
    });
    if (existing) {
      const updatedComment = await prisma.comment.findUnique({ where: { id: commentId } });
      return new Response(JSON.stringify(updatedComment), { status: 200 });
    }
    await prisma.commentUpvote.create({
      data: { commentId, userId },
    });
    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: { upvotes: { increment: 1 } },
    });
    return new Response(JSON.stringify(updatedComment));
  }

  if (action === "downvote") {
    // Remove any existing upvote by this user and decrement upvotes if needed
    const upvote = await prisma.commentUpvote.findUnique({
      where: { commentId_userId: { commentId, userId } },
    });
    if (upvote) {
      await prisma.commentUpvote.delete({
        where: { commentId_userId: { commentId, userId } },
      });
      await prisma.comment.update({
        where: { id: commentId },
        data: { upvotes: { decrement: 1 } },
      });
    }

    const existing = await prisma.commentDownvote.findUnique({
      where: { commentId_userId: { commentId, userId } },
    });
    if (existing) {
      const updatedComment = await prisma.comment.findUnique({ where: { id: commentId } });
      return new Response(JSON.stringify(updatedComment), { status: 200 });
    }
    await prisma.commentDownvote.create({
      data: { commentId, userId },
    });
    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: { downvotes: { increment: 1 } },
    });
    return new Response(JSON.stringify(updatedComment));
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const blogId = searchParams.get("blogId");

  if (!blogId) {
    return new Response(JSON.stringify({ error: "Missing blogId" }), { status: 400 });
  }

  const comments = await prisma.comment.findMany({
    where: { blogId: Number(blogId) },
    orderBy: { id: "asc" },
  });

  return new Response(JSON.stringify(comments), { status: 200 });
}