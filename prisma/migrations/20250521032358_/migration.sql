/*
  Warnings:

  - A unique constraint covering the columns `[memberId,groupId]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Member_groupId_key";

-- DropIndex
DROP INDEX "Member_memberId_key";

-- DropIndex
DROP INDEX "Question_quizzId_key";

-- DropIndex
DROP INDEX "Review_authorId_key";

-- AlterTable
ALTER TABLE "Assignment" ALTER COLUMN "submissionDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "startDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET DATA TYPE TEXT,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "requirements" SET NOT NULL,
ALTER COLUMN "requirements" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Member_memberId_groupId_key" ON "Member"("memberId", "groupId");
