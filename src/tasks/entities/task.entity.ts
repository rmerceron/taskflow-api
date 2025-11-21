import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tasks')
export class Task {
  @ApiProperty({ description: 'The unique identifier of the task' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'The title of the task' })
  @Column()
  title: string;

  @ApiProperty({ description: 'The description of the task', required: false })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({ description: 'The status of the task', default: false })
  @Column({ default: false })
  isCompleted: boolean;

  @ApiProperty({ description: 'The priority level of the task', enum: ['low', 'medium', 'high'], default: 'medium' })
  @Column({ default: 'medium' })
  priority: string;

  @ApiProperty({ description: 'The due date of the task', required: false })
  @Column({ type: 'timestamp', nullable: true })
  dueDate: Date;

  @ApiProperty({ description: 'The creation date of the task' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'The last update date of the task' })
  @UpdateDateColumn()
  updatedAt: Date;
}
