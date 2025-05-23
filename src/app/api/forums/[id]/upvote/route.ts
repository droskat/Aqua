import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/client/client.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(
  req: Request,
  context: { params: { id: string } } | Promise<{ params: { id: string } }>
) {
  const { params } = await context;
  const threadId = Number(params.id);
  const { userId } = await req.json();
  if (!userId) return NextResponse.json({ error: "User required" }, { status: 400 });

  // Toggle upvote
  const existing = await prisma.forumThreadUpvote.findUnique({
    where: { threadId_userId: { threadId, userId } },
  });
  if (existing) {
    await prisma.forumThreadUpvote.delete({
      where: { threadId_userId: { threadId, userId } },
    });
    await prisma.forumThread.update({ where: { id: threadId }, data: { upvotes: { decrement: 1 } } });
  } else {
    await prisma.forumThreadUpvote.create({ data: { threadId, userId } });
    await prisma.forumThread.update({ where: { id: threadId }, data: { upvotes: { increment: 1 } } });
  }
  const thread = await prisma.forumThread.findUnique({ where: { id: threadId } });
  return NextResponse.json(thread);
}