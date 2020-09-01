import { Component, OnInit, Input } from '@angular/core';
import { ProjectViewModel } from 'src/app/models/ProjectViewModel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
@Input("currentProject") project : ProjectViewModel;

  constructor() { }

  ngOnInit(): void {
  }

}
