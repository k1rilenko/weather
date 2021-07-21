import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { TodayWeatherComponent } from './today-weather/today-weather.component';
import { SomedaysWeatherComponent } from './somedays-weather/somedays-weather.component';
import { DayCardComponent } from './somedays-weather/components/day-card/day-card.component';

@NgModule({
  declarations: [AppComponent, TodayWeatherComponent, SomedaysWeatherComponent, DayCardComponent],
  imports: [BrowserModule, HttpClientModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
