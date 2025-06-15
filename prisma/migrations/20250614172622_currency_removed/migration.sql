/*
  Warnings:

  - You are about to drop the column `currencyCode` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `phoneCode` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the `Currency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Country` DROP FOREIGN KEY `Country_currencyCode_fkey`;

-- DropIndex
DROP INDEX `Country_currencyCode_fkey` ON `Country`;

-- AlterTable
ALTER TABLE `Country` DROP COLUMN `currencyCode`,
    DROP COLUMN `phoneCode`;

-- DropTable
DROP TABLE `Currency`;
