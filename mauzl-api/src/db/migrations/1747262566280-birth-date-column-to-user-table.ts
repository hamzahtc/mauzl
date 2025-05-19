import { MigrationInterface, QueryRunner } from "typeorm";

export class BirthDateColumnToUserTable1747262566280 implements MigrationInterface {
    name = 'BirthDateColumnToUserTable1747262566280'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "birthDate" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "birthDate"`);
    }

}
