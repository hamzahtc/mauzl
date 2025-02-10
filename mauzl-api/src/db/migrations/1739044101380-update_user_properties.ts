import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserProperties1739044101380 implements MigrationInterface {
  name = 'UpdateUserProperties1739044101380';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "firstName" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "lastName" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "avatarUrl" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "hashedRefreshToken" character varying`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('ADMIN', 'EDITOR', 'USER')`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "role" "public"."user_role_enum" NOT NULL DEFAULT 'USER'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "role" character varying NOT NULL DEFAULT 'customer'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "hashedRefreshToken"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "avatarUrl"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
  }
}
