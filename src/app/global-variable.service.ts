import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService {
  public angka1 : number = 0;
  public angka2 : number = 0;
  public operator : string = '';
  public value : string = '';
  constructor() { }
  public setangka1(temp){
    this.angka1 = temp;
  }
  public setangka2(temp){
    this.angka2 = temp;
  }
  public setoperator(temp){
    this.operator = temp;
  }
  public getvalue(){
    return this.value;
  }
  public getangka1(){
    return this.angka1;
  }
  public getangka2(){
    return this.angka2;
  }
  public getoperator(){
    return this.operator;
  }
  public dis(temp){
    if (this.angka1 == 0){
        this.angka1 = temp;
        this.value += temp;
    }
    else if (this.angka2 == 0) {
        this.angka2 = temp;
         this.value += temp;
    }
    if (this.operator == ''){
         this.value += temp;
         this.operator = temp;
    }
  }

}