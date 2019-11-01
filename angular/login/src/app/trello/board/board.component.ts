import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  Boards;
  forms = { Board: "" };
  condition: boolean = true;
  showNewtext: boolean = true;

  @Input() board;

  constructor(private Userservice: UserService) {
    this.Boards = this.Userservice.displayBoards();
  }

  ngOnInit() {
  }

  toggle() {
    this.condition = !this.condition;
    this.showNewtext = !this.showNewtext;
  }

  addBoards(form: NgForm) {
    this.Userservice.StoreBoards(form.value).subscribe(
      res => {
       this.Userservice.AddBoardArray(res['Board']);
        console.log(res);
      },
      (error) => console.log(error));
    // this.Boards.push(form);

      //  let data = Object.assign({}, form.value);
      //  this.firestore.collection('reva').add(data);
  }
}
