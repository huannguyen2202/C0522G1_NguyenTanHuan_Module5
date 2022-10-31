import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {KhType} from '../../model/kh-type';
import {KhService} from '../../service/kh.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kh-edit',
  templateUrl: './kh-edit.component.html',
  styleUrls: ['./kh-edit.component.css']
})
export class KhEditComponent implements OnInit {
  khFormGroup: FormGroup;
  khId: number;
  khTypeList: KhType[];

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';


  constructor(private khService: KhService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.khService.findAllKhType().subscribe(value => {
      this.khTypeList = value;
    });
    this.khId = Number(this.activatedRoute.snapshot.params.id);

    this.khService.getById(this.khId).subscribe(kh => {
      this.khFormGroup = new FormGroup({
        khName: new FormControl(kh.khName, Validators.required),
        khBirthday: new FormControl(kh.khBirthday, this.checkMinAge18AndMaxAge80),
        khGender: new FormControl(kh.khGender, Validators.required),
        khIdCard: new FormControl(kh.khIdCard, [Validators.required
          // , Validators.pattern('^\\d{9}$|^\\d{12}$')
        ]),
        khPhone: new FormControl(kh.khPhone, [Validators.required
          // , Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')
        ]),
        khEmail: new FormControl(kh.khEmail, [Validators.required
          // , Validators.email
        ]),
        khAddress: new FormControl(kh.khAddress, Validators.required),
        khType: new FormControl(kh.khType, Validators.required)
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK!');
    });

  }
  updateKh(id: number) {
    const kh = this.khFormGroup.value;
    this.khService.updateKh(id, kh).subscribe(() => {
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
