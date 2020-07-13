import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HPotterRoutingModule } from './hpotter-routing.module';
import { HpotterComponent } from './hpotter.component';

@NgModule({
  declarations: [HpotterComponent],
  imports: [CommonModule, HPotterRoutingModule],
})
export class HpotterModule {}
