import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookFormGroup: FormGroup;
  bookId: number;
  customerList: Customer[];

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.bookService.findAllCustomer().subscribe(value => {
      this.customerList = value;
    });
    this.bookId = Number(this.activatedRoute.snapshot.params.id);

    this.bookService.getById(this.bookId).subscribe(kh => {
      this.bookFormGroup = new FormGroup({
        bookCode: new FormControl(kh.bookCode, Validators.required),
        deposit: new FormControl(kh.deposit, this.checkMinAge18AndMaxAge80),
        startTime: new FormControl(kh.startTime, Validators.required),
        period: new FormControl(kh.period, [Validators.required
          // , Validators.pattern('^\\d{9}$|^\\d{12}$')
        ]),
        money: new FormControl(kh.money, [Validators.required
          // , Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')
        ]),
        interest: new FormControl(kh.interest, [Validators.required
          // , Validators.email
        ]),
        description: new FormControl(kh.description, Validators.required),
        customer: new FormControl(kh.customer, Validators.required)
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK!');
    });
  }
  updateBook(id: number) {
    const kh = this.bookFormGroup.value;
    this.bookService.updateBook(id, kh).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chỉnh sửa thành công!',
        text: 'Khách hàng: ' + kh.khName,
        showConfirmButton: false,
        timer: 2500
      });

      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    }, () => {
      console.log('Cập nhật khách hàng thành công!');
    });
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
