import { Controller, Get, Post, Body } from '@nestjs/common';
import { CounterService } from './counter.service';
import { UpdateCounterDto } from './counter.dto';

@Controller()
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get('getCounter')
  getCounter() {
    return { count: this.counterService.getCount() };
  }

  @Post('incrementCounter')
  incrementCounter() {
    return { count: this.counterService.increment() };
  }

  @Post('updateCounter')
  updateCount(@Body() updateCounterDto: UpdateCounterDto) {
    this.counterService.setCount(updateCounterDto.value);
    return {
      message: 'Valeur mise à jour',
      current: updateCounterDto.value,
    };
  }
}
