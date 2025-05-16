import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/client/client.js";
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

export async function GET() {
  try {
    const images = await prisma.image.findMany({
      select: { id: true, url: true },
    });
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}