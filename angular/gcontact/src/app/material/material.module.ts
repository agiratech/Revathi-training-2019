import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule,MatIconModule, MatInputModule } from '@angular/material';

const MaterialComponent=[
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule ];

@NgModule({
  imports: [ MaterialComponent ],
  exports: [ MaterialComponent]
})
export class MaterialModule { }
