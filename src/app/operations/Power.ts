import { IOperation } from "../interfaces/IOperation";


export class Power implements IOperation {
  getSymbol(): string { return '^'; }
  execute(a: number, b: number): number { 
    if (a == 0 && b == 0) {
      throw new Error('0^0 is undefined');

    }
    return Math.pow(a, b); 
  }
}