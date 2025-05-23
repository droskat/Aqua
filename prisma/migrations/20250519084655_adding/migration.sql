-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'anonymous',
    "author" TEXT NOT NULL DEFAULT 'anonymous'
);
INSERT INTO "new_Image" ("id", "url") SELECT "id", "url" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
