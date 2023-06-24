import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import * as d3 from 'd3';
import { DataService } from 'src/app/shared/services/data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements AfterViewInit, OnDestroy {

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
  private dataSourcesDonut: any = [];

  private svg: any;
  private margin = 5;
  private width = 200 - (this.margin * 2);
  private height = 100 - (this.margin * 2);

  scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  private initMap(): void {
    this.map = L.map('map_color', {
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
        this.maxPop = Math.max(...this.data.map((x:any) => x['Color']), 0);
      }

      // this.districtCount = [...new Set( data.map((obj: any) => obj['District'])) ];
      // this.subCounties = [...new Set( data.map((obj: any) => obj['Sub-county'])) ];
      // this.villages = [...new Set( data.map((obj: any) => obj['Village'])) ];
      // this.waterSourceNames = [...new Set( data.map((obj: any) => obj['Source Name'])) ];

      data?.forEach((item: any) => {
        this.dataSources.push(item);
        if (item['Source type'] != '' && item['Source type']) {
          this.dataSourcesDonut.push(item)
        }
      });

      this.makeMarkers(this.map, this.dataSources, this.maxPop);
      this.createBarChart(this.dataSources);
      this.createDonutChart(this.dataSourcesDonut);
    });
  }

  makeMarkers(map: any, dataSrc: any, maxPh: any): void {
    for (let i = 0; i < dataSrc.length; i++) {
      const item = dataSrc[i];
      const lon = item['Longitude'];
      const lat = item['Latitude'];

      const circle = L.circleMarker([lat, lon], { radius: this.scaledRadius(item['Color'], maxPh) });
      circle.bindPopup(this.makePopup(item));
      circle.addTo(map);
    }
  }

  makePopup(data: any): string {
    return `
      <div>
        <span class="font-bold text-sm text-gray-500">District:</span>
        <span class="text-blue-400">${ data['District'] } </span> 
      </div>
      <div>
        <span class="font-bold text-sm text-gray-500">Village:</span>
        <span class="text-blue-400">${ data['Village'] } </span>
      </div>
      <div>
        <span class="font-bold text-xs text-gray-500">Color:</span>
        <span class="text-blue-400" [ngClass]="(data['Color'] < 100) ? 'text-red-500' : 'text-red-500'"> ${ data['Color'] } µs/cm </span> 
      </div>
    `;
  }
  
  createBarChart(data: any[]): void {
    const svgWidth = 950;
    const svgHeight = 500;
    const margin = { top: 20, right: 20, bottom: 50, left: 60 };
    const chartWidth = svgWidth - margin.left - margin.right;
    const chartHeight = svgHeight - margin.top - margin.bottom;
    
    const chartTitle = 'Average Color by District';
    const xLabel = 'Districts';
    const yLabel = 'Avg. Color';
    const labelPadding = 15;
    const tooltipOffsetX = 2;
    const tooltipOffsetY = 2;
    const labelOffsetX = 4;
    const labelOffsetY = 4;
    const tooltip = d3.select('.tooltip');
    
    // Sort the data in ascending order based on Color
    const districtAverages = data.map(d => ({
      district: d.District,
      average: d3.mean(data, d => +d['Color'])
    }));
    
    // Sort the districts in ascending order based on average Color
    districtAverages.sort((a: any, b: any) => a.average - b.average);
    
    const svg = d3.select('#chartContainerColor')
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
    const conductivityData = data.map(d => +d['Color']);
    
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
      .attr('y', d => yScale(+d['Color']))
      .attr('width', xScale.bandwidth())
      .attr('height', d => chartHeight - yScale(+d['Color']))
      .on('mouseover', function (event, d) {
        const tooltipX = event.pageX - tooltipOffsetX;
        const tooltipY = event.pageY - tooltipOffsetY;
      
      // Tooltip
      tooltip.style('opacity', 1)
        .html(`<strong>${d.District}</strong><br>Average Color: ${d['Color']}`)
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
  
  createDonutChart(data: any[]): void {
    const container = d3.select('#donutChartContainerColor');
    const width = 900;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const tooltip = d3.select('.tooltipDonut');

    const svg = container.append('svg')
      .attr('width', width)
      .attr('height', height);

    const donut = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const colorScale = d3.scaleOrdinal()
      .domain(data.map((d: any) => d['Source type'] as any))
      .range(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => 1)
      .sort(null);

    const arc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const arcs = donut.selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')
      .on('mouseover', this.handleMouseOver)
      .on('mouseout', this.handleMouseOut);

    arcs.append('path')
      .attr('d', arc as any)
      .attr('fill', (d: any) => colorScale(d.data['Source type']) as any);

    const legend = svg.append('g')
      .attr('transform', `translate(${width - 300}, 20)`);

    const legendItems = legend.selectAll('.legend-item')
      .data(colorScale.domain())
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 20})`);

    legendItems.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', d => colorScale(d) as any);

    legendItems.append('text')
      .attr('x', 20)
      .attr('y', 10)
      .text(d => d)
      .attr('alignment-baseline', 'middle');

      this.handleMouseOver = (event: any, d: any) => {
        const tooltipHtml = `
          <div>Source Name: ${d.data['Source Name']}</div>
          <div>Source Type: ${d.data['Source type']}</div>
        `;
  
        tooltip
          .style('left', `${event.pageX}px`)
          .style('top', `${event.pageY}px`)
          .style('opacity', 1)
          .html(tooltipHtml);
      };
  
      this.handleMouseOut = () => {
        tooltip.style('opacity', 0);
      };
  }

  private handleMouseOver(event: any, d: any): void {}

  private handleMouseOut(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

}
    