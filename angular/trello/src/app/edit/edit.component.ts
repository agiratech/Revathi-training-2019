import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Cards{
  name: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

    constructor(public dialogRef: MatDialogRef<EditComponent>,
      @Inject(MAT_DIALOG_DATA) public data : Cards,
    ){}
      onNoClick(): void {
        this.dialogRef.close();
      }
}
