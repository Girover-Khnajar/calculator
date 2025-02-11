import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private calculatorService: CalculatorService) {}

  onButtonClick(value: string) {
    this.calculatorService.input(value);
  }

  get displayValue(): string {
    return this.calculatorService.getDisplay();
  }
}
