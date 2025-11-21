import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsEnum, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'The title of the task',
    example: 'Complete project documentation'
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'The description of the task',
    example: 'Write comprehensive documentation for the TaskFlow API',
    required: false
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'The status of the task',
    example: false,
    default: false,
    required: false
  })
  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;

  @ApiProperty({
    description: 'The priority level of the task',
    enum: ['low', 'medium', 'high'],
    example: 'high',
    default: 'medium',
    required: false
  })
  @IsEnum(['low', 'medium', 'high'])
  @IsOptional()
  priority?: string;

  @ApiProperty({
    description: 'The due date of the task (ISO 8601 format)',
    example: '2024-12-31T23:59:59.000Z',
    required: false
  })
  @IsDateString()
  @IsOptional()
  dueDate?: string;
}
