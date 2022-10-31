import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KhListComponent} from './kh/kh-list/kh-list.component';
import {KhCreateComponent} from './kh/kh-create/kh-create.component';
import {KhEditComponent} from './kh/kh-edit/kh-edit.component';


const routes: Routes = [
  {path: '', component: KhListComponent},
  {path: 'create', component: KhCreateComponent},
  {path: 'edit/:id', component: KhEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
