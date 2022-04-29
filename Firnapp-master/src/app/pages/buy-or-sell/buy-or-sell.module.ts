import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyOrSellPageRoutingModule } from './buy-or-sell-routing.module';

import { BuyOrSellPage } from './buy-or-sell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyOrSellPageRoutingModule
  ],
  declarations: [BuyOrSellPage]
})
export class BuyOrSellPageModule {}
