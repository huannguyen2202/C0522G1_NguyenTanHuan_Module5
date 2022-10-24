import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  productId: number;
  productNew: Product;

  // product: Product;

  constructor(private productService: ProductServiceService,
              private activated: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(value => {
      this.productId = Number(value.get('productId'));
    });
    this.productService.findById(this.productId).subscribe(value => {
      this.productNew = value;
      this.productForm.patchValue(this.productNew);
    });
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    });
  }

  updateProduct(): void {
    const productAfter = this.productForm.value;
    productAfter.id = this.productNew.id;
    this.productService.saveUpdate(productAfter).subscribe(value => {
      }, error => {
      }, () => {
        this.router.navigateByUrl('');
        alert('Cập nhật thành công !!!');
      }
    );
  }
}
