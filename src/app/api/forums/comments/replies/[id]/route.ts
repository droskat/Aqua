import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/client";

const prisma = new PrismaClient();

export async function POST(
  req: Request,
  context: { params: { id: string } } | Promise<{ params: { id: string } }>
) {
  const { params } = await context; // Await context before using params
  console.log(params)
  const parentId = Number(params.id);

  const { content, userId, threadId } = await req.json();

  if (!content || !userId || !threadId || isNaN(parentId)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Create the reply as a ForumComment with parentId
  const reply = await prisma.forumComment.create({
    data: {
      content,
      authorId: userId,
      threadId,
      parentId,
    },
    include: {
      replies: true,
    },
  });

  return NextResponse.json(reply, { status: 201 });
}