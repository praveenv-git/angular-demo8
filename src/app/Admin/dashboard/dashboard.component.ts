import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ExpenseViewModel } from 'src/app/models/ExpenseViewModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dasboardservice: DashboardService) { }
  CalendarDetails = [];
  date = new Date();
  Clients: string[];
  ExpensTypeList: ExpenseViewModel[] = [];
  typeSelectedId: string ="0";
  ngOnInit(): void {
    this.ExpensTypeList = this.dasboardservice.getExpenseTypeDetails();
    this.CalendarDetails = this.dasboardservice.getCalendarViewDetails();
    let datapoints = [];
    this.ExpensTypeList.forEach(element => {
      datapoints.push({ y: element.ExpenseCount, name: element.Name })
    });
    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: datapoints,
      }]
    });
    chart.render();
    
    let barchart = new CanvasJS.Chart("chartContainer1", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });

    barchart.render();
    
  }
  drpSelectChange() {
    var list = this.dasboardservice.GetSelectChartDetails(this.typeSelectedId);
    let datapoints = []; 
    list.forEach(item => {
      if(item.Id == this.typeSelectedId)
      datapoints.push({ y: item.ExpenseCount, name: item.Name });
      if(this.typeSelectedId =="0")
      datapoints.push({ y: item.ExpenseCount, name: item.Name });      
    });
    var renchart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: datapoints,
      }]
    });
    renchart.render();
  }
}
