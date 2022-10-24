import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  productId: number;
  productNew: Product;

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

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe(value => {
      this.router.navigateByUrl('');
    }, error => {});
  }
}
