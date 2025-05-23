import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../../../generated/client/client.js";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { commentId, userId, action } = await req.json();

  if (!commentId || !userId || !["upvote", "downvote"].includes(action)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // Check if user already upvoted or downvoted
  const existingUpvote = await prisma.forumCommentUpvote.findUnique({
    where: { commentId_userId: { commentId, userId } },
  });
  const existingDownvote = await prisma.forumCommentDownvote.findUnique({
    where: { commentId_userId: { commentId, userId } },
  });

  if (action === "upvote") {
    // Remove downvote if exists
    if (existingDownvote) {
      await prisma.forumCommentDownvote.delete({
        where: { commentId_userId: { commentId, userId } },
      });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { downvotes: { decrement: 1 } },
      });
    }
    if (existingUpvote) {
      // Remove upvote (toggle off)
      await prisma.forumCommentUpvote.delete({
        where: { commentId_userId: { commentId, userId } },
      });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { upvotes: { decrement: 1 } },
      });
    } else {
      // Add upvote
      await prisma.forumCommentUpvote.create({
        data: { commentId, userId },
      });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { upvotes: { increment: 1 } },
      });
    }
  } else if (action === "downvote") {
    // Remove upvote if exists
    if (existingUpvote) {
      await prisma.forumCommentUpvote.delete({
        where: { commentId_userId: { commentId, userId } },
      });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { upvotes: { decrement: 1 } },
      });
    }
    if (existingDownvote) {
      // Remove downvote (toggle off)
      await prisma.forumCommentDownvote.delete({
        where: { commentId_userId: { commentId, userId } },
      });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { downvotes: { decrement: 1 } },
      });
    } else {
      // Add downvote
      await prisma.forumCommentDownvote.create({
        data: { commentId, userId },
      });
      await prisma.forumComment.update({
        where: { id: commentId },
        data: { downvotes: { increment: 1 } },
      });
    }
  }

  const updatedComment = await prisma.forumComment.findUnique({
    where: { id: commentId },
    select: { upvotes: true, downvotes: true },
  });

  return NextResponse.json(updatedComment);
}