import { Controller, Get, Post, Body } from '@nestjs/common';
import { CounterService } from './counter.service';
import { UpdateCounterDto } from './counter.dto';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get()
  getIncrement() {
    return { count: this.counterService.increment() };
  }

  @Post()
  updateCount(@Body() updateCounterDto: UpdateCounterDto) {
    this.counterService.setCount(updateCounterDto.value);
    return {
      message: 'Valeur mise à jour',
      current: updateCounterDto.value,
    };
  }
}
