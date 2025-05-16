"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlogType } from "./types";
import BlogCard from "./components/BlogCard";

// Main Blog Page Component
export default function Blog() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [upvotedBlogs, setUpvotedBlogs] = useState<Set<number>>(new Set());
  const [expandedBlogId, setExpandedBlogId] = useState<number | null>(null);

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

  const toggleUpvote = async (blogId: number) => {
    try {
      const response = await fetch("/api/upvotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogId, userId: 1 }), // Replace `1` with the actual user ID
      });

      if (!response.ok) {
        throw new Error("Failed to toggle upvote");
      }

      const updatedBlog = await response.json();
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.id === updatedBlog.id ? updatedBlog : blog
        )
      );

      setUpvotedBlogs((prevUpvotedBlogs) => {
        const newUpvotedBlogs = new Set(prevUpvotedBlogs);
        if (newUpvotedBlogs.has(blogId)) {
          newUpvotedBlogs.delete(blogId);
        } else {
          newUpvotedBlogs.add(blogId);
        }
        return newUpvotedBlogs;
      });
    } catch (err) {
      console.error(err);
    }
  };

  const toggleCommentSection = async (blogId: number) => {
    if (expandedBlogId === blogId) {
      setExpandedBlogId(null);
      return;
    }

    // Only fetch if comments are not already loaded
    const blog = blogs.find((b) => b.id === blogId);
    if (blog && blog.comments && blog.comments.length > 0) {
      setExpandedBlogId(blogId);
      return;
    }

    try {
      const response = await fetch(`/api/comments?blogId=${blogId}`);
      if (!response.ok) throw new Error("Failed to fetch comments");
      const comments = await response.json();

      setBlogs((prevBlogs) =>
        prevBlogs.map((b) =>
          b.id === blogId ? { ...b, comments } : b
        )
      );
      setExpandedBlogId(blogId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    }
  };

  const addComment = async (blogId: number, content: string) => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blogId, content }),
    });

    if (response.ok) {
      const newComment = await response.json();
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.id === blogId
            ? { ...blog, comments: [...(blog.comments || []), newComment] }
            : blog
        )
      );
    }
  };

  const toggleCommentVote = async (commentId: number, action: "upvote" | "downvote") => {
    const response = await fetch("/api/comments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commentId, action }),
    });

    if (response.ok) {
      const updatedComment = await response.json();
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) => ({
          ...blog,
          comments: blog.comments.map((comment) =>
            comment.id === updatedComment.id ? updatedComment : comment
          ),
        }))
      );
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
      <Link href="/blog/new">Write a Blog</Link>
      <div>
        {loading && <p>Loading blogs...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && blogs.length === 0 && <p>No blogs available.</p>}
        {!loading &&
          !error &&
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              upvoted={upvotedBlogs.has(blog.id)}
              expanded={expandedBlogId === blog.id}
              onToggleUpvote={toggleUpvote}
              onToggleCommentSection={toggleCommentSection}
              onAddComment={addComment}
              onVoteComment={toggleCommentVote}
            />
          ))}
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