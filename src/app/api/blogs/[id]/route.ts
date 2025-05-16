import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/client/client.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(
  req: Request,
  context: { params: { id: string } } | Promise<{ params: { id: string } }>
) {
  try {
    const awaitedContext = await context;
    const id = Number(awaitedContext.params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid blog id" }, { status: 400 });
    }

    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        comments: true,
      },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}