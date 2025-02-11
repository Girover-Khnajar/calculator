import { Injectable } from '@angular/core';
import { OperationService } from './operation.service'; 

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private currentValue = '';
  private previousValue = '';
  private operator = '';

  constructor(private operationService: OperationService) {}

  input(value: string) {
    if (this.isOperation(value)) {
      this.operator = value;
      this.previousValue = this.currentValue;
      this.currentValue = '';
    } else if (value === '=') {
      this.calculate();
    } else if (value === 'C') {
      this.clear();
    } else {
      this.currentValue += value;
    }
  }

  private isOperation(value: string): boolean {
    return ['+', '-', '*', '÷', '^'].includes(value);
  }

  private calculate() {
    const num1 = parseFloat(this.previousValue);
    const num2 = parseFloat(this.currentValue);
    const operation = this.operationService.getOperation(this.operator);

    if (operation) {
      this.currentValue = operation.execute(num1, num2).toString();
    } else {
      this.currentValue = 'Error';
    }

    this.previousValue = '';
    this.operator = '';
  }

  clear() {
    this.currentValue = '';
    this.previousValue = '';
    this.operator = '';
  }

  getDisplay(): string {
    return this.currentValue || this.previousValue || '0';
  }
}
