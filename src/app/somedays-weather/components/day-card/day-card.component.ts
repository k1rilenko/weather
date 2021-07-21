import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ISomeDaysWeather } from 'src/app/services/weather/weather.models';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayCardComponent implements OnInit {
  @Input() weatherData: ISomeDaysWeather;
  constructor() {}

  ngOnInit() {}
}
