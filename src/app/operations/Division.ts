import { IOperation } from "../interfaces/IOperation";

export class Division implements IOperation {
  getSymbol(): string { return '÷'; }
  execute(a: number, b: number): number { 
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return parseFloat((a / b).toFixed(5));
  }
}
