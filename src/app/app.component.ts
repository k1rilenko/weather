import { WeatherService } from './services/weather/weather.service';
import { GeolocationService } from './services/geolocation/geolocation.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BackgroundImageService } from './services/background-image/background-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public imageUrl$: Observable<string> = this.imageService.backgroundUrl$;

  constructor(
    private imageService: BackgroundImageService,
    private geoLocation: GeolocationService,
    private weatherService: WeatherService,
  ) {}
  ngOnInit() {
    this.geoLocation.loadPosition();
    this.weatherService.getTodayWeather();
    this.weatherService.getSomeDaysWeather();
    this.geoLocation.geoPositionState$.subscribe(val => console.log(val));
    this.weatherService.todayWeather$.subscribe(val => console.log(val));
    this.weatherService.someDaysWeather$.subscribe(val => console.log(val));
  }
}
