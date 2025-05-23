import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/client/client.js";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { threadId, userId, action } = await req.json();

  if (!threadId || !userId || !["upvote", "downvote"].includes(action)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // Check if user already upvoted or downvoted
  const existingUpvote = await prisma.forumThreadUpvote.findUnique({
    where: { threadId_userId: { threadId, userId } },
  });
  const existingDownvote = await prisma.forumThreadDownvote.findUnique({
    where: { threadId_userId: { threadId, userId } },
  });

  if (action === "upvote") {
    // Remove downvote if exists
    if (existingDownvote) {
      await prisma.forumThreadDownvote.delete({
        where: { threadId_userId: { threadId, userId } },
      });
      await prisma.forumThread.update({
        where: { id: threadId },
        data: { downvotes: { decrement: 1 } },
      });
    }
    if (existingUpvote) {
      // Remove upvote (toggle off)
      await prisma.forumThreadUpvote.delete({
        where: { threadId_userId: { threadId, userId } },
      });
      await prisma.forumThread.update({
        where: { id: threadId },
        data: { upvotes: { decrement: 1 } },
      });
    } else {
      // Add upvote
      await prisma.forumThreadUpvote.create({
        data: { threadId, userId },
      });
      await prisma.forumThread.update({
        where: { id: threadId },
        data: { upvotes: { increment: 1 } },
      });
    }
  } else if (action === "downvote") {
    // Remove upvote if exists
    if (existingUpvote) {
      await prisma.forumThreadUpvote.delete({
        where: { threadId_userId: { threadId, userId } },
      });
      await prisma.forumThread.update({
        where: { id: threadId },
        data: { upvotes: { decrement: 1 } },
      });
    }
    if (existingDownvote) {
      // Remove downvote (toggle off)
      await prisma.forumThreadDownvote.delete({
        where: { threadId_userId: { threadId, userId } },
      });
      await prisma.forumThread.update({
        where: { id: threadId },
        data: { downvotes: { decrement: 1 } },
      });
    } else {
      // Add downvote
      await prisma.forumThreadDownvote.create({
        data: { threadId, userId },
      });
      await prisma.forumThread.update({
        where: { id: threadId },
        data: { downvotes: { increment: 1 } },
      });
    }
  }

  const updatedThread = await prisma.forumThread.findUnique({
    where: { id: threadId },
    select: { upvotes: true, downvotes: true },
  });

  return NextResponse.json(updatedThread);
}