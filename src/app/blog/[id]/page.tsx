"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { BlogType } from "../types";
import BlogCard from "../components/BlogCard";
import toast from "react-hot-toast";

export default function BlogDetails() {
  const { id } = useParams();
  const { data: session } = useSession();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [upvotedBlogs, setUpvotedBlogs] = useState<Set<number>>(new Set());
  const [expandedBlogId, setExpandedBlogId] = useState<number | null>(null);
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlog();
  }, [id]);
  const toggleUpvote = async (blogId: number) => {
    if (!session?.user?.id) {
      toast.error("Sign in to upvote");
      return;
    }
    const userId = Number(session.user.id);
    if (isNaN(userId)) {
      toast.error("Invalid user ID");
      return;
    }
    try {
      const response = await fetch("/api/upvotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogId, userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to toggle upvote");
      }

      const updatedBlog = await response.json();
      setBlog(prev =>
        prev
          ? { ...updatedBlog, comments: prev.comments }
          : updatedBlog
      );
    } catch (err) {
      console.error(err);
    }
  };

  // Toggle Comment Section (just expand/collapse)
  const toggleCommentSection = async () => {
    if (expanded) {
      setExpanded(false);
      return;
    }
    // Fetch comments only if not already loaded
    if (blog && (!blog.comments || blog.comments.length === 0)) {
      try {
        const response = await fetch(`/api/comments?blogId=${blog.id}`);
        if (!response.ok) throw new Error("Failed to fetch comments");
        const comments = await response.json();
        setBlog((prev) => (prev ? { ...prev, comments } : prev));
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      }
    }
    setExpanded(true);
  };

  // Add Comment
  const addComment = async (blogId: number, content: string) => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blogId, content }),
    });

    if (response.ok) {
      const newComment = await response.json();
      setBlog((prev) =>
        prev
          ? { ...prev, comments: [...(prev.comments || []), newComment] }
          : prev
      );
    }
  };

  // Toggle Comment Vote
  const toggleCommentVote = async (commentId: number, action: "upvote" | "downvote") => {
    if (!session?.user?.id) {
      toast.error("Sign in to vote");
      return;
    }
    const userId = Number(session.user.id);
    if (isNaN(userId)) {
      toast.error("Invalid user ID");
      return;
    }
    const response = await fetch("/api/comments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commentId, action, userId }),
    });

    if (response.ok) {
      const updatedComment = await response.json();
      setBlog((prev) =>
        prev
          ? {
              ...prev,
              comments: prev.comments.map((comment) =>
                comment.id === updatedComment.id ? updatedComment : comment
              ),
            }
          : prev
      );
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!blog) return <p>Blog not found.</p>;

  // Determine if the current user has upvoted
  const userId = session?.user?.id;
  const upvoted = !!userId && Array.isArray(blog.upvotedBy) && blog.upvotedBy.includes(userId);

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <BlogCard
  key={blog.id}
  blog={blog}
  upvoted={upvoted}
  expanded={expanded}
  onToggleUpvote={toggleUpvote}
  onToggleCommentSection={toggleCommentSection}
  onAddComment={addComment}
  onVoteComment={toggleCommentVote}
  isLoggedIn={!!session}
/>
      
    </div>
  );
}