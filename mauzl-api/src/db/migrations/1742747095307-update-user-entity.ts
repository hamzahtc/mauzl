import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserEntity1742747095307 implements MigrationInterface {
  name = 'UpdateUserEntity1742747095307';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order" ADD "orderNumber" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" ADD "trackingNumber" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "password" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "trackingNumber"`);
    await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "orderNumber"`);
  }
}
