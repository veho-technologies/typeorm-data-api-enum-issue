import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { Example } from './data/entity/Example'

const config = {
  name: 'default',
  type: 'aurora-data-api-pg',
  synchronize: true,
  logging: true,
  migrationsTableName: '_typeorm_migration_state',
  entities: [Example],
  migrations: ['src/data/migration/**/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
  cli: {
    entitiesDir: 'src/data/entity/',
    migrationsDir: 'src/data/migration/',
  },
  database: process.env.DATABASE_SCHEMA,
  secretArn: process.env.DATABASE_SECRET_ARN,
  resourceArn: process.env.DATABASE_RESOURCE_ARN,
  region: process.env.DATABASE_REGION,
}

export default config
