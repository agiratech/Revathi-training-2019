import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor() { }

labels=[
  {"name": "reva"}
]

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

public createLabel(label :{name}){
  this.labels.push(label);
}
public getlabel():Array<{name}>{
  return this.labels;
}
public deleteLabel(label) {
  const index: number = this.labels.indexOf(label);
  if (index !== -1) {
      this.labels.splice(index, 1);
  }        
}
public deleteContact(contact) {
  const index: number = this.contacts.indexOf(contact);
  if (index !== -1) {
      this.contacts.splice(index, 1);
  }        
}
}
