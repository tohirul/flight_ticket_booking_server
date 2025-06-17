/*
  Warnings:

  - A unique constraint covering the columns `[registrationCode]` on the table `Airplane` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registrationCode` to the `Airplane` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Airplane` ADD COLUMN `engineType` VARCHAR(191) NULL,
    ADD COLUMN `isWideBody` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `photoUrl` VARCHAR(191) NULL,
    ADD COLUMN `rangeKm` INTEGER NULL,
    ADD COLUMN `registrationCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `seatConfiguration` JSON NULL,
    ADD COLUMN `speedKmph` INTEGER NULL,
    ADD COLUMN `status` ENUM('Active', 'InMaintenance', 'Retired', 'Grounded') NOT NULL DEFAULT 'Active',
    ADD COLUMN `type` ENUM('Passenger', 'Cargo', 'Mixed') NOT NULL DEFAULT 'Passenger';

-- CreateIndex
CREATE UNIQUE INDEX `Airplane_registrationCode_key` ON `Airplane`(`registrationCode`);
