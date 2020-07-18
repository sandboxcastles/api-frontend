import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ICharacter } from '../models/character';
import { ISpell } from '../models/spell';

@Injectable({
  providedIn: 'root',
})
export class HpotterService {
  private serviceUrl = 'https://www.potterapi.com/v1';
  constructor(private http: HttpClient) {}

  getSorted(): Observable<string> {
    return this.http.get<string>(`${this.serviceUrl}/sortinghat`);
  }

  getAllSpells(): Observable<ISpell[]> {
    return this.http.get<ISpell[]>(
      `${this.serviceUrl}/spells?${this.getKeyQueryParam()}`
    );
  }

  getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(
      `${this.serviceUrl}/characters?${this.getKeyQueryParam()}`
    );
  }

  private getKeyQueryParam(): string {
    return `key=${environment.harryPotterApiKey}`; // Register with potterapi.com
  }
}
