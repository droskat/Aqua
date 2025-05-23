-- CreateTable
CREATE TABLE "ForumThread" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "downvotes" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ForumThread_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ForumComment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "threadId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "downvotes" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ForumComment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ForumComment_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "ForumThread" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ForumThreadUpvote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "threadId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "forumThreadId" INTEGER,
    CONSTRAINT "ForumThreadUpvote_forumThreadId_fkey" FOREIGN KEY ("forumThreadId") REFERENCES "ForumThread" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ForumThreadDownvote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "threadId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "forumThreadId" INTEGER,
    CONSTRAINT "ForumThreadDownvote_forumThreadId_fkey" FOREIGN KEY ("forumThreadId") REFERENCES "ForumThread" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ForumCommentUpvote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "commentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "forumCommentId" INTEGER,
    CONSTRAINT "ForumCommentUpvote_forumCommentId_fkey" FOREIGN KEY ("forumCommentId") REFERENCES "ForumComment" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ForumCommentDownvote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "commentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "forumCommentId" INTEGER,
    CONSTRAINT "ForumCommentDownvote_forumCommentId_fkey" FOREIGN KEY ("forumCommentId") REFERENCES "ForumComment" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ForumThreadUpvote_threadId_userId_key" ON "ForumThreadUpvote"("threadId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ForumThreadDownvote_threadId_userId_key" ON "ForumThreadDownvote"("threadId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ForumCommentUpvote_commentId_userId_key" ON "ForumCommentUpvote"("commentId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ForumCommentDownvote_commentId_userId_key" ON "ForumCommentDownvote"("commentId", "userId");
