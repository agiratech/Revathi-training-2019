import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() { }
 
  @Input() searchModel;
  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();


updateSearchModel(value) {
    this.searchModel = value;
    this.searchModelChange.emit(this.searchModel);
  }
}