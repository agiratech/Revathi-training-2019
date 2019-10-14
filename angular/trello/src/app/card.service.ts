import { Injectable } from '@angular/core';

export interface Cards{
  name: string;
}

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