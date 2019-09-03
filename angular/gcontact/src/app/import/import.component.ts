import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent{

  constructor(
    public dialogRef: MatDialogRef<ImportComponent>
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
