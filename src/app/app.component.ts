import {Component, Inject, LOCALE_ID} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-v10';
  date = new Date();

  constructor(@Inject(LOCALE_ID) public localeId: string) {
  }
}
