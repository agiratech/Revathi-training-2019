import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';



@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.css']
})
export class TrelloComponent implements OnInit {

  constructor(private Userservice: UserService) {
  }

  ngOnInit() {
  }

  Onlogout() {
    this.Userservice.logout();
  }
}
