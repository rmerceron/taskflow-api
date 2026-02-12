import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterService {
  private count = 0;

  getCount(): number {
    return this.count;
  }

  increment(): number {
    this.count++;
    return this.count;
  }

  setCount(value: number): void {
    this.count = value;
  }
}
