/*
  Warnings:

  - You are about to drop the column `report` on the `Report` table. All the data in the column will be lost.
  - Added the required column `message` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "report",
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "title" TEXT;
