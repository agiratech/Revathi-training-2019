import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
   
cards=[
  {"name":"helloo"}
];

  constructor() { }

public createCard(newcard){
  this.cards.push(newcard);
}

public getCard(){
  return this.cards;
}
}