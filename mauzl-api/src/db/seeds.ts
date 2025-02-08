import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import MainSeeder from './main.seeder';

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: DATABASE_HOST || 'localhost',
  port: Number(DATABASE_PORT) || 5432,
  username: DATABASE_USERNAME || 'mauzl_user',
  password: DATABASE_PASSWORD || 'mauzl_password',
  database: DATABASE_NAME || 'mauzl_db',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  factories: [__dirname + '/factories/*.factory.{ts,js}'],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
