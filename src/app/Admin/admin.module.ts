import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { FormsModule } from "@angular/forms";
import { FormatDatePipe } from '../format-date.pipe';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardService } from '../services/dashboard.service';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from '../service/project.service';


@NgModule({
    declarations: [
      DashboardComponent,
      FormatDatePipe,
      ProjectsComponent,
      ProjectComponent     
    ],
    imports: [ CommonModule,FormsModule, AdminRoutingModule,RouterModule],
    exports: [ DashboardComponent,ProjectsComponent],
    providers: [DashboardService,ProjectService]
  })
  export class AdminModule
  {
  }
  