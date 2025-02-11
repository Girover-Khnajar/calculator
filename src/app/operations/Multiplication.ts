import { IOperation } from "../interfaces/IOperation";

export class Multiplication implements IOperation {
  getSymbol(): string { return '*'; }
  execute(a: number, b: number): number { return a * b; }
}
