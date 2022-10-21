import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryDetailComponentComponent } from './dictionary-detail-component/dictionary-detail-component.component';
import { DictionaryPageComponentComponent } from './dictionary-page-component/dictionary-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryDetailComponentComponent,
    DictionaryPageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
