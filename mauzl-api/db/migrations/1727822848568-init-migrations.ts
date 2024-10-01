import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitMigrations1727822848568 implements MigrationInterface {
  name = 'InitMigrations1727822848568';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'customer', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product_image" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "productId" integer, CONSTRAINT "PK_99d98a80f57857d51b5f63c8240" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" numeric NOT NULL, "stock" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "wishlist" ("id" SERIAL NOT NULL, "userId" integer, CONSTRAINT "PK_620bff4a240d66c357b5d820eaa" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "review" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "comment" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "productId" integer, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("id" SERIAL NOT NULL, "addressLine" character varying NOT NULL, "city" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "client" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" integer, CONSTRAINT "REL_6e6c7c79fbf5ab39520cd1723e" UNIQUE ("addressId"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order_item" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "price" numeric NOT NULL, "productId" integer, "orderId" integer, CONSTRAINT "PK_d01158fe15b1ead5c26fd7f4e90" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order" ("id" SERIAL NOT NULL, "totalAmount" numeric NOT NULL, "status" character varying NOT NULL DEFAULT 'pending', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "clientId" integer, CONSTRAINT "REL_9b27855a9c2ade186e5c55d1ec" UNIQUE ("clientId"), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "payment" ("id" SERIAL NOT NULL, "amount" numeric NOT NULL, "method" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'pending', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "orderId" integer, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "wishlist_products_product" ("wishlistId" integer NOT NULL, "productId" integer NOT NULL, CONSTRAINT "PK_a40857fb518ea9ddd0eed914e04" PRIMARY KEY ("wishlistId", "productId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d26d172812ffce61522237f3ae" ON "wishlist_products_product" ("wishlistId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f732d2ee0684d55dbead923860" ON "wishlist_products_product" ("productId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "product_image" ADD CONSTRAINT "FK_40ca0cd115ef1ff35351bed8da2" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "wishlist" ADD CONSTRAINT "FK_f6eeb74a295e2aad03b76b0ba87" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_1337f93918c70837d3cea105d39" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_2a11d3c0ea1b2b5b1790f762b9a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "client" ADD CONSTRAINT "FK_6e6c7c79fbf5ab39520cd1723e2" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" ADD CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment" ADD CONSTRAINT "FK_d09d285fe1645cd2f0db811e293" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "wishlist_products_product" ADD CONSTRAINT "FK_d26d172812ffce61522237f3ae3" FOREIGN KEY ("wishlistId") REFERENCES "wishlist"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "wishlist_products_product" ADD CONSTRAINT "FK_f732d2ee0684d55dbead923860c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "wishlist_products_product" DROP CONSTRAINT "FK_f732d2ee0684d55dbead923860c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "wishlist_products_product" DROP CONSTRAINT "FK_d26d172812ffce61522237f3ae3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment" DROP CONSTRAINT "FK_d09d285fe1645cd2f0db811e293"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" DROP CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`,
    );
    await queryRunner.query(
      `ALTER TABLE "client" DROP CONSTRAINT "FK_6e6c7c79fbf5ab39520cd1723e2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_2a11d3c0ea1b2b5b1790f762b9a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_1337f93918c70837d3cea105d39"`,
    );
    await queryRunner.query(
      `ALTER TABLE "wishlist" DROP CONSTRAINT "FK_f6eeb74a295e2aad03b76b0ba87"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_image" DROP CONSTRAINT "FK_40ca0cd115ef1ff35351bed8da2"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f732d2ee0684d55dbead923860"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d26d172812ffce61522237f3ae"`,
    );
    await queryRunner.query(`DROP TABLE "wishlist_products_product"`);
    await queryRunner.query(`DROP TABLE "payment"`);
    await queryRunner.query(`DROP TABLE "order"`);
    await queryRunner.query(`DROP TABLE "order_item"`);
    await queryRunner.query(`DROP TABLE "client"`);
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(`DROP TABLE "review"`);
    await queryRunner.query(`DROP TABLE "wishlist"`);
    await queryRunner.query(`DROP TABLE "product"`);
    await queryRunner.query(`DROP TABLE "product_image"`);
    await queryRunner.query(`DROP TABLE "category"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
