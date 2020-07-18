import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalGalleryComponent } from './animal-gallery.component';

describe('AnimalGalleryComponent', () => {
  let component: AnimalGalleryComponent;
  let fixture: ComponentFixture<AnimalGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
