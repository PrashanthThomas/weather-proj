import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherGroundComponent} from './weather-ground/weather-ground.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'weather-ground'
  },
  {
    path: 'weather-ground',
    component: WeatherGroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
