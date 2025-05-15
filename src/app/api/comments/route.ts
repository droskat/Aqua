import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();
  const comment = await prisma.comment.create({ data });
  return new Response(JSON.stringify(comment));
}