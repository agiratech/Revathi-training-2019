import { Component, OnInit } from '@angular/core';
import { DataServiceService} from "../data-service.service"

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  count;
  contacts=[];

  constructor(public dataService: DataServiceService) { }
  ngOnInit() {
  this.contacts = this.dataService.getContacts();
  this.count = this.contacts.length;
  }
}
