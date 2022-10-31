import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from './body/body.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {ListContractComponent} from './list-contract/list-contract.component';
import {CreateContractComponent} from './create-contract/create-contract.component';
const routes: Routes = [{
  path: '',
  component: BodyComponent
}, {
  path: 'customer',
  component: ListCustomerComponent
}, {
  path: 'customer/create',
  component: CreateCustomerComponent
}, {
  path: 'contract',
  component: ListContractComponent
}, {
  path: 'contract/create',
  component: CreateContractComponent
}];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
