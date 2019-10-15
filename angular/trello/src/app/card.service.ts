import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Cards {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards = [];
  name: string;

  constructor(private http: HttpClient) { }

  // StoreCards(cards: any[]) {
  //   const headers = new HttpHeaders({ 'Content-type': 'application/json' })
  //   return this.http.post('https://trello-e4999.firebaseio.com/revathi.json', cards, { headers: headers });
  
  // }

  // SetCards(id) {
  //   const headers = new HttpHeaders({ 'Content-type': 'application/json' })
  //   this.http.get('https://trello-e4999.firebaseio.com/revathi/' + id + '.json', { headers: headers }).subscribe(res => {
  //     this.cards.push({ 'name': res['name'] })
  //   })
  // }

  // displayCards() {
  //   const headers = new HttpHeaders({ 'Content-type': 'application/json' })
  //   let data = [];
  //   this.http.get('https://trello-e4999.firebaseio.com/revathi.json', { headers: headers }).subscribe(res => {
  //     Object.keys(res).forEach(function (key) {
  //       data.push({
  //         id: key, 'name': res[key]['name'],
  //       })
  //     })
  //   })
  // return data;
  // }
}