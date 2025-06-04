import styles from "./CommentSection.module.css";
import { useState } from "react";

// Define ForumComment type if not imported from elsewhere
type ForumComment = {
  id: number;
  content: string;
  upvotes: number;
  downvotes: number;
  replies?: ForumComment[];
  userUpvoted: number;
  userDownvoted: number;

  // Add other fields as needed
};

interface AddReplyToTreeParams {
  comments: ForumComment[];
  parentId: number;
  reply: ForumComment;
}

function addReplyToTree(
  comments: ForumComment[],
  parentId: number,
  reply: ForumComment
): ForumComment[] {
  return comments.map((comment: ForumComment): ForumComment => {
    if (comment.id === parentId) {
      return {
        ...comment,
        replies: [...(comment.replies || []), reply],
      };
    }
    if (comment.replies && comment.replies.length > 0) {
      return {
        ...comment,
        replies: addReplyToTree(comment.replies, parentId, reply),
      };
    }
    return comment;
  });
}

// Helper to update a comment in the tree by id
function updateCommentInTree(comments: ForumComment[], updatedComment: ForumComment): ForumComment[] {
  return comments.map(comment => {
    if (comment.id === updatedComment.id) {
      return { ...comment, ...updatedComment };
    }
    if (comment.replies && comment.replies.length > 0) {
      return {
        ...comment,
        replies: updateCommentInTree(comment.replies, updatedComment),
      };
    }
    return comment;
  });
}

export default function CommentItem({ comment, threadId, setComments }: {
  comment: ForumComment;
  threadId: number;
  setComments: React.Dispatch<React.SetStateAction<ForumComment[]>>;
}) {
  const [reply, setReply] = useState("");
  const [showReply, setShowReply] = useState(false);
  const [repliesOpen, setRepliesOpen] = useState(false);

  const handleUpvote = async () => {
    const res = await fetch(`/api/forums/comments/${comment.id}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: 1, action: "upvote" }), // Replace with actual user id
    });
    if (res.ok) {
      const updated = await res.json();
      setComments(prevComments => updateCommentInTree(prevComments, updated));
    }
  };

  const handleDownvote = async () => {
    const res = await fetch(`/api/forums/comments/${comment.id}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: 1, action: "downvote" }), // Replace with actual user id
    });
    if (res.ok) {
      const updated = await res.json();
      setComments(prevComments => updateCommentInTree(prevComments, updated));
    }
  };

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/forums/comments/replies/${comment.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: reply, userId: 1, threadId }),
    });
    if (res.ok) {
      const newReply = await res.json();
      setComments(prevComments => addReplyToTree(prevComments, comment.id, newReply));
      setReply("");
      setShowReply(false);
      setRepliesOpen(true); // Open replies after posting
    }
  };

  // Count replies (including nested)
  const replyCount = comment.replies ? comment.replies.length : 0;

  return (
    <li className={styles.commentItem}>
      
      <div
        onClick={() => replyCount > 0 && setRepliesOpen(open => !open)}
        className={`${styles.commentContainer} ${replyCount > 0 ? styles.commentContainerPointer : ""}`}
      >
        <div>
          {comment.content}
          <div className={styles.commentMeta}>

            {!repliesOpen && replyCount > 0 &&<div className={`${replyCount > 0 ? styles.replySideline : ""}`}>

              <span className={ styles.sidelineArrow}>&gt;</span>
            </div>
}
            {/* Reply count first */}
            {replyCount > 0 && !repliesOpen  && (
              <span className={styles.replyCount}>
                {replyCount} {replyCount === 1 ? "reply" : "replies"}
              </span>
            )}
            
            {/* Voting and reply actions */}
            <div className={`${styles.commentActions} ${!repliesOpen && replyCount > 0? styles.commentActionsoffSet : styles.commentActionsLegSet}`}>
              <button
                onClick={e => { e.stopPropagation(); handleUpvote(); }}
                title="Upvote"
                className={styles.voteButton}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.voteIcon} ${comment.userUpvoted ? styles.upvoted : ""}`}
                  viewBox="0 0 16 16"
                >
                  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg> {comment.upvotes}
              </button>
              <button
                onClick={e => { e.stopPropagation(); handleDownvote(); }}
                title="Downvote"
                className={styles.voteButton}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.voteIcon} ${comment.userDownvoted ? styles.downvoted : ""}`}
                  viewBox="0 0 16 16"
                >
                  <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77"/>
                </svg> {comment.downvotes}
              </button>
              <button
                onClick={e => { e.stopPropagation(); setShowReply(r => !r); }}
                className={styles.replyButton}
              >
                
<svg xmlns="http://www.w3.org/2000/svg" className={`${styles.replyIcon}`} viewBox="0 0 16 16">
  <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
</svg> reply
              </button>
            </div>
          </div>
        </div>
      </div>
      {showReply && (
        <form className={styles.replyForm} onSubmit={handleReply}>
          <input
            className={styles.replyInput}
            value={reply}
            onChange={e => setReply(e.target.value)}
            placeholder="Reply to this comment"
            required
          />
          <button type="submit" className={styles.replySubmitButton}>Post Reply</button>
        </form>
      )}
      {repliesOpen && comment.replies && comment.replies.length > 0 && (
        <ul className={styles.nested}>
          {comment.replies.map(reply => (
            <CommentItem
              key={reply.id}
              comment={reply}
              threadId={threadId}
              setComments={setComments}
            />
          ))}
        </ul>
      )}
    </li>
  );
}