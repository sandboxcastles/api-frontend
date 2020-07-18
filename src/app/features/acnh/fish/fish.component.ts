import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IFish } from '../models/fish';
import { AcnhService } from '../services/acnh.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss'],
})
export class FishComponent implements OnInit {
  fish$: Observable<IFish[]>;
  constructor(private acnhService: AcnhService) {}

  ngOnInit(): void {
    this.fish$ = this.acnhService.getFish();
  }
}
