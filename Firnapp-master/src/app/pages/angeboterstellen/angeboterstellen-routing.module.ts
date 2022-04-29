import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngeboterstellenPage } from './angeboterstellen.page';

const routes: Routes = [
  {
    path: '',
    component: AngeboterstellenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngeboterstellenPageRoutingModule {}
