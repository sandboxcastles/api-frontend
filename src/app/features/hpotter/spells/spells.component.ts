import { Component, OnInit } from '@angular/core';

import { ISpell } from '../models/spell';
import { HpotterService } from '../services/hpotter.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
})
export class SpellsComponent implements OnInit {
  spells: ISpell[];

  constructor(private potterService: HpotterService) {}

  ngOnInit(): void {
    this.potterService
      .getAllSpells()
      .subscribe((spells) => (this.spells = spells));
  }
}
