import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customerList: Customer[];
  customerNameDelete: string;
  customerIdDelete: number;

  customerNameSearch = '';
  customerAddressSearch = '';
  customerPhoneSearch = '';

  mess: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.findAllCustomer().subscribe(value => {
      this.customerList = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Complete');
    });
    this.mess = '';
  }
  getInfoCustomerDelete(customerName: string, customerId: number): void {
    this.customerNameDelete = customerName;
    this.customerIdDelete = customerId;
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(() => {
      this.ngOnInit();
      this.mess = 'Xóa khách hàng  [' + this.customerNameDelete + '] thành công!';
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }

  searchByMore(): void {
    this.customerService.findAllCustomer().subscribe(value => {
      this.customerList = value.filter(item => item.customerName.toLowerCase().includes(this.customerNameSearch.toLowerCase())
        && item.customerAddress.toLowerCase().includes(this.customerAddressSearch.toLowerCase())
        && item.customerPhone.toLowerCase().includes(this.customerPhoneSearch.toLowerCase()));
    }, error => {
      console.log(error);
    }, () => {
      console.log('Tìm kiếm khách hàng có tên là: "' + this.customerNameSearch + '" (có ' + this.customerList.length + ' kết quả).');
    });
  }
}
