import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { getOrderedItems } from '../lib/order-items';
import { IBaseItem } from '../models/base-item';
import { IBug } from '../models/bug';
import { IFish } from '../models/fish';
import { ISeaCreature } from '../models/sea-creature';
import { AcnhDataService } from './acnh-data.service';

@Injectable({
  providedIn: 'root',
})
export class AcnhService {
  bugs: IBug[];
  fish: IFish[];
  seaCreatures: ISeaCreature[];

  constructor(private acnhDataService: AcnhDataService) {}

  getBugs(): Observable<IBug[]> {
    if (this.bugs) {
      return of(this.bugs);
    } else {
      return this.acnhDataService.getBugs().pipe(
        map((apiBugs) => {
          this.bugs = this.getObjectItems(apiBugs);
          return this.bugs;
        })
      );
    }
  }

  getFish(): Observable<IFish[]> {
    if (this.fish) {
      return of(this.fish);
    } else {
      return this.acnhDataService.getFish().pipe(
        map((apiFish) => {
          this.fish = this.getObjectItems(apiFish);
          return this.fish;
        })
      );
    }
  }

  getSeaCreatures(): Observable<ISeaCreature[]> {
    if (this.seaCreatures) {
      return of(this.seaCreatures);
    } else {
      return this.acnhDataService.getSeaCreatures().pipe(
        map((apiSeaCreatures) => {
          this.seaCreatures = this.getObjectItems(apiSeaCreatures);
          return this.seaCreatures;
        })
      );
    }
  }

  private getObjectItems<T extends IBaseItem>(item: { [key: string]: T }): T[] {
    const itemsArray = [];
    for (const key of Object.keys(item)) {
      itemsArray.push(item[key]);
    }
    return itemsArray.sort(getOrderedItems('file-name', 'asc'));
  }
}
