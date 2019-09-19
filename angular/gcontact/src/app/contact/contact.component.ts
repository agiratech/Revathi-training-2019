import { Component, OnInit } from '@angular/core';
import{ DataServiceService} from '../data-service.service';
import { MatDialog } from '@angular/material';
import { DeleteComponent} from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';
import { ContactdialogComponent } from '../contactdialog/contactdialog.component';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  count;
  contacts=[];
  Boxchecked : boolean = false;
  indeterminate : boolean = false;
 
  
  constructor(public dataService: DataServiceService, public dialog : MatDialog) { }
  ngOnInit() {
  this.contacts = this.dataService.getNewContacts();
  this.count = this.contacts.length;
  }

   filterStatus="";

checkChange(){
  for (let value of Object.values(this.contacts)){
    value.checked = this.Boxchecked;
  }
}

  contactChange(){
    let checkcount = 0;
    for(let value of Object.values(this.contacts)){
          if(value.checked)
          checkcount++;
          console.log(value);
    }
  if( checkcount > 0 &&  checkcount < this.contacts.length ){
    this.indeterminate = true;
  }
  else if(checkcount == this.contacts.length){
    this.indeterminate = false;
    this.Boxchecked = true;
  }
  else{
    this.indeterminate = false;
    this.Boxchecked = false;
  
  }
}
  // deleteContact(value){
  //     const index = this.contacts.indexOf(value.checked);
  //       if(index ! == -1){
  //       this.contacts.splice(index, 1);
  //       }
  // }
  openContact(contact):void{
    const dialogRef = this.dialog.open(ContactdialogComponent, {
      width: '600px',
      data: contact
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  });
    }

  deleteitems(contact): void{
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '300px',
      data : contact
    });
    dialogRef.afterClosed().subscribe(
      (response) => {
        // if(this.Boxchecked == true){
        //       this.dataService.deleteContact(contact);
        //       console.log("cleared");
        //   }}
        //   );}
        this.contacts.forEach(item => {
          let index: number = (this.dataService.newContact).findIndex(d => d === item);
          console.log(item);
          if(index !== -1){
          (this.dataService.newContact).splice(index, 1);
        console.log(this.dataService.newContact)}
          // this.dataService.deleteContact(item.contact)
          })

         } );}
 
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
