import { Component, OnInit } from '@angular/core';
import { DataServiceService} from "../data-service.service"
import { MatDialog } from '@angular/material';
import { ContactdialogComponent } from '../contactdialog/contactdialog.component';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  count;
  contacts=[];

  constructor(public dataService: DataServiceService, public dialog : MatDialog) { }
  ngOnInit() {
  this.contacts = this.dataService.getContacts();
  this.count = this.contacts.length;
  }
  openContact(contact):void{
    const dialogRef = this.dialog.open(ContactdialogComponent, {
      width: '600px',
      data: contact
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  });
    }
}
