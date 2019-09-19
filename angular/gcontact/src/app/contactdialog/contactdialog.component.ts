import { Component, OnInit , Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataServiceService} from '../data-service.service';
import { MatDialog } from '@angular/material';
import { EditComponent } from '../edit/edit.component';

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
  selector: 'app-contactdialog',
  templateUrl: './contactdialog.component.html',
  styleUrls: ['./contactdialog.component.css']
})
export class ContactdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContactdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog : MatDialog,public dataService : DataServiceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {}
  
    editContact(contact): void{
      const dialogRef = this.dialog.open(EditComponent, {
        width: '600px',
        data: contact
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
      
  }

}
