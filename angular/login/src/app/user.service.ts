import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as fire from 'firebase';
import 'firebase/auth';
import 'firebase/database';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private router: Router, private http: HttpClient) {
    // var cardref = fire.database().ref("/reva")
  }
  Cards = [];
  Boards = [];
  token: string;

  signupUser(email: string, password: string) {
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/trello']);
          fire.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      ).catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    fire.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/trello']);
          fire.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    fire.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  ValidUser() {
    return this.token! = null;
  }

  logout() {
    fire.auth().signOut().then(
      response => {
        this.router.navigate(['/']);
        this.token = null;
      });
  }

  StoreCards(formData) {
    return this.http.post('https://cards-9b5d4.firebaseio.com/reva/cards.json', formData);
  }

  AddcardArray(id) {
    this.http.get('https://cards-9b5d4.firebaseio.com/reva/cards' + id + '.json').subscribe(
      res => {
        this.Cards.push({ 'card': res['card'], 'id': id })
        console.log(this.Cards);
        // console.log(id);
    // var data = fire.database().ref('reva').child('board').push().key;
    // var update = [];
    // update['/board/' + id + '/' + data];
    // return fire.database().ref().update(update);
      });
  }

  displayCard() {
    let data = []
    this.http.get('https://cards-9b5d4.firebaseio.com/reva/cards.json').subscribe(res => {
      Object.keys(res).forEach(function (key) {
        data.push({id:key, 'card': res[key]['card'] })
        console.log(res);
      })
    });
    return data;
  }

  deleteCard(id) {
    return this.http.delete('https://cards-9b5d4.firebaseio.com/reva/cards' + id + '.json');
  }

  

  StoreBoards(formData) {
    return this.http.post('https://cards-9b5d4.firebaseio.com/reva.json', formData);
  }

  AddBoardArray(id) {
    this.http.get('https://cards-9b5d4.firebaseio.com/reva' + id + '.json').subscribe(
      res => {
        this.Boards.push({ 'Board': res['Board'], 'id': id })
        console.log(this.Boards, "board");
      });
  }
  displayBoards() {
    let dataBoard = []
    this.http.get('https://cards-9b5d4.firebaseio.com/reva.json').subscribe(res => {
      Object.keys(res).forEach(function (key) {
        dataBoard.push({id: key, 'Board': res[key]['Board'] })
        console.log(res);
        // fire.database().ref().update(dataBoard);
      })
    });
    return dataBoard;
  }
}
