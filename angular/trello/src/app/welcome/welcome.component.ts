import { Component, OnInit, Input } from '@angular/core';
import { CardService} from '../card.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent} from '../edit/edit.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  cards=[];
  forms=[];
  form;
  card;
  condition : boolean = true;
  showNewtext : boolean = true;

  @Input() formdata;

  constructor( public cardService : CardService, public dialog : MatDialog) { }

  ngOnInit() {
  }

  addForm(){
    this.forms.push(this.form);
  }
  
  toggle(){
    this.condition = !this.condition;
    this.showNewtext= !this.showNewtext;
  }
   
  addcard(){
    this.cards.push(this.card);
  }


  editCard(carding):void{
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      data: carding,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('edited name');
  });
    }
  
  drop(event: CdkDragDrop<string[]>){
    // if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("dragged");
    }
  //   else{
  //     transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
  //     console.log("hidragged");
  //   }
  // }
    
}

