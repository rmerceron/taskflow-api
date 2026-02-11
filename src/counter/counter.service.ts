import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterService {
  private count = 0;

  increment(): number {
    const currentValue = this.count;
    this.count++;
    return currentValue;
  }

  setCount(value: number): void {
    this.count = value;
  }
}
