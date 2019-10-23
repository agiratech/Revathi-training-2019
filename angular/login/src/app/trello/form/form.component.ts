import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UserService } from '../../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Cards;
  forms={ card:""};
  delete;
  condition : boolean = true;
  showNewtext : boolean = true;

  @Input() formcard;


  constructor( private Userservice : UserService) { 
   this.Cards = this.Userservice.displayCard();
    // var cardRef = firebase.database().ref('/reva');
  }

  ngOnInit() {
  }

  toggle(){
    this.condition = !this.condition;
    this.showNewtext= !this.showNewtext;
  }

  positionChange(){
    this.Cards.reverse();
  }

  drop(event: CdkDragDrop<string[]>){
  // if(event.previousContainer === event.container){
   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  // }
  //   else{
  //   transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
  //   console.log("hidragged");
  // }
  }

  //  addCard(formData : NgForm){
  //  }


    AddCard(formData : NgForm){
       this.Userservice.StoreCards(formData.value).subscribe(
         res =>{ this.Userservice.AddcardArray(res['card']);
         console.log(res);
        },
        (error)=>console.log(error));
        formData.reset();
    }
   
    deletecard(card){
      const index:number = this.Cards.indexOf(card);
      if(index !== -1){
        this.delete = this.Cards.splice(index, 1);
        this.Userservice.deleteCard(card.id).subscribe(
          res => { console.log("delete")});
      }
    }
   
}