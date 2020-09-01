import { Injectable } from '@angular/core';
import { ExpenseViewModel } from '../models/ExpenseViewModel';
import { Observable } from 'rxjs';
import { CalendarViewModel } from '../models/CalendarVIewModel';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  result : ExpenseViewModel[] =[];
  calResulst : CalendarViewModel[]=[];
  getExpenseTypeDetails() 
  {
    this.result.push({ Id:"1", Name:"Food", ExpenseCount:123 });
    this.result.push({ Id:"2", Name:"Education", ExpenseCount:323 });
    this.result.push({ Id:"3", Name:"Shopping", ExpenseCount:143 });
    this.result.push({ Id:"4", Name:"Travilling", ExpenseCount:343 });
    this.result.push({ Id:"5", Name:"Hosting", ExpenseCount:193 });
    return this.result;

  }
   getCalendarViewDetails()
   {
    this.calResulst.push( { StrDate: "3/7/2020", name: "praveen", ProjectName: "TEST1", Area: "Chennai" });
    this.calResulst.push( { StrDate: "4/7/2020", name: "naveen", ProjectName: "TEST1", Area: "Chennai" });
     this.calResulst.push({ StrDate: "5/7/2020", name: "RAM", ProjectName: "TEST1", Area: "Chennai" });
     this.calResulst.push({ StrDate: "6/7/2020", name: "praveen", ProjectName: "TEST1", Area: "Chennai" });
    this.calResulst.push( { StrDate: "7/7/2020", name: "Kumar", ProjectName: "TEST2", Area: "Chennai2" });
    this.calResulst.push( { StrDate: "8/7/200", name: "Kumar1", ProjectName: "TEST4", Area: "chennai3" });
     this.calResulst.push({ StrDate: "9/7/2020", name: "Kumar2", ProjectName: "TEST24", Area: "chennai33" });
     this.calResulst.push({ StrDate: "10/7/2020", name: "Kumar3", ProjectName: "TEST34", Area: "chennai34" });
     this.calResulst.push({ StrDate: "1/8/2020", name: "Kumar4", ProjectName: "TEST44", Area: "chennai33" });
     this.calResulst.push({ StrDate: "2/8/2020", name: "Kumar5", ProjectName: "TEST45", Area: "chennai53" });
     this.calResulst.push({ StrDate: "3/8/2020", name: "Kumar6", ProjectName: "TEST44", Area: "chennai33" });
    this.calResulst.push( { StrDate: "4/8/2020", name: "Kumar7", ProjectName: "TEST64", Area: "chennai33" });
    this.calResulst.push(  { StrDate: "5/8/2020", name: "Kumar8", ProjectName: "TEST44", Area: "chennai53" });
     this.calResulst.push({ StrDate: "6/8/2020", name: "Kumar9", ProjectName: "TEST44", Area: "chennai533" });
     this.calResulst.push({ StrDate: "7/8/2020", name: "Kumar21", ProjectName: "TEST444", Area: "Hyderabad" });
     this.calResulst.push({ StrDate: "9/8/2020", name: "Kumar22", ProjectName: "TEST444", Area: "Hyderabad" });
     this.calResulst.push({ StrDate: "10/8/2020", name: "Kumar23", ProjectName: "TEST444", Area: "Hyderabad" });
     this.calResulst.push({ StrDate: "1/9/2020", name: "Kumar24", ProjectName: "TEST444", Area: "Hyderabad" });
     this.calResulst.push({ StrDate: "2/9/2020", name: "Kumar25", ProjectName: "TEST444", Area: "Hyderabad" });
    this.calResulst.push( { StrDate: "3/9/2020", name: "Kumar26", ProjectName: "TEST444", Area: "Hyderabad" });
    return this.calResulst;
   }

   GetSelectChartDetails(selId:string)
   {this.result = [];
    this.result.push({ Id:"1", Name:"Food", ExpenseCount:123 });
    this.result.push({ Id:"2", Name:"Education", ExpenseCount:323 });
    this.result.push({ Id:"3", Name:"Shopping", ExpenseCount:143 });
    this.result.push({ Id:"4", Name:"Travilling", ExpenseCount:343 });
    this.result.push({ Id:"5", Name:"Hosting", ExpenseCount:193 });
    return this.result;

   }

}
