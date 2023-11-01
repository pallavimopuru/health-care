import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCareRoutingModule } from './health-care-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HealthCareRoutingModule
  ]
})
export class HealthCareModule { }
