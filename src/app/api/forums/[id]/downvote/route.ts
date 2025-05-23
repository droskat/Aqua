import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/client";

const prisma = new PrismaClient();

export async function POST(
  req: Request,
  context: { params: { id: string } }
) {
  const { params } = context;
  const threadId = Number(params.id);
  const { userId } = await req.json();

  if (!userId || isNaN(threadId)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // Toggle downvote
  const existing = await prisma.forumThreadDownvote.findUnique({
    where: { threadId_userId: { threadId, userId } },
  });

  if (existing) {
    await prisma.forumThreadDownvote.delete({
      where: { threadId_userId: { threadId, userId } },
    });
    await prisma.forumThread.update({
      where: { id: threadId },
      data: { downvotes: { decrement: 1 } },
    });
  } else {
    await prisma.forumThreadDownvote.create({
      data: { threadId, userId },
    });
    await prisma.forumThread.update({
      where: { id: threadId },
      data: { downvotes: { increment: 1 } },
    });
  }

  const thread = await prisma.forumThread.findUnique({ where: { id: threadId } });
  return NextResponse.json(thread);
}