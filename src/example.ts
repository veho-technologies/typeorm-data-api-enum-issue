import dotenv from 'dotenv'
dotenv.config()

import { createConnection } from 'typeorm'
import config from './config'
import { Example, ExampleStatus } from './data/entity/Example'

(async () => {
  try {
    // @ts-ignore
    const conn = await createConnection(config)

    const exampleRepo = conn.getRepository(Example)

    const created = await exampleRepo.save(exampleRepo.create({ label: Math.random().toString() }))
    console.log({ created })

    const result = await exampleRepo.findOne({ status: ExampleStatus.STATUS_1 })
    console.log({ result })

    process.exit(0)
  } catch (ex) {
    console.log(ex)

    process.exit(1)
  }
})()
