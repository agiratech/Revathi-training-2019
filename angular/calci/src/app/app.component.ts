import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calci';
  number1 : number;
  number2 : number;
  public result : number;
 
  public add(){
      this.result = this.number1 + this.number2
  }
  public sub(){
    this.result = this.number1 - this.number2
}
public mul(){
  this.result = this.number1 * this.number2
}
public divide(){
  this.result = this.number1 / this.number2
}
public mod(){
  this.result = this.number1 % this.number2
}
}
