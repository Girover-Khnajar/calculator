import { IOperation } from "../interfaces/IOperation";


export class Power implements IOperation {
  getSymbol(): string { return '^'; }
  execute(a: number, b: number): number { return Math.pow(a, b); }
}