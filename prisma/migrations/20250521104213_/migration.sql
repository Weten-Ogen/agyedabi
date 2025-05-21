/*
  Warnings:

  - The values [VETTED] on the enum `UserStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `score` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserStatus_new" AS ENUM ('COMPLETED', 'UNASSIGNED', 'ONGOING', 'UNVETTED');
ALTER TABLE "User" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "status" TYPE "UserStatus_new" USING ("status"::text::"UserStatus_new");
ALTER TYPE "UserStatus" RENAME TO "UserStatus_old";
ALTER TYPE "UserStatus_new" RENAME TO "UserStatus";
DROP TYPE "UserStatus_old";
ALTER TABLE "User" ALTER COLUMN "status" SET DEFAULT 'UNASSIGNED';
COMMIT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "score" INTEGER NOT NULL,
ADD COLUMN     "vetted" BOOLEAN NOT NULL DEFAULT false;
