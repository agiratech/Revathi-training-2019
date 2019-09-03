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
import { MatDialogModule} from '@angular/material';
import { ImportComponent } from './import/import.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
  ],
  entryComponents:[
     MenuDialogComponent,
     CreateComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
