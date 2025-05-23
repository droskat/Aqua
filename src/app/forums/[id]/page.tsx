"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import CommentItem from "../components/CommentSection";
import styles from "./page.module.css";

interface ForumThread {
  id: number;
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
  comments: ForumComment[];
  userUpvoted: number;
  userDownvoted: number;
}

interface ForumComment {
  id: number;
  content: string;
  upvotes: number;
  downvotes: number;
  replies?: ForumComment[];
  userUpvoted: number;
  userDownvoted: number;
}

export default function ForumThreadPage() {
  const { id } = useParams();
  const [thread, setThread] = useState<ForumThread | null>(null);
  const [comment, setComment] = useState("");
  const [voteLoading, setVoteLoading] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    fetch(`/api/forums/${id}?userId=${1}`)
      .then(res => res.json())
      .then(data => setThread({ ...data, comments: data.comments ?? [] }));
  }, [id]);

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/forums/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: comment }),
    });
    if (res.ok) {
      const newComment = await res.json();
      setThread(thread =>
        thread
          ? { ...thread, comments: [...thread.comments, newComment] }
          : thread
      );
      setComment("");
    }
  };

  const handleVote = async (action: "upvote" | "downvote") => {
    if (!session?.user?.id) {
      alert("Sign in to vote");
      return;
    }
    setVoteLoading(true);
    try {
      const res = await fetch("/api/forums/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          threadId: thread?.id,
          userId: Number(session.user.id),
          action,
        }),
      });
      if (res.ok) {
        const updated = await res.json();
        setThread(prev => prev ? { ...prev, upvotes: updated.upvotes, downvotes: updated.downvotes } : prev);
      }
    } finally {
      setVoteLoading(false);
    }
  };

  if (!thread) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{thread.title}</h2>
      <p className={styles.content}>{thread.content}</p>
      <div className={styles.voteButtons}>
        <button onClick={() => handleVote("upvote")} disabled={voteLoading}>
          Upvote ({thread.upvotes})
        </button>
        <button onClick={() => handleVote("downvote")} disabled={voteLoading}>
          Downvote ({thread.downvotes})
        </button>
      </div>
      <h3 className={styles.commentsHeader}>Comments</h3>
      <form onSubmit={handleComment} className={styles.commentForm}>
        <input
          className ={styles.commentInput}
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Add a comment"
          required
          className={styles.commentInput}
        />
        <button className={styles.commentSubmit} type="submit">Comment</button>
      </form>
      <ul className={styles.commentList}>
        {(thread.comments ?? []).map(c => (
          <CommentItem
            key={c.id}
            comment={c}
            threadId={thread.id}
            setComments={commentsUpdater =>
              setThread(thread =>
                thread
                  ? {
                      ...thread,
                      comments:
                        typeof commentsUpdater === "function"
                          ? commentsUpdater(thread.comments)
                          : commentsUpdater,
                    }
                  : thread
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}