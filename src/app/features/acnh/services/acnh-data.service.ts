import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IApiBugs } from '../models/api-bugs';
import { IApiFish } from '../models/api-fish';
import { IApiSeaCreatures } from '../models/api-sea-creatures';

@Injectable({
  providedIn: 'root',
})
export class AcnhDataService {
  bugs: IApiBugs;
  fish: IApiFish;
  seaCreatures: IApiSeaCreatures;

  constructor(private http: HttpClient) {}

  getFish(): Observable<IApiFish> {
    if (this.fish) {
      return of(this.fish);
    } else {
      return this.http
        .get<IApiFish>('https://acnhapi.com/v1/fish')
        .pipe(tap((fish) => (this.fish = fish)));
    }
  }

  getBugs(): Observable<IApiBugs> {
    if (this.bugs) {
      return of(this.bugs);
    } else {
      return this.http
        .get<IApiBugs>('https://acnhapi.com/v1/bugs')
        .pipe(tap((bugs) => (this.bugs = bugs)));
    }
  }

  getSeaCreatures(): Observable<IApiSeaCreatures> {
    if (this.seaCreatures) {
      return of(this.seaCreatures);
    } else {
      return this.http
        .get<IApiSeaCreatures>('https://acnhapi.com/v1/sea')
        .pipe(tap((seaCreatures) => (this.seaCreatures = seaCreatures)));
    }
  }
}
