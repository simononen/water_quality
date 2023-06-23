import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartData } from 'chartData';
import { DataService } from './shared/services/data.service';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  private dataSource: string = '../../../assets/data/water_quality_refined_all.json';

  private sub!: Subscription;
  
  chartData_2D_1: ChartData = {
    yrange: 200000,
    lineData: [
      { label: 'Vue', value: 166443 },
      { label: 'React', value: 150793 },
      { label: 'Angular', value: 62342 },
      { label: 'Backbone', value: 27647 },
      { label: 'Ember', value: 21471 },
    ],
  };


  public valueConverter: any = (d: any) => {
    return {
        'Source Name': d['Source Name'],
        'Village': d['Village'],
        'Parish': d['Parish'],
        'Sub-county': d['Sub-county'],
        'County': d['County'],
        'District': d['District'],
        'Latitude': parseFloat(d['Latitude']),
        'Longitude': parseFloat(d['Longitude']),
        'Lab Identifier Code': d['Lab Identifier Code'],
        'Electrical Conductivity': parseInt(d['Electrical Conductivity']),
        'pH': parseFloat(d['pH']),
        'Turbidity': parseFloat(d['Turbidity']),
        'Total Alkalinity': parseInt(d['Total Alkalinity']),
        'Total Hardness': parseFloat(d['Total Hardness']),
        'Calcium Hardness':parseFloat(d['Calcium Hardness']),
        'Fluoride': parseFloat(d['Fluoride']),
        'Nitrites': parseFloat(d['Nitrites']),
        'Sulphates': parseFloat(d['Sulphates']),
        'Ammonium': parseFloat(d['Ammonium']),
        'Chloride':  parseFloat(d['Chloride']),
        'Phosphates': parseFloat(d['Phosphates']),
        'Nitrates': parseFloat(d['Nitrates']),
        'Sodium': parseFloat(d['Sodium']),
        'Potassium': parseFloat(d['Potassium']),
        'Iron':  parseFloat(d['Iron']),
        'Free Chlorine': parseFloat(d['Free Chlorine']),
        'Color': parseFloat(d['Color']),
        'E.Coli': parseInt(d['E.Coli']),
        'Total dissolved solids': parseFloat(d['Total dissolved solids']),
        'Bicarbonates': parseFloat(d['Bicarbonates']),
        'Magnesium Hardness': parseFloat(d['Magnesium Hardness']),
        'Total Chlorine':parseFloat(d['Total Chlorine']),
        'Altitude': parseFloat(d['Altitude']),
        'Field Temperature': parseFloat(d['Field Temperature']),
        'Source type': d['Source type'],
        'Other Source Name': d['Other Source Name'],
        'Dissolved Oxygen': parseFloat(d['Dissolved Oxygen']),
        'Calcium': parseInt(d['Calcium']),
        'Magnesium': parseFloat(d['Magnesium']),
        'Silica': parseFloat(d['Silica']),
        'Mercury': parseFloat(d['Mercury']),
        'Lead': parseFloat(d['Lead']),
        'Manganese': parseFloat(d['Manganese']),
        'Total Iron': parseFloat(d['Total Iron']),
    }
  };

  constructor(
    private http: HttpClient,
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this.sub = this.getData().subscribe(data => {
      this._dataService.updateData(data);
    });
  }

  getData() {
    return this.http.get(this.dataSource)
      .pipe(
        tap(data => data),
        catchError(this.handleError('getData', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
