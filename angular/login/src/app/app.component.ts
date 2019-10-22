import { Component, OnInit } from '@angular/core';
import * as fire from 'firebase';
import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'login';

  ngOnInit(){
    fire.initializeApp({
      apiKey: "AIzaSyCAG_WyXPanyU8pSxgyxa8slILftmtzA3c",
    authDomain: "cards-9b5d4.firebaseapp.com",
    databaseURL: "https://cards-9b5d4.firebaseio.com",
    projectId: "cards-9b5d4",
    storageBucket: "cards-9b5d4.appspot.com",
    messagingSenderId: "28237824707",
    appId: "1:28237824707:web:cadb14b0d1ddb35f5dd876",
    measurementId: "G-FF91PBKS94"
    });
  }
}
