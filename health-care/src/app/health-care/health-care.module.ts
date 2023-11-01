import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCareRoutingModule } from './health-care-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    ServicesComponent,
    AboutusComponent,
    ContactComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    HealthCareRoutingModule,
    ReactiveFormsModule 
  ]
})
export class HealthCareModule { }
