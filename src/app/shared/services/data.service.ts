import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSrc = new BehaviorSubject<any>(null);
  data = this.dataSrc.asObservable();

  constructor() {}

  updateData(data: any) {
    this.dataSrc.next(data);
  }
}
