import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Batch } from '../batch.model';
import { BatchService } from '../batch.service';
import { AppDialogComponent } from '../../../app-dialog/app-dialog.component';

@Component({
  selector: 'app-create-batch',
  templateUrl: './create-batch.component.html',
  styleUrls: ['./create-batch.component.css']
})
export class CreateBatchComponent implements OnInit {
  createBatchForm: FormGroup;
  batchName = "";
  displayedColumns: string[] = ['name', 'sl_no_range','cylinders_count','rejections_count', 'status'];  
  //dataSource = new BehaviorSubject([]);
  dataSource = new MatTableDataSource<Batch>();
  
  batch: Batch[] = [];
  displayBatchSection = false;

  constructor(private batchService: BatchService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.createBatchForm = new FormGroup({
      batchname: new FormControl(''),
      serial_start: new FormControl(''),
      serial_end: new FormControl('')
    });  
    this.dataSource.data = this.batchService.getBatchDataSource();
  }

  onSubmit() {
    this.batchService.createBatch(this.createBatchForm.value)
      .subscribe(responseData => {
        var dialogConfig = {};
        if(responseData.status == '1') {
          dialogConfig = {
            description: "Batch has been created successfully."
          }
        } else if(responseData.status == '0') {
          dialogConfig = {
            description: "Duplicate Batch name."
          }
        }

        let dialogRef = this.dialog.open(AppDialogComponent, { 
          data: dialogConfig
        });

        dialogRef.afterClosed().subscribe(result => {
          this.router.navigate(['/viewbatch']);
        });
      });
  }
  

}
