import { BatchItem } from './batch-item.model';
import { HttpClient } from '@angular/common/http';
import { Batch } from './batch.model';

export class BatchService {
    private batchData: BatchItem[] = [];
    private batch: Batch[] = [];

    constructor(private http: HttpClient) {

    }


    getBatchDataSource() {
        this.batch = [
            {
                name: "test",
                sl_no_range: "100-200",
                cylinders_count: 20,
                rejections_count: 2,
                status: "on"
            }
        ]
        return this.batch.slice();
    }

    prepareHstReportDataSource(start: number, end: number, rejectionsList:any) {
        this.batchData = [];
        let batchItem;
        let status = "OK";
        let col_length =  Math.floor((start + end)/4);
        let start_row_sl_no = start;

        for(let i=0;i<col_length;i++) {
            batchItem = {};
            
            for(var j=1;j<=4;j++) {
                let start_slno = start_row_sl_no + (j-1)*col_length;
                if(start_slno > end) continue;
                let serial_no_index = "serial_no"+j;
                let status_key = "status"+j;
                batchItem = {
                    ...batchItem,
                    [serial_no_index]: start_slno,
                    [status_key]: status
                }
                
            }
            this.batchData.push(batchItem);  
            ++start_row_sl_no; 
            
        }
        console.log(this.batchData);

        /*for(let k=1;k<3;k++) {            
            let start_index = start + (k-1)*col_length;
            let end_index = start + k*col_length;
            for(let i= start_index; i <= end_index;i++) {   
                let rejectedSerialNo = rejectionsList.find(element => element.serial_number == i);
                if(rejectedSerialNo != undefined) {
                    status = rejectedSerialNo.rejection_type;
                }

                batchItem = {};

                for(let index=1;index<=2; index++) {
                    let serial_no = "serial_no"+index;
                    let status_key = "status"+index;
                    start_index 
                    batchItem = {
                        ...batchItem,
                        [serial_no]: 
                        [status_key]: status
                    }
                }

                this.batchData.push(batchItem);   
               
              
            }
            batchItem.assign
           
            console.log(this.batchData);
        }*/

        return this.batchData.slice();
    }

    prepareBatchDataSource(start:number,end:number) {
        this.batchData = [];
       let end_serial_no =  Math.floor((start + end)/2);

       let serial_number1 =  end_serial_no+1;

        for(let i= start; i <= end_serial_no;i++) {      
            let batchItem;

            if(serial_number1 > end) {
                batchItem =  {
                    serial_no: i,
                    audited: false,
                }
            } else {
                batchItem =  {
                    serial_no: i,
                    audited: false,
                    serial_no1: serial_number1,
                    audited1: false
                }
            }
            this.batchData.push(batchItem);      
            ++serial_number1;
        }

        return this.batchData.slice();
    }

    createBatch(data:any) {
        return this.http.post<any>('/createbatch',data);
    }

    getBatchList() {
        return this.http.get<any>('/batches');
    }

    getBatch(id) {
        return this.http.get<any>('/batches/'+id);
    }

    getLastSerial() {
        return this.http.get<any>('/lastserial');
    }

    rejectCylinder(data:any) {
        return this.http.post<any>('/rejectcilinder',data);
    }

    rejectedCylindersList(data:any) {
        return this.http.post<any>('/rejectedcylinderlist',data);
    }
}