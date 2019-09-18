import { Component, OnInit } from '@angular/core';
import{ DataServiceService} from '../data-service.service';
import { MatDialog } from '@angular/material';
import { DeleteComponent} from '../delete/delete.component';
import { Subscription } from 'rxjs';



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
  this.contacts = this.dataService.getContacts();
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

  deleteitems(contact): void{
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '300px',
      height: '200px',
    });
    dialogRef.afterClosed().subscribe(
      (response) => {
        if(this.Boxchecked == true){
              this.dataService.deleteContact(contact);
              console.log("cleared");
          }}
          );
//         this.contacts.forEach(item => {
//           let index: number = (this.dataService.contacts).findIndex(d => d === item);
//           console.log(item);
//           if(index !== -1){
//           (this.dataService.contacts).splice(index, 1);
//         console.log(this.dataService.contacts)}
//           // this.dataService.deleteContact(item.contact)
//           })

//          } );
//     console.log('The dialog was closed');
// }

  }
}
