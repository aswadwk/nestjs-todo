import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity('todos')
export class Todo {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    activity_group_id: number;

    @Column()
    title: string;

    @Column({ default: 'very-high' })
    priority: string;

    @Column({ default: true })
    is_active: boolean;

    @CreateDateColumn()
    created_at: Timestamp;

    @UpdateDateColumn()
    updated_at: Timestamp;

    @DeleteDateColumn({ nullable: true })
    deleted_at: Timestamp;
}
