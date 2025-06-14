/*
  Warnings:

  - Added the required column `continent` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Country_countryCode_key` ON `Country`;

-- DropIndex
DROP INDEX `Country_name_key` ON `Country`;

-- AlterTable
ALTER TABLE `Country` ADD COLUMN `continent` ENUM('Africa', 'Antarctica', 'Asia', 'Europe', 'North_America', 'Oceania', 'South_America') NOT NULL,
    ADD COLUMN `currencyCode` VARCHAR(191) NULL,
    ADD COLUMN `phoneCode` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Currency` (
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `symbol` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Country` ADD CONSTRAINT `Country_currencyCode_fkey` FOREIGN KEY (`currencyCode`) REFERENCES `Currency`(`code`) ON DELETE SET NULL ON UPDATE CASCADE;
