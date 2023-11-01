import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCareModule } from './health-care.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'',pathMatch:"full",redirectTo:'healthcare'},
  {path:'**',pathMatch:"full",redirectTo:'healthcare'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthCareRoutingModule { }
