import { TestBed } from '@angular/core/testing';

import { HpotterService } from './hpotter.service';

describe('HpotterService', () => {
  let service: HpotterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpotterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
