import { DataSource, DataSourceOptions } from 'typeorm';

export const appDataSource: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'chat_db',
  entities: ['src/**/*entity.{ts,js}'],
  migrations: ['src/migrations/**/*.{ts,js}'],
};

export const config = new DataSource(appDataSource);
