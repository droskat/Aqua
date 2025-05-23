-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ForumComment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "threadId" INTEGER NOT NULL,
    "parentId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "downvotes" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ForumComment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ForumComment_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "ForumThread" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ForumComment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ForumComment" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ForumComment" ("authorId", "content", "createdAt", "downvotes", "id", "threadId", "upvotes") SELECT "authorId", "content", "createdAt", "downvotes", "id", "threadId", "upvotes" FROM "ForumComment";
DROP TABLE "ForumComment";
ALTER TABLE "new_ForumComment" RENAME TO "ForumComment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
