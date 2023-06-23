import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  data: any;
  dataSources: any;
  
  constructor(private _dataService: DataService,) { }

  makeMarkers(map: any): void {
    this._dataService.data?.subscribe(data => {
      this.data = data;

      data?.forEach((item: any) => {
        this.dataSources.push(item);
      });

      for (let item of this.dataSources) {
      let lon = item['Latitude'];
      let lat = item['Longitude'];
      
      let circle = L.circleMarker([lat, lon], { radius: 20 });
      circle.addTo(map);

      console.log(`Lat ${lat} Lng ${lon}`);
    }

      // for (const c of this.dataSources) {
      //   const lon = c.Latitude;
      //   const lat = c.Longitude;
      //   const marker = L.marker([lat, lon]);
        
      //   marker.addTo(map);
      // }
    });
  }
}
