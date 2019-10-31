import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  Cards;
  forms = { card: "" };
  delete;
  Boards;
  form = { Board: "" };
  condition: boolean = true;
  showNewtext: boolean = true;

  constructor(private Userservice: UserService) {
    this.Cards = this.Userservice.displayCard();
    this.Boards = this.Userservice.displayBoards();

  }

  ngOnInit() {
  }

  toggle() {
    this.condition = !this.condition;
    this.showNewtext = !this.showNewtext;
  }

  positionChange() {
    this.Cards.reverse();
  }

  AddCard(formData: NgForm) {
    this.Userservice.StoreCards(formData.value).subscribe(
      res => {
        this.Userservice.AddcardArray(res['card']);
        console.log(res);
      },
      (error) => console.log(error));
    formData.reset();
  }

  deletecard(card) {
    const index: number = this.Cards.indexOf(card);
    if (index !== -1) {
      this.delete = this.Cards.splice(index, 1);
      this.Userservice.deleteCard(card.id).subscribe(
        res => { console.log("delete") });
    }
  }
  addBoards(form: NgForm) {
    this.Userservice.StoreBoards(form.value).subscribe(
      res => {
        this.Userservice.AddBoardArray(res['Board']);
        console.log(res);
      },
      (error) => console.log(error));

    // this.Boards.push(form);
  }

}
