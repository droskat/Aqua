import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/client/client.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(
  req: Request,
  context: { params: { id: string } }
) {
  const { params } = context;
  const threadId = Number(params.id);
  const { content, userId, parentId } = await req.json();

  if (!content || !userId) {
    return NextResponse.json({ error: "Missing content or userId" }, { status: 400 });
  }

  const comment = await prisma.forumComment.create({
    data: {
      content,
      authorId: userId,
      threadId,
      parentId: parentId ?? null,
    },
    include: {
      replies: true,
    },
  });

  return NextResponse.json(comment, { status: 201 });
}

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  const { params } = context;
  const threadId = Number(params.id);

  // Fetch all comments for the thread
  const allComments = await prisma.forumComment.findMany({
    where: { threadId },
    orderBy: { createdAt: "asc" },
  });

  // Build a map of id -> comment
  const commentMap: Record<number, any> = {};
  allComments.forEach(comment => {
    comment.replies = [];
    commentMap[comment.id] = comment;
  });

  // Build the tree
  const roots: any[] = [];
  allComments.forEach(comment => {
    if (comment.parentId) {
      if (commentMap[comment.parentId]) {
        commentMap[comment.parentId].replies.push(comment);
      }
    } else {
      roots.push(comment);
    }
  });

  return NextResponse.json(roots);
}