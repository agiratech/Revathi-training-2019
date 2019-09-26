import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CardService } from '../card.service';

export interface DialogData{
name : string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<EditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,public cardService : CardService) {}

  ngOnInit() {
  }

}
