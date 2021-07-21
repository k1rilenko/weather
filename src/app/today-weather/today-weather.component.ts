import { WeatherService } from './../services/weather/weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss'],
})
export class TodayWeatherComponent {
  public weather$ = this.weather.todayWeather$;
  constructor(private weather: WeatherService) {}
}
