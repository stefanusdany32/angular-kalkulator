import { Component,OnInit } from '@angular/core';
import {Routes,RouterModule,Router} from '@angular/router';
import {GlobalVariableService} from './global-variable.service'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  value;
  angka1;
  angka2;
  operator;
  constructor(public varglob : GlobalVariableService){}
   dis(temp){
     this.varglob.dis(temp);
   }
   ope(){
    
     this.varglob.ope();
      this.value = this.varglob.gethasil();
      this.angka1 = this.varglob.getangka1();
      this.angka2 = this.varglob.getangka2();
   }
}
