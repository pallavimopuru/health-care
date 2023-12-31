import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"healthcare",loadChildren:()=>import('./health-care/health-care.module').then(m=>m.HealthCareModule)},  
  {path:'',pathMatch:"full",redirectTo:'healthcare'},
  {path:'**',pathMatch:"full",redirectTo:'healthcare'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
