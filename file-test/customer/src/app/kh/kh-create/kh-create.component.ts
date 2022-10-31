import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {KhType} from '../../model/kh-type';
import {KhService} from '../../service/kh.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kh-create',
  templateUrl: './kh-create.component.html',
  styleUrls: ['./kh-create.component.css']
})
export class KhCreateComponent implements OnInit {
  khFormGroup: FormGroup = new FormGroup({
    khName: new FormControl('', Validators.required),
    khBirthday: new FormControl('', this.checkMinAge18AndMaxAge80),
    khGender: new FormControl('', Validators.required),
    khIdCard: new FormControl('', [Validators.required
      // , Validators.pattern('^\\d{9}$|^\\d{12}$')
    ]),
    khPhone: new FormControl('', [Validators.required
      // , Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')
    ]),
    khEmail: new FormControl('', [Validators.required
      // , Validators.email
    ]),
    khAddress: new FormControl('', Validators.required),
    khType: new FormControl('', Validators.required)
  });

  khTypeList: KhType[];

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';


  constructor(private khService: KhService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.khService.findAllKhType().subscribe(value => {
      this.khTypeList = value;
    });

  }
  submit(): void {
    const kh = this.khFormGroup.value;
    this.khService.addKh(kh).subscribe(() => {
      Swal.fire({
        title: 'Thêm mới thành công!',
        text: 'Khách hàng: ' + kh.customerName,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });

      this.khFormGroup.reset();
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

