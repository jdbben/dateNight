/*
  Warnings:

  - You are about to drop the `ForSameHouse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Fordistence` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "quetionsType" TEXT,
ADD COLUMN     "relationType" TEXT;

-- DropTable
DROP TABLE "ForSameHouse";

-- DropTable
DROP TABLE "Fordistence";
