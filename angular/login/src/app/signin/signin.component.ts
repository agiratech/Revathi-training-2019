import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  

  constructor(private Userservice : UserService) { }

  ngOnInit() {
  }
  
  Signin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.Userservice.signinUser(email, password);
  }

}
