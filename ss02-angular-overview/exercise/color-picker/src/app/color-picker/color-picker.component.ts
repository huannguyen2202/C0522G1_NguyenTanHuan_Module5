import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  color: number|undefined;

  constructor() { }

  ngOnInit(): void {
  }
  // changeColor(color) {
  //   this.color = color;
  // }
}
