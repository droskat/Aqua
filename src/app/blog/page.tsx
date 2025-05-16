"use client";
import { useEffect, useState } from "react";
import { BlogType } from "./types";
import { useSession, signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

// Main Blog Page Component
export default function Blog() {
  const { data: session, status } = useSession();
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  const fetchBlogs = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/blogs?page=${page}&limit=10`);
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      if (data.length < 10) {
        setHasMore(false);
      }
      setBlogs((prevBlogs) => [...prevBlogs, ...data]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  const loadMoreBlogs = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <h1>Blog</h1>
      <div>
        {loading && <p>Loading blogs...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && blogs.length === 0 && <p>No blogs available.</p>}
        {!loading && !error && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {blogs.map((blog) => (
              <li
                key={blog.id}
                style={{
                  cursor: "pointer",
                  padding: "12px 0",
                  borderBottom: "1px solid #eee",
                  fontSize: "18px",
                  color: "#0070f3",
                }}
                onClick={() => router.push(`/blog/${blog.id}`)}
              >
                {blog.title}
              </li>
            ))}
          </ul>
        )}
        {!loading && hasMore && (
          <button onClick={loadMoreBlogs} style={{ marginTop: "16px" }}>
            Load More
          </button>
        )}
        {!hasMore && <p>No more blogs to load.</p>}
      </div>
    </div>
  );
}