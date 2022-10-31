import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerFormGroup: FormGroup = new FormGroup({
    customerName: new FormControl('', Validators.required),
    customerBirthday: new FormControl('', this.checkMinAge18AndMaxAge80),
    customerGender: new FormControl('', Validators.required),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerAddress: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required)
  });

  customerTypeList: CustomerType[];

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';
  constructor(private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(): void {
    this.customerService.findAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    });
  }
    submit(): void {
      const customer = this.customerFormGroup.value;
      this.customerService.addCustomer(customer).subscribe(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thêm mới thành công!',
          text: 'Khách hàng: ' + customer.customerName,
          showConfirmButton: false,
          timer: 2500
        });

        this.customerFormGroup.reset();
      }, error => {
        console.log(error);
      }, () => {
        this.router.navigateByUrl('');
        console.log('Thêm khách hàng thành công!');
      });
    }

    checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
      const formYear = new Date(abstractControl.value).getFullYear();
      const curYear = new Date().getFullYear();

      return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
    }
}
