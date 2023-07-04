import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'
import { Required } from '@tsed/schema'

@Entity('tool')
export default class Tool {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text')
    @Required()
    title: string

    @Column('text')
    @Required()
    link: string

    @Column('text', { nullable: true })
    description?: string

    @Column('text')
    @Required()
    tags: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

}
