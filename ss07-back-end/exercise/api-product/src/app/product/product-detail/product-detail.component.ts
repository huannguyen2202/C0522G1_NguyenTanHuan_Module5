import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductServiceService,
              private activated: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.activated.snapshot.params.productId);
    this.productService.findById(id).subscribe(value => {
      this.product = value;
    }, error => {
      console.log(error);
    });
  }

}
