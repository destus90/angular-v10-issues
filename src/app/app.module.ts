import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import '@progress/kendo-angular-intl/locales/fr/all';
import localFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';

registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
