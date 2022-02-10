import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  cityForm!:FormGroup;
  listofcity: string[] = [];



  constructor( private fb:FormBuilder, private weatherSvc:WeatherService) { }

  ngOnInit(): void {
    this.cityForm = this.fb.group({
      city:['',Validators.required]
    });
    this.listofcity = this.weatherSvc.getListofcity();
  }


  onSubmit(){
    let cityentered = this.cityForm.value.city;
    let isDuplicate = false;
    for ( let i of this.listofcity){
      if (cityentered.trim().toLowerCase() === i.trim().toLowerCase()){
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate){
      this.listofcity.push(cityentered);
    }
    isDuplicate = false;

    this.cityForm.reset();
  }

  ngOnDestroy(): void {
      this.weatherSvc.setListofcity(this.listofcity);
  }

}
