import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  http = inject(HttpClient);

  getBatchDetails() {
    return this.http.get('https://api.freeprojectapi.com/api/FeesTracking/batches');
  }
  saveBatch(obj: any) {
    return this.http.post('https://api.freeprojectapi.com/api/FeesTracking/batches', obj);
  }

  updateBatch(batch: any) {
    return this.http.put(
      `https://api.freeprojectapi.com/api/FeesTracking/batches/${batch.batchId}`,
      batch,
    );
  }

  deleteBatch(batchId: number) {
    return this.http.delete(`https://api.freeprojectapi.com/api/FeesTracking/batches/${batchId}`);
  }
}
