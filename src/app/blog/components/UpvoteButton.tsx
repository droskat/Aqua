import React from "react";

interface UpvoteButtonProps {
  blogId: number;
  upvotes: number;
  upvoted: boolean;
  onToggle: (blogId: number) => void;
  isLoggedIn: boolean;
}

export default function UpvoteButton({
  blogId,
  upvotes,
  upvoted,
  onToggle,
  isLoggedIn,
}: UpvoteButtonProps) {
  return (
    <div>
      <button
        onClick={() => onToggle(blogId)}
        disabled={!isLoggedIn}
        style={{
          background: upvoted ? "#4caf50" : "#eee",
          color: upvoted ? "#fff" : "#333",
          border: "none",
          borderRadius: "4px",
          padding: "8px 16px",
          cursor: isLoggedIn ? "pointer" : "not-allowed",
          marginRight: "8px",
          fontWeight: upvoted ? "bold" : "normal",
          transition: "background 0.2s, color 0.2s",
        }}
      >
        {upvoted ? "Upvoted" : "Upvote"} {upvotes}
      </button>
    </div>
  );
}