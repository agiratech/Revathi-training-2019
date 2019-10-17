import { Component, OnInit,Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { UserService } from '../user.service';


@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.css']
})
export class TrelloComponent implements OnInit {
  cards=[];
  condition : boolean = true;
  showNewtext : boolean = true;

  @Input() formdata;


  constructor( private Userservice : UserService) { }

  ngOnInit() {
  }

  toggle(){
    this.condition = !this.condition;
    this.showNewtext= !this.showNewtext;
  }

  drop(event: CdkDragDrop<string[]>){
    // if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("dragged");
    }

    addcard(){
     this.Userservice.StoreCards(this.cards).subscribe(
       (res)=> console.log(res),
       (error)=> console.log(error)  
     );
    }
}
