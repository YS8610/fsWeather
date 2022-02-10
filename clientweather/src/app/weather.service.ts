import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Weather } from "./weather.model";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeatherService{

  constructor(private http : HttpClient, private route:ActivatedRoute){}

  URL = "http://127.0.0.1:8080/api/weather";

  listofcity : string[] = [];

  getWeather(city:string){

    // const headers = {
    //    headers: new HttpHeaders({
    //     'Content-Type':  'application/x-www-form-urlencoded',
    //   })
    // }
    const params = new HttpParams()
      .set("city",city);
;
    return this.http.get<Weather>(this.URL, {params:params})
  }

  getListofcity(){
    return this.listofcity;
  }

  setListofcity(listofcity : string[]){
    this.listofcity = listofcity;
  }
}
