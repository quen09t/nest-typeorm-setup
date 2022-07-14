import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'exploit',
  password: 'exploit',
  database: 'test',
  entities: [User],
  migrations: ['src/migrations/*{.ts,.js}'],
});
