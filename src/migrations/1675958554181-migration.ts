import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1675958554181 implements MigrationInterface {
    name = 'migration1675958554181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "product"
            ADD "name" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "product"
            ADD "price" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "product"
            ADD "picture" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "product"
            ADD "active" boolean NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "product" DROP COLUMN "active"
        `);
        await queryRunner.query(`
            ALTER TABLE "product" DROP COLUMN "picture"
        `);
        await queryRunner.query(`
            ALTER TABLE "product" DROP COLUMN "price"
        `);
        await queryRunner.query(`
            ALTER TABLE "product" DROP COLUMN "name"
        `);
    }

}
