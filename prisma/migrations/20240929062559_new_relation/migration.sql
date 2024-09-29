/*
  Warnings:

  - You are about to drop the column `name` on the `details` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `details` table. All the data in the column will be lost.
  - You are about to drop the `files` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[officerId]` on the table `details` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `father` to the `details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mother` to the `details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `officerId` to the `details` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `details` DROP FOREIGN KEY `details_userId_fkey`;

-- DropForeignKey
ALTER TABLE `files` DROP FOREIGN KEY `files_userId_fkey`;

-- AlterTable
ALTER TABLE `details` DROP COLUMN `name`,
    DROP COLUMN `userId`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `father` VARCHAR(191) NOT NULL,
    ADD COLUMN `mother` VARCHAR(191) NOT NULL,
    ADD COLUMN `officerId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `files`;

-- CreateTable
CREATE TABLE `officer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `cif` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `details_officerId_key` ON `details`(`officerId`);

-- AddForeignKey
ALTER TABLE `officer` ADD CONSTRAINT `officer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `details` ADD CONSTRAINT `details_officerId_fkey` FOREIGN KEY (`officerId`) REFERENCES `officer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
