import { Component, OnInit } from '@angular/core';

import { HpotterService } from '../services/hpotter.service';

@Component({
  selector: 'app-sortinghat',
  templateUrl: './sortinghat.component.html',
  styleUrls: ['./sortinghat.component.scss'],
})
export class SortinghatComponent implements OnInit {
  myHouse: string;
  constructor(private potterService: HpotterService) {}

  ngOnInit(): void {}

  getSorted(): void {
    this.potterService
      .getSorted()
      .subscribe((house: string) => (this.myHouse = house));
  }
}
