import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductComponentComponent} from './product/product-component/product-component.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductRoutersModule } from './router/product-routers.module';
import {RouterModule} from '@angular/router';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductUpdateComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductRoutersModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
