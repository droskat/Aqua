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
  const { commentId, action } = await req.json();

  const updatedComment = await prisma.comment.update({
    where: { id: commentId },
    data: {
      upvotes: action === "upvote" ? { increment: 1 } : undefined,
      downvotes: action === "downvote" ? { increment: 1 } : undefined,
    },
  });

  return new Response(JSON.stringify(updatedComment));
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