import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatInputModule,
  MatDialogModule,
  MatExpansionModule
} from '@angular/material';import { SigninComponent } from './signin/signin.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { TrelloComponent } from './trello/trello.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './board/board.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    LayoutComponent,
    TrelloComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    DragDropModule,
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
