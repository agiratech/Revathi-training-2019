import { Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';
import { CreateComponent} from '../create/create.component';
import { ImportComponent } from '../import/import.component';
import{ DataServiceService} from '../data-service.service'



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  Firstname: string;
  Lastname: string;
  Company: string;
  Job: string;
  Email: string;
  Phone: string;
  Notes: string; 
  Label : string;
   
  labels;

  constructor( private snackBar: MatSnackBar, public dialog: MatDialog, public dataService: DataServiceService) { }

  ngOnInit() {
    this.labels = this.dataService.getlabel();    
  }
 
  public deleteLabel(label){
    this.dataService.deleteLabel(label);
    }

  openDialog(): void{
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      width: '600px',
      data : {Firstname: this.Firstname,Lastname: this.Lastname,Company: this.Company,Job: this.Job,Email: this.Email, Phone: this.Phone, Notes: this.Notes}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('contact created');
      this.openSnackBar('contact created');
  });
}

openSnackBar(message: string) {
  this.snackBar.open(message);
}

labelbox(): void{
  const dialogRef = this.dialog.open(CreateComponent, {
    width: '400px',
    data: {Label: this.Label}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('label created');
});
}

importbox(): void{
  const dialogRef = this.dialog.open(ImportComponent, {
    width: '450px',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('import box');
});
}
}


  
