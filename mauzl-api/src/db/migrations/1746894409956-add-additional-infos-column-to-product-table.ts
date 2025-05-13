import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAdditionalInfosColumnToProductTable1746894409956 implements MigrationInterface {
    name = 'AddAdditionalInfosColumnToProductTable1746894409956'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "additionalInfos" text array NOT NULL DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "additionalInfos"`);
    }

}
