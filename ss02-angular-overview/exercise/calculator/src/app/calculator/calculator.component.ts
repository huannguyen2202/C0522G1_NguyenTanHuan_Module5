import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number ;
  number2: number ;
  result: number;
  constructor() { }

  ngOnInit(): void {
  }

  sum2Number(): void {
    this.result = Number(this.number1) + Number(this.number2);
  }

  tru2Number() {
    this.result = Number(this.number1) - Number(this.number2);
  }

  nhan2Number() {
    this.result = Number(this.number1) * Number(this.number2);
  }

  chia2Number() {
    this.result = Number(this.number1) / Number(this.number2);
  }
}
