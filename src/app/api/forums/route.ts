import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/client/client.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get("limit")) || 10;
  const sort = searchParams.get("sort") || "latest";
  const threads = await prisma.forumThread.findMany({
    orderBy: { createdAt: sort === "latest" ? "desc" : "asc" },
    take: limit,
    select: { id: true, title: true, upvotes: true, createdAt: true },
  });
  return NextResponse.json(threads);
}

export async function POST(req: Request) {
  const { title, content, authorId } = await req.json();
  if (!title || !content) {
    return NextResponse.json({ error: "Title and content required" }, { status: 400 });
  }
  const thread = await prisma.forumThread.create({
    data: { title, content, authorId: authorId || 1 }, // Replace with session user id
  });
  return NextResponse.json(thread, { status: 201 });
}