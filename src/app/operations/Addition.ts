import { IOperation } from "../interfaces/IOperation";

export class Addition implements IOperation {
  getSymbol(): string { return '+'; }
  execute(a: number, b: number): number { return a + b; }
}
