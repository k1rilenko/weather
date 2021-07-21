import { WeatherService } from './../services/weather/weather.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somedays-weather',
  templateUrl: './somedays-weather.component.html',
  styleUrls: ['./somedays-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomedaysWeatherComponent implements OnInit {
  public weather$ = this.weather.someDaysWeather$;
  constructor(private weather: WeatherService) {}

  ngOnInit(): void {}
}
