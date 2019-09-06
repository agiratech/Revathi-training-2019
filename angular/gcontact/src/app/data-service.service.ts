import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

contacts = [
  {"Firstname": "reva", 
  "Lastname" : "reva", 
  "Company" : "hi",
   "Job" : "rev",
    "Email": "reyyyyyyyyyyy", 
    "Phone": "1222345663", 
    "Notes" : ""}
]

public createcontact(contact : {Firstname, Lastname, Company, Job, Email, Phone, Notes}){
  this.contacts.push(contact);
}

public getContacts():Array<{Firstname, Lastname, Company, Job, Email, Phone, Notes}>{
  return this.contacts;
}
}