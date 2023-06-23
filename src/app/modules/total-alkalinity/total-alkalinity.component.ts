import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import * as d3 from 'd3';
import { DataService } from 'src/app/shared/services/data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-total-alkalinity',
  templateUrl: './total-alkalinity.component.html',
  styleUrls: ['./total-alkalinity.component.scss']
})
export class TotalAlkalinityComponent implements AfterViewInit, OnDestroy {

  dataset: any;

  mapOptions!: L.MapOptions;
  maxPop: any;

  districtCount: any;
  subCounties: any;
  villages: any;
  waterSourceNames: any;

  private sub: Subscription = new Subscription;
  private map: any;
  private data: any;
  private dataSources: any = [];

  private svg: any;
  private margin = 5;
  private width = 200 - (this.margin * 2);
  private height = 100 - (this.margin * 2);

  scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  private initMap(): void {
    this.map = L.map('map_total_alkalinity', {
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
        this.maxPop = Math.max(...this.data.map((x:any) => x['Total Alkalinity']), 0);
      }

      this.districtCount = [...new Set( data.map((obj: any) => obj['District'])) ];
      this.subCounties = [...new Set( data.map((obj: any) => obj['Sub-county'])) ];
      this.villages = [...new Set( data.map((obj: any) => obj['Village'])) ];
      this.waterSourceNames = [...new Set( data.map((obj: any) => obj['Source Name'])) ];

      data?.forEach((item: any) => {
        this.dataSources.push(item);
      });

      this.makeMarkers(this.map, this.dataSources, this.maxPop);
      this.createBarChart(this.dataSources);
    });
  }

  makeMarkers(map: any, dataSrc: any, maxPh: any): void {
    for (let i = 0; i < dataSrc.length; i++) {
      const item = dataSrc[i];
      const lon = item['Longitude'];
      const lat = item['Latitude'];

      const circle = L.circleMarker([lat, lon], { radius: this.scaledRadius(item['Total Alkalinity'], maxPh) });
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
        <span class="font-bold text-sm text-gray-500">Sub-county:</span>
        <span class="text-blue-400">${ data['Sub-county'] } </span>
      </div>
      <div>
        <span class="font-bold text-sm text-gray-500">Parish:</span>
        <span class="text-blue-400">${ data['Parish'] } </span>
      </div>
      <div>
        <span class="font-bold text-sm text-gray-500">Village:</span>
        <span class="text-blue-400">${ data['Village'] } </span>
      </div>
      <div>
        <span class="font-bold text-sm text-gray-500">Source Name:</span>
        <span class="text-blue-400">${ data['Source Name'] } </span>
      </div>
    `;
  }
  
  createBarChart(data: any[]): void {
    const svgWidth = 1000;
    const svgHeight = 500;
    const margin = { top: 20, right: 20, bottom: 50, left: 60 };
    const chartWidth = svgWidth - margin.left - margin.right;
    const chartHeight = svgHeight - margin.top - margin.bottom;
    
    const chartTitle = 'Average Total Alkalinity by District';
    const xLabel = 'Districts';
    const yLabel = 'Total Alkalinity';
    const labelPadding = 15;
    const tooltipOffsetX = 2;
    const tooltipOffsetY = 2;
    const labelOffsetX = 4;
    const labelOffsetY = 4;
    const tooltip = d3.select('.tooltip');
    
    // Sort the data in ascending order based on Total Alkalinity
    const districtAverages = data.map(d => ({
      district: d.District,
      average: d3.sum(data, d => +d['Total Alkalinity'])
    }));
    
    // Sort the districts in ascending order based on average Total Alkalinity
    districtAverages.sort((a: any, b: any) => a.average - b.average);
    
    const svg = d3.select('#chartContainerTotalAlkalinity')
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);
    
    const chart = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
    
    const gradient = chart.append('defs')
      .append('linearGradient')
      .attr('id', 'linear-gradient')
      .attr('gradientTransform', 'rotate(90)');
    
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#4682b4');
    
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#1e5ea8');
    
    const districts = data.map(d => d.District);
    const conductivityData = data.map(d => +d['Total Alkalinity']);
    
    const xScale = d3.scaleBand()
      .domain(districts)
      .range([0, chartWidth])
      .padding(0.1);
    
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(conductivityData) as number])
      .range([chartHeight, 50]);
    
    chart.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar linear-gradient')
      .attr('x', (d, i) => xScale(d.District) || 0)
      .attr('y', d => yScale(+d['Total Alkalinity']))
      .attr('width', xScale.bandwidth())
      .attr('height', d => chartHeight - yScale(+d['Total Alkalinity']))
      .on('mouseover', function (event, d) {
        const tooltipX = event.pageX - tooltipOffsetX;
        const tooltipY = event.pageY - tooltipOffsetY;
      
      // Tooltip
      tooltip.style('opacity', 1)
        .html(`<strong>${d.District}</strong><br>Total Alkalinity: ${d['Total Alkalinity']}`)
        .style('left', `${tooltipX}px`)
        .style('top', `${tooltipY}px`);
     })
      .on('mouseout', function () {
        // Hide tooltip
        tooltip.style('opacity', 0);
    });
    
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    
    chart.append('g')
    .attr('transform', `translate(0, ${chartHeight})`)
    .call(xAxis);
    
    chart.append('g')
    .call(yAxis);
    
    svg.append('text')
    .attr('class', 'chart_title')
    .attr('x', svgWidth / 2)
    .attr('y', margin.top)
    .attr('text-anchor', 'middle')
    .text(chartTitle);
    
    // Append x-axis label
    svg.append('text')
    .attr('class', 'x-label')
    .attr('x', svgWidth / 2)
    .attr('y', svgHeight - margin.bottom / 2 + labelPadding)
    .attr('text-anchor', 'middle')
    .text(xLabel);
    
    // Append y-axis label
    svg.append('text')
    .attr('class', 'y-label')
    .attr('transform', 'rotate(-90)')
    .attr('x', -svgHeight / 2)
    .attr('y', margin.left / 2 - labelPadding)
    .attr('text-anchor', 'middle')
    .text(yLabel);
    
    const sortedDistricts = data.map(d => d.District);
    xScale.domain(sortedDistricts);
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

}