import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor() { }

labels=[
  {"name": "reva"}
]
newContact=[{ "Firstname": "revathi", 
"Lastname" : "Muthu", 
"Company" : "aaa",
"Job" : "Engineer",
"Email": "reva@mail.com", 
"Phone": "1222345663", 
"Notes" : ""}]

contacts = [
  { "Firstname": "revathi", 
    "Lastname" : "Muthu", 
    "Company" : "aaa",
    "Job" : "Engineer",
    "Email": "reva@mail.com", 
    "Phone": "1222345663", 
    "Notes" : ""
  },
  { "Firstname": "niha", 
    "Lastname" : "venu", 
    "Company" : "bbb",
    "Job" : "Engineer",
    "Email": "niha@mail.com", 
    "Phone": "1222345663", 
    "Notes" : ""
  },
  { "Firstname": "sathya", 
    "Lastname" : "vadivel", 
    "Company" : "ccc",
    "Job" : "Engineer",
    "Email": "sathya@mail.com", 
    "Phone": "1222345663", 
    "Notes" : ""
  },
  { "Firstname": "vino", 
    "Lastname" : "saba", 
    "Company" : "ddd",
    "Job" : "Engineer",
    "Email": "vino@mail.com", 
    "Phone": "1222345663",
    "Notes" : ""
  },
  { "Firstname": "mary", 
    "Lastname" : "muthu", 
    "Company" : "eee",
    "Job" : "Engineer",
    "Email": "mary@mail.com", 
    "Phone": "1222345663", 
    "Notes" : ""
  },
  { "Firstname": "suvetha", 
    "Lastname" : "praba", 
    "Company" : "ggg",
    "Job" : "Engineer",
    "Email": "suve@mail.com", 
    "Phone": "1222345663", 
    "Notes" : ""
  }
]

public createcontact(contact : {Firstname, Lastname, Company, Job, Email, Phone, Notes}){
  this.newContact.push(contact);
}

public getNewContacts():Array<{Firstname, Lastname, Company, Job, Email, Phone, Notes}>{
  return this.newContact;
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
      this.newContact.splice(index, 1);
  }        
}
}
