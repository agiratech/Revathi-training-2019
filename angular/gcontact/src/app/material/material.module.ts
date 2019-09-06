import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule,MatIconModule, MatInputModule } from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';



const MaterialComponent=[
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatSidenavModule
   ];

@NgModule({
  imports: [ MaterialComponent ],
  exports: [ MaterialComponent],

})
export class MaterialModule { }
