import { Component, OnInit } from '@angular/core';
import{ DataServiceService} from '../data-service.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   
  contacts;
  count;
   
  constructor(public dataService: DataServiceService) { }
  ngOnInit() {
    this.contacts = this.dataService.getContacts();   
    this.count = this.contacts.length;

  }

}
