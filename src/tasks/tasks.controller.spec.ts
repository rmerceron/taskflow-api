import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  const mockTask: Task = {
    id: '123e4567-e89b-12d3-a456-426614174000',
    title: 'Test Task',
    description: 'Test Description',
    isCompleted: false,
    priority: 'medium',
    dueDate: new Date('2024-12-31'),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockTasksService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new task', async () => {
      const createTaskDto: CreateTaskDto = {
        title: 'Test Task',
        description: 'Test Description',
        priority: 'medium',
      };

      mockTasksService.create.mockResolvedValue(mockTask);

      const result = await controller.create(createTaskDto);

      expect(result).toEqual(mockTask);
      expect(service.create).toHaveBeenCalledWith(createTaskDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const tasks = [mockTask];
      mockTasksService.findAll.mockResolvedValue(tasks);

      const result = await controller.findAll();

      expect(result).toEqual(tasks);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single task', async () => {
      mockTasksService.findOne.mockResolvedValue(mockTask);

      const result = await controller.findOne(mockTask.id);

      expect(result).toEqual(mockTask);
      expect(service.findOne).toHaveBeenCalledWith(mockTask.id);
    });
  });

  describe('update', () => {
    it('should update a task', async () => {
      const updateTaskDto: UpdateTaskDto = {
        title: 'Updated Task',
      };

      const updatedTask = { ...mockTask, ...updateTaskDto };
      mockTasksService.update.mockResolvedValue(updatedTask);

      const result = await controller.update(mockTask.id, updateTaskDto);

      expect(result).toEqual(updatedTask);
      expect(service.update).toHaveBeenCalledWith(mockTask.id, updateTaskDto);
    });
  });

  describe('remove', () => {
    it('should remove a task', async () => {
      mockTasksService.remove.mockResolvedValue(undefined);

      await controller.remove(mockTask.id);

      expect(service.remove).toHaveBeenCalledWith(mockTask.id);
    });
  });
});
