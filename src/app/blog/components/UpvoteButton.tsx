interface UpvoteButtonProps {
  blogId: number;
  upvotes: number;
  upvoted: boolean;
  onToggle: (blogId: number) => void;
}

export default function UpvoteButton({ blogId, upvotes, upvoted, onToggle }: UpvoteButtonProps) {
  return (
    <div>
      <p>Upvotes: {upvotes}</p>
      <button
        onClick={() => onToggle(blogId)}
        style={{
          backgroundColor: upvoted ? "green" : "gray",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {upvoted ? "Remove Upvote" : "Upvote"}
      </button>
    </div>
  );
}