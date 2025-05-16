import { BlogType, Comment } from "../types";
import UpvoteButton from "./UpvoteButton";
import CommentSection from "./CommentSection";

interface BlogCardProps {
  blog: BlogType;
  upvoted: boolean;
  expanded: boolean;
  onToggleUpvote: (blogId: number) => void;
  onToggleCommentSection: (blogId: number) => void;
  onAddComment: (blogId: number, content: string) => void;
  onVoteComment: (commentId: number, action: "upvote" | "downvote") => void;
  isLoggedIn: boolean;
}

export default function BlogCard({
  blog,
  upvoted,
  expanded,
  onToggleUpvote,
  onToggleCommentSection,
  onAddComment,
  onVoteComment,
  isLoggedIn,
}: BlogCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "16px 0",
        borderRadius: "8px",
      }}
    >
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <UpvoteButton
        blogId={blog.id}
        upvotes={blog.upvotes}
        upvoted={upvoted}
        onToggle={onToggleUpvote}
        isLoggedIn={isLoggedIn}
      />
      <button onClick={() => onToggleCommentSection(blog.id)}>
        {expanded ? "Hide Comments" : "Show Comments"}
      </button>
      {expanded && (
        <CommentSection
          blogId={blog.id}
          comments={blog.comments}
          onAddComment={onAddComment}
          onVote={onVoteComment}
          isLoggedIn={isLoggedIn}
        />
      )}
    </div>
  );
}