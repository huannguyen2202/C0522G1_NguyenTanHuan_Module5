import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList = [];

  constructor() { }

  ngOnInit(): void {
    this.customerList.push(new Customer(1, 'Huỳnh Văn Nam', 1, '191193', '0389922343', 'Diamond'));
    this.customerList.push(new Customer(2, 'Pham Dat', 0, '191193', '0389922343', 'Diamond'));
    this.customerList.push(new Customer(3, 'Bui Hung', 0, '191198', '0389922343', 'Đồng'));
    this.customerList.push(new Customer(4, 'Nguyen Tan Huan', 0, '191198', '0389922343', 'Đồng'));
    this.customerList.push(new Customer(5, 'Nguyen Tat Thanh', 0, '191198', '0389922343', 'Đồng'));
    this.customerList.push(new Customer(6, 'Nguyen Van Phuc', 0, '191198', '0389922343', 'Đồng'));
  }

}
