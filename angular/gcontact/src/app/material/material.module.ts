import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule,MatIconModule, MatInputModule } from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';

const MaterialComponent=[
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
   ];

@NgModule({
  imports: [ MaterialComponent ],
  exports: [ MaterialComponent],

})
export class MaterialModule { }
