"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

interface BlogType {
  id: number;
  title: string;
  content: string;
  upvotes: number;
}

interface GalleryType {
  id: number;
  title: string;
  url: string;
  author: string;
}

interface ForumThread {
  id: number;
  title: string;
}

export default function Home() {
  const [topBlog, setTopBlog] = useState<BlogType | null>(null);
  const [latestScape, setLatestScape] = useState<GalleryType | null>(null);
  const [latestThreads, setLatestThreads] = useState<ForumThread[]>([]);

  useEffect(() => {
    const fetchTopBlog = async () => {
      const response = await fetch("/api/blogs?limit=1&sort=upvotes_desc");
      if (response.ok) {
        const data = await response.json();
        setTopBlog(data[0] || null);
      }
    };
    const fetchLatestScape = async () => {
      const response = await fetch("/api/gallery/latest");
      if (response.ok) {
        const data = await response.json();
        setLatestScape(data || null);
      }
    };
    fetchTopBlog();
    fetchLatestScape();
    fetch("/api/forums?limit=3&sort=latest")
      .then(res => res.json())
      .then(setLatestThreads);
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>ScapeNation</h1>
      <p className={styles.subtitle}>The Ultimate Community for Aquarium Enthusiasts</p>

      {/* Featured Scape Section */}
      <section className={styles.featuredScapeSection}>
        <h2>Featured Scape</h2>
        {latestScape ? (
          <div className={styles.featuredScapeCard}>
            <img src={latestScape.url} alt={latestScape.title} className={styles.featuredScapeImage} />
            <div className={styles.imageMeta}>
              <h3 className={styles.featuredScapeTitle}>{latestScape.title}</h3>
              <p className={styles.featuredScapeAuthor}>by {latestScape.author}</p>
            </div>
          </div>
        ) : (
          <p>No featured scape yet.</p>
        )}
      </section>

      {/* Top Blog Spot Section */}
      <section className={styles.topBlogSection}>
        <h2>Top Blog Spot</h2>
        {topBlog ? (
          <Link href={`/blog/${topBlog.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className={styles.topBlogCard}>
              <h3 className={styles.topBlogTitle}>{topBlog.title}</h3>
              <span className={styles.topBlogUpvotes}>Upvotes: {topBlog.upvotes}</span>
            </div>
          </Link>
        ) : (
          <p>No top blog post yet.</p>
        )}
      </section>

      {/* Latest Forum Threads Section */}
      <section>
        <h2>Latest Forum Threads</h2>
        <ul>
          {latestThreads.map(thread => (
            <li key={thread.id}>
              <Link href={`/forums/${thread.id}`}>{thread.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}