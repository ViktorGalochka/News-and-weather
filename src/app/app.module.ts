import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { WeathersService } from './weathers.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CityWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeathersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
