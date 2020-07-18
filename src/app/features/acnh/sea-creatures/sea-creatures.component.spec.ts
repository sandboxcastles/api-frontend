import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaCreaturesComponent } from './sea-creatures.component';

describe('SeaCreaturesComponent', () => {
  let component: SeaCreaturesComponent;
  let fixture: ComponentFixture<SeaCreaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaCreaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaCreaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
