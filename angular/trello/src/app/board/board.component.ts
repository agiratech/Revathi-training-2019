import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  form;
  forms = [];



  constructor() { }

  ngOnInit() {
  }

  addForm() {
    this.forms.push(this.form);
  }

  drop(event: CdkDragDrop<string[]>) {
    // if(event.previousContainer === event.container){
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    console.log("form dragged");
  }
  //   else{
  //   transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
  //   console.log("hidragged");
  // }
  // }

}
