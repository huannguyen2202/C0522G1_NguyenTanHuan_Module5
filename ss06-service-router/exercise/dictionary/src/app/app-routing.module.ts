import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponentComponent} from './dictionary-detail-component/dictionary-detail-component.component';
import {DictionaryPageComponentComponent} from './dictionary-page-component/dictionary-page-component.component';


const routes: Routes = [
  {path: '', component: DictionaryPageComponentComponent},
  {path: 'detail/:keyword', component: DictionaryDetailComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
