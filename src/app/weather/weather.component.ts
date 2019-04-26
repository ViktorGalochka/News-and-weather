import { Component, OnInit } from '@angular/core';
import { WeathersService } from '../weathers.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers: any[];
  constructor(private weatherService: WeathersService) {
  }
  ngOnInit() {
    this.weathers = this.weatherService.getWeathers();
    this.weatherService.getCurrentWheather("Kyiv");
  }
  
  search(inp) {
    this.weatherService.getCurrentWheather(inp.value);
    inp.value = "";
  }
}
