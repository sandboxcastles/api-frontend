import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HPotterRoutingModule } from './hpotter-routing.module';
import { HpotterComponent } from './hpotter.component';
import { SpellsComponent } from './spells/spells.component';
import { SortinghatComponent } from './sortinghat/sortinghat.component';

@NgModule({
  declarations: [HpotterComponent, SpellsComponent, SortinghatComponent],
  imports: [CommonModule, HPotterRoutingModule],
})
export class HpotterModule {}
