/*
  Warnings:

  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `rejected` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "published",
DROP COLUMN "rejected",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';
