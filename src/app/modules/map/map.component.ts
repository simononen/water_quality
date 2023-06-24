import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

import * as L from 'leaflet';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { MarkerService } from 'src/app/shared/services/marker/marker.service';

// const iconRetinaUrl = 'assets/marker-icon-2x.png';
// const iconUrl = 'assets/marker-icon.png';
// const shadowUrl = 'assets/marker-shadow.png';
// const iconDefault = L.icon({
//   iconRetinaUrl,
//   iconUrl,
//   shadowUrl,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   tooltipAnchor: [16, -28],
//   shadowSize: [41, 41]
// });

// L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnDestroy {

  mapOptions!: L.MapOptions;
  maxPop: any;

  private sub: Subscription = new Subscription;
  private map: any;
  private data: any;

  private lat: any;
  private lng: any;

  private dataPoints: any;
  private dataPointLength: any;
  private dataSources: any = [];
  private dataSourceTypes: any = [];

  private svg: any;
  private margin = 5;
  private width = 200 - (this.margin * 2);
  private height = 100 - (this.margin * 2);

  scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [1.3707295, 32.3032414], // [0.347596, 32.582520]
      zoom: 8,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 28,
      minZoom: 5,
      opacity: 0.7,
      detectRetina: true,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.getWeatherData();
  }

  constructor(
    private _dataService: DataService) {
  }
  
  ngAfterViewInit(): void {
    this.initMap();
  }
  
  getWeatherData() {

    this._dataService.data?.subscribe(data => {
      this.data = data;

      if(this.data?.length) {
        this.maxPop = Math.max(...this.data.map((x:any) => x['pH']), 0);
      }

      data?.forEach((item: any) => {
        this.dataSources.push(item);
      });

      this.makeMarkers(this.map, this.dataSources, this.maxPop);
    });
  }

  makeMarkers(map: any, dataSrc: any, maxPh: any): void {
    for (let i = 0; i < dataSrc.length; i++) {
      const item = dataSrc[i];
      const lon = item['Longitude'];
      const lat = item['Latitude'];

      const circle = L.circleMarker([lat, lon], { radius: this.scaledRadius(item['pH'], maxPh) });
      circle.bindPopup(this.makePopup(item));
      circle.addTo(map);
    }
  }

  makePopup(data: any): string {
    return `` +
      `
      <div>
        <span class="font-bold text-sm text-gray-500">District:</span>
        <span class="text-blue-400">${ data['District'] } </span> 
      </div>
      <div>
        <span class="font-bold text-sm text-gray-500">Sub County:</span>
        <span class="text-blue-400">${ data['Sub-county'] } </span>
      </div>
      <div>
        <span class="font-bold text-sm text-gray-500">Village:</span>
        <span class="text-blue-400">${ data['Village'] } </span>
      </div>
      <div>
        <span class="font-bold text-sm text-gray-500">Parish:</span>
        <span class="text-blue-400">${ data['Parish'] } </span>
      </div>
      <div>
        <span class="font-bold text-xs text-gray-500">Electrical Conductivity:</span>
        <span class="text-blue-400" [ngClass]="(data['Electrical Conductivity'] < 100) ? 'text-red-500' : 'text-red-500'"> ${ data['Electrical Conductivity'] } µs/cm </span> 
      </div>
      <div>
        <span class="font-bold text-xs text-gray-500">pH Status:</span>
        <span class="text-blue-400">${ data['pH'] } pH Units </span> 
      </div>
    `;
  }

  private createPopUpSvg(data: any): void {
    this.svg = d3.select(`chart_${data['id']}`)
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.Framework))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3.scaleLinear().domain([0, 200000]).range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(d.Framework))
      .attr('y', (d: any) => y(d.Stars))
      .attr('width', x.bandwidth())
      .attr('height', (d: any) => this.height - y(d.Stars))
      .attr('fill', '#d04a35');
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}