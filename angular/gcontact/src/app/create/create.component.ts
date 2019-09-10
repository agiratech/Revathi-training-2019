import { Component , Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataServiceService} from '../data-service.service';

export interface DialogData{
  Label: string;
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
    
  label: { name }={ name : ""};

    constructor(
      public dialogRef: MatDialogRef<CreateComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData, public dataService : DataServiceService) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    createLabel(){
      this.dataService.createLabel(this.label);
      this.label = { name : ""};
    }
  }

