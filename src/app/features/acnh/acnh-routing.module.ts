import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcnhComponent } from './acnh.component';
import { BugsComponent } from './bugs/bugs.component';
import { FishComponent } from './fish/fish.component';
import { SeaCreaturesComponent } from './sea-creatures/sea-creatures.component';

const routes: Routes = [
  {
    path: '',
    component: AcnhComponent,
    children: [
      { path: 'bugs', component: BugsComponent },
      { path: 'fish', component: FishComponent },
      { path: 'sea-creatures', component: SeaCreaturesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcnhRoutingModule {}
