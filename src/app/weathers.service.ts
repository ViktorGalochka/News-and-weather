import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeathersService {
  private weathers: any[];
  constructor(private http: HttpClient) { 
    this.weathers = [];
  }
  getCurrentWheather(q) {
    data: [];
    this.weathers.splice(0, 1);
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${q}&APPID=b2745f9629915a9b867daa35359e4893`).subscribe((data:any) => {
    this.weathers.push(data);
    console.log(this.weathers);
  })
}  
getWeathers() {
  return this.weathers;
}
}