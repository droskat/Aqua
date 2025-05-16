-- CreateTable
CREATE TABLE "CommentDownvote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "commentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CommentDownvote_commentId_userId_key" ON "CommentDownvote"("commentId", "userId");
