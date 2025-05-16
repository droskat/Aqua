"use client";

import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./Gallery.module.css";
import toast from "react-hot-toast";

type Image = {
  id: number;
  url: string;
};

export default function Gallery() {
  const [images, setImages] = useState<Image[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  // Fetch images from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/gallery/images");
        const data = await response.json();

        if (Array.isArray(data)) {
          setImages(data);
        } else {
          console.error("API did not return an array:", data);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleUploadClick = (e: React.MouseEvent) => {
    if (!session) {
      toast.error("Sign in to upload images.");
      signIn();
    } else {
      router.push("/gallery/upload");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Gallery</h1>
      <p className={styles.description}>
        Check out our amazing collection of images and upload your own!
      </p>

      <button
        className={styles.uploadButton}
        onClick={handleUploadClick}
      >
        Upload your scape
      </button>

      {/* Gallery Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
        }}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Image ${image.id}`}
            style={{
              width: "100%",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
}