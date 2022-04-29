import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErfolglosPage } from './erfolglos.page';

const routes: Routes = [
  {
    path: '',
    component: ErfolglosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErfolglosPageRoutingModule {}
