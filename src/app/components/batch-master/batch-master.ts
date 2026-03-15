import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import { WritableSignal, signal, Signal } from '@angular/core';
import { OnInit } from '@angular/core';
import { Master } from '../../service/master';
import { BatchService } from '../../service/batch-service';

@Component({
  selector: 'app-batch-master',
  imports: [FormsModule],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster implements OnInit {
  masterServ = inject(Master);
  batchService = inject(BatchService);

  constructor() {
    console.log('BatchMaster class constructor called ' + this.masterServ.addTwoNum(5, 10));
  }
  message: WritableSignal<string> = signal('');
  myBatchObj: Batch = new Batch();
  myNewBatchObj: Batch = new Batch();

  //http = inject(HttpClient);
  batchList: WritableSignal<Batch[]> = signal([]);

  ngOnInit() {
    console.log('BatchMaster component ngOnInit initialized');
    this.resetForm();
    this.getBatchDetails();
  }

  getBatchDetails() {
    this.batchService.getBatchDetails().subscribe({
      next: (response: any) => {
        console.log('Batch details fetched successfully:', response);
        this.batchList.set(response);
      },
      error: (error: AsyncGenerator) => {
        console.error('Error fetching batch details:', error);
      },
    });
  }
  saveBatch() {
    console.log('Batch saved:', this);
    //debugger;
    this.batchService.saveBatch(this.myNewBatchObj).subscribe({
      next: (response: any) => {
        //debugger;
        this.message.set('Batch saved successfully!');
        console.log('Batch saved successfully:', response);
        this.getBatchDetails();
      },
      error: (error: any) => {
        //debugger;
        this.message.set(
          'Error saving batch. Please try again.' +
            (error instanceof Error ? error.message : 'Unknown error'),
        );
        console.error('Error saving batch:', error);
      },
    });
  }

  editBatch(batch: Batch) {
    const stringData = JSON.stringify(batch);
    console.log('Batch to edit:', stringData);
    const parsedBatch = JSON.parse(stringData);
    this.myNewBatchObj = parsedBatch;
  }

  updateBatch() {
    console.log('Batch Updated:', this);
    //debugger;
    this.batchService.updateBatch(this.myNewBatchObj).subscribe({
      next: (response: any) => {
        //debugger;
        this.message.set('Batch updated successfully!');
        console.log('Batch updated successfully:', response);
        this.getBatchDetails();
      },
      error: (error: any) => {
        //debugger;
        this.message.set(
          'Error updating batch. Please try again.' +
            (error instanceof Error ? error.message : 'Unknown error'),
        );
        console.error('Error updating batch:', error);
      },
    });
  }

  deleteBatch(batch: Batch) {
    const isDelete = confirm('Are you sure you want to delete this batch?');
    if (isDelete) {
      console.log('Batch to delete:', batch);
      this.batchService.deleteBatch(batch.batchId).subscribe({
        next: (response: any) => {
          this.message.set('Batch deleted successfully!');
          console.log('Batch deleted successfully:', response);
          this.getBatchDetails();
        },
        error: (error: any) => {
          this.message.set(
            'Error deleting batch. Please try again.' +
              (error instanceof Error ? error.message : 'Unknown error'),
          );
          console.error('Error deleting batch:', error);
        },
      });
    }
  }

  resetForm() {
    this.message.set('');
    this.myNewBatchObj.batchId = 0;
    this.myNewBatchObj.batchName = '';
    this.myNewBatchObj.createdDate = '';
  }
}
class Batch {
  batchId: number;
  batchName: string;
  createdDate: string;

  constructor() {
    this.batchId = 0;
    this.batchName = '';
    this.createdDate = '';
  }
}
