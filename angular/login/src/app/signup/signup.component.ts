import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
  }
 
  Signup(form : NgForm){
    const email = form.value.email;
    const password =  form.value.password;
    this.userService.signupUser(email, password);
  }
  

}
