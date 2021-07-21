import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { IBackgroundImageResponse, API_KEY, DEFAULT_IMAGE } from './backgound-image.models';

@Injectable({
  providedIn: 'root',
})
export class BackgroundImageService {

  private _backgroundUrl$ = new BehaviorSubject<string>(DEFAULT_IMAGE);

  public backgroundUrl$: Observable<string> = this._backgroundUrl$.pipe(distinctUntilChanged());

  private loadBackground$ = new Subject<void>();

  private loadBackgroundEffect$ = this.loadBackground$.pipe(
    switchMap(() => {
      return this.http
        .get<IBackgroundImageResponse>('https://api.unsplash.com/photos/random', {
          params: {
            orientation: 'landscape',
            query: 'nature',
            client_id: API_KEY,
          },
        })
        .pipe(tap(({ urls: { full } }) => this._backgroundUrl$.next(full)));
    }),
  );

  constructor(private http: HttpClient) {
    this.loadBackgroundEffect$.subscribe();
  }

  // метод который будет вызываться в других компонентах
  public loadBackground(): void {
    this.loadBackground$.next();
  }
}
