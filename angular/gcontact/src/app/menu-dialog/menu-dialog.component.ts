import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataServiceService} from '../data-service.service';

export interface DialogData{
  Firstname: string;
  Lastname: string;
  Company: string;
  Job: string;
  Email: string;
  Phone: string;
  Notes: string;
}

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.css']
})
export class MenuDialogComponent {

  contact:{ Firstname, Lastname, Company, Job, Email, Phone, Notes}= { Firstname : "", Lastname : "", Company : "", Job : "", Email : "", Phone : "", Notes : ""};

  constructor(
    public dialogRef: MatDialogRef<MenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public dataService : DataServiceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createcontact(){
    console.log(this.contact);
    this.dataService.createcontact(this.contact);
    this.contact = { Firstname : "", Lastname : "", Company : "", Job : "", Email : "", Phone : "", Notes : ""};
    this.dialogRef.close();
  }
}