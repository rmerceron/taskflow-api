import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateCounterDto {
  @ApiProperty({
    example: 10,
    description: 'La nouvelle valeur du compteur',
  })
  @IsNumber()
  value: number;
}
