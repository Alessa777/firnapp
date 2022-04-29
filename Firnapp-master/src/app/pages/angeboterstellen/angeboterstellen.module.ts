import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngeboterstellenPageRoutingModule } from './angeboterstellen-routing.module';

import { AngeboterstellenPage } from './angeboterstellen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngeboterstellenPageRoutingModule
  ],
  declarations: [AngeboterstellenPage]
})
export class AngeboterstellenPageModule {}
