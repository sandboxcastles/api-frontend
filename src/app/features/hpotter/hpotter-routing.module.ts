import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HpotterComponent } from './hpotter.component';
import { SortinghatComponent } from './sortinghat/sortinghat.component';
import { SpellsComponent } from './spells/spells.component';

const routes: Routes = [
  {
    path: '',
    component: HpotterComponent,
    children: [
      { path: 'spells', component: SpellsComponent },
      { path: 'sortinghat', component: SortinghatComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HPotterRoutingModule {}
