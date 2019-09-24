import { Component, OnInit } from '@angular/core';
import{ DataServiceService} from '../data-service.service';
import { MatDialog, MatSnackBar } from '@angular/material';
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
  undoContact=[];
  Boxchecked : boolean = false;
  indeterminate : boolean = false; 
  
  constructor(private snackBar: MatSnackBar, public dataService: DataServiceService, public dialog : MatDialog) { }
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
  openContact(contact):void{
    const dialogRef = this.dialog.open(ContactdialogComponent, {
      width: '500px',
      data: contact
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('contact opened');
  });
    }

  deleteitems(contact): void{
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '300px',
      data : contact
    });
    dialogRef.afterClosed().subscribe(
      (response) => {
      //   console.log(this.contacts.filter(d=>d.checked==true));
      // });}
        // // if(this.Boxchecked == true){
        // //       this.dataService.deleteContact(contact);
        // //       console.log("cleared");
        // //   }}
        // //   );}
          let index : any = this.contacts.filter(d=>d.checked == true);
          console.log(index, "index");
          if(index !== -1){
              // this.contacts= this.contacts.filter(item => item == index);
              // this.contacts.splice(index,1);
              this.dataService.deleteContact(contact);
              console.log("cleared");   
          }    
          this.openSnackBar('deleted', this.undo());
          // this.contacts = this.contacts.filter( item => item == !index);
          // console.log(this.contacts, "contact");
         } );

         }


 
editContact(contact): void{
  const dialogRef = this.dialog.open(EditComponent, {
    width: '600px',
    data: contact
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('edited contact');
});
  }

  openSnackBar(message: string, action : string) {
    this.snackBar.open(message, 'undo');
  }

  undo():any{
   if(this.contacts.length !== 0){
     this.undoContact.push(this.contacts.pop());
     console.log(this.undoContact, "undo");
   }
  }
}
