import { DataSource } from 'typeorm';

export default new DataSource({
  // PUT THIS DATA IN .env FILE
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'pass123',
  database: 'vota-imoveis',
  entities: [process.cwd() + '/src/**/*.entity{.ts,.js}'],
  migrations: [process.cwd() + '/migrations/*.ts'],
});
