import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { IBaseAnimal } from '../../models/base-animal';

@Component({
  selector: 'app-animal-gallery',
  templateUrl: './animal-gallery.component.html',
  styleUrls: ['./animal-gallery.component.scss'],
})
export class AnimalGalleryComponent implements OnInit {
  @Input() animals: IBaseAnimal[];
  animals$: Observable<IBaseAnimal[]>;
  @Input() showIcon = true;
  filter: FormControl;
  filter$: Observable<string>;

  ngOnInit(): void {
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.animals$ = combineLatest([of(this.animals), this.filter$]).pipe(
      map(([animals, filterString]) =>
        animals.filter((animal) => {
          return (
            !filterString ||
            animal['file-name']
              .toLowerCase()
              .indexOf(filterString.toLowerCase()) !== -1
          );
        })
      )
    );
  }
}
