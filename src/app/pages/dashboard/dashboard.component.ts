import { Component, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend,
  ApexTitleSubtitle,
  ApexOptions,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexFill,
  ApexStroke,
  ApexMarkers,
  ApexGrid,
  ApexTooltip,
  ApexStates
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  states: ApexStates;
  title: ApexTitleSubtitle
};

export type UsersTopicChart = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  states: ApexStates;
  title:ApexTitleSubtitle
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // public chartOptions!: Partial<ChartOptions>;
  // public chartSeries: ApexNonAxisChartSeries = [45, 40, 15];
  // public chartOptions!: ApexOptions;

  public UsersTopicChartOption: Partial<UsersTopicChart>
  public chartOptions:Partial<ChartOptions>

  constructor(
    
  ) { 
    
    this.chartOptions = {
      series: [40, 50, 10, 100],
      chart: {
        width: 390,
        type: "donut"
      },
  
      labels: ["Male", "Female", "Others", "Total"],
      colors: [ '#FFBB28', '#FF8042','#FF073A','#00C49F'],
      responsive: [
        {
          breakpoint:100,
          options: {
            tooltips: {enabled: false},
            hover: {mode: null},
            chart: {
              width: 150
            },
  
            legend: {
              position: "bottom",
              horizontalAlign: 'center',
            }
          }
        }
      ],
      legend: {
        position: "bottom",
        horizontalAlign: 'left',
        width: 500,
      },
      title:{
        text: 'User Detail'
      }
    }
    
    
    this.UsersTopicChartOption = {
    series: [10, 20, 40, 15, 10],
    chart: {
      width: 390,
      type: "donut"
    },

    labels: ["React", "Angular", "Javascript", "Node", "Php"],
    colors: ['#4285F4', '#EA4335', '#FBBC05','#00C49F','#FF8042'],
    responsive: [
      {
        breakpoint:100,
        options: {
          tooltips: {enabled: false},
          hover: {mode: null},
          chart: {
            width: 150
          },

          legend: {
            position: "bottom",
            horizontalAlign: 'center',
          }
        }
      }
    ],
    legend: {
      position: "bottom",
      horizontalAlign: 'left',
      width: 500,
    },
    title: {
            text: 'Learning Topics'
          },
  }
}

  ngOnInit() {
    // this.getUserGenderData();
   
  }
  
  // getUserGenderData(){
  //   this.chartOptions = {
  //     chart: {
  //       type: 'donut',
  //       width: 380
  //     },
  //     labels: ['Male', 'Female', 'Other'],
  //     legend: {
  //       position: 'right'
  //     },
  //     title: {
  //       text: 'Users Detail'
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           chart: {
  //             width: 300
  //           },
  //           legend: {
  //             position: 'bottom'
  //           }
  //         }
  //       }
  //     ]
  //   };
  // }

  getUserTopic(){

  }
}
