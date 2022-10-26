import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../service/product-service.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  productList: Product[];
categoryList: Category[];

  constructor(private productService: ProductServiceService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(value => {
      this.categoryList = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
    this.productService.findAll().subscribe(value => {
      this.productList = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Complete');
    });
  }
}
