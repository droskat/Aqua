"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Gallery.module.css";

type Image = {
  id: number;
  url: string;
};

export default function Gallery() {
  const [images, setImages] = useState<Image[]>([]);

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

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Gallery</h1>
      <p className={styles.description}>
        Check out our amazing collection of images and upload your own!
      </p>

      {/* Link to Upload Page */}
      <Link href="/gallery/upload">
        <button className={styles.uploadButton}>Uppload your scape</button>
      </Link>

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