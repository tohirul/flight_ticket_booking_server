/*
  Warnings:

  - You are about to drop the column `lat` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `lng` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Airport` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Airport` DROP COLUMN `lat`,
    DROP COLUMN `lng`,
    DROP COLUMN `website`,
    MODIFY `stateId` VARCHAR(191) NULL;
