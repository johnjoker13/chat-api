import { DataSource, DataSourceOptions } from 'typeorm';

const appDataSource: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'chat_db',
  entities: ['src/entities/*entity.ts'],
  logging: true,
  synchronize: true,
};

export const config = new DataSource(appDataSource);
