import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

contacts = [
  {
    "Firstname":"Reva",
    "Lastname": "muthu",
    "Company":"agire",
    "Job": "software",
    "Email": "revaa",
    "Phone":  "123443454",
    "Notes": "hi hello",
}
]

public createcontact(contact : {Firstname, Lastname, Company, Job, Email, Phone, Notes}){
  this.contacts.push(contact);
}

public getContacts():Array<{Firstname, Lastname, Company, Job, Email, Phone, Notes}>{
  return this.contacts;
}
}