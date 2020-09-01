import { Injectable } from '@angular/core';
import { ProjectViewModel } from '../models/ProjectViewModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
projectList:ProjectViewModel[]=[];
  constructor() { }
  getProjectDetails()
  {
    this.projectList =[];
    this.projectList.push({ Id:1,Name:"Picart", Locatoin:"Chennai" });
    this.projectList.push({ Id:2,Name:"Windstram", Locatoin:"Hyderabad" });
    return this.projectList;
  }
}
