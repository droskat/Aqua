import { useParams } from "next/navigation";

export default function BlogDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Details</h1>
      <p>Blog ID: {id}</p>
      {/* Fetch and display blog details, comments, and upvote functionality */}
    </div>
  );
}