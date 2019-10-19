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
    });
  }
}
