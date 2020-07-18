import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'hpotter',
    loadChildren: () =>
      import('./features/hpotter/hpotter.module').then((m) => m.HpotterModule),
  },
  {
    path: 'acnh',
    loadChildren: () =>
      import('./features/acnh/acnh.module').then((m) => m.AcnhModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
