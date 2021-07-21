import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { IGeoInfoResponse, DEFAULT_STATE } from './geolocation.models';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private _geoPositionState$: BehaviorSubject<IGeoInfoResponse> = new BehaviorSubject<IGeoInfoResponse>(DEFAULT_STATE);

  public geoPositionState$: Observable<IGeoInfoResponse> = this._geoPositionState$.pipe(distinctUntilChanged());

  private loadPosition$ = new Subject<void>();

  private loadPositionEffect$ = this.loadPosition$.pipe(
    switchMap(() => {
      return this.http
        .get<IGeoInfoResponse>('https://ipinfo.io/json', {
          params: {
            token: environment.geolocationToken,
          },
        })
        .pipe(tap(response => this._geoPositionState$.next(response)));
    }),
  );

  constructor(private http: HttpClient) {
    this.loadPositionEffect$.subscribe();
  }

  public loadPosition() {
    this.loadPosition$.next();
  }
}
