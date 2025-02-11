import { Injectable } from '@angular/core';
import { IOperation } from '../interfaces/IOperation';
import { Addition } from '../operations/Addition';
import { Subtraction } from '../operations/Subtruction';
import { Multiplication } from '../operations/Multiplication';
import { Division } from '../operations/Division';
import { Power } from '../operations/Power';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private operations: IOperation[] = [];  

  constructor() {
    this.operations.push(new Addition());
    this.operations.push(new Subtraction());
    this.operations.push(new Multiplication());
    this.operations.push(new Division());
    this.operations.push(new Power());
  }

  getOperation(symbol: string): IOperation | undefined {
    return this.operations.find(op => op.getSymbol() === symbol);
  }
}
