import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityweatherComponent } from './cityweather/cityweather.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:":city",component:CityweatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
