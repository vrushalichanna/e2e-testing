import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'e2e-testing';
  title = 'calculatorapp';
  sumFirst: string;
  sumSecond: string;
  sumResult: number;

  sum() {
    this.sumResult = (parseFloat (this.sumFirst) + parseFloat(this.sumSecond));
    this.clearAllTexts();
  }

  clearAllTexts() {
    this.sumFirst = '';
    this.sumSecond = '';
 }
}
