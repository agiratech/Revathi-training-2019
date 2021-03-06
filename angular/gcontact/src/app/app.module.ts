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
import { FilterPipe } from './filter.pipe';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ContactdialogComponent } from './contactdialog/contactdialog.component';
// import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material';



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
    LayoutComponent,
    FilterPipe,
    DeleteComponent,
    EditComponent,
    ContactdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    // InternationalPhoneNumberModule
    
  ],
  entryComponents:[
     MenuDialogComponent,
     CreateComponent,
     ImportComponent,
     DeleteComponent,
     EditComponent,
     ContactdialogComponent
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
