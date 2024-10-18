import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSizeToOrderItem1728214188804 implements MigrationInterface {
    name = 'AddSizeToOrderItem1728214188804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "size" character varying NOT NULL DEFAULT 'm'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "size"`);
    }

}
