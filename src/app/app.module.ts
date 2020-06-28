import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import '@progress/kendo-angular-intl/locales/fr/all';

import { AppComponent } from './app.component';
import {IntlModule} from "@progress/kendo-angular-intl";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
