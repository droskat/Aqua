import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs/promises";

const prisma = new PrismaClient();
const UPLOAD_DIR = path.join(process.cwd(), "public/uploads");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const fileName = `${uuidv4()}-${file.name}`;
    const filePath = path.join(UPLOAD_DIR, fileName);

    // Ensure the upload directory exists
    await fs.mkdir(UPLOAD_DIR, { recursive: true });

    // Save the file to the upload directory
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    // Save the file URL to the database
    const imageUrl = `/uploads/${fileName}`;
    await prisma.image.create({
      data: { url: imageUrl },
    });

    return NextResponse.json({ message: "Image uploaded successfully", url: imageUrl });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}