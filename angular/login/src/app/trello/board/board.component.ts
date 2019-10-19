import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  Boards;
  forms={ Board:""};


  constructor( private Userservice : UserService) {
    this.Boards = this.Userservice.displayBoards();
  }

  ngOnInit() {
  }

  addBoards(form : NgForm){
    this.Userservice.StoreBoards(form.value).subscribe(
      res => { this.Userservice.AddBoardArray(res['Board']);
        console.log(res);
      },
      (error) => console.log(error));
   
    // this.forms.push(form);


}


}
