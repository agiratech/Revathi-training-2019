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


  // ChangePosition(){
  //   this.Cards.reverse();
  //   return this.http.
  // }

  StoreCards(formData) {
    return this.http.post('https://cards-9b5d4.firebaseio.com/reva.json', formData);
  }

  AddcardArray(id) {
    this.http.get('https://cards-9b5d4.firebaseio.com/reva/' + id + '.json').subscribe(
      res => {
        //  var childRef =childRef.child(id).push({ 'card': res['card'], 'id': id})
        this.Cards.push({ 'card': res['card'], 'id': id })
        console.log(this.Cards);
      });
  }

  displayCard() {
    let data = []
    this.http.get('https://cards-9b5d4.firebaseio.com/reva.json').subscribe(res => {
      Object.keys(res).forEach(function (key) {
        data.push({ id: key, 'card': res[key]['card'] })
        console.log(res);
      })
    });
    return data;
  }

  deleteCard(id) {
    return this.http.delete('https://cards-9b5d4.firebaseio.com/reva/' + id + '.json');
  }

  logout() {
    fire.auth().signOut().then(
      response => {
        this.router.navigate(['/']);
        this.token = null;
      });
  }

  StoreBoards(formData) {
    return this.http.post('https://cards-9b5d4.firebaseio.com/reva.json', formData);
  }

  AddBoardArray(id) {
    this.http.get('https://cards-9b5d4.firebaseio.com/reva/' + id + '.json').subscribe(
      res => {
        this.Boards.push({ 'Board': res['Board'], 'id': id })
        console.log(this.Boards, "board");
      }); 863720041950717
  }
  displayBoards() {
    let dataBoard = []
    this.http.get('https://cards-9b5d4.firebaseio.com/reva.json').subscribe(res => {
      Object.keys(res).forEach(function (key) {
        dataBoard.push({ id: key, 'Board': res[key]['Board'] })
        console.log(dataBoard);
        console.log(key);
        console.log(res);
      })
    })
    return dataBoard;
  }
}
