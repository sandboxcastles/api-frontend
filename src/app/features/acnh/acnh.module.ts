import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material.module';

import { AcnhRoutingModule } from './acnh-routing.module';
import { AcnhComponent } from './acnh.component';
import { BugsComponent } from './bugs/bugs.component';
import { AnimalGalleryComponent } from './components/animal-gallery/animal-gallery.component';
import { GalleryCardComponent } from './components/gallery-card/gallery-card.component';
import { ItemGalleryComponent } from './components/item-gallery/item-gallery.component';
import { FishComponent } from './fish/fish.component';
import { FossilsComponent } from './fossils/fossils.component';
import { SeaCreaturesComponent } from './sea-creatures/sea-creatures.component';

@NgModule({
  declarations: [
    AcnhComponent,
    FishComponent,
    SeaCreaturesComponent,
    BugsComponent,
    FossilsComponent,
    ItemGalleryComponent,
    AnimalGalleryComponent,
    GalleryCardComponent,
  ],
  imports: [
    CommonModule,
    AcnhRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AcnhModule {}
