import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BatchItem } from '../../batch/batch-item.model';
import { BatchService } from '../../batch/batch.service';

@Component({
  selector: 'app-hstreports',
  templateUrl: './hstreports.component.html',
  styleUrls: ['./hstreports.component.css']
})
export class HstreportsComponent implements OnInit {

  showHSTReport = false;
  generateReportForm: FormGroup;
  batchesList = [];
  batchName = "";
  displayedColumns: string[] = ['serial_no1', 'status1','serial_no2','status2','serial_no3','status3','serial_no4','status4'];  
  //dataSource = new BehaviorSubject([]);
  dataSource = new MatTableDataSource<BatchItem>();

  constructor(private batchService: BatchService) { }

  ngOnInit() {
    this.generateReportForm = new FormGroup({
      batch_name: new FormControl('')
    });

    this.batchService.getBatchList().subscribe(responseData => {
      if(responseData.status == "1") {
        this.batchesList = responseData.data.batches;
      }
    });  
  }

  onGenerateClick() {
   
    let batchname = this.generateReportForm.value.batch_name;

    let data = {
      "batchname": batchname
    };

    let batch = this.batchesList.find(element => element.batchname == batchname);    
    this.batchService.rejectedCylindersList(data).subscribe(responseData => {
      if(responseData.status == '1') {    
       //console.log(responseData.data.rejectionslist);
        //let rejection_types_array = this.dataSource.data.map(element => element.rejection_type);
        //rejection_types_array = [...new Set(rejection_types_array)];
        //this.rejection_types = ['All',...rejection_types_array];
       // this.searchBatchNameForm.reset();
      } 

      this.dataSource.data = this.batchService.prepareHstReportDataSource(batch.serial_start, batch.serial_end, responseData.data.rejectionslist);    
      this.showHSTReport = true;
    })
    
    /*this.batchService.getBatchList().subscribe(responseData => {
      if(responseData.status == "1") {
        let batch = responseData.data.batches.find(element => element.batchname == batchname);
        
        this.dataSource.data = this.batchService.prepareHstReportDataSource(batch.serial_start, batch.serial_end);
        console.log(this.dataSource.data);
        this.showHSTReport = true;
      }
      
    });*/ 
  }

}
