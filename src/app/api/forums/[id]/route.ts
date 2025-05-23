import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/client/client.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(
  req: Request,
  context: { params: { id: string } } | Promise<{ params: { id: string } }>
  
) {
  const awaitedContext = await context;
  const id = Number(awaitedContext.params.id);
  if (isNaN(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  // Get userId from query param if present
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId") ? Number(searchParams.get("userId")) : null;

  // Fetch the thread
  const thread = await prisma.forumThread.findUnique({
    where: { id },
  });
  if (!thread) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Fetch all comments for the thread
  const rawComments = await prisma.forumComment.findMany({
    where: { threadId: id },
    orderBy: { createdAt: "asc" },
  });

  // Fetch all upvotes/downvotes for these comments by the user (if userId provided)
  let userUpvotes: number[] = [];
  let userDownvotes: number[] = [];
  if (userId) {
    const upvotes = await prisma.forumCommentUpvote.findMany({
      where: { userId, commentId: { in: rawComments.map(c => c.id) } },
      select: { commentId: true },
    });
    userUpvotes = upvotes.map(u => u.commentId);

    const downvotes = await prisma.forumCommentDownvote.findMany({
      where: { userId, commentId: { in: rawComments.map(c => c.id) } },
      select: { commentId: true },
    });
    userDownvotes = downvotes.map(d => d.commentId);
  }

  // Define a type for comments with replies and voting info
  type CommentWithReplies = typeof rawComments[number] & {
    replies: CommentWithReplies[];
    userUpvoted: boolean;
    userDownvoted: boolean;
  };

  // Add 'replies' and voting info to each comment
  const allComments: CommentWithReplies[] = rawComments.map(comment => ({
    ...comment,
    replies: [],

    userUpvoted: userId ? userUpvotes.includes(comment.id) : false,
    userDownvoted: userId ? userDownvotes.includes(comment.id) : false,
  }));

  // Build a map of id -> comment
  const commentMap: Record<number, CommentWithReplies> = {};
  allComments.forEach(comment => {
    commentMap[comment.id] = comment;
  });

  // Build the tree
  const roots: CommentWithReplies[] = [];
  allComments.forEach(comment => {
    if (comment.parentId) {
      if (commentMap[comment.parentId]) {
        commentMap[comment.parentId].replies.push(comment);
      }
    } else {
      roots.push(comment);
    }
  });

  // Attach the nested comments to the thread
  return NextResponse.json({ ...thread, comments: roots });
}