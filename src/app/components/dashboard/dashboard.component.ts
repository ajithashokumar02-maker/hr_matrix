import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexYAxis,
//   ApexLegend,
//   ApexPlotOptions,
//   ApexGrid,
//   ApexDataLabels
// } from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   yaxis: ApexYAxis;
//   legend: ApexLegend;
//   plotOptions: ApexPlotOptions;
//   grid: ApexGrid;
//   dataLabels: ApexDataLabels;
//   colors: string[];
// };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   cardList:Array<any> = [];
   recentActivityList:Array<any> = [];
  // chartOptions: Partial<ChartOptions> | any;
  tableList:Array<any> = [];
  constructor(private readonly _commonService:CommonService) { }

  ngOnInit(): void {
    this.cardList = this._commonService.getCardConfig();
    this.recentActivityList = this._commonService.recentActivity();
    // this.chartOptions = this._commonService.chartOptions();
    this.tableList = this._commonService.getTableDesign();

  }



}
