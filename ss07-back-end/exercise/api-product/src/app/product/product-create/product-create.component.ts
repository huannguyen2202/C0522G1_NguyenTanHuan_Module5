import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductServiceService} from '../../service/product-service.service';
import {Router} from '@angular/router';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categoryList: Category[];

  productForm: FormGroup = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl()
    }
  );
  constructor(private productService: ProductServiceService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(value => {
      this.categoryList = value;
    }, error => {
      console.log(error);
    });
  }

  click() {
    let product: Product;
    product = this.productForm.value;
    this.productService.saveCreate(product).subscribe(value => {
      this.productForm.reset();
    }, error => {
    }, () => {
      alert('Thêm mới Thành Công !!!');
      this.router.navigateByUrl('');
    });
  }
}
