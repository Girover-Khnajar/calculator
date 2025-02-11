import { IOperation } from "../interfaces/IOperation";

export class Subtraction implements IOperation {
  getSymbol(): string { return '-'; }
  execute(a: number, b: number): number { return a - b; }
}
