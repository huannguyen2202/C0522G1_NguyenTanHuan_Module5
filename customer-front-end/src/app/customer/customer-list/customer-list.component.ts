import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer.service';
import Swal from 'sweetalert2';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  page = 1;
  pageSize = 4;
  customerList$: Observable<Customer[]>;
  total$: Observable<number>;
  customerNameDelete: string;
  customerIdDelete: number;

  customerNameSearch = '';
  // customerAddressSearch = '';
  // customerPhoneSearch = '';

  mess: string;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  this.paginate();
  }
  paginate() {
    this.customerService.findAllCustomer(this.customerNameSearch, this.page, this.pageSize).subscribe(data => {
      this.customerList$ = new BehaviorSubject<Customer[]>(data.content);
      this.total$ = new BehaviorSubject<number>(data.totalElements);
    });
  }
  getInfoCustomerDelete(customerName: string, customerId: number): void {
    this.customerNameDelete = customerName;
    this.customerIdDelete = customerId;
  }
  //
  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(() => {
      this.ngOnInit();
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Khách hàng: ' + this.customerNameDelete,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('xóa thành công');
    });
  }
}
