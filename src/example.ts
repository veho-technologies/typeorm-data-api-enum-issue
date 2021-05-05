import dotenv from 'dotenv'
dotenv.config()

const SnakeNamingStrategy = require('typeorm-naming-strategies').SnakeNamingStrategy
import { createConnection } from 'typeorm'
import { Example, ExampleStatus } from './data/entity/Example'

(async () => {
  try {
    console.log('START')
    const conn = await createConnection({
      name: 'default',
      type: 'aurora-data-api-pg',
      synchronize: true,
      logging: true,
      migrationsTableName: '_example_typeorm_migration_state',
      entities: [Example],
      migrations: ['src/migration/**/*.ts'],
      namingStrategy: new SnakeNamingStrategy(),
      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
      },
      database: process.env.DATABASE_PAYMENT_SCHEMA,
      secretArn: process.env.DATABASE_PAYMENT_SECRET_ARN,
      resourceArn: process.env.DATABASE_PAYMENT_RESOURCE_ARN,
      region: process.env.DATABASE_PAYMENT_REGION,
    })

    const exampleRepo = conn.getRepository(Example)

    const example = await exampleRepo.save(exampleRepo.create({ label: Math.random().toString() }))
    console.log({ example })

    const result = await exampleRepo.findOne({ status: ExampleStatus.STATUS_1 })
    console.log({ result })

    process.exit(0)
  } catch (ex) {
    console.log(ex)

    process.exit(1)
  }
})()
