import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-cityweather',
  templateUrl: './cityweather.component.html',
  styleUrls: ['./cityweather.component.css']
})
export class CityweatherComponent implements OnInit {

  weatherinCity = <Weather>{};
  city = "";
  hasError = false;

  constructor(
    private weatherSvc:WeatherService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.params["city"];

    this.weatherSvc.getWeather(this.city)
      .subscribe( {
        next: (resp) =>{
          this.hasError = false;
          this.weatherinCity = <Weather>resp;
        },
        error: (error)=>{
          this.hasError = true;
        }
      })
  }

  onBack(){
    this.router.navigate(["/"]);
  }

}
