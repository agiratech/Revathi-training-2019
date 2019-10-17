import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient} from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private http: HttpClient) {}
  
  token: string;

  signupUser(email : string, password: string){
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/trello']);
          firebase.auth().currentUser.getIdToken()
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
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  ValidUser(){
    return this.token ! = null;
  }

  StoreCards( cards : any[]){
    return this.http.put('https://cards-9b5d4.firebaseio.com/reva.json', cards);
  }  
}
