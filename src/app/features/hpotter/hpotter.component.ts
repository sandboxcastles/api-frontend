import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HpotterService } from './services/hpotter.service';

@Component({
  selector: 'app-hpotter',
  templateUrl: './hpotter.component.html',
  styleUrls: ['./hpotter.component.scss'],
})
export class HpotterComponent implements OnInit {
  constructor(private service: HpotterService, private router: Router) {}

  ngOnInit(): void {
    this.service.getCharacters().subscribe(console.log);
  }

  goToSortingHat(): void {
    this.router.navigate(['/', 'hpotter', 'sortinghat']);
  }

  goToSpells(): void {
    this.router.navigate(['/', 'hpotter', 'spells']);
  }
}
