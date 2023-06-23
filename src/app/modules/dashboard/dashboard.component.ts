import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{

  private sub!: Subscription;
  public weatherData: any;
  private data: any;
  
  constructor(
    private _dataService: DataService) {}

  ngOnInit(): void {
    // this.getWeatherData();
  }

  getWeatherData() {
    this.sub = this._dataService.data.subscribe(data => {
      this.data = data;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
