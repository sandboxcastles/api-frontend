import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ISeaCreature } from '../models/sea-creature';
import { AcnhService } from '../services/acnh.service';

@Component({
  selector: 'app-sea-creatures',
  templateUrl: './sea-creatures.component.html',
  styleUrls: ['./sea-creatures.component.scss'],
})
export class SeaCreaturesComponent implements OnInit {
  seaCreatures$: Observable<ISeaCreature[]>;
  constructor(private acnhService: AcnhService) {}

  ngOnInit(): void {
    this.seaCreatures$ = this.acnhService.getSeaCreatures();
  }
}
