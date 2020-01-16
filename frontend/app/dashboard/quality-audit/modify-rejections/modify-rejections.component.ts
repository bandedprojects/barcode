import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BatchService } from '../../batch/batch.service';
import { MatDialog } from '@angular/material';
import { map } from 'rxjs/operators';
import { AppDialogComponent } from 'src/app/app-dialog/app-dialog.component';

@Component({
  selector: 'app-modify-rejections',
  templateUrl: './modify-rejections.component.html',
  styleUrls: ['./modify-rejections.component.css']
})
export class ModifyRejectionsComponent implements OnInit {
  searchSerialNoForm: FormGroup;
  modifyRejectionsForm: FormGroup;
  showRejectForm = false;
  batches = [];
  rejection_types: any[] = [
    {value: 'HST', viewValue: 'HST'},
    {value: 'Pneumatic', viewValue: 'Pneumatic Test'},
    {value: 'BIS', viewValue: 'BIS Audit'},
    {value: 'Custom', viewValue: 'Custom'}
  ];
  status_list: any[] = [
    {value: 'Rejected', viewValue: 'Rejected'},
    {value: 'OK', viewValue: 'OK'}
  ];

  constructor(private batchService: BatchService, private dialog: MatDialog) { }

  ngOnInit() {
    this.searchSerialNoForm = new FormGroup({
      serialno: new FormControl('')
    });  

    this.modifyRejectionsForm = new FormGroup({
      batchname: new FormControl(''),
      serialnumber: new FormControl(''),
      rejectiontype: new FormControl(''),
      status: new FormControl(''),
      comments: new FormControl('')
    });  

    this.batchService.getBatchList()
    .subscribe(responseData => {
      this.batches = responseData.data.batches;      
    });

    this.modifyRejectionsForm.patchValue({
      status: "Rejected"
    });
  }

  invalidSerialNumber() {
    let dialogRef = this.dialog.open(AppDialogComponent, { 
      data: {
        description: "Serial number can not find in any batch."
      }
    });
    this.showRejectForm = false;   
  }

  onSearchClick() {
    
    if(this.batches.length) {
      const serialno = parseInt(this.searchSerialNoForm.value.serialno);
      const searchBatch = this.batches.find(element => {
        if(parseInt(element.serial_start) <= serialno && parseInt(element.serial_end) >= serialno) {
          return element;
        }
      });

      if(searchBatch && searchBatch.batchname) {
        this.showRejectForm = true;
        this.modifyRejectionsForm.patchValue({
          batchname: searchBatch.batchname,
          serialnumber: serialno
        });        
      } else {
        this.invalidSerialNumber();           
      }           
    } else {
      this.invalidSerialNumber();    
    }    
  }

  onRejectSubmit() {
    this.batchService.rejectCylinder(this.modifyRejectionsForm.value).subscribe(responseData => {
      let message = "";

      if(responseData.status == "1") {
        message = "Cylinder has been rejected.";
      } else if(responseData.status == "2") {
        message = "cylinder already present in the rejected list. if you want to modify, please use modify rejections page.";
      } else {  
        message = "Failed to reject cylinder."
      }

      let dialogRef = this.dialog.open(AppDialogComponent, { 
        data: {
          description: message
        }
      });
    })
  }


}
