import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TrelloComponent } from './trello/trello.component';


const routes: Routes = [
  {path: '', component:LayoutComponent},
  {path: 'signin', component:SigninComponent},
  {path : 'signup', component:SignupComponent},
  {path : 'trello', component: TrelloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
