import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerModule} from './customer/customer.module';
import {CommonModule} from '@angular/common';
import {FacilityModule} from './facility/facility.module';
import {ContractModule} from './contract/contract.module';


const routes: Routes = [
  {path: 'customer', loadChildren: () => CustomerModule},
  {path: 'facility', loadChildren: () => FacilityModule},
  {path: 'contract', loadChildren: () => ContractModule}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
