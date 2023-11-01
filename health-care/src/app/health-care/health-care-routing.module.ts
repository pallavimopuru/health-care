import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCareModule } from './health-care.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'aboutus',component:AboutusComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthCareRoutingModule { }
