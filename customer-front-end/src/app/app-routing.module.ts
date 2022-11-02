import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerModule} from './customer/customer.module';


const routes: Routes = [
  {path: 'customer', loadChildren: () => CustomerModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
