import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productFormGroup: FormGroup = new FormGroup({
    productName: new FormControl('', Validators.required),
    productPrice: new FormControl(),
    productDescription: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });

  categoryList: Category[];

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.findAllCategory().subscribe(value => {
      this.categoryList = value;
    });
  }
  submit(): void {
    const product = this.productFormGroup.value;
    this.productService.addProduct(product).subscribe(() => {
      Swal.fire({
        title: 'Thêm mới thành công!',
        text: 'San pham: ' + product.productName,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });

      this.productFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('');
      console.log('Thêm khách hàng thành công!');
    });
  }

  // checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
  //   const formYear = new Date(abstractControl.value).getFullYear();
  //   const curYear = new Date().getFullYear();
  //
  //   return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  // }

}
