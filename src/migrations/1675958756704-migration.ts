import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1675958756704 implements MigrationInterface {
    name = 'migration1675958756704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "product"
            ALTER COLUMN "picture" DROP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "product"
            ALTER COLUMN "picture"
            SET NOT NULL
        `);
    }

}
