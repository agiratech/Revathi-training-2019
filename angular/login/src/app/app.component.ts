import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'login';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCAG_WyXPanyU8pSxgyxa8slILftmtzA3c",
    authDomain: "cards-9b5d4.firebaseapp.com",
    });
  }
}
