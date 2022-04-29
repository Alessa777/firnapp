import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NachhilfeerhaltenPage } from './nachhilfeerhalten.page';

const routes: Routes = [
  {
    path: '',
    component: NachhilfeerhaltenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NachhilfeerhaltenPageRoutingModule {}
