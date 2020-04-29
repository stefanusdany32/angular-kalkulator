import { Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { GlobalConstants } from './common/global-constants';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  GlobalConstants.angka1 ;
}
