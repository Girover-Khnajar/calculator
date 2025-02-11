export interface IOperation {
    getSymbol(): string;
    execute(a: number, b: number): number;
}
  