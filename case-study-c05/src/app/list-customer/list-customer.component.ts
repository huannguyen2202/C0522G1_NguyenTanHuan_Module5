import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {ListCustomerService} from '../service/list-customer.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList = [];
  curPage = 1;
  totalPage: number;
  customerNameDelete: string;
  customerIdDelete: number;

  getAllPage(n1, n2) {
    this.customerService.getAll().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 3);
      this.customerList = value.slice(n1, n2);
    });
  }

  constructor(private customerService: ListCustomerService,
              private title: Title) {
    this.title.setTitle('DANH SÁCH KHÁCH HÀNG');
  }
  next(): void {
    this.curPage++;
    this.getAllPage((this.curPage - 1) * 3, this.curPage * 3);

    this.customerList = this.customerList.slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  previous(): void {
    this.curPage--;
    this.getAllPage((this.curPage - 1) * 3, this.curPage * 3);
  }

  ngOnInit(): void {
    this.customerList.push(new Customer(1, 'Huỳnh Văn Nam', 1, '191193', '0389922343', 'Diamond'));
    this.customerList.push(new Customer(2, 'Pham Dat', 0, '191193', '0389922343', 'Diamond'));
    this.customerList.push(new Customer(3, 'Bui Hung', 0, '191198', '0389922343', 'Đồng'));
    this.customerList.push(new Customer(4, 'Nguyen Tan Huan', 0, '191198', '0389922343', 'Đồng'));
    this.customerList.push(new Customer(5, 'Nguyen Tat Thanh', 0, '191198', '0389922343', 'Đồng'));
    this.customerList.push(new Customer(6, 'Nguyen Van Phuc', 0, '191198', '0389922343', 'Đồng'));
  }

}
