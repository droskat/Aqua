"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UploadPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) {
      router.replace("/gallery");
    }
  }, [session, status, router]);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("/api/gallery/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
        setImage(null);
      } else {
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred.");
    } finally {
      setUploading(false);
    }
  };

  if (!session) {
    return null; // Optionally, show a loading spinner here
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Upload your image</h1>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}