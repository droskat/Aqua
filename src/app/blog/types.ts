export interface Comment {
  id: number;
  content: string;
  upvotes: number;
  downvotes: number;
}

export interface BlogType {
  comments: Comment[];
  id: number;
  title: string;
  content: string;
  authorId: number;
  upvotes: number;
  upvotedBy: string[];
}