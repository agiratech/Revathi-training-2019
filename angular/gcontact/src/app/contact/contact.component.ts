import { Component, OnInit } from '@angular/core';
import{ DataServiceService} from '../data-service.service'



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
 
  
  constructor(public dataService: DataServiceService) { }
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
}
