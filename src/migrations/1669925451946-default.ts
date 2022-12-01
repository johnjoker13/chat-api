import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1669925451946 implements MigrationInterface {
  name = 'default1669925451946';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "nickname" character varying(100) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
