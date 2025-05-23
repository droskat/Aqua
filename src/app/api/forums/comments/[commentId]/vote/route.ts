import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../../../generated/client/client.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(
  req: Request,
  context: { params: { commentId: string } } | Promise<{ params: { commentId: string } }>
) {
  const { params } = await context;
  const commentId = Number(params.commentId);
  const { userId, action } = await req.json();

  if (!commentId || !userId || !["upvote", "downvote"].includes(action)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  if (action === "upvote") {
    // Remove any existing downvote by this user and decrement downvotes if needed
    const downvote = await prisma.commentDownvote.findUnique({
      where: { commentId_userId: { commentId, userId } },
    });
    if (downvote) {
      await prisma.commentDownvote.delete({
        where: { commentId_userId: { commentId, userId } },
      });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { downvotes: { decrement: 1 } },
      });
    }

    // Add upvote if not exists, else remove upvote (toggle)
    const existing = await prisma.commentUpvote.findUnique({
      where: { commentId_userId: { commentId, userId } },
    });
    if (!existing) {
      await prisma.commentUpvote.create({ data: { commentId, userId } });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { upvotes: { increment: 1 } },
      });
    } else {
      await prisma.commentUpvote.delete({
        where: { commentId_userId: { commentId, userId } },
      });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { upvotes: { decrement: 1 } },
      });
    }
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
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { upvotes: { decrement: 1 } },
      });
    }

    // Add downvote if not exists, else remove downvote (toggle)
    const existing = await prisma.commentDownvote.findUnique({
      where: { commentId_userId: { commentId, userId } },
    });
    if (!existing) {
      await prisma.commentDownvote.create({ data: { commentId, userId } });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { downvotes: { increment: 1 } },
      });
    } else {
      await prisma.commentDownvote.delete({
        where: { commentId_userId: { commentId, userId } },
      });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { downvotes: { decrement: 1 } },
      });
    }
  }

  // Return updated comment with user vote info
  const updatedComment = await prisma.forumComment.findUnique({
    where: { id: commentId },
  });

  const userUpvoted = !!(await prisma.commentUpvote.findUnique({
    where: { commentId_userId: { commentId, userId } },
  }));
  const userDownvoted = !!(await prisma.commentDownvote.findUnique({
    where: { commentId_userId: { commentId, userId } },
  }));

  return NextResponse.json({
    ...updatedComment,
    userUpvoted,
    userDownvoted,
  });
}