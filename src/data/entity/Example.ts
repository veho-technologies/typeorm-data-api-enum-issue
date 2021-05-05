import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'

export enum ExampleStatus {
  STATUS_1 = 'status_1',
  STATUS_2 = 'status_2',
  STATUS_3 = 'status_3',
}

@Entity()
export class Example {

  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  label: string

  @Column('enum', {
    enum: ExampleStatus,
    default: ExampleStatus.STATUS_1,
  })
  status: ExampleStatus

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn()
  deletedAt?: Date

}
