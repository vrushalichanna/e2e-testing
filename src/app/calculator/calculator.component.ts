import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title = 'calculatorapp';
  sumFirst: string;
  sumSecond: string;
  sumResult: number;

  constructor() { }

  ngOnInit() {
  }

  sum() {
    this.sumResult = (parseFloat (this.sumFirst)+parseFloat(this.sumSecond))
    this.clearAllTexts();
  }

  clearAllTexts() {
    this.sumFirst = '';
    this.sumSecond = '';
 }

}
