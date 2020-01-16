import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
//import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.css']
})
export class AppDialogComponent implements OnInit {  
  description:string;

  constructor(private dialogRef: MatDialogRef<AppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.description = data.description;
      console.log(data);
    }

  ngOnInit() {
    /*this.form = this.fb.group({
      description: [this.description, []]
  });*/
  }

  save() {
    //this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close('close');
  }  
}
