import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1691988822366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS \`user\` (
        \`id\` INT UNSIGNED NOT NULL AUTO_INCREMENT,
        \`email\` VARCHAR(45) NOT NULL,
        \`pass\` VARCHAR(64) NOT NULL,
        PRIMARY KEY (\`id\`))
      ENGINE = InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS \`polling\` (
        \`id\` INT UNSIGNED NOT NULL AUTO_INCREMENT,
        \`start\` DATETIME NOT NULL,
        \`end\` DATETIME NOT NULL,
        PRIMARY KEY (\`id\`))
      ENGINE = InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS \`enterprise\` (
        \`id\` INT UNSIGNED NOT NULL AUTO_INCREMENT,
        \`name\` VARCHAR(45) NULL,
        \`description\` VARCHAR(250) NULL,
        PRIMARY KEY (\`id\`))
      ENGINE = InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS \`picture\` (
        \`id\` INT NOT NULL,
        \`path\` VARCHAR(45) NOT NULL,
        \`enterprise_id\` INT UNSIGNED NOT NULL,
        PRIMARY KEY (\`id\`, \`enterprise_id\`),
        INDEX \`fk_picture_enterprise1_idx\` (\`enterprise_id\` ASC) VISIBLE,
        CONSTRAINT \`fk_picture_enterprise1\`
          FOREIGN KEY (\`enterprise_id\`)
          REFERENCES \`enterprise\` (\`id\`)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION)
      ENGINE = InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS \`polling_has_enterprise\` (
        \`polling_id\` INT UNSIGNED NOT NULL,
        \`enterprise_id\` INT UNSIGNED NOT NULL,
        PRIMARY KEY (\`polling_id\`, \`enterprise_id\`),
        INDEX \`fk_polling_has_enterprise_enterprise1_idx\` (\`enterprise_id\` ASC) VISIBLE,
        INDEX \`fk_polling_has_enterprise_polling_idx\` (\`polling_id\` ASC) VISIBLE,
        CONSTRAINT \`fk_polling_has_enterprise_polling\`
          FOREIGN KEY (\`polling_id\`)
          REFERENCES \`polling\` (\`id\`)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION,
        CONSTRAINT \`fk_polling_has_enterprise_enterprise1\`
          FOREIGN KEY (\`enterprise_id\`)
          REFERENCES \`enterprise\` (\`id\`)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION)
      ENGINE = InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS \`user_votes_polling\` (
        \`user_id\` INT UNSIGNED NOT NULL,
        \`polling_id\` INT UNSIGNED NOT NULL,
        \`enterprise_id\` INT UNSIGNED NOT NULL,
        PRIMARY KEY (\`user_id\`, \`polling_id\`),
        INDEX \`fk_user_has_polling_has_enterprise_polling_has_enterprise1_idx\` (\`polling_id\` ASC, \`enterprise_id\` ASC) VISIBLE,
        INDEX \`fk_user_has_polling_has_enterprise_user1_idx\` (\`user_id\` ASC) VISIBLE,
        CONSTRAINT \`fk_user_has_polling_has_enterprise_user1\`
          FOREIGN KEY (\`user_id\`)
          REFERENCES \`user\` (\`id\`)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION,
        CONSTRAINT \`fk_user_has_polling_has_enterprise_polling_has_enterprise1\`
          FOREIGN KEY (\`polling_id\` , \`enterprise_id\`)
          REFERENCES \`polling_has_enterprise\` (\`polling_id\` , \`enterprise_id\`)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION)
      ENGINE = InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "polling"`);
    await queryRunner.query(`DROP TABLE "enterprise"`);
    await queryRunner.query(`DROP TABLE "picture"`);
    await queryRunner.query(`DROP TABLE "polling_has_enterprise"`);
    await queryRunner.query(`DROP TABLE "user_votes_polling"`);
  }
}
