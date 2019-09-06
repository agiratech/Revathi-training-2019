import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FrequentComponent } from './frequent/frequent.component';
import { DirectoryComponent } from './directory/directory.component';
import { DuplicateComponent } from './duplicate/duplicate.component';
import { CreateComponent } from './create/create.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
import { FormsModule} from '@angular/forms';
import { ImportComponent } from './import/import.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FrequentComponent,
    DirectoryComponent,
    DuplicateComponent,
    CreateComponent,
    MenuDialogComponent,
    ImportComponent,
    ContactComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    
    
  ],
  entryComponents:[
     MenuDialogComponent,
     CreateComponent,
     ImportComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
