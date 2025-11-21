import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  /**
   * Create a new task
   */
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.tasksRepository.create(createTaskDto);
    return await this.tasksRepository.save(task);
  }

  /**
   * Get all tasks
   */
  async findAll(): Promise<Task[]> {
    return await this.tasksRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  /**
   * Get a single task by ID
   */
  async findOne(id: string): Promise<Task> {
    const task = await this.tasksRepository.findOne({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return task;
  }

  /**
   * Update a task by ID
   */
  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);

    Object.assign(task, updateTaskDto);

    return await this.tasksRepository.save(task);
  }

  /**
   * Delete a task by ID
   */
  async remove(id: string): Promise<void> {
    const task = await this.findOne(id);
    await this.tasksRepository.remove(task);
  }
}
