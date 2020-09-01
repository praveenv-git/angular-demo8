import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProjectsComponent } from '../projects/projects.component';
const routes: Routes = [

  { path: "admin", children: [
    { path: "dashboard", component: DashboardComponent },
    {path:"projects", component:ProjectsComponent }
 
  ]},

  
  ];
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
  export class AdminRoutingModule { }
  
