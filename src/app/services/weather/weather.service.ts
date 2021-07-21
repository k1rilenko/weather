import { ISomeDaysWeather, IWeatherResponse, ISomeDaysWeatherResponse } from './weather.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _todayWeather$ = new BehaviorSubject<IWeatherResponse | null>(null);
  private _someDaysWeather$ = new BehaviorSubject<ISomeDaysWeatherResponse | null>(null);

  public todayWeather$: Observable<IWeatherResponse | null> = this._todayWeather$.pipe(distinctUntilChanged());

  public someDaysWeather$: Observable<ISomeDaysWeatherResponse | null> = this._someDaysWeather$.pipe(distinctUntilChanged());

  private loadTodayWeather$ = new Subject<void>();
  private loadSomeDaysWeather$ = new Subject<void>();

  private loadTodayWeatherEffect$ = this.loadTodayWeather$.pipe(
    switchMap(() => {
      return this.http
        .get<IWeatherResponse>('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'minsk',
            units: 'metric',
            appid: environment.weatherToken,
          },
        })
        .pipe(tap(resp => this._todayWeather$.next(resp)));
    }),
  );

  private loadSomeDaysWeatherEffect$ = this.loadSomeDaysWeather$.pipe(
    switchMap(() => this.loadSomeDaysWeather().pipe(tap(resp => this._someDaysWeather$.next(resp)))),
  );

  constructor(private http: HttpClient) {
    this.loadTodayWeatherEffect$.subscribe();
    this.loadSomeDaysWeatherEffect$.subscribe();
  }

  getTodayWeather() {
    this.loadTodayWeather$.next();
  }

  getSomeDaysWeather() {
    this.loadSomeDaysWeather$.next();
  }

  private loadSomeDaysWeather(city: string = 'minsk'): Observable<ISomeDaysWeatherResponse> {
    return this.http.get<ISomeDaysWeatherResponse>('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: city,
        units: 'metric',
        cnt: '3',
        appid: environment.weatherToken,
      },
    });
  }
}
