import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/client/client.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET() {
  try {
    const latest = await prisma.image.findFirst({
      orderBy: { id: "desc" },
      select: {
        id: true,
        url: true,
        title: true,
        author: true,
      },
    });
    if (!latest) {
      return NextResponse.json({ error: "No images found" }, { status: 404 });
    }
    return NextResponse.json(latest);
  } catch (error) {
    console.error("Error fetching latest gallery image:", error);
    return NextResponse.json({ error: "Failed to fetch latest image" }, { status: 500 });
  }
}