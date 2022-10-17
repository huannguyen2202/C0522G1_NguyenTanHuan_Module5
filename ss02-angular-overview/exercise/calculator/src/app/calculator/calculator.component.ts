import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numberFirst: number | undefined;
  numberSecond: number | undefined;
  resultNum: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  sumNumber(): void {
    this.resultNum = Number(this.numberFirst) + Number(this.numberSecond);
  }

  minusNumber(): void {
    this.resultNum = Number(this.numberFirst) - Number(this.numberSecond);
  }


  multiplication(): void {
    this.resultNum = Number(this.numberFirst) * Number(this.numberSecond);
  }

  division(): void {
    // tslint:disable-next-line:triple-equals
    if (Number(this.numberSecond) != 0) {
      this.resultNum = Number(this.numberFirst) / Number(this.numberSecond);
    } else {
      this.resultNum = 'Không thể chia cho 0';
    }
  }
}
