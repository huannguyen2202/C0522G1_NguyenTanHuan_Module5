import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userFormGroup: FormGroup;
  // countryList = [
  //   {id: 1, name: 'Viet Nam'},
  //   {id: 2, name: 'Canada'},
  //   {id: 3, name: 'USA'},
  // ];
  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.userFormGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.minLength(6)])
      }, this.checkPasswords ),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', this.checkAge18),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.pattern('^\\+84\\d{9,10}$'), Validators.required])
    });
  }
  getValueUser(): void {
    console.log('kkkkkkkk');
    console.log(this.userFormGroup.value);
  }
  checkAge18(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();
    return curYear - formYear >= 18 ? null : {invalid18: true};
  }
  checkPasswords(group: AbstractControl): any {
    const passwordCheck = group.value;
    return (passwordCheck.password === passwordCheck.confirmPassword ? null : {notSame: true});
  }
}
