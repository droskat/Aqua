import { Comment } from "../types";

interface CommentSectionProps {
  blogId: number;
  comments: Comment[];
  onAddComment: (blogId: number, content: string) => void;
  onVote: (commentId: number, action: "upvote" | "downvote") => void;
}

export default function CommentSection({
  blogId,
  comments,
  onAddComment,
  onVote,
}: CommentSectionProps) {
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
            <button onClick={() => onVote(comment.id, "upvote")}>Upvote</button>
            <button onClick={() => onVote(comment.id, "downvote")}>Downvote</button>
          </div>
        ))
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const content = (e.target as any).elements.content.value;
          onAddComment(blogId, content);
          (e.target as any).reset();
        }}
      >
        <input type="text" name="content" placeholder="Add a comment" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}