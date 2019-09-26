import { Component, OnInit } from '@angular/core';
import { CardService} from '../card.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent} from '../edit/edit.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  cards=[];
  card : { name }={ name : ""};
  condition : boolean = true;
  showNewtext : boolean = true;
  constructor( public cardService : CardService, public dialog : MatDialog) { }

  ngOnInit() {
    this.cards=this.cardService.getCard();
  }
  
  toggle(){
    this.condition = !this.condition;
    this.showNewtext= !this.showNewtext;
  }

  editCard(name):void{
    const dialogRef = this.dialog.open(EditComponent, {
      width: '100px',
      data: name
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('edited name');
  });
    }
  }
