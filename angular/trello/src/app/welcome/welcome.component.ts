import { Component, OnInit, Input } from '@angular/core';
import { CardService} from '../card.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent} from '../edit/edit.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  cards;
  card;
  condition : boolean = true;
  showNewtext : boolean = true;

  @Input() formdata;

  constructor(private http : HttpClient, public cardService : CardService, public dialog : MatDialog) { 
    // this.cards = this.cardService.displayCards();
  }

  ngOnInit() {
  }
  
  toggle(){
    this.condition = !this.condition;
    this.showNewtext= !this.showNewtext;
  }
   
  // addcard(newCard : NgForm){
    // this.cardService.StoreCards(newCard.value).subscribe(res=>{
    //   this.cardService.SetCards(res['name']);
    // }); }
  
    addcard( data: { card : string}){
     this.http.post('https://cards-9b5d4.firebaseio.com/reva.json', data).subscribe(res=>{
       console.log("hi");
     })
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

