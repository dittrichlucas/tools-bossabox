import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity('tool')
export default class Tool {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text')
    title: string

    @Column('text')
    link: string

    @Column('text')
    description: string

    @Column('text')
    tags: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

}
