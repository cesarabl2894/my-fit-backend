import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1573770593024 implements MigrationInterface {
    name = 'Initial1573770593024'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `roles` ADD `usersId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `heigth` `heigth` double NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `weight` `weight` double NULL", undefined);
        await queryRunner.query("ALTER TABLE `roles` ADD CONSTRAINT `FK_47c137eb80082b6e12f9936acae` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `roles` DROP FOREIGN KEY `FK_47c137eb80082b6e12f9936acae`", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `weight` `weight` double(22) NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `heigth` `heigth` double(22) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `roles` DROP COLUMN `usersId`", undefined);
    }

}
