import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HpotterComponent } from './hpotter.component';

const routes: Routes = [{ path: '', component: HpotterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HPotterRoutingModule {}
