-- CreateEnum
CREATE TYPE "enum_users_access_level" AS ENUM ('client', 'admin');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "access_level" "enum_users_access_level" NOT NULL DEFAULT 'client',
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false;
