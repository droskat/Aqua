import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { blogId } = await req.json();
  const blog = await prisma.blog.update({
    where: { id: blogId },
    data: { upvotes: { increment: 1 } },
  });
  return new Response(JSON.stringify(blog));
}