/*
  Warnings:

  - The primary key for the `Currency` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `Currency` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `Country` DROP FOREIGN KEY `Country_currencyCode_fkey`;

-- DropIndex
DROP INDEX `Country_currencyCode_fkey` ON `Country`;

-- AlterTable
ALTER TABLE `Currency` DROP PRIMARY KEY,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Country` ADD CONSTRAINT `Country_currencyCode_fkey` FOREIGN KEY (`currencyCode`) REFERENCES `Currency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
