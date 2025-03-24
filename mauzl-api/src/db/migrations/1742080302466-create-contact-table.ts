import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateContactTable1742080302466 implements MigrationInterface {
  name = 'CreateContactTable1742080302466';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "contact" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "subject" character varying NOT NULL, "message" character varying NOT NULL, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "contact"`);
  }
}
