import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IBug } from '../models/bug';
import { AcnhService } from '../services/acnh.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss'],
})
export class BugsComponent implements OnInit {
  bugs$: Observable<IBug[]>;
  constructor(private acnhService: AcnhService) {}

  ngOnInit(): void {
    this.bugs$ = this.acnhService.getBugs();
  }
}
