import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyOrSellPage } from './buy-or-sell.page';

const routes: Routes = [
  {
    path: '',
    component: BuyOrSellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyOrSellPageRoutingModule {}
