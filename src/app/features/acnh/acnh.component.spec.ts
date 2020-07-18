import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcnhComponent } from './acnh.component';

describe('AcnhComponent', () => {
  let component: AcnhComponent;
  let fixture: ComponentFixture<AcnhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcnhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
