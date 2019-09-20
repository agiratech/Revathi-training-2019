import { NgModule } from '@angular/core';
import { MatButtonModule,MatIconModule, MatInputModule } from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';




const MaterialComponent=[
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatExpansionModule,
  MatMenuModule,
  MatTableModule,
  MatSnackBarModule
   ];

@NgModule({
  imports: [ MaterialComponent ],
  exports: [ MaterialComponent],

})
export class MaterialModule { }
