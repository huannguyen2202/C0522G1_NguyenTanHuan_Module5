import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponentComponent} from '../product/product-component/product-component.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductCreateComponent} from '../product/product-create/product-create.component';
import {ProductUpdateComponent} from '../product/product-update/product-update.component';
import {ProductDeleteComponent} from '../product/product-delete/product-delete.component';
import {ProductDetailComponent} from '../product/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: ProductComponentComponent},
  {path: 'create-product', component: ProductCreateComponent},
  {path: 'update/:productId', component: ProductUpdateComponent},
  {path: 'delete/:productId', component: ProductDeleteComponent},
  {path: 'detail/:productId', component: ProductDetailComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ProductRoutersModule { }
