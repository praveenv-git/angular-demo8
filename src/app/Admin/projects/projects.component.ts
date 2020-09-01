import { Component, OnInit, Input, Output } from '@angular/core';
import { ProjectViewModel } from 'src/app/models/ProjectViewModel';
import { ProjectService } from 'src/app/service/project.service';
import { EventEmitter } from 'protractor';

 
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private prjService:ProjectService) { }
   
  showLoading: boolean = true;
  projects:ProjectViewModel[]=[];
  newProject: ProjectViewModel = new ProjectViewModel();
  editProject: ProjectViewModel = new ProjectViewModel();
  editIndex: number = null;
  deleteProject: ProjectViewModel = new ProjectViewModel();
  deleteIndex: number = null;
  // @Input("recordIndex") i:number;
  // @Input("cureentProject") projectViewModel= ProjectViewModel;
  // @Output() editCheck = new EventEmitter();
  // @Output() deleteCheck = new EventEmitter();

  ngOnInit(): void {
    this.projects = this.prjService.getProjectDetails();

  }

  onEditClick(event, index: number)
  {}

  onDeleteClick(event,index:number)
  {

  }
}
