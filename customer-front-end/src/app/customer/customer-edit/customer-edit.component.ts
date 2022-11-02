import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerFormGroup: FormGroup;
  customerId: number;
  customerTypeList: CustomerType[];

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.findAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    });
    this.customerId = Number(this.activatedRoute.snapshot.params.customerId);

    this.customerService.getById(this.customerId).subscribe(customer => {
      this.customerFormGroup = new FormGroup({
        customerName: new FormControl(customer.customerName, Validators.required),
        birthday: new FormControl(customer.birthday, this.checkMinAge18AndMaxAge80),
        gender: new FormControl(customer.gender, Validators.required),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, Validators.required),
        customerType: new FormControl(customer.customerType, Validators.required)
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK!');
    });
  }
  updateCustomer(id: number) {
    const customer = this.customerFormGroup.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Chỉnh sửa thành công!',
        text: 'Khách hàng: ' + customer.customerName,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
      });
      this.router.navigateByUrl('customer/list');
    }, error => {
      console.log(error);
    }, () => {
      console.log('Cập nhật khách hàng thành công!');
    });
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
