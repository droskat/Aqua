import { Comment } from "../types";
import toast from "react-hot-toast";

interface CommentSectionProps {
  blogId: number;
  comments: Comment[];
  onAddComment: (blogId: number, content: string) => void;
  onVote: (commentId: number, action: "upvote" | "downvote") => void;
  isLoggedIn: boolean;
}

export default function CommentSection({
  blogId,
  comments,
  onAddComment,
  onVote,
  isLoggedIn,
}: CommentSectionProps) {
  // Handler for voting with auth check
  const handleVote = (commentId: number, action: "upvote" | "downvote") => {
    if (!isLoggedIn) {
      toast.error("Sign in to vote.");
      return;
    }
    onVote(commentId, action);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <h3>Comments</h3>
      {!comments || comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} style={{ marginBottom: "8px" }}>
            <p>{comment.content}</p>
            <p>
              Upvotes: {comment.upvotes} | Downvotes: {comment.downvotes}
            </p>
            <button
              onClick={() => handleVote(comment.id, "upvote")}
            >
              Upvote
            </button>
            <button
              onClick={() => handleVote(comment.id, "downvote")}
            >
              Downvote
            </button>
          </div>
        ))
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!isLoggedIn) {
            toast.error("Sign in to comment.");
            return;
          }
          const content = (e.target as any).elements.content.value;
          onAddComment(blogId, content);
          (e.target as any).reset();
        }}
      >
        <input
          type="text"
          name="content"
          placeholder="Add a comment"
          required
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}